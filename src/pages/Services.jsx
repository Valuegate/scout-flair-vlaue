import { Box, Text, Button, Image,} from '@chakra-ui/react'
import React from 'react'
import service from '../assets/service.png'
import pic4 from '../assets/anyrgb 4.png'
import pic5 from '../assets/Ellipse 73.png'
import pic6 from '../assets/anyrgb 5.png'
import pic7 from '../assets/anyrgb 6.png'
import Cta from '../componets/Cta'
import Footer from '../componets/Footer'

const Services = () => {
  return (
     <Box w='full'h='100%' style={{ backgroundImage: `transparent`,backgroundRepeat:'' }} >
        <Box w='full'h={['100%','100%','100vh']}  display='flex' p='2rem' alignItems='center' justifyContent='space-evenly' flexDirection={['column','row']}>
            <Box w={['full','50%']} p={['0rem','2rem']}>
                <Text fontSize={['3.5rem','4rem']} fontWeight='700' color='#E5AA42' >Our Core Services</Text>
                <Button _hover={{
                    color:'#E5AA42',
                    background:'#232B35',
                    shadow:'-2px 8px 0px #ddd'
                }} 
                color='#232B35'
                border='1px solid rgba(0,0,0,.15)'
                mt='1rem'
                shadow='-2px 8px 0px #BC9531'
                bg='#E5AA42'
                w='260px'
                fontSize='24px'
                fontWeight='700'
                transition='.3s ease-in-out'
                p='16px, 48px, 16px, 48px'
                borderRadius='48px'>Start Free Trial</Button>
            </Box>
            <Box w={['full','50%']}   alignItems='center' justifyContent='center' display={['none','flex']} flexDirection='column' >
                <Image src={service} />
            </Box>
        </Box>
        <Box w='full'h={['100%','100%','100vh']}  display='flex' p='2rem' alignItems='center' justifyContent='space-betweeen' flexDirection={['column','column']}>
            <Text fontSize='52px' mt='1rem' fontWeight='700' color='#E5AA42' >Our Services</Text>
            <Text fontWeight='400' fontSize='28px' textAlign='center' color='#E5AA42'>Explore our services</Text>
             <Box w='full' h='100%' mt='5rem'  display='flex' p='2rem' alignItems='center' justifyContent='space-betweeen' flexDirection={['column','row']}>
                <Box w='full' h='100%' alignItems='center' justifyContent='center' display='flex' flexDirection='column'>
                    <Box w={['full','50%']} mb='6rem' position='relative' alignItems='center' justifyContent='center' display='flex' flexDirection='column' >
                        <Image src={pic4}zIndex='4' position='absolute'  />
                        <Image src={pic5} position='absolute' display='none' transform='translate(15%,25%)'zIndex='2' />
                    </Box>
                    <Text fontWeight='700' fontSize='28px' textAlign='center' color='#E5AA42'>Player Metrics</Text>
                    <Text fontWeight='700' fontSize='22px' textAlign='center' color='#fff'>Enhance Decision-Making:</Text>
                    <Text fontWeight='700' fontSize='22px' textAlign='center' color='#E5AA42'> Analyze player metrics like heatmaps and passing accuracy for smarter decisions.</Text>
                </Box>
                <Box w='full' h='100%' alignItems='center' justifyContent='center' display='flex' flexDirection='column'>
                    <Box w={['full','50%']} mb='6rem' position='relative' alignItems='center' justifyContent='center' display='flex' flexDirection='column' >
                        <Image src={pic6}zIndex='4' position='absolute'  />
                        <Image src={pic5} position='absolute' display='none'  transform='translate(15%,25%)'zIndex='2' />
                    </Box>
                    <Text fontWeight='700' fontSize='28px' textAlign='center' color='#E5AA42'>Personalized Dashboards</Text>
                    <Text fontWeight='700' fontSize='22px' textAlign='center' color='#fff'>Tailored Analysis:</Text>
                    <Text fontWeight='700' fontSize='22px' textAlign='center' color='#E5AA42'> Customize your dashboard for a personalized football analysis experience.</Text>
                </Box>
                <Box w='full' h='100%' alignItems='center' justifyContent='center' display='flex' flexDirection='column'>
                    <Box w={['full','50%']} mb='6rem' position='relative' alignItems='center' justifyContent='center' display='flex' flexDirection='column' >
                        <Image src={pic7}zIndex='4' position='absolute'  />
                        <Image src={pic5} position='absolute' display='none' transform='translate(15%,25%)'zIndex='2' />
                    </Box>
                    <Text fontWeight='700' fontSize='28px' textAlign='center' color='#E5AA42'>Real-Time Insights</Text>
                    <Text fontWeight='700' fontSize='22px' textAlign='center' color='#fff'>Stay Informed Instantly:</Text>
                    <Text fontWeight='700' fontSize='22px' textAlign='center' color='#E5AA42'> Receive real-time tactical insights, reacting swiftly to game changes.</Text>
                </Box>
             </Box>
        </Box>
        <Cta/>
        <Footer/> 
    </Box>
  )
}

export default Services