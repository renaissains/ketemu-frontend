//import liraries
import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, AsyncStorage } from 'react-native';

import { connect } from 'react-redux'

import { signUp } from '../actions/userAction'

import { NavigationActions } from 'react-navigation'

// create a component
class Register extends React.Component {
  static navigationOptions = {
    title: 'Register'
  }
  constructor() {
    super()
    this.state = {
      firstname: '',
      lastname: '',
      username: '',
      password: '',
      email: ''
    }
  }

  _doSignUp() {
    console.log('firstname: ', this.state.firstname)
    console.log('lastname: ', this.state.lastname)
    console.log('username: ', this.state.username)
    console.log('password: ', this.state.password)
    console.log('email: ', this.state.email)

    if (this.state.firstname.length === 0 && this.state.lastname.length === 0 && this.state.username.length === 0 && this.state.password.length && this.state.email.length) {
      alert('Please input all field!')
    } else {
      let dataRegister = {
        name: this.state.firstname+' '+this.state.lastname,
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
      }

      this.props.signUpData(dataRegister)

      // const goLoginPage = NavigationActions.reset({
      //   index: 0,
      //   actions: [
      //     NavigationActions.navigate({ routeName: 'LoginRegister'})
      //   ]
      // })

      this.props.navigation.navigate('LoginRegister')
    }
  }

    render() {
      // console.log('Navigasi: ', this.props)
        return (
            <View style={styles.container}>
                <Text>Register</Text>
                <View>
                  <TextInput
                    onChangeText={(text) => this.setState({ firstname: text })}
                    value={ this.state.firstname }
                    style={{ width: 300 }}
                    placeholder='input your first name'
                  />
                  <TextInput
                    onChangeText={(text) => this.setState({ lastname: text })}
                    value={ this.state.lastname }
                    style={{ width: 300 }}
                    placeholder='input your last name'
                  />
                  <TextInput
                    onChangeText={(text) => this.setState({ email: text })}
                    value={ this.state.email }
                    style={{ width: 300 }}
                    placeholder='input your email'
                  />
                  <TextInput
                    onChangeText={(text) => this.setState({ username: text })}
                    value={ this.state.username }
                    style={{ width: 300 }}
                    placeholder='input your username'
                  />
                  <TextInput
                    onChangeText={(text) => this.setState({ password: text })}
                    value={ this.state.password }
                    style={{ width: 300 }}
                    secureTextEntry={true}
                    placeholder='input your password'
                  />
              </View>
              <View style={{ marginBottom: 50}}>
                <Button
                  onPress={() => this._doSignUp() }
                  title="Register"
                  color="#841584"
                  accessibilityLabel="Register"
                />
              </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

const mapDispatchToProps = dispatch => {
    return {
        signUpData: (data) => {
            dispatch(signUp(data))
        }
    }
}

//make this component available to the app
export default connect(null, mapDispatchToProps)(Register);