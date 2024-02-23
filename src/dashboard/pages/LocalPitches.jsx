import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import {AddIcon } from '@chakra-ui/icons'

const LocalPitches = () => {
     const userType = JSON.parse(localStorage.getItem('userType'));
  return (
    <Box>
        <Box p='1rem' borderRadius='8px' bg='white' display='flex' justifyContent='space-between' >
            <Box border='1px solid #333' p='.5rem' alignItems='center' display='flex'>
                <Text>Dashboard &nbsp;</Text>
                <Text display='inline-block' borderLeft='1px solid #333'>&nbsp;Local Pitches</Text>
            </Box>
             {
                userType==='Admin'&&
                <Box w='35%' display='flex' justifyContent='flex-end' alignItems='center' > 
                <Box border='1px solid #333' cursor='pointer' w='full'  display='flex' justifyContent='space-evenly' alignItems='center' p='.25rem' borderRadius='.5rem'>
                    <AddIcon />
                    <Link to='/add-local-pitches'><Text >Add Local Pitches</Text></Link>
                </Box>
                &nbsp;
                <Box border='1px solid #333' o cursor='pointer' w='full'  display='flex' justifyContent='space-evenly' alignItems='center' p='.25rem' borderRadius='.5rem'>
                    <AddIcon />
                    <Text >Edit Local Pitches</Text>
                </Box>
                </Box>
            }
        </Box>
        <Box w={['full','full']} mt='1rem'  display='flex'  justifyContent='space-between' flexDir={['column','column']}>
            <Box w={['full','full']} display='flex' flexDir='column'>
                <Text>Local Pitches</Text>
                <Box p='1rem' borderRadius='8px' bg='white' display='flex' flexDir='column'>
                    <Box p='1rem' borderTopLeftRadius='8px' borderTopRightRadius='8px' fontWeight='700' color='#C99C27' bg='black' display='flex' justifyContent='space-between'>
                        <Text>Name</Text>
                        <Text>Address</Text>
                        <Text>State</Text>
                        <Text>LGA</Text>
                        <Text>Geolocation</Text>
                        <Text>Surface</Text>
                        <Text>Dimension</Text>
                    </Box>
                    <Box p='1rem' borderRadius='8px'color='#000' bg='#fff' mt='.5rem' display='flex' justifyContent='space-between'>
                         
                        <Text>National Stadium</Text>
                        <Text>Pitch address details...</Text>
                        <Text textAlign='center'>Kaduna</Text>
                        <Text textAlign='center'>Kaduna South</Text>
                        <Text textAlign='center'>Lat:34.78965, Lon:12.88754</Text>
                        <Text textAlign='center'>Turf Grass</Text>
                        <Text textAlign='center'>105m X 68m</Text>
                    </Box>
                     <Box p='1rem' borderRadius='8px'color='#000' bg='#fff' mt='.5rem' display='flex' justifyContent='space-between'>
                         
                        <Text>National Stadium</Text>
                        <Text>Pitch address details...</Text>
                        <Text textAlign='center'>Kaduna</Text>
                        <Text textAlign='center'>Kaduna South</Text>
                        <Text textAlign='center'>Lat:34.78965, Lon:12.88754</Text>
                        <Text textAlign='center'>Turf Grass</Text>
                        <Text textAlign='center'>105m X 68m</Text>
                    </Box>
                     <Box p='1rem' borderRadius='8px'color='#000' bg='#fff' mt='.5rem' display='flex' justifyContent='space-between'>
                         
                        <Text>National Stadium</Text>
                        <Text>Pitch address details...</Text>
                        <Text textAlign='center'>Kaduna</Text>
                        <Text textAlign='center'>Kaduna South</Text>
                        <Text textAlign='center'>Lat:34.78965, Lon:12.88754</Text>
                        <Text textAlign='center'>Turf Grass</Text>
                        <Text textAlign='center'>105m X 68m</Text>
                    </Box>
                     <Box p='1rem' borderRadius='8px'color='#000' bg='#fff' mt='.5rem' display='flex' justifyContent='space-between'>
                         
                        <Text>National Stadium</Text>
                        <Text>Pitch address details...</Text>
                        <Text textAlign='center'>Kaduna</Text>
                        <Text textAlign='center'>Kaduna South</Text>
                        <Text textAlign='center'>Lat:34.78965, Lon:12.88754</Text>
                        <Text textAlign='center'>Turf Grass</Text>
                        <Text textAlign='center'>105m X 68m</Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default LocalPitches