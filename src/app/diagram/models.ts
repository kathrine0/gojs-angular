import { NodeData, LinkData, ModelData } from './gojs/models/model.types';
export interface DiagramState {
  nodes: NodeData[];
  links: LinkData[];
  model: ModelData;
}
