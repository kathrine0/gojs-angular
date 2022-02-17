import * as go from 'gojs';
import { mainShapeName } from '../consts';
import { item } from './item/item';
import { itemsColumn } from './item/items-column';
import { header } from './header/header';
import { headerIcon } from './header/header-icon';
import { headerTitle } from './header/header-title';
import { nodeBackground } from './node-background/node-background';
import { port } from './ports/ports';

const $ = go.GraphObject.make;

const defaultNodeTemplate = (
  ports: go.Panel,
  nodeChildren: go.GraphObject[],
  mainShapeChildren: go.GraphObject[]
) =>
  $(
    go.Node,
    go.Panel.Spot,
    {
      locationSpot: go.Spot.TopCenter,
      cursor: 'grab',
      selectionObjectName: mainShapeName,
    },
    new go.Binding('location', 'loc', go.Point.parse).makeTwoWay(
      go.Point.stringify
    ),
    $(
      go.Panel,
      go.Panel.Spot,
      {
        name: mainShapeName,
      },
      ...mainShapeChildren
    ),
    ...nodeChildren,
    ports
  );

export const node = () =>
  defaultNodeTemplate(
    port(),
    [],
    [
      $(go.Panel, go.Panel.Auto, nodeBackground(), itemsColumn(item())),
      header(headerIcon(), headerTitle()),
    ]
  );
