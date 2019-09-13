import React, { useCallback } from 'react'
import { StartPageTemplate } from '../Templates/StartPage'
import { HeroButtons, Pages } from '../utils/defenitions'

export const StartPage = (props: { setCurrentPage: Function }) => {
  const onClickButton = useCallback((clicked: HeroButtons) => {
    if (clicked === HeroButtons.PLAY) {
      props.setCurrentPage(Pages.Matching)
    }
  }, [props.setCurrentPage])
  return (<StartPageTemplate onClickButton={onClickButton}/>)
}
