import React from 'react'
import {Box, Image,Text } from '@chakra-ui/react'
import check from '../assets/check.png'
import coach from '../assets/coach.png'
import player from '../assets/player.png'
import scout from '../assets/scout.png' 
import ball from '../assets/football.png'
import { Link } from 'react-router-dom'

const SelectRole = () => {
  return (
    <Box w='full' h={['100%','100vh']} bg='#1A1818' position='relative' display='flex' p='2rem' alignItems='center' justifyContent='center' flexDirection={['column','column']}>
       <Image src={ball} alt='' position='absolute' zIndex='2' display={['none','block']}  mt='2rem' transform='translate(-300%,-150%)' />
        <Box w='75%'h={['100%','75%','75vh']} bg='#fff' zIndex='5' display='flex' p='2rem' alignItems='center' justifyContent='space-betweeen' flexDirection={['column','column']}>
            <Text color='#0C1017' fontSize={['1.2rem','24px']} fontWeight='700' mb={['2rem','']} textAlign='center' >Choose Your Role</Text>
            <Box w={['full','75%']} m='auto' h='100%' alignItems='center' justifyContent='space-between' display='flex' flexDirection={['column','row']}>
                <Link to='/coach-login' style={{width:'170px'}}>
                <Box display='flex'  flexDirection='column' role="group" alignItems='center' justifyContent='center' _hover={{cursor:'pointer',}} >
                    <Image src={coach} alt=''  />
                    <Image src={check} mt='-2rem' transform='translateX(150%)' transition='ease-in-out .5s' display='none'  _groupHover={{display:'block',}} _select={{display:'block'}} />
                    <Text color='#0C1017' fontSize='18px' mt='1rem' fontWeight='700' >Coach</Text>
                    <Text color='#0C1017'  fontSize='14px' w='' fontWeight='400' textAlign='center' >Guides and mentors athletes to enhance their performance.</Text>
                </Box>
                </Link>
                <Link to='/player-login' style={{width:'170px'}}>
                <Box display='flex' flexDirection='column' role="group" alignItems='center' justifyContent='center' _hover={{cursor:'pointer',}} >
                    <Image src={player} alt=''  />
                    <Image src={check} mt='-2rem' transform='translateX(150%)' transition='ease-in-out .5s' display='none'  _groupHover={{display:'block',}} _select={{display:'block'}} />
                    <Text color='#0C1017' fontSize='18px' mt='1rem' fontWeight='700' >Player</Text>
                    <Text color='#0C1017' fontSize='14px' fontWeight='400' textAlign='center' >Actively participate in sports, utilizing skills and physical abilities.</Text>
                </Box>
                </Link>
                <Link to='/scout-login' style={{width:'170px'}}>
                <Box display='flex' flexDirection='column' role="group" alignItems='center' justifyContent='center' _hover={{cursor:'pointer',}} >
                    <Image src={scout} alt=''  />
                    <Image src={check} mt='-2rem' transform='translateX(150%)' transition='ease-in-out .5s' display='none'  _groupHover={{display:'block',}} _select={{display:'block'}} />
                    <Text color='#0C1017' fontSize='18px' mt='1rem' fontWeight='700' >Scout</Text>
                    <Text color='#0C1017' fontSize='14px' fontWeight='400' textAlign='center' >Provide recommendations for recruitment and team development.</Text>
                </Box>
                </Link>
            </Box>
        </Box>
    </Box>
  )
}

export default SelectRole