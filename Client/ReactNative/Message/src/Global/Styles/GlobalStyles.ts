const colors = {
  white: '#FFF',
  arsenic: '#363A44',
  gainsboro: '#E5E5E5',
  cornflowerBlue: '#69A3E7',
  shipCoveThirtyFivePercent: '#767CAD59',
  black: '#000000',
  blackFiftyPercent: '#00000080',
  blackSixtyFivePercent: '#000000A6',
};

const GlobalStyles = {
  statusBar: {
    backgroundColor: colors.arsenic,
  },
  navHeaderStyle: {
    backgroundColor: colors.arsenic,
    color: colors.white,
  },
  navHeaderTitleStyle: {
    color: colors.white,
  },
  body: {
    backgroundColor: colors.gainsboro,
  },
  section: {
    backgroundColor: colors.white,
  },
  sectionTitle: {
    color: colors.black,
  },
  sectionTime: {
    color: colors.blackFiftyPercent,
  },
  sectionMessage: {
    color: colors.blackSixtyFivePercent,
  },
};

export default GlobalStyles;
