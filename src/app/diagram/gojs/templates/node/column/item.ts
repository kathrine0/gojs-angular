import { measuredPanelName } from './../../../consts';
import * as go from 'gojs';
import * as _ from 'lodash/fp';
import { getFontString, theme } from '../../theme';


const $ = go.GraphObject.make;

const { nodeWidth } = theme.sizes;
const { itemsColumnMargin, itemMargin } = theme.margin;

const itemFont = getFontString(theme.fontSize.nodeItem, theme.fontWeight.nodeItem, theme.fontFamily.roboto);

export const item = () =>
  $(
    go.Panel,
    go.Panel.Horizontal,
    {
      name: measuredPanelName,
      padding: theme.padding.itemsPadding,
      alignment: new go.Spot(0, 0.5, itemMargin, 0),
      width: nodeWidth
    },
    itemTextBlock({}, [
      new go.Binding('text', 'content')
    ])
  );

const itemTextBlock = (props = {}, bindings: go.Binding[] = []) =>
  $(
    go.TextBlock,
    {
      overflow: go.TextBlock.OverflowEllipsis,
      maxSize: new go.Size(nodeWidth - itemsColumnMargin * 2, NaN),
      font: itemFont,
      ...props
    },
    ...bindings
  );
