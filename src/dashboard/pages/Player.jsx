import { Box, Grid, Text, Menu, MenuItem, MenuButton, IconButton, MenuList,  } from '@chakra-ui/react'
import React, {useState} from 'react'
//import { Link } from 'react-router-dom'
import {AddIcon } from '@chakra-ui/icons'
import square from '../../assets/blackSquare.png'
// import teamb from '../../assets/b.png'
import { Link } from 'react-router-dom'
import { GetPlayers } from '../../api/UserInformation'
import { useQuery, } from 'react-query';

const Player = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const { data:value,isLoading} = useQuery('myData', GetPlayers);
     const userType = JSON.parse(localStorage.getItem('userType'));

    // useEffect(()=>{
    //     if(!isLoading){
    //         console.log(valu)
    //     }
    // },[isLoading])


  
  const handleVideoClick = () => {
    const video = document.getElementById('video');

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }

    setIsPlaying(!isPlaying);
  };

  
  const handleDelete = () => {
    // Call the mutation function with the tacticsId
   
  };

  
  return (
    <Box>
         <Box p='1rem' borderRadius='8px' bg='white' alignItems='center' display='flex' justifyContent='space-between' >
            <Box border='1px solid #333' p='.5rem' alignItems='center' display='flex'>
                <Text>Profile &nbsp;</Text>
                <Text display='inline-block' fontWeight='700' borderLeft='1px solid #333'>&nbsp;Player</Text>
            </Box>
            <Box border='1px solid #333' cursor='pointer' w='130px'  display='flex' justifyContent='space-evenly' alignItems='center' p='.25rem' borderRadius='.5rem'>
                <AddIcon />
                <Link to='/add-player'><Text >Add Player</Text></Link>
            </Box>
        </Box>
        <Box w={['full','full']} mt='1rem' display='flex' justifyContent='space-between' flexDir={['column','column']}>
            <Box w={['full','100%']} display='flex' flexDir='column'>
                <Text fontWeight='700' mt='.75rem' mb='.5rem' fontSize=''>Performance Videos</Text>
                <Box p='1rem' borderRadius='8px' bg='white' display='flex' flexDir='column'>
                    {/* { isLoading?
                    <Box w='100%' h='100%' display='flex' alignItems='center' justifyContent='center'>
                    <Spinner/>
                    </Box>
                    : */}
                    <Grid  w='full' h='100%' placeItems='center' justifyContent='space-evenly' mt='1rem' p={['1rem','']}  templateColumns={['repeat(1,1fr)','repeat(4,1fr)']} gap='9'>
                        {!isLoading&&
                userType==='COACH'&&  value?.map((data)=>{
                    return(
                        <Box key={data.id} w='229px' position='relative'>
                            <img width="229" height="139"  src={data?.imageUrl} alt="video" />  
                            <Box  position='absolute' width='100%'  display='flex' alignItems='center' justifyContent='space-between' top='0px' right='0' zIndex='1000'>
                               <Box display='flex' alignItems='baseline' justifyContent='center' marginTop='.75rem' flexDir='column'>
                                    <Text fontWeight='700' fontSize='12px'>{data?.dob}</Text>
                                    <img width='20px' height='20px' src={data?.imageUrl} alt='team a' />
                               </Box>
                                 <Menu>
                                <MenuButton
                                    as={IconButton}
                                    aria-label='Options'
                                    icon={<img src={square} alt='' />}
                                    variant='none'
                                />
                                <MenuList>
                                    {/* MenuItems are not rendered unless Menu is open */}
                                    <MenuItem  onClick={handleVideoClick}>View Player Profile</MenuItem>
                                    <MenuItem >Update Player Data</MenuItem>
                                    <MenuItem color='#e72422' onClick={()=>handleDelete()} >Remove Player</MenuItem>
                                </MenuList>
                            </Menu>
                            </Box>
                           <Text fontWeight='700'  p='10px' textAlign='center' fontSize='20px'  background='#e8e8e8' mt='.5rem' >{data?.fullName}</Text>
                           <Box w='full' display='flex' borderBottomLeftRadius='8px' borderBottomRightRadius='8px' background='#0C1017BF' p='.75rem' justifyContent='space-between' flexDir={['column','row']}>
                            <Box>
                               <Text fontSize='12px' fontFamily='Inter' color='#fff'>Age</Text>
                                <Text fontSize='12px' fontFamily='Inter' color='#fff'>{data?.dob}</Text> 
                            </Box>
                            <Box>
                               <Text fontSize='12px' fontFamily='Inter' color='#fff'>Position</Text>
                                <Text fontSize='12px' fontFamily='Inter' color='#fff'>{data?.position}</Text> 
                            </Box>
                            <Box>
                               <Text fontSize='12px' fontFamily='Inter' color='fff'>country</Text>
                                <Text fontSize='12px' fontFamily='Inter' color='#fff'>{data?.address}</Text> 
                            </Box>
                           </Box>
                        </Box>
                    )
                })                
                }
                         {/* <Box  w='229px' position='relative'>
                            <img width="229" height="139"  src={player} alt="video" />
                               
                            
                            <Box  position='absolute' width='100%'  display='flex' alignItems='center' justifyContent='space-between' top='0px' right='0' zIndex='1000'>
                               <Box display='flex' alignItems='baseline' justifyContent='center' marginTop='.75rem' flexDir='column'>
                                    <Text fontWeight='700' fontSize='12px'>2022-24</Text>
                                    <img width='20px' height='20px' src={teamb} alt='team a' />
                               </Box>
                                 <Menu>
                                <MenuButton
                                    as={IconButton}
                                    aria-label='Options'
                                    icon={<img src={square} alt='' />}
                                    variant='none'
                                />
                                <MenuList>
                                    <MenuItem  onClick={handleVideoClick}>View Player Profile</MenuItem>
                                    <MenuItem >Update Player Data</MenuItem>
                                    <MenuItem color='#e72422' onClick={()=>handleDelete()} >Remove Player</MenuItem>
                                </MenuList>
                            </Menu>
                            </Box>
                           <Text fontWeight='700'  p='10px' textAlign='center' fontSize='20px'  background='#e8e8e8' mt='.5rem' >Name Surname</Text>
                           <Box w='full' display='flex' borderBottomLeftRadius='8px' borderBottomRightRadius='8px' background='#0C1017BF' p='.75rem' justifyContent='space-between' flexDir={['column','row']}>
                            <Box>
                               <Text fontSize='12px' fontFamily='Inter' color='#fff'>Age</Text>
                                <Text fontSize='12px' fontFamily='Inter' color='#fff'>16</Text> 
                            </Box>
                            <Box>
                               <Text fontSize='12px' fontFamily='Inter' color='#fff'>Position</Text>
                                <Text fontSize='12px' fontFamily='Inter' color='#fff'>Forwar</Text> 
                            </Box>
                            <Box>
                               <Text fontSize='12px' fontFamily='Inter' color='fff'>country</Text>
                                <Text fontSize='12px' fontFamily='Inter' color='#fff'>NgN</Text> 
                            </Box>
                           </Box>
                        </Box> */}
                    </Grid>
                    
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Player