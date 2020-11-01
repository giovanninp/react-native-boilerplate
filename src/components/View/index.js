import React from 'react';
import {View as NativeView} from 'react-native';

class View extends React.Component {
  render() {
    return <NativeView style={styles}>{this.props.children}</NativeView>;
  }
}

const styles = {
  height: '100%',
  width: '100%',
  backgroundColor: '#FFF',
};

export default View;
