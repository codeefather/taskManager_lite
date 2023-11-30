import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.main}>
        <Text style={styles.text}>Task list</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    main:{
        padding: 15,
        marginTop: 100,
        height: 50,
        backgroundColor: 'silver',
        verticalAlign: 'middle'
    },
    text: {
        fontSize: 18,
        color: 'red',
        fontWeight: 'bold',
        textAlign: 'center'
    }
});
