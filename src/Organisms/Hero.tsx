import * as React from 'react'
import { Button, Box, ResponsiveContext } from 'grommet'
import { Play, Help } from 'grommet-icons'
import styled from 'styled-components'
import { HeroButtons } from '../utils/defenitions'

export const Hero = (props:{onClickButton:Function}) => {
  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Box animation={'fadeIn'} height={'100vh'}>
          <Box margin={{ top: '30vh' }} align={'center'}><Title>Drawing Game</Title></Box>
          <Box margin={{ horizontal: '1rem' }} justify={'center'} gap={'medium'} animation={'fadeIn'}
            direction={size === 'small' ? 'column' : 'row'}>
            <Button
              icon={<Play/>}
              label="遊ぶ"
              onClick={() => {
                props.onClickButton(HeroButtons.PLAY)
              }}
            />
            <Button
              icon={<Help/>}
              label="このゲームについて"
              onClick={() => {
                props.onClickButton(HeroButtons.HOWTOUSE)
              }}
            />
          </Box>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  )
}

const Title = styled.h1`
font-family: 'Pacifico', cursive;
font-size:3rem;
height: 5rem;
`
