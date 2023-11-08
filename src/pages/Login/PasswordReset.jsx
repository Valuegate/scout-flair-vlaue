import React from 'react'
import {Box,  Checkbox,  Image, Input, Text, useToast} from '@chakra-ui/react'
import scoutflair from '../../assets/scoutflair.png';
import ball from '../../assets/football.png'
import { Link } from 'react-router-dom';
import SucessfulSignup from '../../componets/SucessfulSignup';

const PasswordReset = () => {
    const toast = useToast();
    const handleSubmit = (e)=>{
        e.preventDefault();
         toast({
      title: 'Login successful!.',
      position: 'top',
      description: 'Your details have been successfully added.',
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
        return(
            <SucessfulSignup/>
        )
    }
  return (
    <Box w='full'h='100%' bg='#1A1818' position='relative' display='flex' p='2rem' alignItems='center' justifyContent='center' flexDirection={['column','column']}>
       <Image src={ball} alt='' position='absolute' zIndex='2' display={['none','block']}  mt='2rem' transform='translate(-300%,-150%)' />
        <Box w={['full','50%']} h={['100%','100%','100%']} bg='#fff' zIndex='5' display='flex' p='2rem' alignItems='center' justifyContent='space-betweeen' flexDirection={['column','column']}>
            <Image src={scoutflair} alt='' />
            <Text fontSize='.85rem' fontWeight='400' textAlign='center' mt='1rem' >
                Enter your registered email address to recieve a password reset link
            </Text>
            <Box p='2rem' w={['100%','75%']} m='auto' alignItems='center' justifyContent='center' flexDirection={['column','column']} display='flex'  >
                
                <Input placeholder='Email' mt='5' color='#0C1017' border='1px solid #B0B0B0' bg='#FDFDFD'/>
                <Input _hover={{
                color:'#fff',
                background:'var(--Blue-Gradient, linear-gradient(270deg, #1B2B4C -0.67%, #345670 30.6%, #558F9F 63.72%, #6DB7C0 100%))',
                shadow:'-2px 8px 0px #232b30',
                cursor: 'pointer'
            }} 
            color='#fff'
            border='1px solid rgba(0,0,0,.15)'
            mt='1rem'
            //w='330px'
            fontSize='24px'
            fontWeight='700'
            textAlign='center'
            shadow='-2px 8px 0px #D4D6DB'
            bg='var(--Blue-Gradient, linear-gradient(270deg, #1B2B4C -0.67%, #345670 30.6%, #558F9F 63.72%, #6DB7C0 100%))'
            p='1.5rem, 48px, 1.5rem, 48px'
            borderRadius='48px'
            value='Continue'
            type='submit'
            onClick={handleSubmit}
            />
            
            </Box>
          
        </Box>
    </Box>
  )
}

export default PasswordReset