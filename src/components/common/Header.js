import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {

  const { viewStyle, textStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.textHeader}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    height: 60,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 20,
    color: '#fff'
  }
};

export { Header };
