export const theme = {
  sizes: {
    nodeWidth: 218,
    headerHeight: 40,
    headerTitleHeight: 19,
    headerIconSize: 18,
    robotSize: 69,
    portWidth: 3,
    linkWidth: 3,
    linkDash: 10,
    linkGap: 10,
    badgeSize: 16,
    largeCogSize: 40,
    smallCogSize: 28,
    groupHeaderTitleHeight: 19,
    groupDash: 5,
    groupGap: 5,
    minGroupSize: 100
  },
  colors: {
    nodeBackgroundColor: '#FFFFFF',
    portColor: '#F1C232',
    defaultNodeFillColor: '#F1F4F7',
    warningFillColor: '#FEF2D4',
    errorFillColor: '#F7D7D1',
    goodFillColor: '#D6E8DF',
    defaultStrokeColor: '#3D517B',
    warningStrokeColor: '#F1C232',
    errorStrokeColor: '#D63619',
    goodStrokeColor: '#328C5D',
    nodeShadowColor: '#E8E8E8',
    linkColor: '#3D517B',
    linkBackgroundColor: '#FFFFFF',
    badgeColors: ['#F1C232', '#3D517B', '#328C5D', '#D63619'],
    groupColor: '#FFFFFF',
    groupHighlightedColor: '#F1F1F1'
  },
  padding: {
    itemsPadding: 2
  },
  margin: {
    itemsColumnMargin: 11,
    headerHorizontalMargin: 15,
    itemMargin: 16,
    expandButtonMargin: 18,
    headerTitleMargin: 39,
    headerIconMargin: 10,
    smallCogOffset: 11,
    largeCogOffset: -7,
    groupMargin: 20,
    contextMenuMargin: 10
  },
  cornerRoundness: {
    mainShape: 5,
    link: 5
  },
  fontSize: {
    nodeTitle: '14px',
    nodeItem: '14px',
    groupTitle: '14px',
    groupButton: '14px'
  },
  fontWeight: {
    nodeTitle: 'bold',
    nodeItem: 'normal',
    groupTitle: 'bold',
    groupButton: 'normal'
  },
  fontFamily: {
    roboto: 'Roboto, sans-serif'
  }
};

export const getFontString = (fontSize: string, fontWeight: string, fontFamily: string) =>
  `${fontWeight} ${fontSize} ${fontFamily}`;
