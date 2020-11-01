import React from 'react';
import View from '../../components/View';
import {Text} from 'react-native';

import Card from '../../components/Card';

class Home extends React.Component {
  render() {
    return (
      <View>
          <Card>
            <Text style={{color: 'black'}}>HELLO</Text>
          </Card>
      </View>
    );
  }
}

export default Home;
