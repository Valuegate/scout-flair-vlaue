import { Box, Text,Table, Thead, Tr, Th, Tbody, Td, Button  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {AddIcon } from '@chakra-ui/icons'
import { useQueries, } from 'react-query';
import React,{useState} from 'react'
// import teamb from '../../assets/b.png'
// import square from '../../assets/blackSquare.png'
import { GetAdminCoachCount, GetAdminCount, GetAdminPlayersCount, GetAdminScoutCount, GetCoach, GetAdminPlayers, GetScout,  } from '../../api/UserInformation'
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'

const Users = () => {
       const queries = useQueries([
    { queryKey: 'coach', queryFn: GetAdminCoachCount },
    { queryKey: 'admin', queryFn: GetAdminCount },
    { queryKey: 'player', queryFn: GetAdminPlayersCount },
    { queryKey: 'scout', queryFn: GetAdminScoutCount},
    { queryKey: 'value', queryFn: GetAdminPlayers },
    { queryKey: 'coming', queryFn: GetCoach},
     { queryKey: 'coming', queryFn: GetScout}
  ]);

  // eslint-disable-next-line
  const isLoading = queries.some(query => query.isLoading);

const [currentPage, setCurrentPage] = useState(1);
const recordsPerPage = 5;
const lastIndex = currentPage * recordsPerPage;
const firstIndex = lastIndex - recordsPerPage;

// for players
// Ensure the data exists before accessing it
const info = queries[4]?.data || [];
const recordsone = info?.slice(firstIndex, lastIndex);

// for coaches
// Ensure the data exists before accessing it
const data = queries[5]?.data || [];
const recordstwo = data?.slice(firstIndex, lastIndex);

// for scout
// Ensure the data exists before accessing it
const sub = queries[6]?.data || [];
const recordsthree = sub?.slice(firstIndex, lastIndex);

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

  const currentDate = new Date();
const year = currentDate.getFullYear();

       
  return (
     <Box>
         <Box p='1rem' borderRadius='8px' bg='white' alignItems='center' display='flex' justifyContent='space-between' >
            <Box border='1px solid #333' p='.5rem' alignItems='center' display='flex'>
                <Text>Profile &nbsp;</Text>
                <Text display='inline-block' fontWeight='700' borderLeft='1px solid #333'>&nbsp;All User</Text>
            </Box>
            <Box border='1px solid #333' cursor='pointer' w='130px'  display='flex' justifyContent='space-evenly' alignItems='center' p='.25rem' borderRadius='.5rem'>
                <AddIcon />
                <Link to='/add-player'><Text >Add User</Text></Link>
            </Box>
        </Box>
        <Box
          display="flex"
          flexDirection={['column', 'column', 'column', 'row']}
          justifyContent={['center', 'center', 'center', 'space-between']}
          alignItems={['center', 'center', 'center', 'flex-start']}
          w="full"
          marginTop='1.25rem'
        >
          <Box w='full' h='full' justifyContent='space-between' flexWrap={['wrap','wrap','wrap','']} display='flex'>
            <Box w='213px' h='125px' justifyContent='space-between' borderBottom='7px solid #C99C27' bg='#fff' borderRadius=' 8px' display='flex' flexDir='column' p='1rem' >
              <Text fontSize='18px'>Total Players</Text>
              <Box display='flex' alignItems='center'>
                <Text fontSize='32px' color='#4f4545'>{queries[2].data?.count}</Text>
              </Box>
            </Box>
            <Box w='213px' h='125px' justifyContent='space-between' borderBottom='7px solid #EF0107' bg='#fff' borderRadius=' 8px' display='flex' flexDir='column' p='1rem' >
              <Text fontSize='18px'>Total Coaches</Text>
              <Box display='flex' alignItems='center'>
                <Text fontSize='32px' color='#4f4545'>{queries[0].data?.count}</Text>
              </Box>
            </Box>
            <Box w='213px' h='125px' justifyContent='space-between' borderBottom='7px solid #4F4545' bg='#fff' borderRadius=' 8px' display='flex' flexDir='column' p='1rem' >
              <Text fontSize='18px'>Total Scouts</Text>
              <Box display='flex' alignItems='center'>
                <Text fontSize='32px' color='#4f4545'>{queries[3].data?.count}</Text>
              </Box>
            </Box>
            <Box w='213px' h='125px' justifyContent='space-between' borderBottom='7px solid #191818' bg='#fff' borderRadius=' 8px' display='flex' flexDir='column' p='1rem' >
              <Text fontSize='18px'>Admin</Text>
              <Box display='flex' alignItems='center'>
                <Text fontSize='32px' color='#4f4545'>{queries[1].data?.count}</Text>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box w={['full','full']} overflowX='scroll'  display='flex' mt='1.25rem' flexDir='column'>
                <Text>Players</Text>
               
                <Table borderRadius='8px' mt='1rem' >
                    <Thead borderRadius='8px' color='#C99C27' bg='black'>
                        <Tr>
                            <Th color='#C99C27' whiteSpace='nowrap'>Profile Picture</Th>
                        <Th color='#C99C27'>Name</Th>
                        <Th color='#C99C27'>Age</Th>
                        <Th color='#C99C27' whiteSpace='nowrap'>Jersey No.</Th>
                        <Th color='#C99C27'>Position</Th>
                        <Th color='#C99C27'>State</Th>
                        <Th color='#C99C27'>Email</Th>
                        <Th color='#C99C27'></Th>
                        </Tr>
                    </Thead>                    
                        {
                            recordsone?
                            recordsone?.map((info)=>{
                                return(
                                    <Tbody width='100%'>
                                    <Tr> 
                                        <Td><img style={{width:'20px',height:'20px'}} src={info?.imageUrl}alt='pic'/></Td>
                                        <Td whiteSpace='nowrap'>{info?.fullName }</Td>
                                        <Td whiteSpace='nowrap'>{year - info?.dob.split("-")[0] }</Td>
                                        <Td>{info?.jerseyNumber }</Td>
                                        <Td>{info?.position }</Td>
                                        <Td whiteSpace='nowrap'>{info?.address }</Td>
                                        <Td>{info?.email }</Td>
                                    
                                    </Tr>
                                </Tbody>
                                )
                            }):
                            <Box mt='1rem' w='100%' display='flex' alignItems='center' justifyContent='center'>
                            <Text ml='auto' textAlign='center !important'>No active player</Text>
                            </Box>
                        }
                    
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
        <Box w={['full','full']} overflowX='scroll'  display='flex' mt='1.25rem' flexDir='column'>
                <Text>Coaches</Text>
                 <Table borderRadius='8px' mt='1rem' >
                    <Thead borderRadius='8px' color='#C99C27' bg='black'>
                        <Tr>
                            <Th color='#C99C27'>Profile Picture</Th>
                        <Th color='#C99C27'>Name</Th>
                        <Th color='#C99C27'>Experience</Th>
                        <Th color='#C99C27'>Nationality</Th>
                        <Th color='#C99C27'>State</Th>
                        <Th color='#C99C27'>Team</Th>
                        <Th color='#C99C27'>Email</Th>
                        <Th color='#C99C27'></Th>
                        </Tr>
                    </Thead>                    
                        {
                            recordstwo?
                            recordstwo?.map((info)=>{
                                return(
                                    <Tbody width='100%'>
                                    <Tr> 
                                        <Td><img style={{width:'20px',height:'20px'}} src={info?.imageUrl}alt='pic'/></Td>
                                        <Td>{info?.fullName }</Td>
                                        <Td>{info?.jerseyNumber }</Td>
                                        <Td>{info?.nationality }</Td>
                                        <Td>{info?.state }</Td>
                                        <Td>{info?.currentTeam }</Td>
                                        <Td>{info?.email }</Td>
                                    
                                    </Tr>
                                </Tbody>
                                )
                            }):
                            <Box mt='1rem' w='100%' display='flex' alignItems='center' justifyContent='center'>
                            <Text ml='auto' textAlign='center !important'>No active player</Text>
                            </Box>
                        }
                    
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
        <Box w={['full','full']} overflowX='scroll'  display='flex' mt='1.25rem' flexDir='column'>
                <Text>Scouts</Text>
                <Table borderRadius='8px' mt='1rem' >
                    <Thead borderRadius='8px' color='#C99C27' bg='black'>
                        <Tr>
                            <Th color='#C99C27'>Profile Picture</Th>
                        <Th color='#C99C27'>Name</Th>
                        <Th color='#C99C27'>Experience(Y)</Th>
                        <Th color='#C99C27'>Nationality</Th>
                        <Th color='#C99C27'>State &nbsp;&nbsp;&nbsp;</Th>
                        <Th color='#C99C27'>Scouting(No.)</Th>
                        <Th color='#C99C27'>Email</Th>
                        <Th color='#C99C27'></Th>
                        </Tr>
                    </Thead>                    
                        {
                            recordsthree?
                            recordsthree?.map((info)=>{
                                return(
                                    <Tbody width='100%'>
                                    <Tr> 
                                        <Td><img style={{width:'20px',height:'20px'}} src={info?.imageUrl}alt='pic'/></Td>
                                        <Td>{info?.fullName }</Td>
                                        <Td>{info?.experence||2 }</Td>
                                        <Td>{info?.nationality || 'no data' }</Td>
                                        <Td>{info?.address||'no data' }</Td>
                                        <Td>{info?.licenseNo||'no data' }</Td>
                                        <Td>{info?.email }</Td>
                                    
                                    </Tr>
                                </Tbody>
                                )
                            }):
                            <Box mt='1rem' w='100%' display='flex' alignItems='center' justifyContent='center'>
                            <Text ml='auto' textAlign='center !important'>No active player</Text>
                            </Box>
                        }
                    
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
  )
}

export default Users