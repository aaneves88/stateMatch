import { StateData, UserAnswers } from '../types';
import { criteriaWeights } from '../data/weights';

const TOLERANCE = 0.1; // 10% tolerance

function isWithinTolerance(userScore: number, stateScore: number): boolean {
  const maxScore = 5;
  const normalizedUserScore = userScore / maxScore;
  const normalizedStateScore = stateScore / maxScore;
  return Math.abs(normalizedUserScore - normalizedStateScore) <= TOLERANCE;
}

export function calculateStateMatches(userAnswers: UserAnswers, states: StateData[]) {
  const stateMatches = states.map((state) => {
    let totalMatches = 0;
    let weightedScore = 0;
    let totalWeight = 0;

    // Calculate matches and weighted scores for each criterion
    Object.entries(userAnswers).forEach(([criterion, userScore]) => {
      const stateScore = state.scores[criterion as keyof StateData['scores']];
      const weight = criteriaWeights[criterion as keyof typeof criteriaWeights];

      // Check if the criterion is within tolerance
      if (isWithinTolerance(userScore, stateScore)) {
        totalMatches++;
      }

      // Calculate weighted score
      weightedScore += (stateScore * userScore * weight);
      totalWeight += (5 * 5 * weight); // max possible score * max user score * weight
    });

    const compatibilityPercentage = (weightedScore / totalWeight) * 100;
    
    return {
      state,
      matches: totalMatches,
      score: compatibilityPercentage,
      weightedScore
    };
  });

  // Sort by matches first, then by weighted score for ties
  return stateMatches
    .sort((a, b) => {
      if (b.matches === a.matches) {
        return b.weightedScore - a.weightedScore;
      }
      return b.matches - a.matches;
    })
    .slice(0, 3)
    .map(({ state, score }) => ({ state, score }));
}