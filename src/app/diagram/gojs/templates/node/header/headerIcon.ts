import * as go from 'gojs';
import { theme } from '../../theme';
import { nodeType, nodeTypeStyleMap } from './../../../node-types';

const $ = go.GraphObject.make;

export const headerIcon = () =>
  $(
    go.Shape,
    {
      alignment: new go.Spot(0, 0.5, theme.margin.headerIconMargin, 0),
      alignmentFocus: go.Spot.Left,
      desiredSize: new go.Size(
        theme.sizes.headerIconSize,
        theme.sizes.headerIconSize
      ),
      fill: 'blue',
      stroke: null,
    },
    new go.Binding(
      'fill',
      'type',
      (type: nodeType) => nodeTypeStyleMap[type].color
    ),
    new go.Binding(
      'geometryString',
      'type',
      (type: nodeType) => nodeTypeStyleMap[type].icon
    )
  );
