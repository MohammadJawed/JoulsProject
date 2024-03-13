import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import ProfilePicture from './ProfilePicture';
import profilePic from './assets/sample.jpeg'
import MyForm from './form';
import BackNavigation from './backNavigation';
// import { Ionicons } from '@expo/vector-icons';

const EditPage = () => {
    const reload = () => {
        
    }
    const onPress = () => {

    }
    return (
      <View>
        <View style={styles.ellipse}>
          <ProfilePicture uri={profilePic} onEditPress={reload} />
        </View>
        <BackNavigation />
        <MyForm />
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
    ellipse: {
    backgroundColor: '#DAF0CB',
    position: 'absolute',
    width: '119.5%',
    height: 457,
    top: -180,
    left: -58,
    borderRadius:350
  }
});

export default EditPage;

/* Ellipse 12 */



