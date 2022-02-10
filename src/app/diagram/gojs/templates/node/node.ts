import * as go from 'gojs';
import { hidePorts, showPorts } from '../../animations/showHidePorts';
import { mainShapeName } from '../../consts';
import { item } from './column/item';
import { itemsColumn } from './column/itemsColumn';
import { header } from './header/header';
import { headerIcon } from './header/headerIcon';
import { headerTitle } from './header/headerTitle';
import { nodeBackground } from './nodeBackground/nodeBackground';
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
      mouseEnter: (__, obj: go.GraphObject) => showPorts(obj.part as go.Part),
      mouseLeave: (__, obj: go.GraphObject) => hidePorts(obj.part as go.Part),
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
