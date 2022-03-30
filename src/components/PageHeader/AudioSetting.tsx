import React from 'react'
import { Box, Flex, Text, PancakeToggle, useMatchBreakpoints } from '@pancakeswap-libs/uikit'
import { useAudioModeManager } from 'state/user/hooks'

type AudioSettingModalProps = {
  translateString: (translationId: number, fallback: string) => string
}

const AudioSetting = ({ translateString }: AudioSettingModalProps) => {
  const { isSm, isXs } = useMatchBreakpoints()
  const [audioPlay, toggleSetAudioMode] = useAudioModeManager()

  return (
   <div>
     .
   </div>
  )
}

export default AudioSetting
