import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Viewб, TouchableHighlight, TouchableOpacity } from 'react-native';

export default function ToDoList({el, deleteHandler}) {
  return (
    <TouchableOpacity style={styles.container} onPress= {()=> deleteHandler(el.key)}>
        <Text style={styles.text}> {el.task} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        padding: 20,
        color: 'red',
        fontWeight: 'bold',
        textAlign: 'center',
        borderWidth: 1,
        marginTop: 20,
        width: '60%',
        marginLeft: '20%',
        backgroundColor: 'purple'
    }
});
