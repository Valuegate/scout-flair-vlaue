import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react'
import img from '../assets/logincheck.png'

const SucessfulSignup = () => {
  return (
    <Box w='full'h='100%' bg='#1A1818' position='relative' zIndex='20000' display='flex' p='2rem' alignItems='center' justifyContent='center' flexDirection={['column','column']}>
        <Box w={['full','50%']} h={['100%','100%','100%']} bg='#fff' zIndex='5' display='flex' p='2rem' alignItems='center' justifyContent='space-betweeen' flexDirection={['column','column']}>
            <Image src={img} alt='' />
            <Box p='2rem' w='75%' m='auto' alignItems='center' justifyContent='center' flexDirection={['column','column']} display='flex'  >
                <Text fontSize='24px' fontWeight='400' color='#0C1017' >Account created successful</Text>
                <Text fontSize='14px' fontWeight='400' color='#0C1017' >Check your email to verify your account.</Text>
            </Box>
        </Box>
    </Box>
  )
}

export default SucessfulSignup