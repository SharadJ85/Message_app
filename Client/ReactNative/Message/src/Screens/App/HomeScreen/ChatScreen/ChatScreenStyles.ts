import {Dimensions, StyleSheet} from 'react-native';
import GlobalStyles from '../../../../Global/Styles/GlobalStyles';

const Styles = StyleSheet.create({
  navHeaderStyle: {
    backgroundColor: GlobalStyles.navHeaderStyle.backgroundColor,
  },
  navHeaderTitleStyle: {
    color: GlobalStyles.navHeaderTitleStyle.color,
  },
  navHeaderStyleLeft: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 15,
  },
  body: {
    backgroundColor: GlobalStyles.section.backgroundColor,
    height: Dimensions.get('window').height,
    flex: 1,
    position: 'relative',
    flexDirection: 'column-reverse',
  },
  scrollView: {
    top: 0,
  },
  messageTimestamp: {
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: 12,
    color: GlobalStyles.MessageTimestamp.color,
    marginVertical: 10,
  },
  messageDelivered: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    fontSize: 12,
    color: GlobalStyles.MessageTimestamp.color,
    marginVertical: 5,
    paddingHorizontal: 12,
  },
  messageSection: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  messageSectionAvatar: {
    paddingRight: 12,
    paddingLeft: 4,
  },
  messageSectionMessage: {
    borderRadius: 20,
    maxWidth: 250,
    backgroundColor: GlobalStyles.Message.backgroundColor,
  },
  messageSectionMessageText: {
    color: GlobalStyles.Message.color,
    fontSize: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  messageSend: {
    width: '100%',
    position: 'absolute',
    backgroundColor: GlobalStyles.Message.color,
    bottom: 0,
  },
  messageSendInput: {
    borderColor: GlobalStyles.Message.borderColor,
    borderTopWidth: 0.5,
    height: 75,
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageSendInputText: {
    flex: 1,
    minHeight: 50,
    color: GlobalStyles.MessageInput.color,
    fontSize: 16,
  },
  messageSendInputTextPlaceHolder: {
    color: GlobalStyles.MessageInputPlaceHolder.color,
  },
  messageSendInputIcons: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    paddingHorizontal: 8,
  },
});

export default Styles;
