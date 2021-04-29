import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import AppHeader from '../AppHeader';
import { SearchBar } from 'react-native-elements';
import db from '../config';

export default class ReadStoryScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      stories: [],
      search: '',
      results: [],
    };
  }

  componentDidMount = async () => {
    var query = await db.collection('Stories').get();
    query.docs.map((doc) => {
      this.state.stories.push(doc.data());
    });
  };

  render() {
    return (
      <View>
        <View>
          <AppHeader />
        </View>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <SearchBar
            placeholder="Search here ..."
            onChangeText={(data) => {
              this.setState({
                search: data,
              });
            }}
            value={this.state.search}
            containerStyle={styles.container}
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.input}
          />
          <TouchableOpacity
            style={styles.searchbtn}
            onPress={async () => {
              console.log('Function activated');
              var search = this.state.search;
              var results = await db
                .collection('Stories')
                .where('title', '==', search)
                .get();
              console.log(search);
            }}>
            <Text style={styles.txt}>Search</Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={this.state.stories}
            renderItem={({ item }) => (
              <View style={{ borderBottomWidth: 2 }}>
                <Text>{'Title : ' + item.title}</Text>
                <Text>{'Author : ' + item.author}</Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            onEndReachedThreshold={0.7}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: 220,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 50,
    borderWidth: 1,
    borderBottomWidth: 1,
  },
  container: {
    width: 216,
    height: 75,
    marginTop: 5,
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 50,
  },
  input: {
    width: 100,
    textAlign: 'center',
  },
  searchbtn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    width: 90,
    height: 35,
    marginTop: 25,
    marginLeft: 20,
    borderRadius: 20,
    backgroundColor: 'gray',
    borderColor: 'gray',
  },
  txt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
});
