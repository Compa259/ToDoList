import React, { PropTypes } from 'react';
import { Text, TouchableOpacity } from 'react-native';

const propTypes = {
  title: PropTypes.string,
  icon: PropTypes.object,
  onPress: PropTypes.func
};


const Button = ({ title, onPress, icon }) => {

  const { titleButtonStyle, buttonStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
       {icon !== undefined ? icon : <Text style={titleButtonStyle}>{title}</Text>}
    </TouchableOpacity>
  );
};

Button.propTypes = propTypes;

const styles = {
  buttonStyle: {
    height: 55,
    width: 55,
    backgroundColor: 'red',
    borderRadius: 28,
    borderWidth: 1,
    borderColor: 'blue',
    position: 'absolute',
    bottom: 15,
    right: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleButtonStyle: {
    color: '#fff',
    fontSize: 18,
  }
};

export { Button };
