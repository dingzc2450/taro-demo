import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import Taro from '@tarojs/taro';

export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    console.log(`30px===>${Taro.pxTransform(30)}`);
    return (
      <View >
        <Text className='index'>通过样式转换得到的30px文字</Text>
        <Text className='index' style={{ fontSize: Taro.pxTransform(30) }}>通过Taro.pxTransform转换得到的30px文字</Text>

      </View>
    )
  }
}
