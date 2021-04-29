import * as React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import AppHeader from '../AppHeader';
import db from '../config';

export default class WriteStoryScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      author: '',
      story: '',
    };
  }

  render() {
    return (
      <View>
        <View>
          <AppHeader />
        </View>
        <View style={{ alignItems: 'center' }}>
          <TextInput
            placeholder="Story Title"
            style={styles.input1}
            multiline={true}
            onChangeText={(data) => {
              this.setState({
                title: data,
              });
            }}
            value={this.state.title}
          />
          <TextInput
            placeholder="Author"
            style={styles.input1}
            multiline={true}
            onChangeText={(data) => {
              this.setState({
                author: data,
              });
            }}
            value={this.state.author}
          />
          <TextInput
            placeholder="Story"
            style={styles.input2}
            multiline={true}
            onChangeText={(data) => {
              this.setState({
                story: data,
              });
            }}
            value={this.state.story}
          />
        </View>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              var title = this.state.title;
              var author = this.state.author;
              var story = this.state.story;
              if (title !== '' && author !== '' && story !== '') {
                db.collection('Stories').add({
                  title: title,
                  author: author,
                  story: story,
                });
                this.setState({
                  title: '',
                  author: '',
                  story: '',
                });
              } else {
                alert('Please check of you had filled all the input fields.');
              }
            }}>
            <Text style={{ fontSize: 25, color: 'white', fontWeight: 'bold' }}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input1: {
    width: 300,
    height: 50,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 20,
  },

  input2: {
    width: 300,
    height: 150,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 30,
  },

  btn: {
    borderWidth: 1,
    width: 200,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 30,
    backgroundColor: 'blue',
  },
});
