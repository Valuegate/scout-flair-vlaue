import { Box, Text,Table, Thead, Tr, Th, Tbody, Td,   } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {AddIcon } from '@chakra-ui/icons'
import { useQuery, } from 'react-query';
// import teamb from '../../assets/b.png'
// import square from '../../assets/blackSquare.png'
import { GetUsers } from '../../api/UserInformation'

const Users = () => {
    // eslint-disable-next-line
      const { data, isLoading,} = useQuery('myData', GetUsers);
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
                <Text fontSize='32px' color='#4f4545'>284</Text>
              </Box>
            </Box>
            <Box w='213px' h='125px' justifyContent='space-between' borderBottom='7px solid #EF0107' bg='#fff' borderRadius=' 8px' display='flex' flexDir='column' p='1rem' >
              <Text fontSize='18px'>Total Coaches</Text>
              <Box display='flex' alignItems='center'>
                <Text fontSize='32px' color='#4f4545'>84</Text>
              </Box>
            </Box>
            <Box w='213px' h='125px' justifyContent='space-between' borderBottom='7px solid #4F4545' bg='#fff' borderRadius=' 8px' display='flex' flexDir='column' p='1rem' >
              <Text fontSize='18px'>Total Scouts</Text>
              <Box display='flex' alignItems='center'>
                <Text fontSize='32px' color='#4f4545'>72</Text>
              </Box>
            </Box>
            <Box w='213px' h='125px' justifyContent='space-between' borderBottom='7px solid #191818' bg='#fff' borderRadius=' 8px' display='flex' flexDir='column' p='1rem' >
              <Text fontSize='18px'>Admin</Text>
              <Box display='flex' alignItems='center'>
                <Text fontSize='32px' color='#4f4545'>1</Text>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box w={['full','full']} display='flex' mt='1.25rem' flexDir='column'>
                <Text>Players</Text>
               
                <Table borderRadius='8px' mt='1rem' >
                    <Thead borderRadius='8px' color='#C99C27' bg='black'>
                        <Tr>
                            <Th color='#C99C27'>Profile Picture</Th>
                        <Th color='#C99C27'>Name</Th>
                        <Th color='#C99C27'>Age</Th>
                        <Th color='#C99C27'>Jersey No.</Th>
                        <Th color='#C99C27'>Position</Th>
                        <Th color='#C99C27'>State</Th>
                        <Th color='#C99C27'>Email</Th>
                        <Th color='#C99C27'></Th>
                        </Tr>
                    </Thead>                    
                        {
                            data?
                            data?.map((info)=>{
                                return(
                                    <Tbody width='100%'>
                                    <Tr> 
                                        <Td>M<img src={info?.imageUrl}alt='pic'/>M</Td>
                                        <Td>{info?.fullName }</Td>
                                        <Td>{info?.dob }</Td>
                                        <Td>{info?.jerseyNumber }</Td>
                                        <Td>{info?.position }</Td>
                                        <Td>{info?.location }</Td>
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
        </Box>
        <Box w={['full','full']} display='flex' mt='1.25rem' flexDir='column'>
                <Text>Coaches</Text>
                 <Table borderRadius='8px' mt='1rem' >
                    <Thead borderRadius='8px' color='#C99C27' bg='black'>
                        <Tr>
                            <Th color='#C99C27'>Profile Picture</Th>
                        <Th color='#C99C27'>Name</Th>
                        <Th color='#C99C27'>Age</Th>
                        <Th color='#C99C27'>Experience</Th>
                        <Th color='#C99C27'>Nationality</Th>
                        <Th color='#C99C27'>State</Th>
                        <Th color='#C99C27'>Team</Th>
                        <Th color='#C99C27'>Email</Th>
                        <Th color='#C99C27'></Th>
                        </Tr>
                    </Thead>                    
                        {
                            data?
                            data?.map((info)=>{
                                return(
                                    <Tbody width='100%'>
                                    <Tr> 
                                        <Td>M<img src={info?.imageUrl}alt='pic'/>M</Td>
                                        <Td>{info?.fullName }</Td>
                                        <Td>{info?.dob }</Td>
                                        <Td>{info?.jerseyNumber }</Td>
                                        <Td>{info?.position }</Td>
                                        <Td>{info?.location }</Td>
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
        </Box>
        <Box w={['full','full']} display='flex' mt='1.25rem' flexDir='column'>
                <Text>Scouts</Text>
                <Table borderRadius='8px' mt='1rem' >
                    <Thead borderRadius='8px' color='#C99C27' bg='black'>
                        <Tr>
                            <Th color='#C99C27'>Profile Picture</Th>
                        <Th color='#C99C27'>Name</Th>
                        <Th color='#C99C27'>Age</Th>
                        <Th color='#C99C27'>Experience(Y)</Th>
                        <Th color='#C99C27'>Nationality</Th>
                        <Th color='#C99C27'>State</Th>
                        <Th color='#C99C27'>Scouting(No.)</Th>
                        <Th color='#C99C27'>Email</Th>
                        <Th color='#C99C27'></Th>
                        </Tr>
                    </Thead>                    
                        {
                            data?
                            data?.map((info)=>{
                                return(
                                    <Tbody width='100%'>
                                    <Tr> 
                                        <Td>M<img src={info?.imageUrl}alt='pic'/>M</Td>
                                        <Td>{info?.fullName }</Td>
                                        <Td>{info?.dob }</Td>
                                        <Td>{info?.jerseyNumber }</Td>
                                        <Td>{info?.position }</Td>
                                        <Td>{info?.location }</Td>
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
        </Box>
    </Box>
  )
}

export default Users