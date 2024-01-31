import React from 'react';
import {
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
 // Link,
  Drawer,
  DrawerContent,
  useDisclosure,
  Image,
  //Image,
} from '@chakra-ui/react';
import MobileNav from './Navbar';
import logo from '../../assets/White Logo.png'
import {
  FiHome,
  FiTrendingUp,
  FiBriefcase,
  //FiUsers,
  FiMessageSquare,
  FiSettings,
} from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import '../styles/sidebar.css'

const LinkPlayers = [
  { name: 'Dashboard', link: '/dashboard', icon: FiHome },
    { name: 'Profile', link: '/profile', icon: FiTrendingUp },
  { name: 'Tactics', link: '/tactics', icon: FiMessageSquare },
  { name: 'Matches', link: '/matches', icon: FiBriefcase },
   { name: 'Local Pitches', link: '/local-pitches', icon: FiBriefcase },
  { name: 'Academics', link: '/academy', icon: FiSettings },
   { name: 'Football Club', link: '/football-club', icon: FiMessageSquare },
  { name: 'Notifications', link: '/notifications', icon: FiBriefcase },
  { name: 'Settings', link: '/settings', icon: FiSettings },
];

const LinkCoach = [
  { name: 'Dashboard', link: '/dashboard', icon: FiHome },
    { name: 'Profile', link: '/profile', icon: FiTrendingUp },
  { name: 'Players', link: '/player', icon: FiTrendingUp },
  { name: 'Tactics', link: '/tactics', icon: FiMessageSquare },
  { name: 'Matches', link: '/matches', icon: FiBriefcase },
   { name: 'Local Pitches', link: '/local-pitches', icon: FiBriefcase },
  { name: 'Academics', link: '/academy', icon: FiSettings },
   { name: 'Football Club', link: '/football-club', icon: FiMessageSquare },
  { name: 'Notifications', link: '/notifications', icon: FiBriefcase },
  { name: 'Settings', link: '/settings', icon: FiSettings },
];

export default function SidebarWithHeader({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  const userType = JSON.parse(localStorage.getItem('userType'));
  return (
    <Box
      transition="3s ease"
      bg="#000"
      borderTopRightRadius='16px'
      borderBottomRightRadius='16px'
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        {/* <Image ml={['', '3rem']} objectFit="contain" src={logo} /> */}
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <Image ml='2rem' mb='1rem' src={logo} alt=''/>
      { userType === 'coach'? LinkCoach.map(link => (
        <NavItem key={link.name} link={link.link} icon={link.icon}>
          {link.name}
        </NavItem>
      )) : LinkPlayers.map(link => (
        <NavItem key={link.name} link={link.link} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, link, children, ...rest }) => {
  return (
    <NavLink
      to={link}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
      _hover={{ color: '#fff' }}
      p=".5rem"
      color="rgba(212, 20, 90, 1)"
      borderRadius="4px"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      }
    >
      <Flex
        align="center"
        p="2"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        color="#C99C27"
        bg="#000"
        mb=".5rem"
        _hover={{
          bg: '#C99C27',
          color: '#fff',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: '#fff',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </NavLink>
  );
};