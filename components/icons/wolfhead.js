import Image from 'next/image'
import { useColorModeValue } from '@chakra-ui/react'

const WolfHeadIcon = () => {
  return (
    <Image src={
      `/images/wolf${useColorModeValue('', '-dark')}.png`
    } width={20} height={20} alt="logo" />
  )
}

export default WolfHeadIcon
