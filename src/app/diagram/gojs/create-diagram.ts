import { randomBetween } from './utils/random';
import * as go from 'gojs';
import { link } from './templates/link/link';
import { node } from './templates/node/node';
import { v4 as uuidv4 } from 'uuid';
import { nodeTypes } from './node-types';

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
    'clickCreatingTool.archetypeNodeData': { text: 'new node' },
  });

  diagram.undoManager.isEnabled = true;

  diagram.addDiagramListener('ExternalObjectsDropped', (e) => {
    e.subject.each((node: go.Node) => {
      const key = uuidv4();
      const type = nodeTypes[randomBetween(0, nodeTypes.length - 1)];
      e.diagram.model.set(node.data, 'key', key);
      e.diagram.model.set(node.data, 'type', type);
      e.diagram.model.set(node.data, 'text', `Node ${key.substring(0, 4)}`);
      e.diagram.model.set(node.data, 'content', `No new status update`);
    });
  });

  return diagram;
};
