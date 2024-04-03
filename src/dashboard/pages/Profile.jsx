import { Box, Text } from '@chakra-ui/react'
import {EditIcon} from '@chakra-ui/icons'
import React from 'react'
import pic from '../../assets/profilepic.png'
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query';
import { GetProfile } from '../../api/UserInformation'


const Profile = () => {
    // eslint-disable-next-line
     const { data, isLoading} = useQuery('myData', GetProfile);
     const userType = JSON.parse(localStorage.getItem('userType'));
      
    
  return (
    <Box w='100%' h='100%' >
        <Box p='1rem' borderRadius='8px' bg='white' alignItems='center' display='flex' justifyContent='space-between' >
            <Box border='1px solid #333' p='.5rem' alignItems='center' display='flex'>
                <Text>Profile &nbsp;</Text>
                <Text display='inline-block' fontWeight='700' borderLeft='1px solid #333'>&nbsp;{data?.fullName}</Text>
            </Box>
            <Box border='1px solid #333' w='130px' display='flex' justifyContent='space-evenly' alignItems='center' p='.25rem' borderRadius='.5rem'>
                <EditIcon />
                <Link to='/edit-profile'>Edit Profile</Link>
            </Box>
        </Box>
        <Box mt='1rem' w='100%' h='100%' justifyContent='space-between' display='flex' flexDir={['column','row']} >
            <Box p='1rem' borderRadius='8px' w={['full' ,'45%']} bg='white' display='flex' alignItems='center' justifyContent='space-between' >
                <img src={data?.imageUrl || pic} alt='' />
            </Box>
            <Box p='1rem' borderRadius='8px' w={['full' ,'50%']} bg='white' display='flex' flexDir='column' justifyContent='space-between' >
                <Text fontWeight='700' mb='1rem' fontSize='18px' color='#c99c27' bg='#000' p='.5rem' >Player Profile</Text>
                <Box w='full' h='100%' display='flex' flexDir='column' >
                    <Box w='full' display='flex' justifyContent='space-between' bg='#e9e9e9' mb='.5rem' p='.5rem' >
                        <Text>Player's Name:</Text>
                        <Text>{data?.fullName}</Text>
                    </Box>
                    <Box w='full' display='flex' justifyContent='space-between' bg='#e9e9e9' mb='.5rem' p='.5rem'>
                        <Text>Date of Birth:</Text>
                        <Text>{data?.dob}</Text>
                    </Box>
                    <Box w='full' display='flex' justifyContent='space-between' bg='#e9e9e9' mb='.5rem' p='.5rem'>
                        <Text>{userType==='PLAYER'?'Nationality':'Current Team'}:</Text>
                        <Text>{userType==='PLAYER'?data?.nationality:data?.currentTeam}</Text>
                    </Box>
                    <Box w='full' display='flex' justifyContent='space-between' bg='#e9e9e9' mb='.5rem' p='.5rem'>
                        <Text>
                            Height:
                        </Text>
                        <Text> { data?.height || `6'2" (188 cm)` } </Text>
                    </Box>
                    <Box w='full' display='flex' justifyContent='space-between' bg='#e9e9e9' mb='.5rem' p='.5rem'>
                        <Text>
                            Weight:
                        </Text>
                        <Text>{data?.weight || `175 lbs (79 kg)`}</Text>
                    </Box>
                    <Box w='full' display='flex' justifyContent='space-between' bg='#e9e9e9' mb='.5rem' p='.5rem'>
                        <Text>
                            Preffered Foot:
                        </Text>
                        <Text> {data?.prefferedFoot || 'Right'} </Text>
                    </Box>
                    <Box w='full' display='flex' justifyContent='space-between' bg='#e9e9e9' mb='.5rem' p='.5rem'>
                        <Text>
                            Biography:
                        </Text>
                        <Text overflowY='scroll' maxH='2rem' width='50%'>{data?.biography || 'Player one is an experienced forward known for his goal-scoring abilities'} </Text>
                    </Box>
                    <Box w='full' display='flex' justifyContent='space-between' bg='#e9e9e9' mb='.5rem' p='.5rem'>
                        <Text>
                            Injury Status:
                        </Text>
                        <Text>{data?.status ||'Available'}</Text>
                    </Box>
                    <Box w='full' display='flex' justifyContent='space-between' bg='#e9e9e9' mb='.5rem' p='.5rem'>
                        <Text>
                            Jersey Number:
                        </Text>
                        <Text>{data?.jerseyNumber||'02'}</Text>
                    </Box>
                    <Box w='full' display='flex' justifyContent='space-between' bg='#e9e9e9' mb='.5rem' p='.5rem'>
                        <Text>
                            Current Team:
                        </Text>
                        <Text>{data?.currentTeam || '02'}</Text>
                    </Box>
                    <Box w='full' display='flex' justifyContent='space-between' bg='#e9e9e9' mb='.5rem' p='.5rem'>
                        <Text>
                            Position:
                        </Text>
                        <Text>{data?.position || 'Goal Keeper'}</Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Profile