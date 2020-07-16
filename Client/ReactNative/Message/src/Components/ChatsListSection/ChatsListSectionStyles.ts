import {StyleSheet} from 'react-native';
import GlobalStyles from '../../Global/Styles/GlobalStyles';

const Styles = StyleSheet.create({
  section: {
    backgroundColor: GlobalStyles.section.backgroundColor,
    height: 65,
    width: '97%',
    alignSelf: 'center',
    borderRadius: 2,
    marginTop: 1,
    flex: 1,
    flexDirection: 'row',
  },
  avatar: {
    height: '100%',
    width: 65,
    margin: 12,
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
    color: GlobalStyles.sectionTitle.color,
  },
  detailsTopTime: {
    margin: 10,
    fontSize: 10,
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
    color: GlobalStyles.sectionMessage.color,
  },
});

export default Styles;
