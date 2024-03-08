import { Box, Text,Stack, Skeleton,Table, Thead, Tr, Th, Tbody, Td,  useDisclosure,Modal,ModalOverlay,ModalContent,ModalCloseButton,ModalBody,  } from '@chakra-ui/react'
import React from 'react'
import teamb from '../../assets/b.png'
import { Link } from 'react-router-dom'
import {AddIcon, } from '@chakra-ui/icons'
import NewMatch from '../components/NewMatch'
import { useQuery, } from 'react-query';
import { GetPreviousMatches, GetUpComingMatches } from '../../api/UserInformation'

const Matches = () => {
    const userType = JSON.parse(localStorage.getItem('userType'));
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { data:value, isLoading,} = useQuery('myData', GetPreviousMatches);
    const { data:coming, loading,} = useQuery('myData', GetUpComingMatches);
  return (
    <Box>
        <Box p='1rem' borderRadius='8px' bg='white' display='flex' justifyContent='space-between' >
            <Box border='1px solid #333' p='.5rem' alignItems='center' display='flex'>
                <Text>Dashboard &nbsp;</Text>
                <Text display='inline-block' borderLeft='1px solid #333'>&nbsp;Matches</Text>
            </Box>
            {
                userType==='COACH'?
                <Box w='35%' display='flex' justifyContent='flex-end' alignItems='center' > 
                <Box border='1px solid #333' cursor='pointer' w='full'  display='flex' justifyContent='space-evenly' alignItems='center' p='.25rem' borderRadius='.5rem'>
                    <AddIcon />
                    <Link to='/add-player'><Text >Add Match Result</Text></Link>
                </Box>
                &nbsp;
                <Box border='1px solid #333' onClick={onOpen} cursor='pointer' w='full'  display='flex' justifyContent='space-evenly' alignItems='center' p='.25rem' borderRadius='.5rem'>
                    <AddIcon />
                    <Text >Add New Match</Text>
                </Box>
                </Box>
                : null
            }
             {
                userType==='Admin'&&
                <Box w='20%' display='flex' justifyContent='flex-end' alignItems='center' > 
                <Box border='1px solid #333' cursor='pointer' onClick={onOpen} w='full'  display='flex' justifyContent='space-evenly' alignItems='center' p='.25rem' borderRadius='.5rem'>
                    <AddIcon /><Text >Add Matches</Text>
                </Box>               
                </Box>
            }
            
        </Box>
        <Box w={['full','full']} mt='1rem'  display='flex'  justifyContent='space-between' flexDir={['column','column']}>
            <Box w={['full','full']} display='flex' overflowX='scroll' flexDir='column'>
                <Text>Upcoming Match</Text>
                <Table borderRadius='8px' mt='1rem' >
                    <Thead borderRadius='8px' color='#C99C27' bg='black'>
                        <Tr>
                        <Th color='#C99C27'>Home Team</Th>
                        <Th color='#C99C27'>Away Team</Th>
                        <Th color='#C99C27'>Time</Th>
                        <Th color='#C99C27'>Date</Th>
                        <Th color='#C99C27'>Competition</Th>
                        <Th color='#C99C27'>Refree</Th>
                        <Th color='#C99C27'>Stadium/Pitch</Th>
                        <Th color='#C99C27'></Th>
                        </Tr>
                    </Thead>                    
                          {
                            loading?
                             <Box w='100%' h='100%' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                                <Stack>
                                <Skeleton height='20px' />
                                <Skeleton height='20px' />
                                <Skeleton height='20px' />
                                <Skeleton height='20px' />
                                <Skeleton height='20px' />
                                </Stack>
                            </Box>
                            :coming ?(
                        coming?.map((info)=>{
                                return(
                                <Tbody width='100%'>
                                    <Tr> 
                                        <Td><img src={info?.homeTeamLogoUrl?info?.homeTeamLogoUrl:teamb}alt='pic'/>M</Td>
                                        <Td> <img src={info?.awayTeamLogoUrl?info?.awayTeamLogoUrl:teamb} alt='pic' /> </Td>
                                        <Td>{info?.dateTime }</Td>
                                        <Td>{info?.date }</Td>
                                        <Td>{info?.competition }</Td>
                                        <Td>{info?.referee}</Td>
                                        <Td>{info?.stadiumPitch}</Td> 
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
                <Box w={['full','full']}  display='flex' mt='.75rem' flexDir='column'>
                <Text> Previous Match Result</Text>
                 <Table borderRadius='8px' mt='1rem' >
                    <Thead borderRadius='8px' color='#C99C27' bg='black'>
                        <Tr>
                        <Th color='#C99C27'>Home Team</Th>
                        <Th color='#C99C27'>Away Team</Th>
                        <Th color='#C99C27'>Time</Th>
                        <Th color='#C99C27'>Date</Th>
                        <Th color='#C99C27'>Competition</Th>
                        <Th color='#C99C27'>Stadium/Pitch</Th>
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
                            :value?(
                        coming?.map((info)=>{
                                return(
                                <Tbody width='100%'>
                                    <Tr> 
                                        <Td><img src={info?.homeTeamLogoUrl?info?.homeTeamLogoUrl:teamb}alt='pic'/>M</Td>
                                        <Td> <img src={info?.awayTeamLogoUrl?info?.awayTeamLogoUrl:teamb} alt='pic' /> </Td>
                                        <Td>{info?.dateTime }</Td>
                                        <Td>{info?.date }</Td>
                                        <Td>{info?.competition }</Td>
                                        <Td>{info?.stadiumPitch}</Td> 
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
        </Box>
          <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody w='full'>
                <NewMatch onClose={onClose}/>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default Matches