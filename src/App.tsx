import React, { useState } from 'react'
import { StartPage } from './Pages/StartPage'
import { MatchingPage } from './Pages/MatchingPage'
import { Pages } from './utils/defenitions'

export const App = () => {
  const [currentPage, setCurrentPage] = useState(Pages.Start)

  const render = () => {
    if (currentPage === Pages.Start) {
      return (<React.Fragment><StartPage setCurrentPage={setCurrentPage}/></React.Fragment>)
    } else if (currentPage === Pages.Matching) {
      return (<MatchingPage />)
    } else {
      return (<div>error</div>)
    }
  }
  return render()
}
