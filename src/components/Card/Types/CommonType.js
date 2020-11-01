import React from 'react';
import {View} from 'react-native';

export default function ({children}) {
  return <View style={styles.container}>{children}</View>;
}

const styles = {
  container: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
  },
};
