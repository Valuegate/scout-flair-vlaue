import { Box, Checkbox, Text, Button } from '@chakra-ui/react'
import React from 'react'
import InputValue from '../components/InputValue'

const Settings = () => {
  return (
    <Box w='full' display='flex' flexDir={['column','row']} p='1rem' justifyContent='space-between' >

        <Box w={['full','40%']}  p='1rem 2rem' mt='1rem' >
            <Text fontWeight='700'>Edit Profile</Text>
            <Box  borderRadius='8px' mt='.5rem' p='1rem' bg='#fff'>
                <InputValue placeholder='Name'  text='First Name'/>
                <InputValue placeholder='Last name'  text='Last Name'/>
                <InputValue placeholder='Nigeria'   text='Location'/>
                <InputValue placeholder='NgN'  text='Currency'/>
                <InputValue placeholder='me@gmail.com'  text='Email'/>
                <InputValue placeholder='+91 8456 3214'  text='Phone Number'/>
                <InputValue placeholder='Soutflair FC'  text='Who you represent'/>
                <InputValue placeholder='Niger'  text='Club/Country'/>
                <InputValue placeholder='Name'  text='Address'/>
            </Box>
        </Box>
        <Box w={['full','40%']}  p='1rem 2rem' mt='1rem' >
            <Text fontWeight='700'>Change Password</Text>
            <Box  borderRadius='8px' mt='.5rem' p='.5rem' bg='#fff'>
                <InputValue placeholder='********' type='password' text='Current Password'/>
                <InputValue placeholder='********' type='password'  text='New Password'/>
                <InputValue placeholder='********'  text='Confirm Password'/>
            </Box>
             <Text mt='1rem' fontWeight='700'>Change Settings</Text>
            <Box  borderRadius='8px' mt='.5rem' p='1rem ' bg='#fff'>
                <Box display='flex' justifyContent='space-between' w='full' boxShadow='3px 3px 3px #ccc' p='1rem' borderRadius='4px' >
                    <Box >
                        <Text fontWeight='700' >Match Notification</Text>
                        <Text>Get notified for upcoming matchs</Text>
                    </Box>
                    <Checkbox />
                </Box>
                <Box display='flex' mt='.5rem' justifyContent='space-between' w='full' boxShadow='3px 3px 3px #ccc' p='1rem' borderRadius='4px' >
                    <Box >
                        <Text fontWeight='700' >Promotion</Text>
                        <Text>Get notification on updates from  ScoutFlair</Text>
                    </Box>
                    <Checkbox />
                </Box>
                <Box display='flex' mt='.5rem' justifyContent='space-between' w='full' boxShadow='3px 3px 3px #ccc' p='1rem' borderRadius='4px' >
                    <Box >
                        <Text fontWeight='700' >Player Abscence</Text>
                        <Text>Get notified when a player has been absent</Text>
                    </Box>
                    <Checkbox />
                </Box>
                <Box display='flex' mt='.5rem'  justifyContent='space-between' w='full' boxShadow='3px 3px 3px #ccc' p='1rem' borderRadius='4px' >
                    <Box >
                        <Text fontWeight='700' >Email Notification</Text>
                        <Text>Get notified by mail</Text>
                    </Box>
                    <Checkbox />
                </Box>
            </Box>
            <Box w='full' display='flex' mt='1rem' justifyContent='flex-end'>
                <Button bg='#E5AA42' color='#fff' p='.75rem' cursor='pointer' _hover={{color:'#000'}} >Save</Button>
            </Box>
        </Box>

            
    </Box>
  )
}

export default Settings