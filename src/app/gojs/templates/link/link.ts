import * as go from 'gojs';

const $ = go.GraphObject.make;

const linkShape = () =>
  $(go.Shape, {
    strokeWidth: 3,
    stroke: 'gray',
    strokeCap: 'round',
  });

const linkTemplate = (...children: go.GraphObject[]) =>
  $(
    go.Link,
    {
      selectionAdorned: true,
      routing: go.Link.AvoidsNodes,
      fromEndSegmentLength: 24,
      toEndSegmentLength: 24,
      corner: 10,
      curve: go.Link.JumpGap,
      fromShortLength: 1,
      toShortLength: 1,
      relinkableFrom: true,
      relinkableTo: true,
    },
    ...children
  );

export const link = () => linkTemplate(linkShape());
