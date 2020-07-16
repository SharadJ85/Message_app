import {StyleSheet} from 'react-native';
import GlobalStyles from '../../Global/Styles/GlobalStyles';

const Styles = StyleSheet.create({
  messageSendAttachments: {
    height: 130,
    flexDirection: 'row',
    backgroundColor: GlobalStyles.Message.backgroundColor,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  messageSendAttachmentsEach: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  messageSendAttachmentsIconsText: {
    marginTop: 5,
    fontSize: 14,
    color: GlobalStyles.Message.color,
  },
});

export default Styles;
