import { Box, Text,Stack,Table, Thead, Tr, Th, Tbody, Td,Skeleton,Modal,ModalOverlay,ModalBody,ModalContent,ModalCloseButton,useDisclosure } from '@chakra-ui/react'
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
            <Box overflowX='scroll' w={['full','full']} display='flex' flexDir='column'>
                <Text>Local Pitches</Text>
                <Table overflowX='scroll' borderRadius='8px' mt='1rem' >
                    <Thead borderRadius='8px' color='#C99C27' bg='black'>
                        <Tr>
                        <Th color='#C99C27'>Name</Th>
                        <Th color='#C99C27'>Address</Th>
                        <Th color='#C99C27'>State</Th>
                        <Th color='#C99C27'>LGA</Th>
                        <Th color='#C99C27'>Geolocation</Th>
                        <Th color='#C99C27'>Surface</Th>
                        <Th color='#C99C27'>Dimension</Th>
                        <Th color='#C99C27'></Th>
                        </Tr>
                    </Thead>                    
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
                        value?.map((info)=>{
                                return(
                                <Tbody width='100%'>
                                    <Tr> 
                                        <Td>{info?.name}</Td>
                                        <Td>{info?.address} </Td>
                                        <Td>{info?.state} </Td>
                                        <Td>{info?.lga} </Td>
                                        <Td>Lat:{info?.latitude}, Lon:{info?.longitude}</Td>
                                        <Td>{info?.surface}</Td>
                                        <Td>{info?.width}</Td> 
                                    </Tr>
                                </Tbody>
                              )
                        })
                        )    :    (
                            <Box mt='1rem' w='100%' display='flex' alignItems='center' justifyContent='center'>
                            <Text ml='auto' textAlign='center !important'>No active player</Text>
                            </Box>
                        )}
                    
                </Table>
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