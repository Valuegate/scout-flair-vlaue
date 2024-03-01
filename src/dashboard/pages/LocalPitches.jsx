import { Box, Text,Stack,Skeleton,Modal,ModalOverlay,ModalBody,ModalContent,ModalCloseButton,useDisclosure } from '@chakra-ui/react'
import React from 'react'
import {AddIcon } from '@chakra-ui/icons'
import AddLocalPitches from '../components/AddLocalPitches'
import { useQuery, } from 'react-query';
import { GetLocalPitches } from '../../api/UserInformation'

const LocalPitches = () => {
     const userType = JSON.parse(localStorage.getItem('userType'));
     const { isOpen, onOpen, onClose } = useDisclosure();
     const { data:value, isLoading,} = useQuery('myData', GetLocalPitches);
  return (
    <Box>
        <Box p='1rem' borderRadius='8px' bg='white' display='flex' justifyContent='space-between' >
            <Box border='1px solid #333' p='.5rem' alignItems='center' display='flex'>
                <Text>Dashboard &nbsp;</Text>
                <Text display='inline-block'  borderLeft='1px solid #333'>&nbsp;Local Pitches</Text>
            </Box>
             {
                userType==='Admin'&&
                <Box w='20%' display='flex' justifyContent='flex-end' alignItems='center' > 
                <Box border='1px solid #333' cursor='pointer' onClick={onOpen} w='full'  display='flex' justifyContent='space-evenly' alignItems='center' p='.25rem' borderRadius='.5rem'>
                    <AddIcon /><Text >Add Local Pitches</Text>
                </Box>               
                </Box>
            }
        </Box>
        <Box w={['full','full']} mt='1rem'  display='flex'  justifyContent='space-between' flexDir={['column','column']}>
            <Box w={['full','full']} display='flex' flexDir='column'>
                <Text>Local Pitches</Text>
                <Box p='1rem' borderRadius='8px' bg='white' display='flex' flexDir='column'>
                    <Box p='1rem' borderTopLeftRadius='8px' borderTopRightRadius='8px' fontWeight='700' color='#C99C27' bg='black' display='flex' justifyContent='space-between'>
                        <Text>Name</Text>
                        <Text>Address</Text>
                        <Text>State</Text>
                        <Text>LGA</Text>
                        <Text>Geolocation</Text>
                        <Text>Surface</Text>
                        <Text>Dimension</Text>
                    </Box>
                      {
                            isLoading?
                             <Box w='100%' h='100%' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                                <Stack>
                                <Skeleton height='20px' />
                                <Skeleton height='20px' />
                                <Skeleton height='20px' />
                                <Skeleton height='20px' />
                                <Skeleton height='20px' />
                                </Stack>
                            </Box>
                            :value ?(
                        value?.map((data)=>{
                            return(
                    <Box p='1rem' key={data?.id} borderRadius='8px'color='#000' bg='#fff' mt='.5rem' display='flex' justifyContent='space-between'>
                         
                        <Text>{data?.name}</Text>
                        <Text>{data?.address}</Text>
                        <Text textAlign='center'>{data?.state}</Text>
                        <Text textAlign='center'>{data?.lga}</Text>
                        <Text textAlign='center'>Lat:{data?.latitude}, Lon:{data?.longitude}</Text>
                        <Text textAlign='center'>{data?.surface}</Text>
                        <Text textAlign='center'>{data?.width}</Text>
                    </Box>
                    )
                        })
                        )    :    (
                                <div>No data available</div>
                            )}
                </Box>
            </Box>
        </Box>
         <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody w='full'>
                <AddLocalPitches onClose={onClose}/>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default LocalPitches