import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const BackNavigation = () => {
  const onPress = () => {};
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.backButton}>
        <Icon name='arrowleft' size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Edit Profile</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DAF0CB',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 30,
  },
  headingContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headingText: {
    color: 'black',
    fontSize: 24, 
    fontFamily: 'Poppins',
    fontWeight: '500', 
    lineHeight: 36, 
    textAlign: 'center',
    top: 20,
  },
});

export default BackNavigation;
