import { Box, Text, Input, Button } from '@chakra-ui/react'
import React from 'react'

const Cta = () => {
  return (
    <Box>
        <Box w='full'h={['100%','100%','100vh']} bg='#1A1818' display='flex' p='2rem' alignItems='center' justifyContent='center' flexDirection={['column','row']}>
            <Box w='75%' h='202px' display='flex' bg='#E5AA42' p='2rem' shadow='-9px 8px 0px #ddd' justifyContent='space-between' flexDirection={['column','row']} alignItems='center' >
                <Text color='#1A1818' fontWeight='700' fontSize={['1.2rem','24px']} >Join our team today</Text>
                <Input type='text' w={['full','45%']} display='block' bg='#fff' placeholder='email' color='rgba(0, 0, 0, 0.34)' borderRadius='25px' />
                <Button bg='#1A1818' fontSize={['1.2rem','24px']} borderRadius='none' color='#E5AA42' p={['.75rem','1rem']} > Join Now</Button>
            </Box>
        </Box>
    </Box>
  )
}

export default Cta