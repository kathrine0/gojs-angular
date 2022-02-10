import * as go from 'gojs';
import { theme } from '../../theme';

const $ = go.GraphObject.make;

const { nodeBackgroundColor, nodeShadowColor } = theme.colors;

export const nodeBackground = () =>
  $(
    go.Shape,
    'RoundedRectangle',
    {
      width: theme.sizes.nodeWidth - 2,
      fill: nodeBackgroundColor,
      stroke: nodeShadowColor,
    },
  );
