import React from 'react'
import { Help } from 'grommet-icons'
export const QuestionMark = (props: { size: number }) => {
  return (<Help style={{ transform: `scale(${props.size})` }}/>)
}
