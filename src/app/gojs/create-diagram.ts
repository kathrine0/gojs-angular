import * as go from 'gojs';
import { link } from './templates/link/link';
import { node } from './templates/node/node';

const $ = go.GraphObject.make;

const model = () =>
  $(go.GraphLinksModel, {
    nodeKeyProperty: 'key',
    linkKeyProperty: 'key',
  });

export const createDiagram = (): go.Diagram => {
  const diagram = $(go.Diagram, {
    contentAlignment: go.Spot.Center,
    nodeTemplate: node(),
    linkTemplate: link(),
    model: model(),
    scrollMode: go.Diagram.InfiniteScroll,
    'clickCreatingTool.archetypeNodeData': { text: 'new node'},
  });

  diagram.undoManager.isEnabled = true;

  return diagram;
};
