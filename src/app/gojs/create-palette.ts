import * as go from 'gojs';
import { link } from './templates/link/link';
import { node } from './templates/node/node';

const $ = go.GraphObject.make;

export const createPalette = (): go.Palette  => {
  const palette = $(go.Palette , {
    nodeTemplate: node(),
    model: $(go.GraphLinksModel),
  });

  return palette;
};
