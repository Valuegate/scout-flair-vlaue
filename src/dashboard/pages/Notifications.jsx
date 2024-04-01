import React from 'react';
import { Box,Text,Menu, MenuItem, MenuButton, IconButton, Button,MenuList,useDisclosure,Modal,ModalOverlay,ModalContent,ModalCloseButton,ModalBody, } from '@chakra-ui/react';
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import Notificationdetails from '../components/Notificationdetails';
import { useQueries} from 'react-query';
import { GetNotification } from '../../api/UserInformation'
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'

const Notifications = () => {
   const { isOpen, onOpen, onClose } = useDisclosure();
    const queries = useQueries([
    { queryKey: 'tactics', queryFn: GetNotification},
    // { queryKey: 'admin', queryFn: GetAdminTatics },
  ]);

     const [currentPage, setCurrentPage] = React.useState(1);
const recordsPerPage = 5;
const lastIndex = currentPage * recordsPerPage;
const firstIndex = lastIndex - recordsPerPage;

// for previous matches
// Ensure the data exists before accessing it
const info = queries[0]?.data || [];
const recordsinfo = info?.slice(firstIndex, lastIndex);

// Ensure the data length is greater than 0 to avoid division by 0
const npage = Math.ceil(queries[0]?.data?.length / recordsPerPage);

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
                <Text display='inline-block' borderLeft='1px solid #333'>&nbsp;Notifications</Text>
            </Box>
        </Box>
        <Box p='1rem' borderRadius='8px' mt='1rem' flexDirection='column' bg='white' display='flex' justifyContent='space-between' >
         {
          recordsinfo?.map((datas)=>{
                            return(
          <Box bg='#e9e9e9' key={datas?.id} p='1.5rem' w='full' mt='1rem'>
            <Box w='full' display='flex' borderRadius='8px' justifyContent='space-between' alignItems='center' >
              <Box display='flex' alignItems='center'>
                <Text w='40px' h='40px' borderRadius='50px' bg='#000' ></Text>
                <Text ml='1rem' fontWeight='400' color='#4F4545' noOfLines={1} textAlign='left'>{datas?.message}</Text>
              </Box>
              <Box display='flex' alignItems='center'>
                <Text fontWeight='400' color='#4F4545' textAlign='left'>{datas?.date}</Text>
                <Text ml='.5rem'>
                  <Menu>
                      <MenuButton
                          as={IconButton}
                          aria-label='Options'
                          icon={<IoEllipsisVerticalSharp/>}
                          variant='black'
                      />
                      <MenuList>
                          {/* MenuItems are not rendered unless Menu is open */}
                          <MenuItem onClick={onOpen} >Read notifications </MenuItem>
                          <MenuItem >Unread notifications </MenuItem>
                      </MenuList>
                      </Menu>
                    </Text>
              </Box>
            </Box>
          </Box>
                            )
          })
         }
            <Box w='full' mt='1rem' float='right' display='flex' justifyContent='flex-end'>
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
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody >
                <Notificationdetails/>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default Notifications