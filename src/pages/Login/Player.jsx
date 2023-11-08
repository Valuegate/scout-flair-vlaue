import React from 'react'
import {Box,  Image, Input, Select, Text} from '@chakra-ui/react'
import scoutflair from '../../assets/scoutflair.png';
import ball from '../../assets/football.png';
import { Link } from 'react-router-dom';

const Player = () => {
  return (
    <Box w='full'h='100%' bg='#1A1818' position='relative' display='flex' p='2rem' alignItems='center' justifyContent='center' flexDirection={['column','column']}>
       <Image src={ball} alt='' position='absolute' zIndex='2' display={['none','block']}  mt='2rem' transform='translate(-300%,-150%)' />
        <Box w={['full','50%']} h={['100%','100%','100%']} bg='#fff' zIndex='5' display='flex' p='2rem' alignItems='center' justifyContent='space-betweeen' flexDirection={['column','column']}>
            <Image src={scoutflair} alt='' />
            <Box p='2rem' w={['100%','75%']} m='auto' alignItems='center' justifyContent='center' flexDirection={['column','column']} display='flex'  >
                <Input placeholder='Full Name' color='#0C1017' border='1px solid #B0B0B0' bg='#FDFDFD'/>
                <Input placeholder='Date of Birth' mt='5' type='date' color='#0C1017' border='1px solid #B0B0B0' bg='#FDFDFD' />                    
                <Input placeholder='Coach license number' mt='5' color='#0C1017' border='1px solid #B0B0B0' bg='#FDFDFD'  />
                <Select placholder='Position' mt='5' color='#0C1017' border='1px solid #B0B0B0' bg='#FDFDFD' >
                    <option>Position </option>
                </Select>
                <Input placeholder='Preferred Foot' mt='5' color='#0C1017' border='1px solid #B0B0B0' bg='#FDFDFD' />
                <Input placeholder='Current Team' mt='5' color='#0C1017' border='1px solid #B0B0B0' bg='#FDFDFD' />
                <Input placeholder='Email' mt='5' color='#0C1017' border='1px solid #B0B0B0' bg='#FDFDFD'/>
                <Input placeholder='Password' mt='5' color='#0C1017' border='1px solid #B0B0B0' bg='#FDFDFD' />
                <Input placeholder='Confirm Password' mt='5' color='#0C1017' border='1px solid #B0B0B0' bg='#FDFDFD' />
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
            value='Sign Up'
            />
              <Text fontSize='.85rem' fontWeight='400' textAlign='center' mt='2rem' >
                By creating an account, you are agreeing to our <Link style={{color:'#6db7c0'}} to=''>
Terms of Service and Privacy Policy</Link>.
            </Text>
            <Text fontSize='.85rem' fontWeight='400' textAlign='center' mt='1rem' >
                Already have an account? <br/> <Link style={{color:'#6db7c0'}} to='/login'>
Sign In</Link>.
            </Text>
            </Box>
        </Box>
    </Box>
  )
}

export default Player