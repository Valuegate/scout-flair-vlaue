import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import {Box, Text} from '@chakra-ui/react'

const FootballClubDetails = () => {
  const location = useLocation();
    const { name, address, latitude,longitude,principalOrCoach,founded, competedCount, winCount, lostCount } = location.state

    const navigate = useNavigate();

  const goBackHandler = () => {
    navigate(-1); // Navigate back in the history stack
  };

  return (
    <Box w='full' h='100%' flexDir='column' display='flex' >
        <Box display='flex' justifyContent='space-between'>
            <Text cursor='pointer' border='1px solid #ccc' borderRadius='5px' padding='.5rem' onClick={goBackHandler}>Go Back</Text>
        </Box>
    <Box mt={['','5rem']} width={['full','50%']} bg='#fff' alignItems='center' p='1rem' display='flex' flexDir='column' justifyContent='center' >
        <Box w='full' display='flex' flexDir='column'>
            <Box display='flex' mb='.75rem' flexDir='row'>
                <Text fontSize='14px' mr='.5rem' fontWeight='700'>Academy:</Text>
                <Text color='#0C1017' fontSize='14px'>{name}</Text>
            </Box>
             <Box display='flex' mb='.75rem' flexDir='row'>
                <Text fontSize='14px'  mr='.5rem'fontWeight='700'>Address:</Text>
                <Text color='#0C1017' fontSize='14px'> {address} </Text>
            </Box>
             <Box display='flex' mb='.75rem' flexDir='row'>
                <Text fontSize='14px'  mr='.5rem'fontWeight='700'>GPS Coordinates:</Text>
                <Text color='#0C1017'fontSize='14px'>Longitude: {longitude}
Lattitude: {latitude}</Text>
            </Box>
             <Box display='flex' mb='.75rem' flexDir='row'>
                <Text fontSize='14px'  mr='.5rem'fontWeight='700'>Academy Principal:</Text>
                <Text color='#0C1017' fontSize='14px'>{principalOrCoach}</Text>
            </Box>
        </Box>
         <Box w='full' display='flex' flexDir='column'>
            <Box display='flex' mb='.75rem' flexDir='row'>
                <Text fontSize='14px' mr='.5rem' fontWeight='700'>Founded:</Text>
                <Text color='#0C1017' fontSize='14px'>{founded}</Text>
            </Box>
             <Box display='flex' mb='.75rem' flexDir='row'>
                <Text fontSize='14px'  mr='.5rem'fontWeight='700'>Has Competed:</Text>
                <Text color='#0C1017' fontSize='14px'>{competedCount}</Text>
            </Box>
             <Box display='flex' mb='.75rem' flexDir='row'>
                <Text fontSize='14px'  mr='.5rem'fontWeight='700'>Has Won:</Text>
                <Text color='#0C1017'fontSize='14px'>{winCount}</Text>
            </Box>
             <Box display='flex' mb='.75rem' flexDir='row'>
                <Text fontSize='14px'  mr='.5rem'fontWeight='700'>Has Lost:</Text>
                <Text color='#0C1017' fontSize='14px'>{lostCount}</Text>
            </Box>
        </Box>
    </Box>
    </Box>
  )
}

export default FootballClubDetails