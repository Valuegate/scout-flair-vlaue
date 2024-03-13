import React from 'react';
import { Box,Text,Menu, MenuItem, MenuButton, IconButton, MenuList,useDisclosure,Modal,ModalOverlay,ModalContent,ModalCloseButton,ModalBody, } from '@chakra-ui/react';
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import Notificationdetails from '../components/Notificationdetails';

const Notifications = () => {
   const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box>
        <Box p='1rem' borderRadius='8px' bg='white' display='flex' justifyContent='space-between' >
            <Box border='1px solid #333' p='.5rem' alignItems='center' display='flex'>
                <Text>Dashboard &nbsp;</Text>
                <Text display='inline-block' borderLeft='1px solid #333'>&nbsp;Notifications</Text>
            </Box>
        </Box>
        <Box p='1rem' borderRadius='8px' mt='1rem' flexDirection='column' bg='white' display='flex' justifyContent='space-between' >
          <Box bg='#e9e9e9' p='1.5rem' w='full' mt='1rem'>
            <Box w='full' display='flex' borderRadius='8px' justifyContent='space-between' alignItems='center' >
              <Box display='flex' alignItems='center'>
                <Text w='40px' h='40px' borderRadius='50px' bg='#000' ></Text>
                <Text ml='1rem' fontWeight='400' color='#4F4545' textAlign='left'>Match vs. Strikers Utd is rescheduled to 21-01-2024</Text>
              </Box>
              <Box display='flex' alignItems='center'>
                <Text fontWeight='400' color='#4F4545' textAlign='left'>20-03-2023</Text>
                <Text ml='.5rem'><Menu>
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
                                        </Menu></Text>
              </Box>
            </Box>
          </Box>
          <Box bg='#e9e9e9' p='1.5rem' w='full' mt='1rem'>
           <Box w='full' display='flex' borderRadius='8px' justifyContent='space-between' alignItems='center' >
              <Box display='flex' alignItems='center'>
                <Text w='40px' h='40px' borderRadius='50px' bg='#000' ></Text>
                <Text ml='1rem' fontWeight='400' color='#4F4545' textAlign='left'>Match vs. Strikers Utd is rescheduled to 21-01-2024</Text>
              </Box>
              <Box display='flex' alignItems='center'>
                <Text fontWeight='400' color='#4F4545' textAlign='left'>20-03-2023</Text>
                <Text ml='.5rem'><Menu>
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
                                        </Menu></Text>
              </Box>
            </Box>
          </Box>
          <Box bg='#e9e9e9' p='1.5rem' w='full' mt='1rem'>
           <Box w='full' display='flex' borderRadius='8px' justifyContent='space-between' alignItems='center' >
              <Box display='flex' alignItems='center'>
                <Text w='40px' h='40px' borderRadius='50px' bg='#000' ></Text>
                <Text ml='1rem' fontWeight='400' color='#4F4545' textAlign='left'>Match vs. Strikers Utd is rescheduled to 21-01-2024</Text>
              </Box>
              <Box display='flex' alignItems='center'>
                <Text fontWeight='400' color='#4F4545' textAlign='left'>20-03-2023</Text>
                <Text ml='.5rem'><Menu>
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
                                        </Menu></Text>
              </Box>
            </Box>
          </Box>
             <Box bg='#e9e9e9' p='1.5rem' w='full' mt='1rem'>
           <Box w='full' display='flex' borderRadius='8px' justifyContent='space-between' alignItems='center' >
              <Box display='flex' alignItems='center'>
                <Text w='40px' h='40px' borderRadius='50px' bg='#000' ></Text>
                <Text ml='1rem' fontWeight='400' color='#4F4545' textAlign='left'>Match vs. Strikers Utd is rescheduled to 21-01-2024</Text>
              </Box>
              <Box display='flex' alignItems='center'>
                <Text fontWeight='400' color='#4F4545' textAlign='left'>20-03-2023</Text>
                <Text ml='.5rem'><Menu>
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
                                        </Menu></Text>
              </Box>
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