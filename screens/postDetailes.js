import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Post = () => {
  return (
    <View style={styles.container}>
      <Text>This is Post page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Post;
