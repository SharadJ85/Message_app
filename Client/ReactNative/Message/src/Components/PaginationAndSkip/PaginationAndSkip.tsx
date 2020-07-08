import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Styles from './PaginationAndSkipStyles';
import {diff} from '../../Utils/diff';
import {useEffect} from 'react';

interface Props {
  index: number;
  scrollViewRef: any;
  styles: object;
  arrayOfScreens: React.ReactElement[];
}

const PaginationAndSkip = ({
  index,
  scrollViewRef,
  styles,
  arrayOfScreens,
}: Props) => {
  useEffect(() => {}, []);
  return (
    <>
      <View style={[Styles.SkipAndPagination, styles]}>
        <View style={Styles.Pagination}>
          {arrayOfScreens?.map((element, i) => {
            return (
              <View
                key={i}
                style={[
                  Styles.PaginationIndicator,
                  {
                    width: diff(i + 1, i + 2, 25.7, 10, index),
                    opacity: diff(i + 1, i + 2, 1, 0.65, index),
                  },
                ]}
              />
            );
          })}
        </View>
        {index <= 2 ? (
          <TouchableOpacity
            style={Styles.Skip}
            onPress={() =>
              scrollViewRef.current.scrollToEnd({animated: false})
            }>
            <Text style={Styles.SkipText}>Skip</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </>
  );
};

export default PaginationAndSkip;
