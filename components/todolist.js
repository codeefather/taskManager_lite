import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableHighlight, TouchableOpacity } from 'react-native';

export default function ToDoList({el, deleteHandler}) {
  return (
    <View style={styles.container}>
        <View style = {styles.task}>
          <View style={styles.icon_area}>
            <Text style={styles.task_icon}>*</Text>
          </View>
          <View style={styles.text_area}>
            <Text style={styles.task_name}>{el.name_of_task}</Text>
          < Text style={styles.task_description}>{el.descr_of_task}</Text>
          </View>
          <View style={styles.delete_area}>
            <Button style={styles.task_delete} onPress= {()=> deleteHandler(el.key)} title='X'></Button>
          </View>
        </View>
    </View>
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
    },

    task: {
      width: '100%',
      height: 50,
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: 'rgb(90, 90, 90)',
    },
  
    icon_area:{
      // backgroundColor: 'grey',
    },
  
    text_area: {
      // backgroundColor: 'green',
      flex: 4,
      padding: 5
    },
  
    delete_area:{
      // backgroundColor: 'blue',
      flex: 1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    
  //   task_delete: {
  //     width: 50,
  //     height: 25,
  //     backgroundColor: 'black'
  // }
  task_name:{
    fontSize: 16,
    marginLeft: 15
  },
  task_description:{
    fontSize: 12
  }
});

{/* <Text style={styles.text}> {el.task} </Text> */}