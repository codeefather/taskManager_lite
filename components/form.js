import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Form({addHandler}) {

    const [text_from_user, setValue] = useState('');

    const onchange = (text) => {
        setValue(text);
    };

  return (
    <View >
        <TextInput style={styles.input_form} onChangeText={onchange} placeholder='INPUT TASK' />
        <Button style={styles.add_task} onPress={() => addHandler(text_from_user)} title='Add task' />
    </View>
  );
}

const styles = StyleSheet.create({
    input_form: {
        borderBottomWidth: 1,
        borderColor: '#000',
        padding: 10,
        marginVertical: 30,
        marginHorizontal: 30,
        width: '60%'
    },
    add_task: {
        color: 'green',
        width: 50,
        height: 25,
        borderWidth: 1,
        backgroundColor: 'yellow'
    }
});
