// @flow

import React, { Component } from 'react'
import { Image, TouchableHighlight, View } from 'react-native'
import slowlog from 'react-native-slowlog'

import T from '../../modules/UI/components/FormattedText/index'
import styles, { styles as styleRaw } from '../../styles/scenes/SettingsStyle'

type Props = {
  logo: string,
  leftText: string,
  rightText: string,
  onPress(): void
}
class RowWithButton extends Component<Props> {
  constructor (props: Props) {
    super(props)
    slowlog(this, /.*/, global.slowlogOptions)
  }

  onPress = () => {
    this.props.onPress()
  }

  render () {
    return (
      <TouchableHighlight style={[styles.settingsRowContainer]} underlayColor={styleRaw.underlay.color} disabled={false} onPress={() => this.onPress()}>
        <View style={[styles.settingsRowTextRow]}>
          <View style={[styles.settingsRowLeftContainer]}>
            <Image resizeMode={'contain'} style={styles.settingsRowLeftLogo} source={this.props.logo} />
            <T style={[styles.settingsRowLeftTextWithoutWidth]}>{this.props.leftText}</T>
          </View>
          <View style={styles.settingsRowRightContainer}>
            <T style={[styles.routeRowRightText]}>{this.props.rightText}</T>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

export { RowWithButton }
