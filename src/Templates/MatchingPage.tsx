import React from 'react'
import { MatchingStatus } from '../Organisms/MatchingStatus'
import { MatchingServerStatus } from '../utils/defenitions'

export const MatchingPageTemplate = () => {
  return (
    <React.Fragment>
      <MatchingStatus status={MatchingServerStatus.Error}/>
    </React.Fragment>
  )
}
