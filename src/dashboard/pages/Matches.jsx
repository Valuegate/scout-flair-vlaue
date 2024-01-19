import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Matches = () => {
  return (
    <Box>
        <Box p='1rem' borderRadius='8px' bg='white' display='flex' justifyContent='space-between' >
            <Box border='1px solid #333' p='.5rem' alignItems='center' display='flex'>
                <Text>Dashboard &nbsp;</Text>
                <Text display='inline-block' borderLeft='1px solid #333'>&nbsp;Matches</Text>
            </Box>
        </Box>
        <Box w={['full','full']} mt='1rem'  display='flex'  justifyContent='space-between' flexDir={['column','column']}>
            <Box w={['full','full']} display='flex' flexDir='column'>
                <Text>Match Result</Text>
                <Box p='1rem' borderRadius='8px' bg='white' display='flex' flexDir='column'>
                    <Box p='1rem' borderRadius='8px'color='#C99C27' bg='black' display='flex' justifyContent='space-between'>
                        <Text>Home Team</Text>
                        <Text>Away Team</Text>
                        <Text>Time</Text>
                        <Text>Date</Text>
                        <Text>Competition</Text>
                        <Text>Refree</Text>
                        <Text>Stadium/Pitch</Text>
                    </Box>
                    <Box p='1rem' borderRadius='8px'color='#fff' bg='#000' mt='.5rem' display='flex' justifyContent='space-between'>
                        <Text textAlign='center'>Match 1</Text>
                        <Text textAlign='center'>11-09-23</Text>
                        <Text textAlign='center'>Rival FC</Text>
                        <Text textAlign='center'>Win</Text>
                        <Text textAlign='center'>3 - 1</Text>
                    </Box>
                    <Box p='1rem' borderRadius='8px'color='#fff' bg='#000' mt='.5rem' display='flex' justifyContent='space-between'>
                        <Text textAlign='center'>Match 2</Text>
                        <Text textAlign='center'>11-09-23</Text>
                        <Text textAlign='center'>Rival FC</Text>
                        <Text textAlign='center'>Win</Text>
                        <Text textAlign='center'>3 - 1</Text>
                    </Box>
                    <Box p='1rem' borderRadius='8px'color='#fff' bg='#000' mt='.5rem' display='flex' justifyContent='space-between'>
                        <Text textAlign='center'>Match 3</Text>
                        <Text textAlign='center'>15-09-23</Text>
                        <Text textAlign='center'>Rival FC</Text>
                        <Text textAlign='center'>Lose</Text>
                        <Text textAlign='center'>0 - 1</Text>
                    </Box>
                </Box>
                <Box w={['full','full']} display='flex' mt='.75rem' flexDir='column'>
                <Text>Match Result</Text>
                <Box p='1rem' borderRadius='8px' bg='white' display='flex' flexDir='column'>
                    <Box p='1rem' borderRadius='8px'color='#C99C27' bg='black' display='flex' justifyContent='space-between'>
                        <Text>Match</Text>
                        <Text>Posession</Text>
                        <Text>Total Shots </Text>
                        <Text>Shots on Goals</Text>
                        <Text>Corners</Text>
                        <Text>Faults Committed</Text>
                    </Box>
                    <Box p='1rem' borderRadius='8px'color='#333' bg='fff' display='flex' justifyContent='space-between'>
                        <Text textAlign='center'>Match 1</Text>
                        <Text textAlign='center'>80%</Text>
                        <Text textAlign='center'>15</Text>
                        <Text textAlign='center'>7</Text>
                        <Text textAlign='center'>6</Text>
                        <Text textAlign='center'>10</Text>
                    </Box>
                    <Box p='1rem' borderRadius='8px'color='#333' bg='fff' display='flex' justifyContent='space-between'>
                        <Text textAlign='center'>Match 1</Text>
                        <Text textAlign='center'>80%</Text>
                        <Text textAlign='center'>15</Text>
                        <Text textAlign='center'>7</Text>
                        <Text textAlign='center'>6</Text>
                        <Text textAlign='center'>10</Text>
                    </Box>
                    <Box p='1rem' borderRadius='8px'color='#333' bg='fff' display='flex' justifyContent='space-between'>
                        <Text textAlign='center'>Match 1</Text>
                        <Text textAlign='center'>80%</Text>
                        <Text textAlign='center'>15</Text>
                        <Text textAlign='center'>7</Text>
                        <Text textAlign='center'>6</Text>
                        <Text textAlign='center'>10</Text>
                    </Box>
                </Box>
            </Box>
            </Box>
            <Box w={['full','full']} display='flex' flexDir='column'>
                <Text>Passing Networks</Text>
                <Box p='1rem' borderRadius='8px' bg='white' display='flex' flexDir='column'>
                    <Box p='1rem' borderRadius='8px'color='#C99C27' bg='black' display='flex' justifyContent='space-between'>
                        <Text>Match</Text>
                        <Text>Date</Text>
                        <Text>Opponent </Text>
                    </Box>
                    <Box p='1rem' borderRadius='8px'color='#fff' bg='#000' mt='.5rem' display='flex' justifyContent='space-between'>
                        <Text textAlign='center'>Match 1</Text>
                        <Text textAlign='center'>20-05-2023</Text>
                        <Text textAlign='center'>Strikers Utd</Text>
                    </Box>
                    <Box p='1rem' borderRadius='8px'color='#fff' bg='#000' mt='.5rem' display='flex' justifyContent='space-between'>
                        <Text textAlign='center'>Match 1</Text>
                        <Text textAlign='center'>20-05-2023</Text>
                        <Text textAlign='center'>Strikers Utd</Text>
                    </Box>
                    <Box p='1rem' borderRadius='8px'color='#fff' bg='#000' mt='.5rem' display='flex' justifyContent='space-between'>
                       <Text textAlign='center'>Match 1</Text>
                        <Text textAlign='center'>20-05-2023</Text>
                        <Text textAlign='center'>Strikers Utd</Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Matches