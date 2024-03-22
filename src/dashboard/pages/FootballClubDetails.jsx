import React from 'react'
import { useLocation } from 'react-router-dom';
import {Box, Text} from '@chakra-ui/react'

const FootballClubDetails = () => {
  const location = useLocation();
    const { name, address, latitude,longitude,principalOrCoach,founded, competedCount, winCount, lostCount } = location.state

  return (
    <Box width='full' bg='#fff' alignItems='center' p='1rem' display='flex' flexDir='column' justifyContent='center' >
        <Box w='full' display='flex' flexDir='column'>
            <Box display='flex' mb='.5rem' flexDir='column'>
                <Text fontSize='14px' fontWeight='700'>Academy:</Text>
                <Text color='#0C1017' fontSize='14px'>{name}</Text>
            </Box>
             <Box display='flex' mb='.5rem' flexDir='column'>
                <Text fontSize='14px' fontWeight='700'>Address:</Text>
                <Text color='#0C1017' fontSize='14px'> {address} </Text>
            </Box>
             <Box display='flex' mb='.5rem' flexDir='column'>
                <Text fontSize='14px' fontWeight='700'>GPS Coordinates:</Text>
                <Text color='#0C1017'fontSize='14px'>Longitude: {longitude}
Lattitude: {latitude}</Text>
            </Box>
             <Box display='flex' mb='.5rem' flexDir='column'>
                <Text fontSize='14px' fontWeight='700'>Academy Principal:</Text>
                <Text color='#0C1017' fontSize='14px'>{principalOrCoach}</Text>
            </Box>
        </Box>
         <Box w='full' display='flex' flexDir='column'>
            <Box display='flex' mb='.5rem' flexDir='column'>
                <Text fontSize='14px' fontWeight='700'>Founded:</Text>
                <Text color='#0C1017' fontSize='14px'>{founded}</Text>
            </Box>
             <Box display='flex' mb='.5rem' flexDir='column'>
                <Text fontSize='14px' fontWeight='700'>Has Competed:</Text>
                <Text color='#0C1017' fontSize='14px'>{competedCount}</Text>
            </Box>
             <Box display='flex' mb='.5rem' flexDir='column'>
                <Text fontSize='14px' fontWeight='700'>Has Won:</Text>
                <Text color='#0C1017'fontSize='14px'>{winCount}</Text>
            </Box>
             <Box display='flex' mb='.5rem' flexDir='column'>
                <Text fontSize='14px' fontWeight='700'>Has Lost:</Text>
                <Text color='#0C1017' fontSize='14px'>{lostCount}</Text>
            </Box>
        </Box>
    </Box>
  )
}

export default FootballClubDetails