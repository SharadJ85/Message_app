import {StyleSheet} from 'react-native';
import GlobalStyles from '../../Global/Styles/GlobalStyles';

const Styles = StyleSheet.create({
  section: {
    backgroundColor: GlobalStyles.section.backgroundColor,
    height: 65,
    width: '97%',
    alignSelf: 'center',
    borderRadius: 2,
    marginVertical: 1,
    flex: 1,
    flexDirection: 'row',
  },
  avatar: {
    height: '100%',
    width: 65,
  },
  avatarCircle: {
    height: 40,
    aspectRatio: 1,
    borderRadius: 50,
    margin: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GlobalStyles.navHeaderStyle.backgroundColor,
  },
  avatarCircleText: {
    color: GlobalStyles.navHeaderTitleStyle.color,
    fontSize: 20,
    fontFamily: 'roboto',
  },
  details: {
    height: '100%',
    flex: 1,
    flexDirection: 'column',
  },
  detailsTop: {
    height: '65%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailsTopTitle: {
    flex: 1,
    fontSize: 15,
    fontFamily: 'roboto',
    color: GlobalStyles.sectionTitle.color,
  },
  detailsTopTime: {
    margin: 10,
    fontSize: 10,
    fontFamily: 'roboto',
    color: GlobalStyles.sectionTime.color,
  },
  detailsBottom: {
    height: '10%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailsBottomMessage: {
    flex: 1,
    fontSize: 12,
    fontFamily: 'roboto',
    color: GlobalStyles.sectionMessage.color,
  },
  detailsBottomBadge: {
    minWidth: 21,
    borderRadius: 50,
    paddingHorizontal: 4,
    paddingVertical: 2,
    marginHorizontal: 10,
    alignItems: 'center',
    backgroundColor: GlobalStyles.navHeaderStyle.backgroundColor,
  },
  detailsBottomBadgeText: {
    color: GlobalStyles.navHeaderTitleStyle.color,
    fontSize: 12,
    fontFamily: 'roboto',
  },
});

export default Styles;
