import React, {useRef} from 'react';
import {
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';

const MyForm = () => {
  const fullnameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const focusFullName = () => {
    if (fullnameInputRef.current) {
      fullnameInputRef.current.focus();
    }
  };
  const focusEmail = () => {
    if (emailInputRef.current) {
      emailInputRef.current.focus();
    }
  };

  const focusPassword = () => {
    if (passwordInputRef.current) {
      passwordInputRef.current.focus();
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor="gray"
        returnKeyType="next"
        onSubmitEditing={focusFullName}
      />
      <TextInput
        ref={emailInputRef}
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="gray"
        keyboardType="email-address"
        returnKeyType="next"
        onSubmitEditing={focusEmail}
      />
      <TextInput
        ref={passwordInputRef}
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="gray"
        secureTextEntry={true}
        returnKeyType="done"
        onSubmitEditing={focusPassword}
      />
      <TouchableOpacity style={styles.buttonContainer} onPress={() => {}}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 330,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  input: {
    height: 45,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 50,
    paddingHorizontal: 20,
    color: '#838284',
    borderColor: '#838284',
  },
  buttonContainer: {
    width: 167,
    height: 49,
    backgroundColor: 'transparent',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#118615',
    marginTop: 60,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
});

export default MyForm;
