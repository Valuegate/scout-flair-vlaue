import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Tatics = () => {
  return (
    <Box>
        <Box p='1rem' borderRadius='8px' bg='white' display='flex' justifyContent='space-between' >
            <Box border='1px solid #333' p='.5rem' alignItems='center' display='flex'>
                <Text>Dashboard &nbsp;</Text>
                <Text display='inline-block' borderLeft='1px solid #333'>&nbsp;Tactics</Text>
            </Box>
            <Box border='1px solid #333' w='130px' display='flex' alignItms='center' p='.25rem' borderRadius='.5rem'>
                <Link to=''>Edit</Link>
            </Box>
        </Box>
        <Box w={['full','full']} mt='1rem' display='flex' justifyContent='space-between' flexDir={['column','row']}>
            <Box w={['full','50%']} display='flex' flexDir='column'>
                <Text>Team Formations</Text>
                <Box p='1rem' borderRadius='8px' bg='white' display='flex' flexDir='column'>
                    <Box p='1rem' borderRadius='8px'color='#C99C27' bg='black' display='flex' justifyContent='space-between'>
                        <Text>Formations</Text>
                        <Text>Win Rate</Text>
                        <Text>Goals Scored </Text>
                        <Text>Goals Concended</Text>
                    </Box>
                    <Box p='1rem' borderRadius='8px'color='#333' bg='fff' display='flex' justifyContent='space-between'>
                        <Text textAlign='center'>4-4-2</Text>
                        <Text textAlign='center'>70%</Text>
                        <Text textAlign='center'>32</Text>
                        <Text textAlign='center'>12</Text>
                    </Box>
                    <Box p='1rem' borderRadius='8px'color='#333' bg='fff' display='flex' justifyContent='space-between'>
                        <Text textAlign='center'>4-4-2</Text>
                        <Text textAlign='center'>70%</Text>
                        <Text textAlign='center'>32</Text>
                        <Text textAlign='center'>12</Text>
                    </Box>
                    <Box p='1rem' borderRadius='8px'color='#333' bg='fff' display='flex' justifyContent='space-between'>
                        <Text textAlign='center'>4-4-2</Text>
                        <Text textAlign='center'>70%</Text>
                        <Text textAlign='center'>32</Text>
                        <Text textAlign='center'>12</Text>
                    </Box>
                </Box>
                <Box w={['full','full']} display='flex' mt='.75rem' flexDir='column'>
                <Text>Set Pecies</Text>
                <Box p='1rem' borderRadius='8px' bg='white' display='flex' flexDir='column'>
                    <Box p='1rem' borderRadius='8px'color='#333' bg='fff' display='flex' justifyContent='space-between'>
                        <Text textAlign='center'>Corner</Text>
                        <Text textAlign='center'>7</Text>
                        <Text textAlign='center'>3</Text>
                        <Text textAlign='center'>12%</Text>
                    </Box>
                    <Box p='1rem' borderRadius='8px'color='#333' bg='fff' display='flex' justifyContent='space-between'>
                        <Text textAlign='center'>Free Kicks</Text>
                        <Text textAlign='center'>7</Text>
                        <Text textAlign='center'>3</Text>
                        <Text textAlign='center'>12%</Text>
                    </Box>
                    <Box p='1rem' borderRadius='8px'color='#333' bg='fff' display='flex' justifyContent='space-between'>
                        <Text textAlign='center'>Throw In</Text>
                        <Text textAlign='center'>7</Text>
                        <Text textAlign='center'>3</Text>
                        <Text textAlign='center'>12%</Text>
                    </Box>
                </Box>
            </Box>
            </Box>
            <Box w={['full','40%']} display='flex' flexDir='column'>
                <Text>Passing Networks</Text>
                <Box p='1rem' borderRadius='8px' bg='white' display='flex' flexDir='column'>
                    <Box p='1rem' borderRadius='8px'color='#C99C27' bg='black' display='flex' justifyContent='space-between'>
                        <Text>Key Passer</Text>
                        <Text>Reciever</Text>
                        <Text>Passes </Text>
                    </Box>
                    <Box p='1rem' borderRadius='8px'color='#fff' bg='#000' mt='.5rem' display='flex' justifyContent='space-between'>
                        <Text textAlign='center'>Player 1</Text>
                        <Text textAlign='center'>Player 2</Text>
                        <Text textAlign='center'>45</Text>
                    </Box>
                    <Box p='1rem' borderRadius='8px'color='#fff' bg='#000' mt='.5rem' display='flex' justifyContent='space-between'>
                        <Text textAlign='center'>Player 1</Text>
                        <Text textAlign='center'>Player 2</Text>
                        <Text textAlign='center'>45</Text>
                    </Box>
                    <Box p='1rem' borderRadius='8px'color='#fff' bg='#000' mt='.5rem' display='flex' justifyContent='space-between'>
                        <Text textAlign='center'>Player 1</Text>
                        <Text textAlign='center'>Player 2</Text>
                        <Text textAlign='center'>45</Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Tatics