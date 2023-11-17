import React from 'react'
import {Box, Image, Text, } from '@chakra-ui/react'
import soon from '../assets/oops.svg'
import ball from '../assets/football.png'
import { Link } from 'react-router-dom'

const ErrorPage = () => {

  return (
    <Box w='full'h={['100%','100vh']} bg='var(--Blue-Gradient, linear-gradient(270deg, #1B2B4C -0.67%, #345670 30.6%, #558F9F 63.72%, #E5AA42 100%))' position='relative' display='flex' p='2rem' alignItems='center' justifyContent='center' flexDirection={['column','column']}>
       <Image src={ball} alt='' position='absolute' zIndex='2' display={['none','block']}  mt='2rem' transform='translate(-300%,-150%)' />
        <Box w={['full','80%']} h={['100%','100%','100%']} bg='#fff' zIndex='5' display='flex' p='2rem' alignItems='center' justifyContent='space-betweeen' flexDirection={['column','column']}>
            
            <Box p='2rem' w={['100%','100%']} m='auto' alignItems='center' justifyContent='space-between' flexDirection={['column-reverse','row']} display='flex'  >
                <Box w={['full','50%']}>
                    <Text fontSize={['2.3rem','4rem']} fontWeight='700' >Oops!</Text>
                    <Text fontSize='1.3rem' letterSpacing='.25rem' mt='1.5rem' fontWeight='700' >We can’t seem to find the <br/> page you’re looking for. </Text>
                    <Box flexDirection={['column','column']} mt='1.5rem' display='flex'>
                        <Text fontSize='1.3rem'  color='#494c51' mt='1rem' fontWeight='700' >Error code: 404 </Text>
                        <Text fontSize='1.3rem'  mb='1rem' color='#494c51'  fontWeight='700' >Here are some helpful links instead:</Text>

                        <Text color='#1B2B4C' fontSize='1.1rem' fontWeight='700' ><Link to='/'>Home</Link></Text>
                        <Text color='#1B2B4C' fontSize='1.1rem' fontWeight='700' ><Link to='/about'>About Us</Link></Text>
                        <Text color='#1B2B4C' fontSize='1.1rem' fontWeight='700' ><Link to='/services'>Services</Link></Text>
                        <Text color='#1B2B4C' fontSize='1.1rem' fontWeight='700' ><Link to='/contacts'>Contact Us</Link></Text>
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

export default ErrorPage