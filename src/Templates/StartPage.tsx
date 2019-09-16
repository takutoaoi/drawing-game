import React from 'react'
import { Hero } from '../Organisms/Hero'
import { QuestionMarkBackGround } from '../Molecules/QuestionMarkBackGround'

export const StartPageTemplate = (props:{onClickButton:Function}) => {
  return (
    <React.Fragment>
      <Hero onClickButton={props.onClickButton}/>
      <QuestionMarkBackGround/>
    </React.Fragment>
  )
}
