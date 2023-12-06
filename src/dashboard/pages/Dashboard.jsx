import { Box, Text, Image } from '@chakra-ui/react';
import React from 'react';
import img1 from '../../assets/arrowupgreen.svg'
import img2 from '../../assets/arrowdownred.svg'

const Dashboard = () => {
  return (
      <Box w="full" h="full">
        <Box
          display="flex"
          flexDirection={['column', 'column', 'column', 'row']}
          justifyContent={['center', 'center', 'center', 'space-between']}
          alignItems={['center', 'center', 'center', 'flex-start']}
          w="full"
        >
          <Box w='full' h='full' justifyContent='space-between' flexWrap={['wrap','wrap','wrap','']} display='flex'>
            <Box w='213px' h='125px' justifyContent='space-between' borderBottom='7px solid #C99C27' bg='#fff' borderRadius=' 8px' display='flex' flexDir='column' p='1rem' >
              <Text fontSize='18px'>Wins</Text>
              <Box display='flex' alignItems='center'>
                <Image src={img1} alt='green' />&nbsp;&nbsp;
                <Text fontSize='32px' color='#4f4545'>84</Text>
                <Text fontSize='20px' color='#b0b0b0b' as='span'>%</Text>
              </Box>
            </Box>
            <Box w='213px' h='125px' justifyContent='space-between' borderBottom='7px solid #EF0107' bg='#fff' borderRadius=' 8px' display='flex' flexDir='column' p='1rem' >
              <Text fontSize='18px'>Loses</Text>
              <Box display='flex' alignItems='center'>
                <Image src={img2} alt='green' />&nbsp;&nbsp;
                <Text fontSize='32px' color='#4f4545'>84</Text>
                <Text fontSize='20px' color='#b0b0b0b' as='span'>%</Text>
              </Box>
            </Box>
            <Box w='213px' h='125px' justifyContent='space-between' borderBottom='7px solid #4F4545' bg='#fff' borderRadius=' 8px' display='flex' flexDir='column' p='1rem' >
              <Text fontSize='18px'>Skills</Text>
              <Box display='flex' alignItems='center'>
                <Image src={img1} alt='green' />&nbsp;&nbsp;
                <Text fontSize='32px' color='#4f4545'>72</Text>
                <Text fontSize='20px' color='#b0b0b0b' as='span'>%</Text>
              </Box>
            </Box>
            <Box w='213px' h='125px' justifyContent='space-between' borderBottom='7px solid #191818' bg='#fff' borderRadius=' 8px' display='flex' flexDir='column' p='1rem' >
              <Text fontSize='18px'>Possession</Text>
              <Box display='flex' alignItems='center'>
                <Image src={img1} alt='green' />&nbsp;&nbsp;
                <Text fontSize='32px' color='#4f4545'>64</Text>
                <Text fontSize='20px' color='#b0b0b0b' as='span'>%</Text>
              </Box>
            </Box>
          </Box>
          
          {/* 
          <Box
            w={['full', 'full', 'full', '45%']}
            h="100%"
            borderRadius="16px"
            p="1rem"
            m="1rem"
            display="flex"
            alignItems="center"
            bg="rgba(242, 170, 198, 1)"
            justifyContent="center"
            flexDirection="column"
          >
            <Box display="flex" w="full" justifyContent="space-between">
              <Text
                color="rgba(12, 11, 11, 0.75)"
                fontWeight="700"
                fontSize="1.1rem"
              >
                Recent Orders
              </Text>
              <Text
                as="a"
                href="/orders"
                cursor="pointer"
                color="rgba(12, 11, 11, 0.75)"
                fontWeight="700"
                fontSize="1rem"
              >
                See All
              </Text>
            </Box>
            <Box w="full">
              <NotificationCard/>
            </Box>
          </Box>
          <Box
            w={['full', 'full', 'full', '45%']}
            minH="332px"
            borderRadius="16px"
            p="1rem"
            m="1rem"
            display="flex"
            alignItems={['center', 'flex-start']}
            bg="rgba(242, 170, 198, 1)"
            justifyContent="center"
            flexDirection="column"
          >
            <Box display="flex" w="full" justifyContent="space-between">
              <Text
                color="rgba(12, 11, 11, 0.75)"
                fontWeight="700"
                fontSize="1.1rem"
              >
                Top Products
              </Text>
              <Text
                as="a"
                href="/product"
                color="rgba(12, 11, 11, 0.75)"
                fontWeight="700"
                cursor="pointer"
                fontSize="1rem"
              >
                See All
              </Text>
            </Box>

            <Box display="flex" w="full" flexDirection="column">
              
            </Box>
          </Box> */}
        </Box>
        {/* ................................................. */}
        <Box display='flex' mt='1.5rem'> 
            <Box w={['full','60%']}>
              <Text fontWeight='700' fontSize='18px'>Player Performance Metrics</Text>
              <Box bg='#fff' p='1rem' borderRadius='4px' mt='.5rem' >
                <Box display='flex' justifyContent='space-between' borderBottom='1px solid #333' >
                  <Text>Player 1</Text>
                  <Box></Box>
                </Box>
              </Box>
            </Box>
          </Box>
      </Box>
  );
};

export default Dashboard;