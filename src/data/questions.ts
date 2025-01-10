import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 'costOfLiving',
    text: 'Perfil do custo de vida',
    options: [
      { text: 'Em grandes cidades maiores', value: 5 },
      { text: 'Moderado', value: 4 },
      { text: 'Indiferente, quero a vida que for', value: 3 },
      { text: 'Baixo / Interior', value: 2 },
      { text: 'Sem relevância', value: 1 },
    ],
  },
  {
    id: 'warmWeather',
    text: 'Quanto valoriza um clima quente?',
    options: [
      { text: 'Muito', value: 5 },
      { text: 'Moderado', value: 4 },
      { text: 'Indiferente', value: 3 },
      { text: 'Prefiro climas amenos', value: 2 },
      { text: 'Não gosto de calor', value: 1 },
    ],
  },
  {
    id: 'coldWeather',
    text: 'Prefere invernos frios e com neve?',
    options: [
      { text: 'Muito', value: 5 },
      { text: 'Moderado', value: 4 },
      { text: 'Indiferente', value: 3 },
      { text: 'Prefiro invernos amenos', value: 2 },
      { text: 'Não gosto de frio', value: 1 },
    ],
  },
  {
    id: 'jobImportance',
    text: 'Qual setor é mais importante no trabalho?',
    options: [
      { text: 'Tecnologia', value: 5 },
      { text: 'Agricultura', value: 4 },
      { text: 'Serviços', value: 3 },
      { text: 'Saúde', value: 2 },
      { text: 'Finanças', value: 1 },
    ],
  },
  {
    id: 'lgbtqSafety',
    text: 'Importância da segurança LGBTQIA+',
    options: [
      { text: 'Muito importante', value: 5 },
      { text: 'Importante', value: 4 },
      { text: 'Moderadamente importante', value: 3 },
      { text: 'Pouco importante', value: 2 },
      { text: 'Indiferente', value: 1 },
    ],
  },
  {
    id: 'crimeSafety',
    text: 'Nível de segurança e baixa criminalidade',
    options: [
      { text: 'Muito importante', value: 5 },
      { text: 'Importante', value: 4 },
      { text: 'Moderadamente importante', value: 3 },
      { text: 'Pouco importante', value: 2 },
      { text: 'Indiferente', value: 1 },
    ],
  },
  {
    id: 'education',
    text: 'Importância da qualidade da educação',
    options: [
      { text: 'Muito importante', value: 5 },
      { text: 'Importante', value: 4 },
      { text: 'Moderadamente importante', value: 3 },
      { text: 'Pouco importante', value: 2 },
      { text: 'Indiferente', value: 1 },
    ],
  },
  {
    id: 'culturalDiversity',
    text: 'Nível desejado de diversidade cultural',
    options: [
      { text: 'Alta diversidade', value: 5 },
      { text: 'Indiferente', value: 4 },
      { text: 'Cultura diversificada', value: 3 },
      { text: 'Cultura local', value: 2 },
      { text: 'Conservador', value: 1 },
    ],
  },
  {
    id: 'publicTransport',
    text: 'Dependência do transporte público',
    options: [
      { text: 'Muito alta', value: 5 },
      { text: 'Moderada', value: 4 },
      { text: 'Baixa', value: 3 },
      { text: 'Prefiro usar carro', value: 2 },
      { text: 'Indiferente', value: 1 },
    ],
  },
  {
    id: 'environment',
    text: 'Valorização do meio ambiente',
    options: [
      { text: 'Sou ambientalista', value: 5 },
      { text: 'Gosto de natureza', value: 4 },
      { text: 'Moderado', value: 3 },
      { text: 'Sou mais urbano', value: 2 },
      { text: 'Indiferente', value: 1 },
    ],
  },
  {
    id: 'population',
    text: 'Preferência de densidade populacional',
    options: [
      { text: 'Cidade grande', value: 5 },
      { text: 'Subúrbio', value: 4 },
      { text: 'Cidade pequena', value: 3 },
      { text: 'Cidade média', value: 2 },
      { text: 'Rural', value: 1 },
    ],
  },
  {
    id: 'taxImportance',
    text: 'Relevância da tributação para empreender',
    options: [
      { text: 'Baixo', value: 5 },
      { text: 'Moderado com benefícios', value: 4 },
      { text: 'Alto com serviços de qualidade', value: 3 },
      { text: 'Preferência por menor custo', value: 2 },
      { text: 'Indiferente', value: 1 },
    ],
  },
  {
    id: 'brazilianCommunity',
    text: 'Importância da comunidade brasileira',
    options: [
      { text: 'Primordial', value: 5 },
      { text: 'Alta', value: 4 },
      { text: 'Moderado', value: 3 },
      { text: 'Baixa', value: 2 },
      { text: 'Indiferente', value: 1 },
    ],
  },
];