import React from 'react'
import { Box, Text, Button } from '@chakra-ui/react'
import InputValue from '../components/InputValue'

const EditProfile = () => {
  return (
    <Box>
         <Box p='1rem' borderRadius='8px' bg='white' alignItems='center' display='flex' justifyContent='space-between' >
            <Box border='1px solid #333' p='.5rem' alignItems='center' display='flex'>
                <Text>Profile &nbsp;</Text>
                <Text display='inline-block' fontWeight='700' borderLeft='1px solid #333'>&nbsp;Edit Profile</Text>
            </Box>
        </Box>    
        <Box w='full' display='flex' flexDir={['column','row']} p='1rem' justifyContent='space-between' >

            <Box w={['full','50%']}  p='1rem 2rem' mt='1rem' >
                <Text fontWeight='700'>Basic Information</Text>
                <Box  borderRadius='8px' mt='.5rem' p='1rem' bg='#fff'>
                    <InputValue placeholder='Name'  text='Full Name:'/>
                    <InputValue placeholder='Last name'  text='Date of Birth:' type='date'/>
                    <InputValue placeholder='Nigeria'   text='Place if Birth:'/>
                    <InputValue placeholder='NgN'  text='Nationality:'/>
                    <InputValue placeholder='number'  text='Jersey Number:'/>
                    <InputValue placeholder='number'  text='Current Team:'/>
                    <InputValue placeholder='number'  text='Position:'/>
                </Box>
                <Text mt='1rem' fontWeight='700'>Contact Information</Text>
                <Box  borderRadius='8px' mt='.5rem' p='1rem' bg='#fff'>
                    <InputValue placeholder='Enter your address here'  text='Address:'/>
                    <InputValue placeholder='090 35 95 6558'  text='Phone Number:' />
                    <InputValue placeholder='Enter your email address'   text='Email Address:'/>
                </Box>
                <Text mt='1rem' fontWeight='700'>Player's Preferences</Text>
                <Box  borderRadius='8px' mt='.5rem' p='1rem' bg='#fff'>
                    <InputValue placeholder='NIN'  text='National Identity Card Number (NIN):'/>
                </Box>
            </Box>
            <Box w={['full','50%']}  p='1rem 2rem' mt='1rem' >
                <Text fontWeight='700'>Profile Photo</Text>
                <Box  borderRadius='8px' mt='.5rem' p='.5rem' bg='#fff'>
                    <InputValue placeholder='********' type='file' text='Add Image'/>
                </Box>
                <Text mt='1rem' fontWeight='700'>Physical Attributes</Text>
                <Box  borderRadius='8px' mt='.5rem' p='1rem' bg='#fff'>
                    <InputValue placeholder='Enter height in meters'  text='Height (cm):'/>
                    <InputValue placeholder='Enter weight in kilograms'  text='Weight (Kg):' />
                    <InputValue placeholder='Dominant Foot'   text='Dominant Foot (Right, Left, or Both):'/>
                </Box>
                <Text mt='1rem' fontWeight='700'>Medical Information</Text>
                <Box  borderRadius='8px' mt='.5rem' p='1rem' bg='#fff'>
                    <InputValue placeholder='Fit & healthy'  text='Current Health Status:'/>
                    <InputValue placeholder='None'  text='Existing Injuries or Medical Conditions:' />
                    <InputValue placeholder='None'   text='Allergies:'/>
                </Box>
                <Box w='full' display='flex' mt='1rem' justifyContent='flex-end'>
                    <Button bg='#E5AA42' color='#fff' w='30%' p='.75rem' cursor='pointer' _hover={{color:'#000'}} >Save</Button>
                </Box>
            </Box>

                
        </Box>
    </Box>
  )
}

export default EditProfile