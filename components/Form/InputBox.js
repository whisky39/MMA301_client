import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

const InputBox = ({ value, autoComplete, placeholder, secureTextEntry, setValue }) => {
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input} 
        autoComplete={autoComplete} 
        placeholder={placeholder}
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={(text) => setValue(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: '#ffffff',
    paddingLeft: 10,
    borderRadius: 10,
    color: '#000000',
    borderWidth: 1,
    borderColor: 'gray',
  },
})

export default InputBox;
