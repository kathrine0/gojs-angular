import * as go from 'gojs';
import { v4 as uuidv4 } from 'uuid';
import { link } from './templates/link/link';
import { node } from './templates/node/node';
import { getRandomType } from './utils/utils';

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
    'undoManager.isEnabled': true,
    'clickCreatingTool.archetypeNodeData': createNewNode(),
  });

  diagram.addDiagramListener('ExternalObjectsDropped', (e) => {
    e.subject.each((node: go.Node) => {
      const nodeData = createNewNode();
      Object.entries(nodeData).forEach(([key, value]) =>
        e.diagram.model.set(node.data, key, value)
      );
    });
  });

  return diagram;
};

const createNewNode = () => {
  const key = uuidv4();
  return {
    key,
    type: getRandomType(),
    text: `Node ${key.substring(0, 4)}`,
    content: `No new status update`,
  };
};
