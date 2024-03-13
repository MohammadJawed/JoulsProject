import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet, Text} from 'react-native';

const ProfilePicture = ({uri, onEditPress}) => {
  return (
    <View style={styles.container}>
      <Image source={uri} style={styles.image} />
      <TouchableOpacity onPress={onEditPress}>
        <Text style={styles.editButtonText}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 75,
    top:320,
    position:'absolute'
  },
  editButton: {
    marginTop: 10,
    backgroundColor: 'blue',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  editButtonText: {
    color: 'white',
  },
});

export default ProfilePicture;
