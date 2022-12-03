import { TextInput, ScrollView, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';

function SignUp() {
  const [user, setUser] = useState({
    email: '',
    fName: '',
    lName: '',
    password: '',
  });
  const handleSignUp = (text, type) => {
    setUser(prev => ({ ...prev, [type]: text }));
  };
  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <TextInput
          name="fName"
          value={user.fName}
          onChangeText={text => handleSignUp(text, 'fName')}
          placeholder="First name"
        />
        <TextInput
          name="lName"
          value={user.lName}
          onChangeText={text => handleSignUp(text, 'lName')}
          placeholder="Last name"
        />
        <TextInput
          name="email"
          value={user.email}
          onChangeText={text => handleSignUp(text, 'email')}
          placeholder="Email"
        />
        <TextInput
          name="password"
          value={user.password}
          onChangeText={text => handleSignUp(text, 'password')}
          placeholder="Password"
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
export default SignUp;
