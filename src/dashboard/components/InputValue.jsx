import React from 'react'
import {Box,Text, Input } from '@chakra-ui/react'

const InputValue = ({text,placeholder,value,type}) => {
  return (
    <Box mt='.75rem'>
        <Text color='#1a1818' fontSize='1rem' fontWeight='500' mb='.5rem'>{text}:</Text>
        <Input placeholder={placeholder} type={type===null?'text':type} value={value} border='1px solid #ccc' borderRadius='8px' fontSize='1rem' color='#0c0b0b' p='16px 8px' w='full' />
    </Box>
  )
}

export default InputValue