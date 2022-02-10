
export interface NodeData {
  key?: go.Key;
  [key: string]: any;
}

export interface LinkData {
  key?: go.Key;
  from: go.Key;
  to: go.Key;
  [key: string]: any;
}
export interface ModelData {
  [key: string]: any;
}
