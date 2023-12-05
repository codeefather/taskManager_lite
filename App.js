import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView} from 'react-native';
import ToDoList from './components/todolist';
import Form from './components/form';

export default function App() {

  const [listOfItems, setListOfItems] = useState([
    {name_of_task: 'MILK', descr_of_task: 'buy milk', key: Math.random().toString(36).substring(7)},
    {name_of_task: 'CAR', descr_of_task: 'wash car', key: Math.random().toString(36).substring(7)},
    {name_of_task: 'NAME', descr_of_task: 'DOM NAME', key: Math.random().toString(36).substring(7)},
  ])

  const addHandler = (name_of_task, descr_of_task) => {
    setListOfItems((list) => {
      return [
        {name_of_task: name_of_task, descr_of_task: descr_of_task, key: Math.random().toString(36).substring(7)},
        ...list
      ]
    })
  }

  const deleteHandler =(key) => {
    setListOfItems((list) => {
      return list.filter(listOfItems => listOfItems.key != key)
    })
  }

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <Form addHandler={addHandler} />
      <View>
        <FlatList data={listOfItems} renderItem={({ item }) => (
          <ToDoList el={item} deleteHandler={deleteHandler} />
        )} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAreaView: {
    marginTop: 0,
    marginRight: 'auto',
    marginBottom: 0,
    marginLeft: 'auto',
  }
});