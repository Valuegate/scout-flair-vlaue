import { Box, Text, Input, Button } from '@chakra-ui/react'
import React from 'react'

const Cta = () => {
  return (
    <Box>
        <Box w='full'h={['100%','100%','100vh']} bg='#1A1818' display='flex' p='2rem' alignItems='center' justifyContent='center' flexDirection={['column','row']}>
            <Box w='75%' h='202px' display='flex' bg='#C99C27' p='2rem' shadow='-9px 8px 0px #765e1f' justifyContent='space-between' alignItems='center' >
                <Text color='#1A1818' fontWeight='700' fontSize='24px' >Join our team today</Text>
                <Input type='text' w='45%' display='block' bg='#fff' placeholder='email' color='rgba(0, 0, 0, 0.34)' borderRadius='25px' />
                <Button bg='#1A1818' fontSize='24px' borderRadius='none' color='#C99C27' p='1rem' > Join Now</Button>
            </Box>
        </Box>
    </Box>
  )
}

export default Cta