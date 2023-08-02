import { View, Text, TextInput, Button, StyleSheet } from 'react-native'

//view ---- container that will wrap multiple components together
//Text ---- to showcase any text
//textinput ----- input component
//button ---- to showcase any button

export default function () {
  return (
    <View style={{ padding: 60 }}>
      {/*to render input along with button */}
      <View style={styles.innerContainer}>
        <TextInput style={styles.input} placeholder="Add Your Yote Here" />
        <Button color={'#000'} title="Add Note" />
      </View>
      {/*to render input along with button */}
      {/*to render all the nodes that we all created */}
      <View></View>
      {/*to render all the nodes that we all created */}
    </View>
  )
}

const styles = StyleSheet.create({
  innerContainer: {
    flexDirection: 'row',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    flex: 1,
  },
})
