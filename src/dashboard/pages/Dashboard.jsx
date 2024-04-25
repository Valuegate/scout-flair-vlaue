import { Box, Text, Image,Table, Thead, Tr, Th, Tbody, Td, } from '@chakra-ui/react';
import React from 'react';
import img1 from '../../assets/arrowupgreen.svg'
import img2 from '../../assets/arrowdownred.svg'
import teama from '../../assets/a.png'
import teamb from '../../assets/b.png'
import { GetAcademiesCount, GetFootballClubCount, GetLocalPitchesCount, GetMatchesCount,GetAdminPlayers,GetUpComingMatches } from '../../api/UserInformation';
import { useQueries } from 'react-query';

const Dashboard = () => {
  // const { data:matches} = useQuery('myData', GetMatchesCount);
  // const { data:pitches} = useQuery('myData', GetLocalPitchesCount);
  // const { data:ball} = useQuery('myData', GetFootballClubCount);
  // const { data:academy} = useQuery('myData', GetAcademiesCount);

  const queries = useQueries([
    { queryKey: 'matches', queryFn: GetMatchesCount },
    { queryKey: 'pitches', queryFn: GetLocalPitchesCount },
    { queryKey: 'ball', queryFn: GetFootballClubCount },
    { queryKey: 'academy', queryFn: GetAcademiesCount },
     { queryKey: 'value', queryFn: GetAdminPlayers },
     { queryKey: 'coming', queryFn: GetUpComingMatches },
  ]);
  return (
      <Box w="full" h="full">
        <Box
          display="flex"
          flexDirection={['column', 'column', 'column', 'row']}
          justifyContent={['center', 'center', 'center', 'space-between']}
          alignItems={['center', 'center', 'center', 'flex-start']}
          w="full"
        >
          <Box w='full' h='full' justifyContent='space-between' flexWrap={['wrap','wrap','wrap','']} gap='5' display='flex'>
            <Box w='213px' h='125px' justifyContent='space-between' borderBottom='7px solid #C99C27' bg='#fff' borderRadius=' 8px' display='flex' flexDir='column' p='1rem' >
              <Text fontSize='18px'>Upcoming matches</Text>
              <Box display='flex' alignItems='center'>
                <Image src={img1} alt='green' />&nbsp;&nbsp;
                <Text fontSize='32px' color='#4f4545'>{queries[0].data?.count}</Text>
                <Text fontSize='20px' color='#b0b0b0b' as='span'></Text>
              </Box>
            </Box>
            <Box w='213px' h='125px' justifyContent='space-between' borderBottom='7px solid #EF0107' bg='#fff' borderRadius=' 8px' display='flex' flexDir='column' p='1rem' >
              <Text fontSize='18px'>Local Pitches</Text>
              <Box display='flex' alignItems='center'>
                <Image src={img2} alt='green' />&nbsp;&nbsp;
                <Text fontSize='32px' color='#4f4545'>{queries[1].data?.count}</Text>
                <Text fontSize='20px' color='#b0b0b0b' as='span'></Text>
              </Box>
            </Box>
            <Box w='213px' h='125px' justifyContent='space-between' borderBottom='7px solid #4F4545' bg='#fff' borderRadius=' 8px' display='flex' flexDir='column' p='1rem' >
              <Text fontSize='18px'>Football Academies</Text>
              <Box display='flex' alignItems='center'>
                <Image src={img1} alt='green' />&nbsp;&nbsp;
                <Text fontSize='32px' color='#4f4545'>{queries[3].data?.count}</Text>
                <Text fontSize='20px' color='#b0b0b0b' as='span'></Text>
              </Box>
            </Box>
            <Box w='213px' h='125px' justifyContent='space-between' borderBottom='7px solid #191818' bg='#fff' borderRadius=' 8px' display='flex' flexDir='column' p='1rem' >
              <Text fontSize='18px'>Football Clubs</Text>
              <Box display='flex' alignItems='center'>
                <Image src={img1} alt='green' />&nbsp;&nbsp;
                <Text fontSize='32px' color='#4f4545'>{queries[2].data?.count}</Text>
                <Text fontSize='20px' color='#b0b0b0b' as='span'></Text>
              </Box>
            </Box>
          </Box>
          
         
        </Box>
        {/* ................................................. */}
        <Box display='flex' justifyContent='space-between' flexDirection={['column','column','column', 'row']} mt='2.5rem'> 
            <Box overflowX='scroll'  bg='#fff' p='1rem' borderRadius='4px' w={['full','full','full','50%']}>
              <Text fontWeight='700' mb='1rem' ml='.8rem' fontSize='18px'>Player Performance Metrics</Text>
              
              <Table  borderRadius='8px' mt='1rem' >
                    <Thead borderRadius='8px' color='#C99C27' bg='#fff'>
                        <Tr>
                        <Th color='#C99C27'>Players</Th>
                        <Th color='#C99C27'>Goals</Th>
                        <Th color='#C99C27'>Assists</Th>
                        <Th color='#C99C27'>Preffered Foot</Th>
                        <Th color='#C99C27'></Th>
                        </Tr>
                    </Thead>      
                   {
                            queries[4].data?
                            queries[4].data?.map((info)=>{
                                return(
                                    <Tbody width='100%'>
                                    <Tr> 
                                        <Td whiteSpace='nowrap'>{info?.fullName }</Td>
                                        <Td whiteSpace='nowrap'>{info?.goals }</Td>
                                        <Td>{info?.assist }</Td>
                                        <Td>{info?.prefferedFoot }</Td>
                                    
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
            <Box display='flex' w={['full','full','full','40%']} mt={['1rem','1rem','1rem','0rem',]} justifyContent='space-between' flexDirection='column' p='1.5rem' bg='#fff' borderRadius='4px'  >
              
              <Box w='full' p='.75rem' display='flex' flexDir='column' justifyContent='space-between' borderBottom='1px solid #333'>
                <Box>
                  <Text fontWeight='700' mb='1rem' fontSize='18px'>Upcoming Matches</Text> 
                </Box>
                <Table borderRadius='8px' mt='1rem' >
                    <Thead borderRadius='8px' color='#C99C27' bg='black'>
                        <Tr>
                        <Th color='#C99C27' whiteSpace='nowrap'>Home Team</Th>
                        <Th color='#C99C27' whiteSpace='nowrap'>Away Team</Th>
                        </Tr>
                    </Thead> 
                     <Tbody width='100%'>                  
                          {
                         queries[5].data ?(
                        queries[5].data?.map((info)=>{
                                return(
                                
                                    <Tr> 
                                        <Td whiteSpace='nowrap'>
                                          <img style={{width:'20px',height:'20px'}} src={info?.homeTeamLogoUrl?info?.homeTeamLogoUrl:teama}alt='pic'/>
                                          <Text>{info?.homeTeam} </Text>
                                        </Td>
                                        <Td whiteSpace='nowrap'> 
                                          <img style={{width:'20px',height:'20px'}} src={info?.awayTeamLogoUrl?info?.awayTeamLogoUrl:teamb} alt='pic' /> 
                                          <Text>{info?.awayTeam}</Text>
                                        </Td>
                                    </Tr>                                
                              )
                        })
                        )    :    (
                            <Box mt='1rem' w='100%' display='flex' alignItems='center' justifyContent='center'>
                            <Text ml='auto' textAlign='center !important'>No active player</Text>
                            </Box>
                        )}
                    </Tbody>
                </Table>
              </Box>
            </Box>
          </Box>
      </Box>
  );
};

export default Dashboard;