import * as go from 'gojs';
import { theme } from '../../theme';
import { nodeType, nodeTypeStyleMap } from './../../../node-types';

const $ = go.GraphObject.make;

const inPort = () =>
  $(
    go.Shape,
    'RoundedRectangle',
    {
      portId: 'inPort',
      fromLinkable: true,
      toLinkable: true,
      stroke: theme.colors.defaultStrokeColor,
      parameter1: theme.cornerRoundness.mainShape,
      fill: null,
      desiredSize: new go.Size(
        theme.sizes.nodeWidth - theme.sizes.portWidth,
        theme.sizes.headerHeight - theme.sizes.portWidth
      ),
      strokeWidth: theme.sizes.portWidth,
    },
    new go.Binding(
      'stroke',
      'type',
      (type: nodeType) => nodeTypeStyleMap[type].color
    )
  );

export const port = () =>
  $(
    go.Panel,
    go.Panel.Spot,
    {
      alignment: go.Spot.TopCenter,
      alignmentFocus: go.Spot.Top,
    },
    inPort()
  );
