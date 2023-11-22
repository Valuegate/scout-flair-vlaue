import { Box,Button,Input,Text,Image } from '@chakra-ui/react'
import React from 'react'
import fb from '../assets/facebook.png'
import tweet from '../assets/twitter.png'
import insta from '../assets/insta.png'
import web from '../assets/web.png'

const Footer = () => {
  return (
    <Box w='full' h='100%' alignItems='center' mt={['','2rem']} justifyContent='center' flexDirection='column' display='flex'>
        <Box w='85%' h='100%' borderTop='1px solid #E5AA42'  paddingTop='1.5rem' paddingBottom='1.5rem' gap='3' display='flex' flexWrap={['wrap','wrap','wrap','nowrap']} justifyContent='space-between' borderBottom='1px solid #E5AA42'>
            <Box w={['full','356px']}>
                <Text fontSize='32px' fontWeight='400' color='#E5AA42' fontFamily='Knewave' >ScoutFlair</Text>               
                <Text fontSize='16px' fontWeight='400' color='#E5AA42' fontFamily='Inter' >At ScoutFlair, we're passionate about football analysis. Our mission is to provide football enthusiasts, coaches, and analysts with the tools they need to unlock the game's hidden insights. Join us in redefining football analysis. Explore. Analyze. Succeed.</Text>
            </Box>
            <Box>
                <Text fontSize={['1rem','24px']} fontWeight='400' color='#E5AA42' >About</Text>
                <Text fontSize={['1rem','24px']} fontWeight='400' color='#E5AA42' >Services</Text>
                <Text fontSize={['1rem','24px']} fontWeight='400' color='#E5AA42' >Resources</Text>
                <Text fontSize={['1rem','24px']} fontWeight='400' color='#E5AA42' >Contact Us</Text>
            </Box>
             <Box>
                <Text fontSize={['1rem','24px']} fontWeight='400' color='#E5AA42' >About</Text>
                <Text fontSize={['1rem','24px']} fontWeight='400' color='#E5AA42' >Services</Text>
                <Text fontSize={['1rem','24px']} fontWeight='400' color='#E5AA42' >Resources</Text>
                <Text fontSize={['1rem','24px']} fontWeight='400' color='#E5AA42' >Contact Us</Text>
            </Box>
             <Box>
                <Text fontSize={['1rem','24px']} fontWeight='400' color='#E5AA42' >About</Text>
                <Text fontSize={['1rem','24px']} fontWeight='400' color='#E5AA42' >Services</Text>
                <Text fontSize={['1rem','24px']} fontWeight='400' color='#E5AA42' >Resources</Text>
                <Text fontSize={['1rem','24px']} fontWeight='400' color='#E5AA42' >Contact Us</Text>
            </Box>
            <Box w={['full','253px']}>
                <Text fontSize='16px' fontWeight='700' color='#E5AA42' >Sign up for our newsletters</Text>
                <Input bg='transparent' color='#fff' border='1px solid #E5AA42' mt='1rem' borderRadius='8px' />
                <Button bg='#E5AA42' color='#000' borderRadius='8px' w='full' mt='1rem' >Sign Up</Button>
            </Box>
        </Box>
        <Box w='full' p='1.5rem' display='flex' alignItems='center' flexDirection='column' justifyContent='center' >
            <Box w={['full','20%']} display='flex' justifyContent='space-between' >
                <Image src={fb} alt=''/>
                <Image src={tweet} alt=''/>
                <Image src={insta} alt=''/>
                <Image src={web} alt=''/>
            </Box>
            <Text fontSize='17px' mt='1rem' fontWeight='400' color='#E5AA42' >© scoutflair 2023</Text>
        </Box>
    </Box>
  )
}

export default Footer