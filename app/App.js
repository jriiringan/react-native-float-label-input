/**
 * Created by sha on 7/5/17.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import TextFieldAnimated from './components/TextFieldAnimated';

class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Placeholder Animated Text Field
                </Text>

                <TextFieldAnimated
                    label="Name"
                    // onChangeText={ () => {} }
                    placeholder={'Name'}
                />

                <TextFieldAnimated
                    label="Handle"
                    placeholder={'Handle'}
                />

                <TextFieldAnimated
                    label="Email"
                    placeholder={'Email'}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25,
        backgroundColor: '#ffffff',
    },
    welcome: {
        fontSize: 15,
        textAlign: 'left',
        margin: 10,
        color: '#60646f',
        marginLeft: 30,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default App;