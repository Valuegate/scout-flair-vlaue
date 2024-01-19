import { Box, Grid, Text, Menu, MenuItem, MenuButton, IconButton, MenuList, useDisclosure,Modal,ModalOverlay,ModalContent,ModalCloseButton,ModalBody, } from '@chakra-ui/react'
import React from 'react'
//import { Link } from 'react-router-dom'
import {AddIcon } from '@chakra-ui/icons'
import per from '../../assets/performance.png'
import square from '../../assets/Square.png'
import VideoUpload from '../components/VideoUpload'

const Tatics = () => {
    const data=[
        {
            img:per,
            id:1,
            text:'Goal at Last match with Team  A',
            category:'Category: Goals',
            date:'12/09/2023'
        },
        {
            img:per,
            id:2,
            text:'Goal at Last match with Team  A',
            category:'Category: Goals',
            date:'12/09/2023'
        },
        {
            img:per,
            id:3,
            text:'Goal at Last match with Team  A',
            category:'Category: Goals',
            date:'12/09/2023'
        },
        {
            img:per,
            id:4,
            text:'Goal at Last match with Team  A',
            category:'Category: Goals',
            date:'12/09/2023'
        }
        ,
        {
            img:per,
            id:5,
            text:'Goal at Last match with Team  A',
            category:'Category: Goals',
            date:'12/09/2023'
        },
        {
            img:per,
            id:6,
            text:'Goal at Last match with Team  A',
            category:'Category: Goals',
            date:'12/09/2023'
        },
        {
            img:per,
            id:7,
            text:'Goal at Last match with Team  A',
            category:'Category: Goals',
            date:'12/09/2023'
        },
        {
            img:per,
            id:8,
            text:'Goal at Last match with Team  A',
            category:'Category: Goals',
            date:'12/09/2023'
        },
        {
            img:per,
            id:9,
            text:'Goal at Last match with Team  A',
            category:'Category: Goals',
            date:'12/09/2023'
        }
    ]
    const { isOpen, onOpen, onClose } = useDisclosure()
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
                    <Grid  w='full' h='100%' placeItems='center' justifyContent='space-evenly' mt='1rem' p={['1rem','']}  templateColumns={['repeat(1,1fr)','repeat(4,1fr)']} gap='9'>
                        {
                        data.map((datas)=>{
                            return(
                                <Box w='229px' position='relative'>
                            <img  src={datas.img} alt='' />
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
                                    <MenuItem>Play Video</MenuItem>
                                    <MenuItem>Download Video</MenuItem>
                                    <MenuItem color='#e72422'>Delete Video</MenuItem>
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