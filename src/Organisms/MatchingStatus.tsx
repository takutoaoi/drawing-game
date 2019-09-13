import * as React from 'react'
import { Spinner } from '../Atoms/Spinner'
import { Box, Text } from 'grommet'
import { MachingServerStatus } from '../utils/defenitions'

const statusText = (status:MachingServerStatus) => {
  switch (status) {
    case MachingServerStatus.Connecting:
      return <Text color={'dark-3'}>サーバーを待機中</Text>
    case MachingServerStatus.Sccsess:
      return <Text color={'dark-3'}>接続しました</Text>
    case MachingServerStatus.Waiting:
      return <Text color={'dark-3'}>接続中</Text>
    case MachingServerStatus.Error:
      return <Text color={'status-error'}>接続エラー</Text>
  }
}

export const MatchingStatus = () => {
  return (
    <Box justify={'center'} height={'100vh'} align={'center'}>
      <Spinner/>
      <Box height={'1rem'}/>
      {statusText(MachingServerStatus.Error)}
    </Box>
  )
}
