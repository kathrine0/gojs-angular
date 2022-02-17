import { nodeType } from './node.types';

export interface NodeData {
  key: go.Key;
  text: string;
  content: string;
  type: nodeType;
}
export interface LinkData {
  key: go.Key;
  from: go.Key;
  to: go.Key;
}
export interface ModelData {
  [key: string]: any;
}
