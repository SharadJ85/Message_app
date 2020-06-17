import React from 'react';
import {Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  defaultText: {
    fontFamily: 'Roboto',
  },
});
export const typography = () => {
  // use default render from text
  const oldTextRender = Text.render;

  // custom text renderer with fonts
  Text.render = function (...args) {
    const origin = oldTextRender.call(this, ...args);
    return React.cloneElement(origin, {
      style: [styles.defaultText, origin.props.style],
    });
  };
};
