import { Box, Grid, Text, Menu, MenuItem, MenuButton, IconButton, MenuList, useDisclosure,Modal,ModalOverlay,ModalContent,ModalCloseButton,ModalBody, Spinner, } from '@chakra-ui/react'
import React, {useState, } from 'react'
//import { Link } from 'react-router-dom'
import {AddIcon } from '@chakra-ui/icons'
import square from '../../assets/Square.png'
import VideoUpload from '../components/VideoUpload'
import { useQuery, useMutation,useQueryClient } from 'react-query';
import { GetTatics,DeleteTactics } from '../../api/UserInformation'

const Tatics = () => {
    const [isPlaying, setIsPlaying] = useState(false);


  
  const handleVideoClick = () => {
    const video = document.getElementById('video');

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }

    setIsPlaying(!isPlaying);
  };
    const { isOpen, onOpen, onClose } = useDisclosure();

  const queryClient = useQueryClient();

  const mutation = useMutation(DeleteTactics, {
    onSuccess: (data) => {
      // Invalidate and refetch the video list query after successful deletion
      alert('Video Deleted')
      queryClient.invalidateQueries('videoList');
      console.log(`Video with ID ${data} deleted successfully`);
    },
  });

  const handleDelete = (tacticsId) => {
    // Call the mutation function with the tacticsId
    mutation.mutate(tacticsId);
  };
    const { data, isLoading} = useQuery('myData', GetTatics);

  
  return (
    <Box>
         <Box p='1rem' borderRadius='8px' bg='white' alignItems='center' display='flex' justifyContent='space-between' >
            <Box border='1px solid #333' p='.5rem' alignItems='center' display='flex'>
                <Text>Profile &nbsp;</Text>
                <Text display='inline-block' fontWeight='700' borderLeft='1px solid #333'>&nbsp;Tatics</Text>
            </Box>
            <Box border='1px solid #333' cursor='pointer' w='130px' onClick={onOpen} display='flex' justifyContent='space-evenly' alignItems='center' p='.25rem' borderRadius='.5rem'>
                <AddIcon />
                <Text >Add Tatics</Text>
            </Box>
        </Box>
        <Box w={['full','full']} mt='1rem' display='flex' justifyContent='space-between' flexDir={['column','column']}>
            <Box w={['full','100%']} display='flex' flexDir='column'>
                <Text fontWeight='700' mt='.75rem' mb='.5rem' fontSize=''>Performance Videos</Text>
                <Box p='1rem' borderRadius='8px' bg='white' display='flex' flexDir='column'>
                    { isLoading?
                    <Box w='100%' h='100%' display='flex' alignItems='center' justifyContent='center'>
                    <Spinner/>
                    </Box>
                    :
                    <Grid  w='full' h='100%' placeItems='center' justifyContent='space-evenly' mt='1rem' p={['1rem','']}  templateColumns={['repeat(1,1fr)','repeat(4,1fr)']} gap='9'>
                        {
                        data?.map((datas)=>{
                            return(
                            <Box key={data.id} w='229px' position='relative'>
                            <video width="229" height="139" id="video" controls>
                                <source src={datas.videoUrl} />
                            </video>
                            
                            <Box  position='absolute' top='0px' right='0' zIndex='1000'>
                                 <Menu>
                                <MenuButton
                                    as={IconButton}
                                    aria-label='Options'
                                    icon={<img src={square} alt='' />}
                                    variant='none'
                                />
                                <MenuList>
                                    {/* MenuItems are not rendered unless Menu is open */}
                                    <MenuItem  onClick={handleVideoClick}>{isPlaying? 'Pause Video':'Play Video'}</MenuItem>
                                    <MenuItem > <a href={datas?.videoUrl} target='_blank' rel="noreferrer" download> Download Video </a></MenuItem>
                                    <MenuItem color='#e72422' onClick={(tacticsId)=>handleDelete(tacticsId=datas?.id)} >Delete Video</MenuItem>
                                </MenuList>
                            </Menu>
                            </Box>
                           <Text fontWeight='700' fontSize='12px' mt='.5rem' >{datas.text}</Text>
                           <Box w='full' display='flex' mt='.5rem' justifyContent='space-between' flexDir={['column','row']}>
                            <Text fontSize='8px' color='#4f4545'>{datas.category}</Text>
                            <Text fontSize='8px' color='#4f4545'>{datas.date}</Text>
                           </Box>
                        </Box>
                            )
                        })
}
                    </Grid>
                    }
                </Box>
            </Box>
        </Box>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody w='full'>
                <VideoUpload />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default Tatics