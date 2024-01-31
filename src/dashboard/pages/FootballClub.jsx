import { Box, Grid, Text, Menu, MenuItem, MenuButton, IconButton, MenuList, useDisclosure,Modal,ModalOverlay,ModalContent,ModalCloseButton,ModalBody,  Button, } from '@chakra-ui/react'
import React  from 'react'
import { IoEllipsisVertical } from 'react-icons/io5'
import logo from '../../assets/academylogo.png'
import pic from '../../assets/grouppicture.png'
import Academydetails from '../components/Academydetails'

const FootballClub = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  const data =[
    {
        id:1,
        logo:logo,
        name:'ScoutFlair FB.',
        place:'Kaduna, Nigeria',
        pic:pic,
        location:'Lat: 34.78965, Lon: 12.88754',
        description:'Club description goes in here, Club  description goes in here, Club  description goes in here.  ',
    },
     {
        id:2,
        logo:logo,
        name:'ScoutFlair FB.',
        place:'Kaduna, Nigeria',
        pic:pic,
        location:'Lat: 34.78965, Lon: 12.88754',
        description:'Club description goes in here, Club  description goes in here, Club  description goes in here.  ',
    },
     {
        id:3,
        logo:logo,
        name:'ScoutFlair FB.',
        place:'Kaduna, Nigeria',
        pic:pic,
        location:'Lat: 34.78965, Lon: 12.88754',
        description:'Club description goes in here, Club  description goes in here, Club  description goes in here.  ',
    }
  ]

  
  return (
    <Box>
         <Box p='1rem' borderRadius='8px' bg='white' alignItems='center' display='flex' justifyContent='space-between' >
            <Box border='1px solid #333' p='.5rem' alignItems='center' display='flex'>
                <Text>Profile &nbsp;</Text>
                <Text display='inline-block' fontWeight='700' borderLeft='1px solid #333'>&nbsp;Football Club</Text>
            </Box>
        </Box>
        <Box w={['full','full']} mt='1rem' display='flex' justifyContent='space-between' flexDir={['column','column']}>
            <Box w={['full','100%']} display='flex' flexDir='column'>
                <Text fontWeight='700' mt='.75rem' mb='.5rem' fontSize=''>Football Club</Text>
                <Box p='1rem' borderRadius='8px' bg='white' display='flex' flexDir='column'>
                    
                    <Grid  w='full' h='100%' placeItems='center' justifyContent='space-evenly' mt='1rem' p={['1rem','']}  templateColumns={['repeat(1,1fr)','repeat(3,1fr)']} gap='9'>
                        {
                        data?.map((datas)=>{
                            return(
                            <Box key={datas.id} w='304px' p='5px' h='391px' position='relative'>
                                <Box display='flex' mb='.5rem' justifyContent='space-between' alignItems='center' width='100%' >
                                    <img src={datas.logo} alt='' />
                                    <Box display='flex' flexDirection='column'>
                                        <Text fontSize='14px' fontWeight='700'>{datas.name}</Text>
                                        <Text fontSize='13px' color='#0C1017' > {datas.place} </Text>                                        
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
                                            <MenuItem onClick={onOpen} >View club details</MenuItem>
                                            <MenuItem > View club gallery</MenuItem>
                                            <MenuItem  >Locate club</MenuItem>
                                        </MenuList>
                                        </Menu>
                                </Box>
                                <img src={datas?.pic} alt='' />
                                
                                
                                <Text fontWeight='700' mb='.5rem' fontSize='13px' mt='.5rem' >{datas.location}</Text>
                                <Text textAlign='justify'  mb='.5rem'>{datas.description}</Text>
                                <Button mt='.5rem' w='full' bg='#000' color='#E5AA42' >Locate Academy</Button>
                            </Box>
                            )
                        })
}
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

export default FootballClub