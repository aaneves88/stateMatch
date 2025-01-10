import React from 'react';
import { MapPin } from 'lucide-react';
import { questions } from './data/questions';
import { QuestionCard } from './components/QuestionCard';
import { Results } from './components/Results';
import { useStore } from './store/useStore';

function App() {
  const { currentQuestionIndex, nextQuestion, previousQuestion, userAnswers } = useStore();
  const isComplete = currentQuestionIndex >= questions.length;
  const currentQuestion = questions[currentQuestionIndex];
  const canProceed = currentQuestion && userAnswers[currentQuestion.id];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <MapPin className="h-8 w-8 text-blue-600 mr-2" />
            <h1 className="text-2xl font-bold text-gray-900">Find Your Ideal State</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {!isComplete ? (
          <div className="space-y-6">
            <div className="flex justify-center mb-8">
              <div className="w-full max-w-2xl">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">
                    Question {currentQuestionIndex + 1} of {questions.length}
                  </span>
                  <span className="text-sm text-gray-500">
                    {Math.round(((currentQuestionIndex + 1) / questions.length) * 100)}% Complete
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <QuestionCard question={currentQuestion} />
            </div>

            <div className="flex justify-center space-x-4">
              {currentQuestionIndex > 0 && (
                <button
                  onClick={previousQuestion}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Previous
                </button>
              )}
              <button
                onClick={nextQuestion}
                disabled={!canProceed}
                className={`px-6 py-2 rounded-lg text-white transition-colors ${
                  canProceed
                    ? 'bg-blue-600 hover:bg-blue-700'
                    : 'bg-gray-400 cursor-not-allowed'
                }`}
              >
                {currentQuestionIndex === questions.length - 1 ? 'See Results' : 'Next'}
              </button>
            </div>
          </div>
        ) : (
          <Results />
        )}
      </main>
    </div>
  );
}

export default App;