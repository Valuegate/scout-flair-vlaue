import React from 'react'
import {Box,  Button,  Image, Input, Text, } from '@chakra-ui/react'
import soon from '../assets/soon.svg'
import ball from '../assets/football.png'

const ComingSoon = () => {

  return (
    <Box w='full'h='100%' bg='var(--Blue-Gradient, linear-gradient(270deg, #1B2B4C -0.67%, #345670 30.6%, #558F9F 63.72%, #E5AA42 100%))' position='relative' display='flex' p='2rem' alignItems='center' justifyContent='center' flexDirection={['column','column']}>
       <Image src={ball} alt='' position='absolute' zIndex='2' display={['none','block']}  mt='2rem' transform='translate(-300%,-150%)' />
        <Box w={['full','80%']} h={['100%','100%','100%']} bg='#fff' zIndex='5' display='flex' p='2rem' alignItems='center' justifyContent='space-betweeen' flexDirection={['column','column']}>
            
            <Box p='2rem' w={['100%','100%']} m='auto' alignItems='center' justifyContent='space-between' flexDirection={['column','row']} display='flex'  >
                <Box w={['full','50%']}>
                    <Text fontSize='.95rem' fontWeight='700' >COMING SOON</Text>
                    <Text fontSize='1.3rem' letterSpacing='.7rem' mt='1rem' fontWeight='700' >GET NOTIFIED <br/> WHEN WE <br/> WILL LAUNCH! </Text>
                    <Box flexDirection={['column','row']} mt='2.5rem' display='flex'>
                        <Input type='email' placeholder='Enter your email' color='#0c1017' border='1px solid #ccc' borderRadius='.8px' />
                        <Button color='#fff' ml={['','1rem']} mt={['1rem','0']} p='16px, 48px, 16px, 48px' bg='var(--Blue-Gradient, linear-gradient(270deg, #1B2B4C -0.67%, #345670 30.6%, #558F9F 63.72%, #E5AA42 100%))'>Subscibe</Button>
                    </Box>
                </Box> 
                <Box w={['full','50%']}>
                    <Image src={soon} alt=''/>
                </Box> 
              
            </Box>
          
        </Box>
    </Box>
  )
}

export default ComingSoon