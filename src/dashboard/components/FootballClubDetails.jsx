import { Box,Text } from '@chakra-ui/react'
import React from 'react'

const FootballClubDetails = ({name,address,longitude,latitude,country,lostCount,completedCount,winCount,founded,principalOrCoach}) => {
  return (
    <Box width='full' p='.25rem' display='flex' justifyContent='space-between' >
        <Box w='full' display='flex' flexDir='column'>
            <Box display='flex' mb='.5rem' flexDir='column'>
                <Text fontSize='14px' fontWeight='700'>Academy:</Text>
                <Text color='#0C1017' fontSize='14px'>{name}</Text>
            </Box>
             <Box display='flex' mb='.5rem' flexDir='column'>
                <Text fontSize='14px' fontWeight='700'>Address:</Text>
                <Text color='#0C1017' fontSize='14px'>{address},{country}</Text>
            </Box>
             <Box display='flex' mb='.5rem' flexDir='column'>
                <Text fontSize='14px' fontWeight='700'>GPS Coordinates:</Text>
                <Text color='#0C1017'fontSize='14px'>Longitude: {longitude}
Lattitude: {latitude}</Text>
            </Box>
             <Box display='flex' mb='.5rem' flexDir='column'>
                <Text fontSize='14px' fontWeight='700'>Club Principal:</Text>
                <Text color='#0C1017' fontSize='14px'>{principalOrCoach}</Text>
            </Box>
        </Box>
         <Box w='full' display='flex' flexDir='column'>
            <Box display='flex' mb='.5rem' flexDir='column'>
                <Text fontSize='14px' fontWeight='700'>Founded:</Text>
                <Text color='#0C1017' fontSize='14px'> {founded} </Text>
            </Box>
             <Box display='flex' mb='.5rem' flexDir='column'>
                <Text fontSize='14px' fontWeight='700'>Has Competed:</Text>
                <Text color='#0C1017' fontSize='14px'> {completedCount} </Text>
            </Box>
             <Box display='flex' mb='.5rem' flexDir='column'>
                <Text fontSize='14px' fontWeight='700'>Has Won:</Text>
                <Text color='#0C1017'fontSize='14px'> {winCount} </Text>
            </Box>
             <Box display='flex' mb='.5rem' flexDir='column'>
                <Text fontSize='14px' fontWeight='700'>Has Lost:</Text>
                <Text color='#0C1017' fontSize='14px'> {lostCount} </Text>
            </Box>
        </Box>
    </Box>
  )
}

export default FootballClubDetails