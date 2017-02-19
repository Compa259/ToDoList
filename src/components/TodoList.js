import React, { Component } from 'react';
import { ListView, View } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import { loadData } from '../actions';
import ListItem from './ListItem';
import { Button } from './common';

class TodoList extends Component {

  componentWillMount() {
    this.props.loadData();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ data }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(data);
  }

  renderRow(task) {
    return (
      <ListItem task={task} />
    );
  }

  render() {
    return (
     <View style={styles.containerStyle}>
       <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
       />
      <Button
          onPress={() => Actions.addTask()}
          icon={<Icon name="md-add" size={40} color="#fff" />}
      />
    </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1
  },
};

const mapStateToProps = state => {
  const data = state.TodoListReducer;
  return { data };
};

export default connect(mapStateToProps, { loadData })(TodoList);
