import { Box, Text,Menu, MenuItem, MenuButton, IconButton, MenuList,   } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {AddIcon } from '@chakra-ui/icons'
import teamb from '../../assets/b.png'
import square from '../../assets/blackSquare.png'

const Users = () => {
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
                <Box p='1rem' borderRadius='8px' bg='white' display='flex' flexDir='column'>
                    <Box p='.5rem' borderTopLeftRadius='8px'  borderTopRightRadius='8px' fontWeight='700' color='#C99C27' bg='black' display='flex' justifyContent='space-between'>
                        <Text textAlign='left'>Profile Picture</Text>
                        <Text textAlign='left'>Name</Text>
                        <Text textAlign='left'>Age</Text>
                        <Text textAlign='left'>Jersey No.</Text>
                        <Text textAlign='left'>Position</Text>
                        <Text textAlign='left'>State</Text>
                        <Text textAlign='left'>Email</Text>
                    </Box>
                    <Box p='1rem' borderRadius='8px'color='#000' bg='#fff' mt='.5rem' display='flex' justifyContent='space-between'>
                         <Box display='flex'>
                            <img src={teamb} alt='team a' />
                        </Box>
                        <Box display='flex'>
                            <Text marginLeft='.5rem'>Karis Amber</Text>
                        </Box>
                        <Text textAlign='center'>24</Text>
                        <Text textAlign='center'>07</Text>
                        <Text textAlign='center'>Right Wing/Forward</Text>
                        <Text textAlign='center'>Kaduna</Text>
                        <Text textAlign='center'>Player@gmail.com</Text>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                aria-label='Options'
                                icon={<img src={square} alt='' />}
                                variant='none'
                            />
                            <MenuList>
                                {/* MenuItems are not rendered unless Menu is open */}
                                <MenuItem  >View Player Profile</MenuItem>
                                <MenuItem >Update Player Data</MenuItem>
                                <MenuItem color='#e72422'  >Remove Player</MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                    <Box p='1rem' borderRadius='8px'color='#000' bg='#fff' mt='.5rem' display='flex' justifyContent='space-between'>
                         <Box display='flex'>
                            <img src={teamb} alt='team a' />
                        </Box>
                        <Box display='flex'>
                            <Text marginLeft='.5rem'>Karis Amber</Text>
                        </Box>
                        <Text textAlign='center'>24</Text>
                        <Text textAlign='center'>07</Text>
                        <Text textAlign='center'>Right Wing/Forward</Text>
                        <Text textAlign='center'>Kaduna</Text>
                        <Text textAlign='center'>Player@gmail.com</Text>
                         <Menu>
                            <MenuButton
                                as={IconButton}
                                aria-label='Options'
                                icon={<img src={square} alt='' />}
                                variant='none'
                            />
                            <MenuList>
                                {/* MenuItems are not rendered unless Menu is open */}
                                <MenuItem  >View Player Profile</MenuItem>
                                <MenuItem >Update Player Data</MenuItem>
                                <MenuItem color='#e72422'  >Remove Player</MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                    <Box p='1rem' borderRadius='8px'color='#000' bg='#fff' mt='.5rem' display='flex' justifyContent='space-between'>
                         <Box display='flex'>
                            <img src={teamb} alt='team a' />
                        </Box>
                        <Box display='flex'>
                            <Text marginLeft='.5rem'>Karis Amber</Text>
                        </Box>
                        <Text textAlign='center'>24</Text>
                        <Text textAlign='center'>07</Text>
                        <Text textAlign='center'>Right Wing/Forward</Text>
                        <Text textAlign='center'>Kaduna</Text>
                        <Text textAlign='center'>Player@gmail.com</Text>
                         <Menu>
                            <MenuButton
                                as={IconButton}
                                aria-label='Options'
                                icon={<img src={square} alt='' />}
                                variant='none'
                            />
                            <MenuList>
                                {/* MenuItems are not rendered unless Menu is open */}
                                <MenuItem  >View Player Profile</MenuItem>
                                <MenuItem >Update Player Data</MenuItem>
                                <MenuItem color='#e72422'  >Remove Player</MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                    <Box p='1rem' borderRadius='8px'color='#000' bg='#fff' mt='.5rem' display='flex' justifyContent='space-between'>
                         <Box display='flex'>
                            <img src={teamb} alt='team a' />
                        </Box>
                        <Box display='flex'>
                            <Text marginLeft='.5rem'>Karis Amber</Text>
                        </Box>
                        <Text textAlign='center'>24</Text>
                        <Text textAlign='center'>07</Text>
                        <Text textAlign='center'>Right Wing/Forward</Text>
                        <Text textAlign='center'>Kaduna</Text>
                        <Text textAlign='center'>Player@gmail.com</Text>
                         <Menu>
                            <MenuButton
                                as={IconButton}
                                aria-label='Options'
                                icon={<img src={square} alt='' />}
                                variant='none'
                            />
                            <MenuList>
                                {/* MenuItems are not rendered unless Menu is open */}
                                <MenuItem  >View Player Profile</MenuItem>
                                <MenuItem >Update Player Data</MenuItem>
                                <MenuItem color='#e72422'  >Remove Player</MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
        </Box>
        <Box w={['full','full']} display='flex' mt='1.25rem' flexDir='column'>
                <Text>Coaches</Text>
                <Box p='1rem' borderRadius='8px' bg='white' display='flex' flexDir='column'>
                    <Box p='.5rem' borderTopLeftRadius='8px'  borderTopRightRadius='8px' fontWeight='700' color='#C99C27' bg='black' display='flex' justifyContent='space-between'>
                        <Text textAlign='left'>Profile Picture</Text>
                        <Text textAlign='left'>Name</Text>
                        <Text textAlign='left'>Age</Text>
                        <Text textAlign='left'>Experince</Text>
                        <Text textAlign='left'>Nationality</Text>
                        <Text textAlign='left'>State</Text>
                        <Text textAlign='left'>Team</Text>
                        <Text textAlign='left'>Email</Text>
                        <Text>&nbsp;&nbsp;&nbsp;</Text>
                    </Box>
                    <Box p='1rem' borderRadius='8px'color='#000' bg='#fff' mt='.5rem' display='flex' justifyContent='space-between'>
                         <Box display='flex'>
                            <img src={teamb} alt='team a' />
                        </Box>
                        <Box display='flex'>
                            <Text marginLeft='.5rem'>Karis Amber</Text>
                        </Box>
                        <Text textAlign='center'>24</Text>
                        <Text textAlign='center'>10</Text>
                        <Text textAlign='center'>Nigerian</Text>
                        <Text textAlign='center'>Kaduna</Text>
                        <Text textAlign='center'>ScoutFlair FC</Text>
                        <Text textAlign='center'>Player@gmail.com</Text>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                aria-label='Options'
                                icon={<img src={square} alt='' />}
                                variant='none'
                            />
                            <MenuList>
                                {/* MenuItems are not rendered unless Menu is open */}
                                <MenuItem  >View Player Profile</MenuItem>
                                <MenuItem >Update Player Data</MenuItem>
                                <MenuItem color='#e72422'  >Remove Player</MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                    <Box p='1rem' borderRadius='8px'color='#000' bg='#fff' mt='.5rem' display='flex' justifyContent='space-between'>
                         <Box display='flex'>
                            <img src={teamb} alt='team a' />
                        </Box>
                        <Box display='flex'>
                            <Text marginLeft='.5rem'>Karis Amber</Text>
                        </Box>
                        <Text textAlign='center'>24</Text>
                        <Text textAlign='center'>7</Text>
                        <Text textAlign='center'>Nigerian</Text>
                        <Text textAlign='center'>Kaduna</Text>
                        <Text textAlign='center'>ScoutFlair FC</Text>

                        <Text textAlign='center'>Player@gmail.com</Text>
                         <Menu>
                            <MenuButton
                                as={IconButton}
                                aria-label='Options'
                                icon={<img src={square} alt='' />}
                                variant='none'
                            />
                            <MenuList>
                                {/* MenuItems are not rendered unless Menu is open */}
                                <MenuItem  >View Player Profile</MenuItem>
                                <MenuItem >Update Player Data</MenuItem>
                                <MenuItem color='#e72422'  >Remove Player</MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                    <Box p='1rem' borderRadius='8px'color='#000' bg='#fff' mt='.5rem' display='flex' justifyContent='space-between'>
                         <Box display='flex'>
                            <img src={teamb} alt='team a' />
                        </Box>
                        <Box display='flex'>
                            <Text marginLeft='.5rem'>Karis Amber</Text>
                        </Box>
                        <Text textAlign='center'>24</Text>
                        <Text textAlign='center'>7</Text>
                        <Text textAlign='center'>Nigerian</Text>
                        <Text textAlign='center'>Kaduna</Text>
                        <Text textAlign='center'>ScoutFlair FC</Text>
                        <Text textAlign='center'>Player@gmail.com</Text>
                         <Menu>
                            <MenuButton
                                as={IconButton}
                                aria-label='Options'
                                icon={<img src={square} alt='' />}
                                variant='none'
                            />
                            <MenuList>
                                {/* MenuItems are not rendered unless Menu is open */}
                                <MenuItem  >View Player Profile</MenuItem>
                                <MenuItem >Update Player Data</MenuItem>
                                <MenuItem color='#e72422'  >Remove Player</MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                    <Box p='1rem' borderRadius='8px'color='#000' bg='#fff' mt='.5rem' display='flex' justifyContent='space-between'>
                         <Box display='flex'>
                            <img src={teamb} alt='team a' />
                        </Box>
                        <Box display='flex'>
                            <Text marginLeft='.5rem'>Karis Amber</Text>
                        </Box>
                        <Text textAlign='center'>24</Text>
                        <Text textAlign='center'>7</Text>
                        <Text textAlign='center'>Nigerian</Text>
                        <Text textAlign='center'>Kaduna</Text>
                        <Text textAlign='center'>ScoutFlair FC</Text>
                        <Text textAlign='center'>Player@gmail.com</Text>
                         <Menu>
                            <MenuButton
                                as={IconButton}
                                aria-label='Options'
                                icon={<img src={square} alt='' />}
                                variant='none'
                            />
                            <MenuList>
                                {/* MenuItems are not rendered unless Menu is open */}
                                <MenuItem  >View Player Profile</MenuItem>
                                <MenuItem >Update Player Data</MenuItem>
                                <MenuItem color='#e72422'  >Remove Player</MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
        </Box>
        <Box w={['full','full']} display='flex' mt='1.25rem' flexDir='column'>
                <Text>Scouts</Text>
                <Box p='1rem' borderRadius='8px' bg='white' display='flex' flexDir='column'>
                    <Box p='.5rem' borderTopLeftRadius='8px'  borderTopRightRadius='8px' fontWeight='700' color='#C99C27' bg='black' display='flex' justifyContent='space-between'>
                        <Text textAlign='left'>Profile Picture</Text>
                        <Text textAlign='left'>Name</Text>
                        <Text textAlign='left'>Age</Text>
                        <Text textAlign='left'>Experience(Y)</Text>
                        <Text textAlign='left'>Nationality</Text>
                        <Text textAlign='left'>State</Text>
                        <Text textAlign='left'>Scouting(No.)</Text>
                        <Text textAlign='left'>Email</Text>
                        <Text>&nbsp;&nbsp;&nbsp;</Text>
                    </Box>
                    <Box p='1rem' borderRadius='8px'color='#000' bg='#fff' mt='.5rem' display='flex' justifyContent='space-between'>
                         <Box display='flex'>
                            <img src={teamb} alt='team a' />
                        </Box>
                        <Box display='flex'>
                            <Text marginLeft='.5rem'>Karis Amber</Text>
                        </Box>
                        <Text textAlign='center'>24</Text>
                        <Text textAlign='center'>5</Text>
                        <Text textAlign='center'>Nigerian</Text>
                        <Text textAlign='center'>Kaduna</Text>
                        <Text textAlign='center'>7</Text>
                        <Text textAlign='center'>Player@gmail.com</Text>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                aria-label='Options'
                                icon={<img src={square} alt='' />}
                                variant='none'
                            />
                            <MenuList>
                                {/* MenuItems are not rendered unless Menu is open */}
                                <MenuItem  >View Player Profile</MenuItem>
                                <MenuItem >Update Player Data</MenuItem>
                                <MenuItem color='#e72422'  >Remove Player</MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                    <Box p='1rem' borderRadius='8px'color='#000' bg='#fff' mt='.5rem' display='flex' justifyContent='space-between'>
                         <Box display='flex'>
                            <img src={teamb} alt='team a' />
                        </Box>
                        <Box display='flex'>
                            <Text marginLeft='.5rem'>Karis Amber</Text>
                        </Box>
                        <Text textAlign='center'>24</Text>
                        <Text textAlign='center'>5</Text>
                        <Text textAlign='center'>Nigerian</Text>
                        <Text textAlign='center'>Kaduna</Text>
                        <Text textAlign='center'>7</Text>
                        <Text textAlign='center'>Player@gmail.com</Text>
                         <Menu>
                            <MenuButton
                                as={IconButton}
                                aria-label='Options'
                                icon={<img src={square} alt='' />}
                                variant='none'
                            />
                            <MenuList>
                                {/* MenuItems are not rendered unless Menu is open */}
                                <MenuItem  >View Player Profile</MenuItem>
                                <MenuItem >Update Player Data</MenuItem>
                                <MenuItem color='#e72422'  >Remove Player</MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                    <Box p='1rem' borderRadius='8px'color='#000' bg='#fff' mt='.5rem' display='flex' justifyContent='space-between'>
                         <Box display='flex'>
                            <img src={teamb} alt='team a' />
                        </Box>
                        <Box display='flex'>
                            <Text marginLeft='.5rem'>Karis Amber</Text>
                        </Box>
                        <Text textAlign='center'>24</Text>
                        <Text textAlign='center'>07</Text>
                        <Text textAlign='center'>Nigerian</Text>
                        <Text textAlign='center'>Kaduna</Text>
                        <Text textAlign='center'>7</Text>
                        <Text textAlign='center'>Player@gmail.com</Text>
                         <Menu>
                            <MenuButton
                                as={IconButton}
                                aria-label='Options'
                                icon={<img src={square} alt='' />}
                                variant='none'
                            />
                            <MenuList>
                                {/* MenuItems are not rendered unless Menu is open */}
                                <MenuItem  >View Player Profile</MenuItem>
                                <MenuItem >Update Player Data</MenuItem>
                                <MenuItem color='#e72422'  >Remove Player</MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                    <Box p='1rem' borderRadius='8px'color='#000' bg='#fff' mt='.5rem' display='flex' justifyContent='space-between'>
                         <Box display='flex'>
                            <img src={teamb} alt='team a' />
                        </Box>
                        <Box display='flex'>
                            <Text marginLeft='.5rem'>Karis Amber</Text>
                        </Box>
                        <Text textAlign='center'>24</Text>
                        <Text textAlign='center'>7</Text>
                        <Text textAlign='center'>Nigerian</Text>
                        <Text textAlign='center'>Kaduna</Text>
                        <Text textAlign='center'>7</Text>
                        <Text textAlign='center'>Player@gmail.com</Text>
                        
                         <Menu>
                            <MenuButton
                                as={IconButton}
                                aria-label='Options'
                                icon={<img src={square} alt='' />}
                                variant='none'
                            />
                            <MenuList>
                                {/* MenuItems are not rendered unless Menu is open */}
                                <MenuItem  >View Player Profile</MenuItem>
                                <MenuItem >Update Player Data</MenuItem>
                                <MenuItem color='#e72422'  >Remove Player</MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
        </Box>
    </Box>
  )
}

export default Users