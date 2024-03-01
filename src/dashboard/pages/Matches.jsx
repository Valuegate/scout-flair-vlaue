import { Box, Text,Stack, Skeleton, useDisclosure,Modal,ModalOverlay,ModalContent,ModalCloseButton,ModalBody,  } from '@chakra-ui/react'
import React from 'react'
import teamb from '../../assets/b.png'
import { Link } from 'react-router-dom'
import {AddIcon } from '@chakra-ui/icons'
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
            <Box w={['full','full']} display='flex' flexDir='column'>
                <Text>Upcoming Match</Text>
                <Box p='1rem' borderRadius='8px' bg='white' display='flex' flexDir='column'>
                    <Box p='1rem' borderTopLeftRadius='8px' borderTopRightRadius='8px' fontWeight='700' color='#C99C27' bg='black' display='flex' justifyContent='space-between'>
                        <Text>Home Team</Text>
                        <Text>Away Team</Text>
                        <Text>Time</Text>
                        <Text>Date</Text>
                        <Text>Competition</Text>
                        <Text>Refree</Text>
                        <Text>Stadium/Pitch</Text>
                    </Box>
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
                        coming?.map((data)=>{
                            return(
                     <Box p='1rem' key={data?.id} borderRadius='8px'color='#000' bg='#fff' mt='.5rem' display='flex' justifyContent='space-between'>
                         <Box display='flex'>
                            <img src={data?.homeTeamLogoUrl?data?.homeTeamLogoUrl:teamb} alt='team a' />
                            <Text marginLeft='.5rem'>Team A 2</Text>
                        </Box>
                        <Box display='flex'>
                            <img src={data?.awayTeamLogoUrl?data?.awayTeamLogoUrl:teamb} alt='team a' />
                            <Text marginLeft='.5rem'>Team B 0</Text>
                        </Box>
                        <Text textAlign='center'>{data?.dateTime}</Text>
                        <Text textAlign='center'> {data?.date} </Text>
                        <Text textAlign='center'>{data?.competition}</Text>
                        <Text textAlign='center'>{data?.stadium}</Text>
                    </Box>
                    )
                        })
                        )    :    (
                                <div>No data available</div>
                            )}
                </Box>
                <Box w={['full','full']} display='flex' mt='.75rem' flexDir='column'>
                <Text> Previous Match Result</Text>
                <Box p='1rem' borderTopLeftRadius='8px' borderTopRightRadius='8px' bg='white' display='flex' flexDir='column'>
                    <Box p='1rem' borderRadius='8px' fontWeight='700' color='#C99C27' bg='black' display='flex' justifyContent='space-between'>
                        <Text>Home Team</Text>
                        <Text>Away Team</Text>
                        <Text>Time</Text>
                        <Text>Date</Text>
                        <Text>Competition</Text>
                        <Text>Stadium/Pitch</Text>
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
                         <Box display='flex'>
                            <img src={data?.homeTeamLogoUrl?data?.homeTeamLogoUrl:teamb} alt='team a' />
                            <Text marginLeft='.5rem'>Team A 2</Text>
                        </Box>
                        <Box display='flex'>
                            <img src={data?.awayTeamLogoUrl?data?.awayTeamLogoUrl:teamb} alt='team a' />
                            <Text marginLeft='.5rem'>Team B 0</Text>
                        </Box>
                        <Text textAlign='center'>{data?.dateTime}</Text>
                        <Text textAlign='center'> {data?.date} </Text>
                        <Text textAlign='center'>{data?.competition}</Text>
                        <Text textAlign='center'>{data?.stadium}</Text>
                    </Box>
                    )
                        })
                        )    :    (
                                <div>No data available</div>
                            )}
                </Box>
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