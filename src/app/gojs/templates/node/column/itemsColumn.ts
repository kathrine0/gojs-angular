import * as go from 'gojs';
import { expandedPanelName, measuredPanelName } from './../../../consts';
import { theme } from './../../theme';

const $ = go.GraphObject.make;

export const itemsColumn = (itemTemplate: go.Panel) =>
  $(
    go.Panel,
    go.Panel.Vertical,
    {
      name: expandedPanelName,
      alignment: go.Spot.Bottom,
      alignmentFocus: go.Spot.Top,
    },
    panelWithVerticalMargin(
      { name: measuredPanelName },
      theme.margin.itemsColumnMargin,
      $(go.Panel, go.Panel.Vertical, itemTemplate)
    )
  );

const panelWithVerticalMargin = (
  props = {},
  marginHeight = 0,
  ...children: go.GraphObject[]
) =>
  $(
    go.Panel,
    go.Panel.Vertical,
    {
      ...props,
    },
    $(go.Panel, {
      height: marginHeight + theme.sizes.headerHeight / 2,
    }),
    children,
    $(go.Panel, { height: marginHeight })
  );
