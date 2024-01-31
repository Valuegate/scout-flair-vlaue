import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import teamb from '../../assets/b.png'

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
                    <Box p='1rem' borderTopLeftRadius='8px' borderTopRightRadius='8px' fontWeight='700' color='#C99C27' bg='black' display='flex' justifyContent='space-between'>
                        <Text>Home Team</Text>
                        <Text>Away Team</Text>
                        <Text>Time</Text>
                        <Text>Date</Text>
                        <Text>Competition</Text>
                        <Text>Refree</Text>
                        <Text>Stadium/Pitch</Text>
                    </Box>
                    <Box p='1rem' borderRadius='8px'color='#000' bg='#fff' mt='.5rem' display='flex' justifyContent='space-between'>
                         <Box display='flex'>
                            <img src={teamb} alt='team a' />
                            <Text marginLeft='.5rem'>Team A</Text>
                        </Box>
                        <Box display='flex'>
                            <img src={teamb} alt='team a' />
                            <Text marginLeft='.5rem'>Team B</Text>
                        </Box>
                        <Text textAlign='center'>8:30 Am</Text>
                        <Text textAlign='center'>11-09-23</Text>
                        <Text textAlign='center'>Champions League</Text>
                        <Text textAlign='center'>Thomas Hills</Text>
                        <Text textAlign='center'>National Stadium, Kaduna</Text>
                    </Box>
                    <Box p='1rem' borderRadius='8px'color='#000' bg='#fff' mt='.5rem' display='flex' justifyContent='space-between'>
                         <Box display='flex'>
                            <img src={teamb} alt='team a' />
                            <Text marginLeft='.5rem'>Team A</Text>
                        </Box>
                        <Box display='flex'>
                            <img src={teamb} alt='team a' />
                            <Text marginLeft='.5rem'>Team B</Text>
                        </Box>
                        <Text textAlign='center'>8:30 Am</Text>
                        <Text textAlign='center'>11-09-23</Text>
                        <Text textAlign='center'>Champions League</Text>
                        <Text textAlign='center'>Thomas Hills</Text>
                        <Text textAlign='center'>National Stadium, Kaduna</Text>
                    </Box>
                    <Box p='1rem' borderRadius='8px'color='#000' bg='#fff' mt='.5rem' display='flex' justifyContent='space-between'>
                         <Box display='flex'>
                            <img src={teamb} alt='team a' />
                            <Text marginLeft='.5rem'>Team A</Text>
                        </Box>
                        <Box display='flex'>
                            <img src={teamb} alt='team a' />
                            <Text marginLeft='.5rem'>Team B</Text>
                        </Box>
                        <Text textAlign='center'>8:30 Am</Text>
                        <Text textAlign='center'>11-09-23</Text>
                        <Text textAlign='center'>Champions League</Text>
                        <Text textAlign='center'>Thomas Hills</Text>
                        <Text textAlign='center'>National Stadium, Kaduna</Text>
                    </Box>
                    <Box p='1rem' borderRadius='8px'color='#000' bg='#fff' mt='.5rem' display='flex' justifyContent='space-between'>
                         <Box display='flex'>
                            <img src={teamb} alt='team a' />
                            <Text marginLeft='.5rem'>Team A</Text>
                        </Box>
                        <Box display='flex'>
                            <img src={teamb} alt='team a' />
                            <Text marginLeft='.5rem'>Team B</Text>
                        </Box>
                        <Text textAlign='center'>8:30 Am</Text>
                        <Text textAlign='center'>11-09-23</Text>
                        <Text textAlign='center'>Champions League</Text>
                        <Text textAlign='center'>Thomas Hills</Text>
                        <Text textAlign='center'>National Stadium, Kaduna</Text>
                    </Box>
                </Box>
                <Box w={['full','full']} display='flex' mt='.75rem' flexDir='column'>
                <Text>Match Result</Text>
                <Box p='1rem' borderTopLeftRadius='8px' borderTopRightRadius='8px' bg='white' display='flex' flexDir='column'>
                    <Box p='1rem' borderRadius='8px' fontWeight='700' color='#C99C27' bg='black' display='flex' justifyContent='space-between'>
                        <Text>Home Team</Text>
                        <Text>Away Team</Text>
                        <Text>Time</Text>
                        <Text>Date</Text>
                        <Text>Competition</Text>
                        <Text>Stadium/Pitch</Text>
                    </Box>
                     <Box p='1rem' borderRadius='8px'color='#000' bg='#fff' mt='.5rem' display='flex' justifyContent='space-between'>
                         <Box display='flex'>
                            <img src={teamb} alt='team a' />
                            <Text marginLeft='.5rem'>Team A 2</Text>
                        </Box>
                        <Box display='flex'>
                            <img src={teamb} alt='team a' />
                            <Text marginLeft='.5rem'>Team B 0</Text>
                        </Box>
                        <Text textAlign='center'>8:30 Am</Text>
                        <Text textAlign='center'>11-09-23</Text>
                        <Text textAlign='center'>Nigerian Champions League</Text>
                        <Text textAlign='center'>National Stadium, Kaduna</Text>
                    </Box>
                     <Box p='1rem' borderRadius='8px'color='#000' bg='#fff' mt='.5rem' display='flex' justifyContent='space-between'>
                         <Box display='flex'>
                            <img src={teamb} alt='team a' />
                            <Text marginLeft='.5rem'>Team A 2</Text>
                        </Box>
                        <Box display='flex'>
                            <img src={teamb} alt='team a' />
                            <Text marginLeft='.5rem'>Team B 0</Text>
                        </Box>
                        <Text textAlign='center'>8:30 Am</Text>
                        <Text textAlign='center'>11-09-23</Text>
                        <Text textAlign='center'>Nigerian Champions League</Text>
                        <Text textAlign='center'>National Stadium, Kaduna</Text>
                    </Box>
                    <Box p='1rem' borderRadius='8px'color='#000' bg='#fff' mt='.5rem' display='flex' justifyContent='space-between'>
                         <Box display='flex'>
                            <img src={teamb} alt='team a' />
                            <Text marginLeft='.5rem'>Team A 2</Text>
                        </Box>
                        <Box display='flex'>
                            <img src={teamb} alt='team a' />
                            <Text marginLeft='.5rem'>Team B 0</Text>
                        </Box>
                        <Text textAlign='center'>8:30 Am</Text>
                        <Text textAlign='center'>11-09-23</Text>
                        <Text textAlign='center'>Nigerian Champions League</Text>
                        <Text textAlign='center'>National Stadium, Kaduna</Text>
                    </Box>
                </Box>
            </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Matches