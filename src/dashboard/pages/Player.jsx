import React from 'react'
import {Box,Text } from '@chakra-ui/react'

const Players = () => {
  return (
    <Box bg='#fff' p='1.5rem' w='full' >
        <Box w='full' display='flex' justifyContent='space-between' >
            <Text></Text>
            <Text fontWeight='700'>Username</Text>
            <Text fontWeight='700'>Name</Text>
            <Text fontWeight='700'>Jersery Number</Text>
            <Text fontWeight='700'>Position</Text>
            <Text></Text>
            <Text></Text>
        </Box>
    </Box>
  )
}

export default Players