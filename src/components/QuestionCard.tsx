import React from 'react';
import { Question } from '../types';
import { useStore } from '../store/useStore';

interface QuestionCardProps {
  question: Question;
}

export function QuestionCard({ question }: QuestionCardProps) {
  const { setAnswer, userAnswers } = useStore();

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">{question.text}</h2>
      <div className="space-y-4">
        {question.options.map((option) => (
          <label
            key={option.text}
            className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <input
              type="radio"
              name={question.id}
              value={option.value}
              checked={userAnswers[question.id] === option.value}
              onChange={() => setAnswer(question.id, option.value)}
              className="h-4 w-4 text-blue-600"
            />
            <span className="ml-3 text-gray-700">{option.text}</span>
          </label>
        ))}
      </div>
    </div>
  );
}