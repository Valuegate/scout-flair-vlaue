import { Box, Switch, Text, Button } from '@chakra-ui/react'
import React from 'react'
import InputValue from '../components/InputValue'
import { DeleteIcon} from '@chakra-ui/icons'

const Settings = () => {
    const userType = JSON.parse(localStorage.getItem('userType'));
  return (
    <Box>
        <Box p='1rem' borderRadius='8px' bg='white' alignItems='center' display='flex' justifyContent='space-between' >
            <Box border='1px solid #333' p='.5rem' alignItems='center' display='flex'>
                <Text>Profile &nbsp;</Text>
                <Text display='inline-block' fontWeight='700' borderLeft='1px solid #333'>&nbsp;Settings</Text>
            </Box>
            
        </Box>
    
    <Box w='full' display='flex' flexDir={['column','row']}  justifyContent='space-between' >        
        
        <Box w={['full','50%']}  p='1rem' mt='1rem' >
            <Text fontWeight='700'>Change Password</Text>
            <Box  borderRadius='8px' mt='.5rem' p='.5rem' bg='#fff'>
                <InputValue placeholder='********' type='password' text='Current Password'/>
                <InputValue placeholder='********' type='password'  text='New Password'/>
                <InputValue placeholder='********'  text='Confirm Password'/>
            </Box>

           
        </Box>
       
        <Box w={['full','50%']}  p='1rem' mt='1rem' >
              {userType!=='Admin' &&
                <>
                    <Text  fontWeight='700'>Change Settings</Text>
                    <Box  borderRadius='8px' mt='.5rem' p='1rem ' bg='#fff'>
                        <Box display='flex' justifyContent='space-between' w='full' boxShadow='3px 3px 3px #ccc' p='1rem' borderRadius='4px' >
                            <Box >
                                <Text fontWeight='700' >Match Notification</Text>
                                <Text>Get notified for upcoming matchs</Text>
                            </Box>
                            <Switch />
                        </Box>
                        <Box display='flex' mt='.5rem' justifyContent='space-between' w='full' boxShadow='3px 3px 3px #ccc' p='1rem' borderRadius='4px' >
                            <Box >
                                <Text fontWeight='700' >Promotion</Text>
                                <Text>Get notification on updates from  ScoutFlair</Text>
                            </Box>
                            <Switch />
                        </Box>
                        <Box display='flex' mt='.5rem' justifyContent='space-between' w='full' boxShadow='3px 3px 3px #ccc' p='1rem' borderRadius='4px' >
                            <Box >
                                <Text fontWeight='700' >Player Abscence</Text>
                                <Text>Get notified when a player has been absent</Text>
                            </Box>
                            <Switch />
                        </Box>
                        <Box display='flex' mt='.5rem'  justifyContent='space-between' w='full' boxShadow='3px 3px 3px #ccc' p='1rem' borderRadius='4px' >
                            <Box >
                                <Text fontWeight='700' >Email Notification</Text>
                                <Text>Get notified by mail</Text>
                            </Box>
                            <Switch />
                        </Box>
                    </Box>
                </>
                }
            <Box w='full' display='flex' mt='1rem' justifyContent='flex-end'>
                <Button bg='#E5AA42' color='#fff' p='.75rem' w='30%' cursor='pointer' _hover={{color:'#000'}} >Save</Button>
            </Box>
            {userType!=='Admin' &&
            <Box border='1px solid #ff1818' w='189px' display='flex' bg='none' color='#ff1818' justifyContent='space-evenly' alignItems='center' p='.25rem' borderRadius='.5rem'>
                <DeleteIcon/>
                <Text fontWeight='700'>Delete Account</Text>
            </Box>
}
        </Box>


            
    </Box>
    </Box>
  )
}

export default Settings