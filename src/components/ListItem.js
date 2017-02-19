import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback } from 'react-native';
import { CardSection } from './common';
import Icon from 'react-native-vector-icons/Ionicons';
class ListItem extends Component {

  render() {
    const { contentStyle, checkboxStyle } = styles;

    return (
      <CardSection>
        <Text style={contentStyle}>
          {this.props.task.content}
        </Text>
        <TouchableWithoutFeedback>
          <Icon
            name={this.props.task.resolved ? 'md-checkbox-outline' : 'md-square-outline'}
            size={50}
            style={checkboxStyle}
          />
        </TouchableWithoutFeedback>
      </CardSection>
    );
  }
}

const styles = {
  contentStyle: {
    fontSize: 18,
    alignSelf: 'center',
    margin: 5,
    flex: 6
  },
  checkboxStyle: {
    flex: 1,
    alignSelf: 'center'
  }
};

export default ListItem;
