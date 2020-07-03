import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('screen');
const Styles = StyleSheet.create({
  SkipAndPagination: {
    width: width * 0.85,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Skip: {
    paddingHorizontal: 5,
    paddingVertical: 3,
    marginHorizontal: 5,
  },
  SkipText: {color: '#fff'},
  Pagination: {
    flex: 1,
    flexDirection: 'row',
  },
  PaginationIndicator: {
    backgroundColor: '#fff',
    marginHorizontal: 5,
    borderRadius: 50,
    height: 10,
  },
});

export default Styles;
