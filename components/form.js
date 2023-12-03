import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Form({addHandler}) {

    const [task_name_from_user, setName] = useState('');
    const [descr_of_task_from_user, setDescr] = useState('');


    const add_name_of_task = (text) => {
        setName(text);
    };

    const add_descr_of_task = (text) => {
        setDescr(text);
    };

//   return (
//     <View >
//         <TextInput style={styles.input_form} onChangeText={onchange} placeholder='INPUT TASK' />
//         <Button style={styles.add_task} onPress={() => addHandler(text_from_user)} title='Add task' />
//     </View>
//   );

    return (
        <View style = {styles.mainArea}>
            <View style = {styles.formArea}>
                <View style = {styles.inputFormArea}>
                    <Text style = {styles.informText}>Name</Text>
                    <TextInput style = {styles.inputName} onChangeText={add_name_of_task}/>
                </View>
                <View style = {styles.inputFormArea}>
                    <Text style = {styles.informText}>Descr</Text>
                    <TextInput style = {styles.inputName} onChangeText={add_descr_of_task}/>
                </View>
            </View>
            <View style = {styles.buttonArea}>
                <Button style={styles.add_task} onPress={() => addHandler(task_name_from_user, descr_of_task_from_user)} title='ADD'></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    mainArea: {
        flexDirection: 'row',
        width: '100%',
        marginLeft: 5
    },

    formArea: {
        flex: 2,
        width: '100%',
        height: 100,
        justifyContent: 'center',
    },

    buttonArea: {
        flex: 1,
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',

    },

    input_form: {
        padding: 10,
        marginVertical: 30,
        marginHorizontal: 30,
        width: '60%',
        borderWidth: 1,
        borderColor: 'rgb(90, 90, 90)',
    },

    add_task: {
        color: 'black',
        backgroundColor: 'red'
    },

    inputFormArea: {
        flexDirection: 'row',
        marginTop: 5
    },

    informText: {
        flex: 1,
    },
    
    inputName: {
        flex: 2,
        width: '25%',
        borderWidth: 1,
        borderColor: 'rgb(90, 90, 90)',
    }
});
