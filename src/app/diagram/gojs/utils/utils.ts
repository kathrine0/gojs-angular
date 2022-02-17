import { nodeType, nodeTypes } from '../models/node.types';

const randomBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const getRandomType = () => {
  return nodeTypes[randomBetween(0, nodeTypes.length - 1)];
}

export const getNextType = (currentType: nodeType) => {
  const index = nodeTypes.indexOf(currentType);
  return nodeTypes[(index+1)%nodeTypes.length];
}
