import React, {Component} from 'react'
import {View} from 'react-native'

export default class PlaceHolderRow extends React.PureComponent {
  render () {
    return (
      <View style={{height: this.props.height || 30}}/>
    )
  }
}
