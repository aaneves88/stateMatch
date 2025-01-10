import { create } from 'zustand';
import { UserAnswers } from '../types';

interface Store {
  currentQuestionIndex: number;
  userAnswers: UserAnswers;
  setAnswer: (questionId: string, value: number) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  resetQuiz: () => void;
}

export const useStore = create<Store>((set) => ({
  currentQuestionIndex: 0,
  userAnswers: {},
  setAnswer: (questionId, value) =>
    set((state) => ({
      userAnswers: { ...state.userAnswers, [questionId]: value },
    })),
  nextQuestion: () =>
    set((state) => ({
      currentQuestionIndex: state.currentQuestionIndex + 1,
    })),
  previousQuestion: () =>
    set((state) => ({
      currentQuestionIndex: Math.max(0, state.currentQuestionIndex - 1),
    })),
  resetQuiz: () =>
    set({
      currentQuestionIndex: 0,
      userAnswers: {},
    }),
}));