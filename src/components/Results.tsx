import React from 'react';
import { MapPin, Building2, GraduationCap, Heart, Shield, Bus, Leaf, Building, Coins } from 'lucide-react';
import { calculateStateMatches } from '../utils/calculateMatch';
import { states } from '../data/states';
import { useStore } from '../store/useStore';

export function Results() {
  const { userAnswers, resetQuiz } = useStore();
  const matches = calculateStateMatches(userAnswers, states);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Seus 3 Melhores Resultados</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {matches.map(({ state, score }) => (
          <div key={state.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{state.name}</h2>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Capital: {state.capital}</span>
              </div>
              <p className="text-gray-600 mb-4">{state.description}</p>
              
              {/* Principais Cidades */}
              <div className="mb-4">
                <h3 className="font-semibold text-gray-700 mb-2">Principais Cidades:</h3>
                <ul className="list-disc list-inside space-y-1">
                  {state.cities.map((city) => (
                    <li key={city.name} className="text-gray-600">
                      <span className="font-medium">{city.name}</span>
                      <span className="text-sm text-gray-500"> - {city.description}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <div className="flex items-center">
                  <Building2 className="w-4 h-4 mr-2 text-purple-500" />
                  <span>Custo de Vida: {state.scores.costOfLiving}/5</span>
                </div>
                <div className="flex items-center">
                  <Heart className="w-4 h-4 mr-2 text-pink-500" />
                  <span>Segurança LGBTQ+: {state.scores.lgbtqSafety}/5</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-blue-500" />
                  <span>Segurança: {state.scores.crimeSafety}/5</span>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="w-4 h-4 mr-2 text-green-500" />
                  <span>Educação: {state.scores.education}/5</span>
                </div>
                <div className="flex items-center">
                  <Bus className="w-4 h-4 mr-2 text-yellow-500" />
                  <span>Transporte: {state.scores.publicTransport}/5</span>
                </div>
                <div className="flex items-center">
                  <Leaf className="w-4 h-4 mr-2 text-emerald-500" />
                  <span>Meio Ambiente: {state.scores.environment}/5</span>
                </div>
                <div className="flex items-center">
                  <Building className="w-4 h-4 mr-2 text-indigo-500" />
                  <span>População: {state.scores.population}/5</span>
                </div>
                <div className="flex items-center">
                  <Coins className="w-4 h-4 mr-2 text-amber-500" />
                  <span>Tributação: {state.scores.taxImportance}/5</span>
                </div>
              </div>
              <div className="mt-4">
                <div className="bg-blue-100 rounded-full p-2 text-center">
                  <span className="text-blue-800 font-semibold">
                    {score.toFixed(1)}% de Compatibilidade
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={resetQuiz}
        className="mt-8 mx-auto block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Recomeçar
      </button>
    </div>
  );
}