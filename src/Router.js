import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';
import TodoList from './components/TodoList';
import AddTask from './components/AddTask';

const RouterWithRedux = connect()(Router); 
class RouterComponent extends Component {
    render() {
        return (
            <RouterWithRedux>
                <Scene
                   key="todoList"
                   component={TodoList}
                   title="TodoList"
                   titleStyle={styles.titleStyle}
                   navigationBarStyle={styles.navigationBarStyle}
                   sceneStyle={styles.sceneStyle}
                   barButtonIconStyle={styles.barButtonIconStyle}
                />
                <Scene
                   key="addTask"
                   component={AddTask}
                   title="New Task"
                   titleStyle={styles.titleStyle}
                   navigationBarStyle={styles.navigationBarStyle}
                   sceneStyle={styles.sceneStyle}
                   leftButtonIconStyle={{ tintColor: '#fff' }}                
                />
            </RouterWithRedux>
        );
    }
};

const styles = {
    navigationBarStyle: {
        backgroundColor: 'red',
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
    },
    titleStyle: {
        fontSize: 20,
        color: '#fff'
    },
    sceneStyle: {
        paddingTop: 52
    },
    barButtonIconStyle: {
       tintColor: '#fff'
    }
};

export default RouterComponent;
