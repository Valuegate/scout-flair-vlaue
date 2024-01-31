import { Box,Text } from '@chakra-ui/react'
import React from 'react'

const FootballClubDetails = () => {
  return (
    <Box width='full' p='.25rem' display='flex' justifyContent='space-between' >
        <Box w='full' display='flex' flexDir='column'>
            <Box display='flex' mb='.5rem' flexDir='column'>
                <Text fontSize='14px' fontWeight='700'>Academy:</Text>
                <Text color='#0C1017' fontSize='14px'>ScoutFlair Football Academy</Text>
            </Box>
             <Box display='flex' mb='.5rem' flexDir='column'>
                <Text fontSize='14px' fontWeight='700'>Address:</Text>
                <Text color='#0C1017' fontSize='14px'>Ahmadu Bello way, Behind Government Secondary School, Jabi, By Jabi Lake</Text>
            </Box>
             <Box display='flex' mb='.5rem' flexDir='column'>
                <Text fontSize='14px' fontWeight='700'>GPS Coordinates:</Text>
                <Text color='#0C1017'fontSize='14px'>Longitude: 001234
Lattitude: 115699</Text>
            </Box>
             <Box display='flex' mb='.5rem' flexDir='column'>
                <Text fontSize='14px' fontWeight='700'>Academy Principal:</Text>
                <Text color='#0C1017' fontSize='14px'>James Pam</Text>
            </Box>
        </Box>
         <Box w='full' display='flex' flexDir='column'>
            <Box display='flex' mb='.5rem' flexDir='column'>
                <Text fontSize='14px' fontWeight='700'>Founded:</Text>
                <Text color='#0C1017' fontSize='14px'>1987</Text>
            </Box>
             <Box display='flex' mb='.5rem' flexDir='column'>
                <Text fontSize='14px' fontWeight='700'>Has Competed:</Text>
                <Text color='#0C1017' fontSize='14px'>409</Text>
            </Box>
             <Box display='flex' mb='.5rem' flexDir='column'>
                <Text fontSize='14px' fontWeight='700'>Has Won:</Text>
                <Text color='#0C1017'fontSize='14px'>409</Text>
            </Box>
             <Box display='flex' mb='.5rem' flexDir='column'>
                <Text fontSize='14px' fontWeight='700'>Has Lost:</Text>
                <Text color='#0C1017' fontSize='14px'>36</Text>
            </Box>
        </Box>
    </Box>
  )
}

export default FootballClubDetails