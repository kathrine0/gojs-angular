import * as go from 'gojs';
import { getFontString, theme } from '../../theme';

const $ = go.GraphObject.make;

const titleFont = getFontString(
  theme.fontSize.nodeTitle,
  theme.fontWeight.nodeTitle,
  theme.fontFamily.roboto
);

export const headerTitle = () =>
  $(
    go.TextBlock,
    {
      alignment: new go.Spot(0, 0.5, theme.margin.headerTitleMargin, 0),
      alignmentFocus: go.Spot.Left,
      verticalAlignment: go.Spot.Center,
      maxSize: new go.Size(theme.sizes.nodeWidth * 0.7, NaN),
      height: theme.sizes.headerTitleHeight,
      font: titleFont,
      overflow: go.TextBlock.OverflowEllipsis,
      maxLines: 1,
    },
    new go.Binding('text')
  );
