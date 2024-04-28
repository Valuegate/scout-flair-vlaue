import { Box, Text, Button, Image,} from '@chakra-ui/react'
import React from 'react'
import service from '../assets/service.png'
import pic4 from '../assets/anyrgb 4.png'
import pic5 from '../assets/Ellipse 73.png'
import pic6 from '../assets/anyrgb 5.png'
import pic7 from '../assets/anyrgb 6.png'
import Cta from '../componets/Cta'
import Footer from '../componets/Footer'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
     <Box w='full'h='100%' style={{ backgroundImage: `transparent`,backgroundRepeat:'' }} >
        <Box w='full'h={['50vh','100%','100vh']}  display='flex' p='2rem' alignItems='center' justifyContent='space-evenly' flexDirection={['column','row']}>
            <Box w={['full','50%']} p={['0rem','2rem']}>
                <Text fontSize={['2rem','4rem']} fontFamily='Raleway' fontWeight='700' color='#E5AA42' >Our Core Services</Text>
                <Link to='/login'>
                <Button _hover={{
                    color:'#E5AA42',
                    background:'var(--Gradient, linear-gradient(270deg, #A83733 5.33%, #E5AA42 100%))',
                    shadow:'-2px 8px 0px #232b30'
                }} 
                color='#fff'
                border='1px solid rgba(0,0,0,.15)'
                mt='1rem'
                fontFamily='Raleway'
                w='150px'
                shadow='-2px 8px 0px #ddd'
                bg='var(--Gradient, linear-gradient(270deg, #A83733 5.33%, #E5AA42 100%))'
                p='16px, 48px, 16px, 48px'
                borderRadius='48px'>Start Free Trial</Button>
                </Link>
            </Box>
            <Box w={['full','50%']}   alignItems='center' justifyContent='center' display={['none','flex']} flexDirection='column' >
                <Image src={service} />
            </Box>
        </Box>
        <Box w='full'h={['100%','100%','100vh']}  display='flex' p='2rem' alignItems='center' justifyContent='space-betweeen' flexDirection={['column','column']}>
            <Text fontSize='52px' fontFamily='Raleway' mt='1rem' display={['none','']} fontWeight='700' color='#E5AA42' >Our Services</Text>
            <Text fontWeight={['700','400']} fontFamily='Raleway'fontSize={['1.5rem','28px']} textAlign='center' color='#E5AA42'>Explore our services</Text>
             <Box w='full' h='100%' mt={['0','5rem']}  display='flex' p={['1rem','2rem']} alignItems='center' justifyContent='space-betweeen' flexDirection={['column','row']}>
                <Box w='full' h='100%' alignItems='center' justifyContent='center' display='flex' flexDirection='column'>
                    <Box w={['full','50%']} mb='6rem' position='relative' alignItems='center' justifyContent='center' display={['none','flex']} flexDirection='column' >
                        <Image src={pic4}zIndex='4' position='absolute'  />
                        <Image src={pic5} position='absolute' display='none' transform='translate(15%,25%)'zIndex='2' />
                    </Box>
                    <Text fontFamily='Raleway' fontWeight={['400','700']} fontSize={['.8rem','22px']} textAlign='center' color='#E5AA42'>Player Metrics</Text>
                    <Text fontFamily='Raleway' fontWeight={['400','700']} fontSize={['.95rem','22px']} textAlign='center' color='#fff'>Enhance Decision Making:</Text>
                    <Text fontFamily='Raleway' fontWeight={['400','700']} fontSize={['.95rem','22px']} textAlign='center' color='#E5AA42'> Analyze player metrics like heatmaps and passing accuracy for smarter decisions.</Text>
                </Box>
                <Box w='full' h='100%' alignItems='center' mt={['1rem','0']} justifyContent='center' display='flex' flexDirection='column'>
                    <Box w={['full','50%']} mb='6rem' position='relative' alignItems='center' justifyContent='center' display={['none','flex']} flexDirection='column' >
                        <Image src={pic6}zIndex='4' position='absolute'  />
                        <Image src={pic5} position='absolute' display='none'  transform='translate(15%,25%)'zIndex='2' />
                    </Box>
                    <Text fontFamily='Raleway' fontWeight={['400','700']} fontSize={['.8rem','22px']} textAlign='center' color='#E5AA42'>Personalized Dashboards</Text>
                    <Text fontFamily='Raleway' fontWeight={['400','700']} fontSize={['.95rem','22px']} textAlign='center' color='#fff'>Tailored Analysis:</Text>
                    <Text fontFamily='Raleway' fontWeight={['400','700']} fontSize={['.95rem','22px']} textAlign='center' color='#E5AA42'> Customize your dashboard for a personalized football analysis experience.</Text>
                </Box>
                <Box w='full' h='100%' alignItems='center' mt={['1rem','0']} justifyContent='center' display='flex' flexDirection='column'>
                    <Box w={['full','50%']} mb='6rem' position='relative' alignItems='center' justifyContent='center' display={['none','flex']} flexDirection='column' >
                        <Image src={pic7}zIndex='4' position='absolute'  />
                        <Image src={pic5} position='absolute' display='none' transform='translate(15%,25%)'zIndex='2' />
                    </Box>
                    <Text fontFamily='Raleway' fontWeight={['400','700']} fontSize={['.8rem','22px']} textAlign='center' color='#E5AA42'>Real-Time Insights</Text>
                    <Text fontFamily='Raleway' fontWeight={['400','700']} fontSize={['.95rem','22px']} textAlign='center' color='#fff'>Stay Informed Instantly:</Text>
                    <Text fontFamily='Raleway' fontWeight={['400','700']} fontSize={['.95rem','22px']} textAlign='center' color='#E5AA42'> Receive real-time tactical insights, reacting swiftly to game changes.</Text>
                </Box>
             </Box>
        </Box>
        <Cta/>
        <Footer/> 
    </Box>
  )
}

export default Services