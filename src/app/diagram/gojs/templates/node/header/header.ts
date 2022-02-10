import * as go from 'gojs';
import { theme } from '../../theme';

const $ = go.GraphObject.make;
const { nodeWidth, headerHeight } = theme.sizes;

export const header = (...children: go.GraphObject[]) =>
  $(
    go.Panel,
    go.Panel.Spot,
    {
      alignment: go.Spot.TopCenter,
      desiredSize: new go.Size(nodeWidth, headerHeight)
    },
    $(
      go.Shape,
      'RoundedRectangle',
      {
        alignment: go.Spot.Center,
        fill: theme.colors.defaultNodeFillColor,
        parameter1: theme.cornerRoundness.mainShape,
        stroke: null,
        width: nodeWidth,
      },
    ),
    children
  );
