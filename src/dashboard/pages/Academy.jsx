import { Box, Grid, Text,Stack,Skeleton, Menu, MenuItem, MenuButton, IconButton, MenuList, useDisclosure,Modal,ModalOverlay,ModalContent,ModalCloseButton,ModalBody,  Button, } from '@chakra-ui/react'
import React,{useState}  from 'react'
import { IoEllipsisVertical } from 'react-icons/io5'
import logo from '../../assets/academylogo.png'
import pic from '../../assets/grouppicture.png'
import Academydetails from '../components/Academydetails'
import { Link } from 'react-router-dom'
import {AddIcon } from '@chakra-ui/icons'
import { useQuery, } from 'react-query';
import { GetAcademy } from '../../api/UserInformation'
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'

const Academy = () => {
    const { isOpen, onClose } = useDisclosure();
    const userType = JSON.parse(localStorage.getItem('userType'));


      const { data:value, isLoading} = useQuery('myData', GetAcademy);
      
const [currentPage, setCurrentPage] = useState(1);
const recordsPerPage = 6;
const lastIndex = currentPage * recordsPerPage;
const firstIndex = lastIndex - recordsPerPage;

// Ensure the data exists before accessing it
const data = value || [];
const records = data.slice(firstIndex, lastIndex);

// Ensure the data length is greater than 0 to avoid division by 0
const npage = Math.ceil(data.length / recordsPerPage);

// Ensure npage is a non-negative number
const validNpage = Math.max(npage, 0);

// Generate numbers array only if validNpage is a positive number
const numbers = validNpage > 0 ? [...Array(validNpage + 1).keys()].slice(1) : [];


     const prePage=()=>{
    if(currentPage !== 1) {
        setCurrentPage(currentPage - 1);
    }
  }
  const changeCPage=(id)=>{
    setCurrentPage(id);
  }
  const nextPage=()=>{
    if(currentPage !== npage){
        setCurrentPage(currentPage + 1)
    }
  }


      
  return (
    <Box>
         <Box p='1rem' borderRadius='8px' bg='white' alignItems='center' display='flex' justifyContent='space-between' >
            <Box border='1px solid #333' p='.5rem' alignItems='center' display='flex'>
                <Text>Profile &nbsp;</Text>
                <Text display='inline-block' fontWeight='700' borderLeft='1px solid #333'>&nbsp;Academy</Text>
            </Box>
              {
                userType==='Admin'&&
                <Box w='20%' display='flex' justifyContent='flex-end' alignItems='center' > 
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
                            :records ?(
                        records?.map((datas)=>{
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
                                            <MenuItem ><Link to={`/academy-details/${datas?.id}`} state={{
              name:datas?.name, id:datas?.id, address:datas?.address, latitude:datas?.latitude,longitude:datas?.longitude,principalOrCoach : datas?.principalOrCoach,founded:datas?.founded, competedCount:datas?.competedCount, winCount:datas?.winCount, lostCount:datas?.lostCount 
            }} >View academy details</Link></MenuItem>
                                            {/* <MenuItem > View academy gallery</MenuItem>*/}
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
                      <Box w='full' float='right' display='flex' justifyContent='flex-end'>
                    <Box display='flex' w='30%' alignItems='center' justifyContent='space-evenly'>
                            <Button p='.5rem' border='1px solid #ccc' borderRadius='4px' display='flex' justifyContent='center' alignItems='center' isDisabled={currentPage === 1&&true}>
                                <ArrowLeftIcon/> &nbsp; &nbsp;
                                <Text onClick={prePage} >Prev</Text>
                            </Button>
                            {
                                numbers.map((n,i)=>(
                                    <Box w='35px' h='35px' display='flex' fontSize='.7rem' justifyContent='center' alignItems='center' borderRadius='4px' border='1px solid lightblue' background='lightblue' fontWeight={currentPage===n&&'700'}  color={currentPage === n ? "black" : '#fff'} >
                                        <Text onClick={changeCPage}>{n}</Text>
                                    </Box>
                                ))
                            }
                            <Button isDisabled={currentPage === npage &&true} p='.5rem' border='1px solid #ccc' borderRadius='4px' display='flex' justifyContent='center' alignItems='center' cursor='pointer'>                            
                                <Text onClick={nextPage} >Next</Text>&nbsp;&nbsp; <ArrowRightIcon/>
                            </Button>
                    </Box>
                </Box>
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