'use strict';

import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  View
} from 'react-native';
import { styles } from './styles';
var { connect } = require('react-redux');
import { FButton } from 'FButton';
import { TopNavBar } from 'TopNavBar';
export class ProjectTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onNavLeftAction = () => {
    if (!this.props.navigator) {
      return;
    }
    this.props.navigator.pop();
  }

  onViewTask = () => {
    if (!this.props.navigator) {
      return;
    }
    this.props.navigator.push({path: 'viewtask'});
  }

  onEditTask = () => {
    if (!this.props.navigator) {
      return;
    }
    this.props.navigator.push({path: 'addtask'});
  }


  render() {
    return (
      <View style={styles.container}>
        <TopNavBar
          leftAction={this.onNavLeftAction}
          leftLabel='Back'
          rightLabel=''
          rightIcon={false}
          centerLabel={'Project Tasks'}
          color={'white'}
        /> 
        <View style={styles.footer}>
          <FButton 
            onPress={this.onViewTask}
            caption={'View Task'}
          />
          <FButton 
            onPress={this.onEditTask}
            caption={'Edit Task'}
          />
        </View>
      </View>
    );
  }

  
}