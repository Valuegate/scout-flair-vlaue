import React from 'react'
import { Box,Text, Image } from '@chakra-ui/react'
import quest from '../assets/Question.png'

const Faq = () => {
  return (
    <Box w='full'h={['100%','100%','100%']} marginBottom='4rem' bg='#1A1818' display='flex' p='1rem' mt='2rem' alignItems='center' justifyContent='space-betweeen' flexDirection={['column','column']}>
            <Text fontSize='52px' mt='1rem' fontWeight='700' color='#6DB7C0' >FAQ</Text>
            <Text fontWeight='700' fontSize='25px' color='#6DB7C0' textAlign='center'>Explore common queries about ScoutFlair. Get quick answers to enhance your experience</Text>
            <Box w='full' h='100%' display='flex' alignItems='center' flexDirection={['column','row']}  justifyContent='center' mt='2rem'>
                <Box w={['full','full','full','50%']}>
                    <Image src={quest} alt=''/>
                </Box>
                <Box w={['full','full','full','50%']} h='full'>
                    <Box w={['full','660px']} paddingBottom='1.5rem' paddingTop='1.5rem' borderBottom='1px solid #6DB7C0'>
                        <Text color='#6DB7C0' fontWeight='700' fontSize='24px' >How can I access ScoutFlair?</Text>
                    </Box>
                     <Box w={['full','660px']} paddingBottom='1.5rem' paddingTop='1.5rem' borderBottom='1px solid #6DB7C0'>
                        <Text color='#6DB7C0' fontWeight='700' fontSize='24px' >Is ScoutFlair free to use?</Text>
                    </Box>
                     <Box w={['full','660px']} paddingBottom='1.5rem' paddingTop='1.5rem' borderBottom='1px solid #6DB7C0'>
                        <Text color='#6DB7C0' fontWeight='700' fontSize='24px' >What types of football data does ScoutFlair provide?</Text>
                    </Box>
                     <Box w={['full','660px']} paddingBottom='1.5rem' paddingTop='1.5rem' borderBottom='1px solid #6DB7C0'>
                        <Text color='#6DB7C0' fontWeight='700' fontSize='24px' >Can I customize my dashboard on ScoutFlair??</Text>
                    </Box>
                     <Box w={['full','660px']} paddingBottom='1.5rem' paddingTop='1.5rem' borderBottom='1px solid #6DB7C0'>
                        <Text color='#6DB7C0' fontWeight='700' fontSize='24px' >Does ScoutFlair support fantasy football enthusiasts?</Text>
                    </Box>
                     <Box w={['full','660px']} paddingBottom='1.5rem' paddingTop='1.5rem' borderBottom='1px solid #6DB7C0'>
                        <Text color='#6DB7C0' fontWeight='700' fontSize='24px' >How frequently are match updates provided in real-time on ScoutFlair?</Text>
                    </Box>
                     <Box w={['full','660px']} >
                        <Text color='#6DB7C0' fontWeight='700' fontSize='24px' >Are there specialized tools for football coaches and analysts on ScoutFlair?</Text>
                    </Box>
                </Box>
            </Box>
        </Box> 
  )
}

export default Faq