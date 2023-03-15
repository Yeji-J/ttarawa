import { View, Text, SafeAreaView } from 'react-native'
import { useState, useEffect } from 'react'

import { color } from '@styles/GlobalStyles'
import { map } from '@styles/main'

import Input from '@components/common/Input'
import Button from '@components/common/Button'
import IconButton from '@components/common/IconButton'

import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function Map() {
  // 초기값을 지정해주면 알아서 type 유추
  const [depart, setDepart] = useState('')
  const [destin, setDestin] = useState('')
  const [pressed, setPressed] = useState<Number>()

  // 선택한 카테고리 정보 지도에 표시
  const showInfo = (categoryId: Number) => {
    setPressed(categoryId)
  }

  return (
    <SafeAreaView style={map.container}>
      <View style={map.header}>
        <View style={map.inputs}>
          <Input label="출발 |" value={depart} setValue={setDepart} />
          <Input label="도착 |" value={destin} setValue={setDestin} />
        </View>
        <IconButton
          style="square"
          text="경로확인"
          icon1={
            <MaterialCommunityIcons
              name="map-outline"
              size={27}
              color={color.white}
            />
          }
          nonShadow={false}
          bg={depart && destin ? 'blue' : undefined}
        />
      </View>
      <View style={map.buttons}>
        <Button
          text="대여소"
          style={pressed === 0 ? 'tabSelected' : 'tabBtn'}
          press={() => showInfo(0)}
        />
        <Button
          text="음식점"
          style={pressed === 1 ? 'tabSelected' : 'tabBtn'}
          press={() => showInfo(1)}
        />
        <Button
          text="카페"
          style={pressed === 2 ? 'tabSelected' : 'tabBtn'}
          press={() => showInfo(2)}
        />
        <Button
          text="관광지"
          style={pressed === 3 ? 'tabSelected' : 'tabBtn'}
          press={() => showInfo(3)}
        />
        <Button
          text="화장실"
          style={pressed === 4 ? 'tabSelected' : 'tabBtn'}
          press={() => showInfo(4)}
        />
      </View>
    </SafeAreaView>
  )
}
