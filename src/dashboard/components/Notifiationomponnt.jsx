import { Box,Text } from '@chakra-ui/react'
import React from 'react'

const NotificationCard = () => {
  return (
    <Box
      w="full"
      bg="#fff"
      borderRadius="8px"
      p="1rem"
      display="flex"
      flexDirection={['column', 'row']}
      justifyContent="space-evenly"
      alignItems="center"
      mb='1rem'
    >
      <Text w="50px" h="50px" borderRadius="50%" bg="#ccc" />
      <Box>
        <Text fontWeight="700" color="#D4145A">
          Order Notification:
        </Text>
        <Text color="#0C0B0B">8:53</Text>
      </Box>
      <Text color="#0C0B0B">
        Your order has been shipped and is on it’s way to you
      </Text>
    </Box>
  );
}

export default NotificationCard