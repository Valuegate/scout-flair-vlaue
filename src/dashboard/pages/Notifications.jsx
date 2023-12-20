import React from 'react';
import { Box,Text } from '@chakra-ui/react';
import { IoEllipsisVerticalSharp } from "react-icons/io5";

const Notifications = () => {
  return (
    <Box>
        <Box p='1rem' borderRadius='8px' bg='white' display='flex' justifyContent='space-between' >
            <Box border='1px solid #333' p='.5rem' alignItems='center' display='flex'>
                <Text>Dashboard &nbsp;</Text>
                <Text display='inline-block' borderLeft='1px solid #333'>&nbsp;Notifications</Text>
            </Box>
        </Box>
        <Box p='1rem' borderRadius='8px' mt='1rem' flexDirection='column' bg='white' display='flex' justifyContent='space-between' >
          <Box bg='#e9e9e9' p='1.5rem' w='full' mt='1rem'>
            <Box w='full' display='flex' borderRadius='8px' justifyContent='space-evenly' alignItems='center' >
                <Text w='40px' h='40px' borderRadius='50px' bg='#000' ></Text>
                <Text fontWeight='400' color='#4F4545' textAlign='left'>Match vs. Strikers Utd is rescheduled to 21-01-2024</Text>
                <Text fontWeight='400' color='#4F4545' textAlign='left'>20-03-2023</Text>
                <Text><IoEllipsisVerticalSharp /></Text>
            </Box>
          </Box>
          <Box bg='#e9e9e9' p='1.5rem' w='full' mt='1rem'>
            <Box w='full' display='flex' borderRadius='8px' justifyContent='space-evenly' alignItems='center' >
                <Text w='40px' h='40px' borderRadius='50px' bg='#000' ></Text>
                <Text fontWeight='400' color='#4F4545' textAlign='left'>Match vs. Strikers Utd is rescheduled to 21-01-2024</Text>
                <Text fontWeight='400' color='#4F4545' textAlign='left'>20-03-2023</Text>
                <Text><IoEllipsisVerticalSharp /></Text>
            </Box>
          </Box>
          <Box bg='#e9e9e9' p='1.5rem' w='full' mt='1rem'>
            <Box w='full' display='flex' borderRadius='8px' justifyContent='space-evenly' alignItems='center' >
                <Text w='40px' h='40px' borderRadius='50px' bg='#000' ></Text>
                <Text fontWeight='400' color='#4F4545' textAlign='left'>Match vs. Strikers Utd is rescheduled to 21-01-2024</Text>
                <Text fontWeight='400' color='#4F4545' textAlign='left'>20-03-2023</Text>
                <Text><IoEllipsisVerticalSharp /></Text>
            </Box>
          </Box>
             <Box bg='#e9e9e9' p='1.5rem' w='full' mt='1rem'>
            <Box w='full' display='flex' borderRadius='8px' justifyContent='space-evenly' alignItems='center' >
                <Text w='40px' h='40px' borderRadius='50px' bg='#000' ></Text>
                <Text fontWeight='400' color='#4F4545' textAlign='left'>Match vs. Strikers Utd is rescheduled to 21-01-2024</Text>
                <Text fontWeight='400' color='#4F4545' textAlign='left'>20-03-2023</Text>
                <Text><IoEllipsisVerticalSharp /></Text>
            </Box>
          </Box>
        </Box>
    </Box>
  )
}

export default Notifications