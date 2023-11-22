import { Box, FormControl, FormLabel, Textarea, Text, Button, Image, Input } from '@chakra-ui/react'
import React from 'react'
import contact from '../assets/contact.png'
import pic from '../assets/anyrgb 2.png'
import pic2 from '../assets/Ellipse 75.png'
import Cta from '../componets/Cta'
import Footer from '../componets/Footer'
import bg from '../assets/bg.jpg'

const Contact = () => {
  return (
     <Box w='full'h='100%' style={{ backgroundImage: `url(${bg})`,backgroundRepeat:'' }}>
        <Box w='full'h={['100%','100%','100vh']} style={{ backgroundImage: `url(${bg})`,backgroundRepeat:'' }} display='flex' p='2rem' alignItems='center' justifyContent='space-betweeen' flexDirection={['column-reverse','row']}>
            <Box w={['full','50%']} p={['0rem','2rem']}>
                <Text fontSize={['2.3rem','4rem']} fontWeight='700' color='#E5AA42' >Write us today</Text>
                <Button _hover={{
                    color:'#E5AA42',
                    background:'#232B35',
                    shadow:'-2px 8px 0px #ddd'
                }} 
                color='#232B35'
                border='1px solid rgba(0,0,0,.15)'
                mt='1rem'
                shadow='-2px 8px 0px #ddd'
                bg='#E5AA42'
                p='16px, 48px, 16px, 48px'
                borderRadius='48px'>Start Free Trial</Button>
            </Box>
            <Box w={['full','50%']} mt={['1.5rem',0]}   alignItems='center' justifyContent='center'flexDirection='column' >
                <Image src={contact} />
            </Box>
        </Box>
         <Box w='full'h={['100%','100%','100vh']} style={{ backgroundImage: `url(${bg})`,backgroundRepeat:'' }} display='flex' p='2rem' alignItems='center' justifyContent='space-betweeen' flexDirection={['column','row']}>
            
            <Box w={['full','50%']}  position='relative' alignItems='center' justifyContent='center' display={['none','flex']} flexDirection='column' >
                <Image src={pic}zIndex='4' position='absolute'  />
                <Image src={pic2} position='absolute' transform='translate(15%,25%)'zIndex='2' />
            </Box>
            <Box w={['full','50%']} p={['0rem','2rem']}>
                <Text fontSize={['2rem','36px']} fontWeight='700' color='#E5AA42' >Write us a message</Text>
               <Box>
                <FormControl mt='1rem'>
                    <FormLabel color='#E5AA42'>Name</FormLabel>
                    <Input type='text' color='#000' bg='#fff' borderRadius='25px' />
                </FormControl>
                <FormControl mt='1rem'>
                    <FormLabel color='#E5AA42'>Email</FormLabel>
                    <Input type='mail' color='#000' bg='#fff' borderRadius='25px' />
                </FormControl>
                <FormControl mt='1rem'>
                    <FormLabel color='#E5AA42'>Phone Number</FormLabel>
                    <Input type='text' color='#000' bg='#fff' borderRadius='25px' />
                </FormControl>
                <FormControl mt='1rem'>
                    <FormLabel color='#E5AA42'>Message</FormLabel>
                    <Textarea type='text' cols='8' color='#000' bg='#fff' borderRadius='25px' />
                </FormControl>
                <Button _hover={{
                    color:'#E5AA42',
                    background:'#232B35',
                    shadow:'-2px 8px 0px #232b30'
                }} 
                color='#232B35'
                border='1px solid rgba(0,0,0,.15)'
                mt='1rem'
                shadow='-2px 8px 0px #ddd'
                bg='#E5AA42'
                p='16px, 48px, 16px, 48px'
                borderRadius='48px'>Send Message</Button>
               </Box>
            </Box>
        </Box>
        <Cta/>
        <Footer/> 
    </Box>
  )
}

export default Contact