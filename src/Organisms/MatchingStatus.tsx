import * as React from 'react'
import { Spinner } from '../Atoms/Spinner'
import { Box, Text } from 'grommet'
import { MatchingServerStatus } from '../utils/defenitions'

export const statusText: { [key in MatchingServerStatus]?: string } = {
  [MatchingServerStatus.Connecting]: 'サーバーを待機中',
  [MatchingServerStatus.Sccsess]: '接続しました',
  [MatchingServerStatus.Waiting]: '接続中',
  [MatchingServerStatus.Error]: '接続エラー'
}

const statusTextComponentBuilder = (status: MatchingServerStatus) => {
  switch (status) {
    case MatchingServerStatus.Connecting:
      return <Text className="statusText" color={'dark-3'}>{statusText[MatchingServerStatus.Connecting]}</Text>
    case MatchingServerStatus.Sccsess:
      return <Text className="statusText" color={'dark-3'}>{statusText[MatchingServerStatus.Sccsess]}</Text>
    case MatchingServerStatus.Waiting:
      return <Text className="statusText" color={'dark-3'}>{statusText[MatchingServerStatus.Waiting]}</Text>
    case MatchingServerStatus.Error:
      return <Text className="statusText" color={'status-error'}>{statusText[MatchingServerStatus.Error]}</Text>
  }
}

export const MatchingStatus = (props:{status: MatchingServerStatus}) => {
  return (
    <Box justify={'center'} height={'100vh'} align={'center'}>
      <Spinner/>
      <Box height={'1rem'}/>
      {statusTextComponentBuilder(props.status)}
    </Box>
  )
}
