import React from 'react'
import {Box,Text } from '@chakra-ui/react'
import { IoEllipsisVerticalSharp } from "react-icons/io5";

const Players = () => {
  return (
    <Box>
    <Box bg='none' p='0' w='full' >
        <Box w='full' display='flex' justifyContent='space-evenly' >
            <Text></Text>
            <Text fontWeight='700' textAlign='left'>Username</Text>
            <Text fontWeight='700' textAlign='left' >Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
            <Text fontWeight='700' textAlign='left'>Jersery Number</Text>
            <Text fontWeight='700' textAlign='left'>Position</Text>
            <Text>&nbsp; &nbsp;&nbsp;</Text>
            <Text>&nbsp;&nbsp;&nbsp;&nbsp;</Text>
        </Box>
    </Box>
    <Box bg='#fff' p='1.5rem' w='full' mt='1rem'>
        <Box w='full' display='flex' justifyContent='space-evenly' >
            <Text w='20px' h='20px' borderRadius='16px' bg='#000' ></Text>
            <Text fontWeight='400' color='#4F4545' textAlign='left'>Username</Text>
            <Text fontWeight='400' color='#4F4545' textAlign='left'>Player Name</Text>
            <Text fontWeight='400' color='#4F4545' textAlign='left'>1</Text>
            <Text fontWeight='400' color='#4F4545' textAlign='left'>Goal Keeper</Text>
            <Text bg='#c99c27' borderRadius='8px' textAlign='left' p='.25rem' color='#000'>View Profile</Text>
            <Text><IoEllipsisVerticalSharp /></Text>
        </Box>
    </Box>
    <Box bg='#fff' p='1.5rem' w='full' mt='1rem'>
        <Box w='full' display='flex' justifyContent='space-evenly' >
            <Text w='20px' h='20px' borderRadius='16px' bg='#000' ></Text>
            <Text fontWeight='400' color='#4F4545' textAlign='left'>Username</Text>
            <Text fontWeight='400' color='#4F4545' textAlign='left'>Player Name</Text>
            <Text fontWeight='400' color='#4F4545' textAlign='left'>2</Text>
            <Text fontWeight='400' color='#4F4545' textAlign='left'>Right Fullback</Text>
            <Text bg='#c99c27' borderRadius='8px' textAlign='left' p='.25rem' color='#000'>View Profile</Text>
            <Text><IoEllipsisVerticalSharp /></Text>
        </Box>
    </Box>
    <Box bg='#fff' p='1.5rem' w='full' mt='1rem'>
        <Box w='full' display='flex' justifyContent='space-evenly' >
            <Text w='20px' h='20px' borderRadius='16px' bg='#000' ></Text>
            <Text fontWeight='400' color='#4F4545' textAlign='left'>Username</Text>
            <Text fontWeight='400' color='#4F4545' textAlign='left'>Player Name</Text>
            <Text fontWeight='400' color='#4F4545' textAlign='left'>3</Text>
            <Text fontWeight='400' color='#4F4545' textAlign='left'>Left Fullback</Text>
            <Text bg='#c99c27' borderRadius='8px' textAlign='left' p='.25rem' color='#000'>View Profile</Text>
            <Text><IoEllipsisVerticalSharp /></Text>
        </Box>
    </Box>
    <Box bg='#fff' p='1.5rem' w='full' mt='1rem'>
        <Box w='full' display='flex' justifyContent='space-evenly' >
            <Text w='20px' h='20px' borderRadius='16px' bg='#000' ></Text>
            <Text fontWeight='400' color='#4F4545' textAlign='left'>Username</Text>
            <Text fontWeight='400' color='#4F4545' textAlign='left'>Player Name</Text>
            <Text fontWeight='400' color='#4F4545' textAlign='left'>4</Text>
            <Text fontWeight='400' color='#4F4545' textAlign='left'>Center back</Text>
            <Text bg='#c99c27' borderRadius='8px' textAlign='left' p='.25rem' color='#000'>View Profile</Text>
            <Text><IoEllipsisVerticalSharp /></Text>
        </Box>
    </Box>
    </Box>
  )
}

export default Players