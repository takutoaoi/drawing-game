import React from 'react'
import { Hero } from '../Organisms/Hero'
import { QuestionMarkBackGround } from '../Molecules/QuestionMarkBackGround'
import { HeroButtons } from '../utils/defenitions'

export const StartPageTemplate = (props:{onClickButton:Function}) => {
  return (
    <React.Fragment>
      <Hero onClickButton={props.onClickButton}/>
      <QuestionMarkBackGround/>
    </React.Fragment>
  )
}
