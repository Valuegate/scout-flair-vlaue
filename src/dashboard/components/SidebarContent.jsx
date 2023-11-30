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
  //Image,
} from '@chakra-ui/react';
import MobileNav from './Navbar';
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

const LinkItems = [
  { name: 'Dashboard', link: '/dashboard', icon: FiHome },
  { name: 'Orders', link: '/buyer/orders', icon: FiTrendingUp },
  { name: 'Message', link: '/buyer/message', icon: FiMessageSquare },
  { name: 'Notifications', link: '/buyer/notification', icon: FiBriefcase },
  { name: 'Settings', link: '/buyer/settings', icon: FiSettings },
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
      {LinkItems.map(link => (
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
      href={link}
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
          color: '#000',
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