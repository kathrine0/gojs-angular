import { nodeType } from '../models/node.types';

export const theme = {
  sizes: {
    nodeWidth: 218,
    headerHeight: 40,
    headerTitleHeight: 19,
    headerIconSize: 18,
    portWidth: 3,
  },
  colors: {
    nodeBackgroundColor: '#FFFFFF',
    defaultNodeFillColor: '#F1F4F7',
    defaultStrokeColor: '#3D517B',
    nodeShadowColor: '#E8E8E8',
  },
  padding: {
    itemsPadding: 2,
  },
  margin: {
    itemsColumnMargin: 11,
    itemMargin: 16,
    headerTitleMargin: 39,
    headerIconMargin: 10,
  },
  cornerRoundness: {
    mainShape: 5,
  },
  fontSize: {
    nodeTitle: '14px',
    nodeItem: '14px',
    groupTitle: '14px',
  },
  fontWeight: {
    nodeTitle: 'bold',
    nodeItem: 'normal',
  },
  fontFamily: {
    roboto: 'Roboto, sans-serif',
  },
};

export const getFontString = (
  fontSize: string,
  fontWeight: string,
  fontFamily: string
) => `${fontWeight} ${fontSize} ${fontFamily}`;

export const nodeTypeStyleMap: Record<
  nodeType,
  { icon: string; color: string }
> = {
  success: {
    icon: 'F M27 4l-15 15-7-7-5 5 12 12 20-20z',
    color: '#328C5D',
  },
  error: {
    icon: 'F M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z',
    color: '#D63619',
  },
  warning: {
    icon: 'F M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM232 152C232 138.8 242.8 128 256 128s24 10.75 24 24v128c0 13.25-10.75 24-24 24S232 293.3 232 280V152zM256 400c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 385.9 273.4 400 256 400z',
    color: '#F1C232',
  },
  info: {
    icon: 'F M16 0l-10 16 10 16 10-16z',
    color: '#3D517B',
  },
};
