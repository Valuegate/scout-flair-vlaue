import { Box, Text,Stack, Skeleton,Table, Thead, Tr, Th, Tbody, Td,  useDisclosure,Modal,ModalOverlay,ModalContent,ModalCloseButton,ModalBody, Button,  } from '@chakra-ui/react'
import React,{useState} from 'react'
import teamb from '../../assets/b.png'
import {AddIcon, } from '@chakra-ui/icons'
import NewMatch from '../components/NewMatch'
import { useQueries, } from 'react-query';
import { GetPreviousMatches, GetUpComingMatches } from '../../api/UserInformation'
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'

const Matches = () => {
    const userType = JSON.parse(localStorage.getItem('userType'));
    const { isOpen, onOpen, onClose } = useDisclosure();
    // const { data:value, isLoading,} = useQuery('myData', GetPreviousMatches);
    // const { data:coming, loading,} = useQuery('myData', GetUpComingMatches);
    const queries = useQueries([
    { queryKey: 'value', queryFn: GetPreviousMatches },
    { queryKey: 'coming', queryFn: GetUpComingMatches },
  ]);
  const isLoading = queries.some(query => query.isLoading);

const [currentPage, setCurrentPage] = useState(1);
const recordsPerPage = 5;
const lastIndex = currentPage * recordsPerPage;
const firstIndex = lastIndex - recordsPerPage;

// for previous matches
// Ensure the data exists before accessing it
const info = queries[0]?.data || [];
const recordsinfo = info.slice(firstIndex, lastIndex);

// Ensure the data exists before accessing it
const data = queries[1]?.data || [];
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
        <Box p='1rem' borderRadius='8px' bg='white' display='flex' justifyContent='space-between' >
            <Box border='1px solid #333' p='.5rem' alignItems='center' display='flex'>
                <Text>Dashboard &nbsp;</Text>
                <Text display='inline-block' borderLeft='1px solid #333'>&nbsp;Matches</Text>
            </Box>
            {/* {
                userType==='COACH'?
                <Box w='35%' display='flex' justifyContent='flex-end' alignItems='center' > 
                &nbsp;
                <Box border='1px solid #333' onClick={onOpen} cursor='pointer' w='45%'  display='flex' justifyContent='space-evenly' alignItems='center' p='.25rem' borderRadius='.5rem'>
                    <AddIcon />
                    <Text >Add New Match</Text>
                </Box>
                </Box>
                : null
            } */}
             {
                userType==='Admin'&&
                <Box w={['full','full','full','40%']} display='flex' justifyContent='flex-end' alignItems='center' > 
                <Box border='1px solid #333' cursor='pointer' onClick={onOpen} w='35%'  display='flex' justifyContent='space-evenly' alignItems='center' p='.25rem' borderRadius='.5rem'>
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
                        records?.map((info)=>{
                                return(
                                <Tbody width='100%'>
                                    <Tr> 
                                        <Td><img style={{width:'20px',height:'20px'}} src={info?.homeTeamLogoUrl?info?.homeTeamLogoUrl:teamb}alt='pic'/></Td>
                                        <Td> <img style={{width:'20px',height:'20px'}} src={info?.awayTeamLogoUrl?info?.awayTeamLogoUrl:teamb} alt='pic' /> </Td>
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
                <Text mt='1rem'> Previous Match Result</Text>
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
                            :recordsinfo?(
                        recordsinfo?.map((info)=>{
                                return(
                                <Tbody width='100%'>
                                    <Tr> 
                                        <Td><img style={{width:'20px',height:'20px'}} src={info?.homeTeamLogoUrl?info?.homeTeamLogoUrl:teamb}alt='pic'/>M</Td>
                                        <Td> <img style={{width:'20px',height:'20px'}} src={info?.awayTeamLogoUrl?info?.awayTeamLogoUrl:teamb} alt='pic' /> </Td>
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
                <NewMatch onClose={onClose}/>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )

 
}

export default Matches