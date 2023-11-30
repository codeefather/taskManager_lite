import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import Header from './components/header';
import ToDoList from './components/todolist';
import Form from './components/form';

// import { FlatList } from 'react-native-web';

export default function App() {

  const [listOfItems, setListOfItems] = useState([
    {task: 'Buy Milk', key: '1'},
    {task: 'Wash car', key: '2'},
    {task: 'Buy potatos', key: '3'},
  ])

  const addHandler = (text) => {
    setListOfItems((list) => {
      return [
        {task: text, key: Math.random().toString(36).substring(7)},
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
    <View>
      <Header />
      <Form addHandler={addHandler} />
      <View>
        <FlatList data={listOfItems} renderItem={({ item }) => (
          <ToDoList el={item} deleteHandler={deleteHandler} />
        )} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

});
