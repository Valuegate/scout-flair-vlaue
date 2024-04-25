import { Box, Text,Stack,Button,Table, Thead, Tr, Th, Tbody, Td,Skeleton,Modal,ModalOverlay,ModalBody,ModalContent,ModalCloseButton,useDisclosure } from '@chakra-ui/react'
import React,{useState} from 'react'
import {AddIcon } from '@chakra-ui/icons'
import AddLocalPitches from '../components/AddLocalPitches'
import { useQuery, } from 'react-query';
import { GetLocalPitches } from '../../api/UserInformation'
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'

const LocalPitches = () => {
     const userType = JSON.parse(localStorage.getItem('userType'));
     const { isOpen, onOpen, onClose } = useDisclosure();
     const { data:value, isLoading,} = useQuery('myData', GetLocalPitches);

     const [currentPage, setCurrentPage] = useState(1);
const recordsPerPage = 5;
const lastIndex = currentPage * recordsPerPage;
const firstIndex = lastIndex - recordsPerPage;

// for previous matches
// Ensure the data exists before accessing it
const info = value || [];
const recordsinfo = info?.slice(firstIndex, lastIndex);

// Ensure the data length is greater than 0 to avoid division by 0
const npage = Math.ceil(value?.length / recordsPerPage);

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
                            :recordsinfo ?(
                        recordsinfo?.map((info)=>{
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