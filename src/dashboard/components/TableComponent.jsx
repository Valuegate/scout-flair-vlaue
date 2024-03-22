import React,{useState} from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Skeleton, 
  Stack,
  Box,
  Text,
  Button
} from '@chakra-ui/react'
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'

const TableComponent = ({headData, rowData,isLoading,color,bg}) => { 
  const [currentPage, setCurrentPage] = useState(1);
const recordsPerPage = 2;
const lastIndex = currentPage * recordsPerPage;
const firstIndex = lastIndex - recordsPerPage;

// Ensure the data exists before accessing it
const data = rowData || [];
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
    <TableContainer>
  <Table borderRadius='8px' mt='1rem' variant='simple'>
    <Thead borderRadius='8px' color={color||'#C99C27'} bg={bg||'black'}>
      <Tr>
        {headData?.map((detail, i)=>{
          return <Th key={i}>{detail}</Th>
        })}
        
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
      <Tbody>
    {records?.map((detail,i)=>{
        return(    
      <Tr key={i}>
        {Object.values(detail).map((value) => (
          <>
                <Td >{value?.homeTeam}</Td>
                <Td >{value?.awayTeam}</Td>
                <Td >{value?.dateTime}</Td>
                <Td >{value?.date}</Td>
                <Td >{value?.competition}</Td>
                <Td >{value?.stadiumPitch}</Td>
                {/* <Td >{value?.homeTeam}</Td>
                <Td >{value?.homeTeam}</Td> */}
            </>
              ))}
      </Tr>
      )      
    })}
    </Tbody>
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
</TableContainer>
  )
}

export default TableComponent