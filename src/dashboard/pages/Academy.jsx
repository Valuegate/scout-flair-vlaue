import { Box, Grid, Text,Stack,Skeleton, Menu, MenuItem, MenuButton, IconButton, MenuList, useDisclosure,Modal,ModalOverlay,ModalContent,ModalCloseButton,ModalBody,  Button, } from '@chakra-ui/react'
import React  from 'react'
import { IoEllipsisVertical } from 'react-icons/io5'
import logo from '../../assets/academylogo.png'
import pic from '../../assets/grouppicture.png'
import Academydetails from '../components/Academydetails'
import { Link } from 'react-router-dom'
import {AddIcon } from '@chakra-ui/icons'
import { useQuery, } from 'react-query';
import { GetAcademy } from '../../api/UserInformation'

const Academy = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const userType = JSON.parse(localStorage.getItem('userType'));


      const { data:value, isLoading,error} = useQuery('myData', GetAcademy);
      if (error) return <div>Error: {error.message}</div>;

      
  return (
    <Box>
         <Box p='1rem' borderRadius='8px' bg='white' alignItems='center' display='flex' justifyContent='space-between' >
            <Box border='1px solid #333' p='.5rem' alignItems='center' display='flex'>
                <Text>Profile &nbsp;</Text>
                <Text display='inline-block' fontWeight='700' borderLeft='1px solid #333'>&nbsp;Academy</Text>
            </Box>
              {
                userType==='Admin'&&
                <Box w='35%' display='flex' justifyContent='flex-end' alignItems='center' > 
                <Box border='1px solid #333' cursor='pointer' w='full'  display='flex' justifyContent='space-evenly' alignItems='center' p='.25rem' borderRadius='.5rem'>
                    <AddIcon />
                    <Link to='/add-academy '><Text >Add Academy</Text></Link>
                </Box>
                &nbsp;
                
                </Box>
            }
        </Box>
        <Box w={['full','full']} mt='1rem' display='flex' justifyContent='space-between' flexDir={['column','column']}>
            <Box w={['full','100%']} display='flex' flexDir='column'>
                <Text fontWeight='700' mt='.75rem' mb='.5rem' fontSize=''>Performance Videos</Text>
                <Box p='1rem' borderRadius='8px' bg='white' display='flex' flexDir='column'>
                    
                    <Grid  w='full' h='100%' placeItems='center' justifyContent='space-evenly' mt='1rem' p={['1rem','']}  templateColumns={['repeat(1,1fr)','repeat(3,1fr)']} gap='9'>
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
                        value?.map((datas)=>{
                            return(
                            <Box key={datas?.id} w='304px' p='5px' h='391px' position='relative'>
                                <Box display='flex' mb='.5rem' justifyContent='space-between' alignItems='center' width='100%' >
                                    <img src={datas?.logoUrl?datas?.logoUrl:logo} style={{width:'56px',height:'56px',borderRadius:'50%'}} alt='logo' />
                                    <Box display='flex' flexDirection='column'>
                                        <Text fontSize='14px' fontWeight='700'>{datas?.name}</Text>
                                        <Text fontSize='13px' color='#0C1017' > {datas?.state} {datas?.country} </Text>                                        
                                    </Box>
                                    <Menu>
                                        <MenuButton
                                            as={IconButton}
                                            aria-label='Options'
                                            icon={<IoEllipsisVertical/>}
                                            variant='black'
                                        />
                                        <MenuList>
                                            {/* MenuItems are not rendered unless Menu is open */}
                                            <MenuItem onClick={onOpen} >View academy details</MenuItem>
                                            <MenuItem > View academy gallery</MenuItem>
                                            <MenuItem  >Locate academy</MenuItem>
                                        </MenuList>
                                        </Menu>
                                </Box>
                                <img src={datas?.imageUrl?datas?.imageUrl:pic} style={{width:'288px',height:'142px'}} alt='' />                              
                                
                                <Text fontWeight='700' mb='.5rem' fontSize='13px' mt='.5rem' >{datas?.longitude} {datas?.latitude}</Text>
                                <Text textAlign='justify' minH='60px'  mb='.5rem'>{datas?.description}</Text>
                                <Button mt='.5rem' w='full' bg='#000' color='#E5AA42' >Locate Academy</Button>
                            </Box>
                            )
                        })
                        )    :    (
                                <div>No data available</div>
                            )}
                    </Grid>
                </Box>
            </Box>
        </Box>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody >
                <Academydetails/>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default Academy