import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

class AddTask extends Component {
    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={styles.cardStyle}>
                  <TextInput
                     multiline
                     style={styles.textInputStyle}
                     placeholder="Let's write to done :D"
                  />
                </View>
            </View>
        );
    }
};

const styles = {
    containerStyle: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15
    },
    cardStyle: {
        backgroundColor: '#ffff99'      
    },
    textInputStyle: {
        height: 100,
    }
};

export default AddTask;
