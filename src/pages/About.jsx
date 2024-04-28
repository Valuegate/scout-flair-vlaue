import { Box,Text,Image,Button, Grid } from '@chakra-ui/react'
import React from 'react'
import pic from '../assets/spiral.png'
import tri from '../assets/tri.png'
import chart from '../assets/chart.png'
import double from '../assets/doublecoma.png'
import ball from '../assets/ball.png'
import tick from '../assets/tick.png'
import users from '../assets/users.png'
import expor from '../assets/export.png'
import wwd from '../assets/wwd.png'
import tripic from '../assets/tripic.png'
import yellowcomma from '../assets/yellowcomma.png'
import {StarIcon} from '@chakra-ui/icons'
import Faq from '../componets/Faq'
import Footer from '../componets/Footer'


const About = () => {
      const detail = [
        {
            img: users,
            id:1,
            title: '500,000+ Users:',
            text:'Join our community of half a million football enthusiasts, coaches, and analysts.'
        },
        {
            img: chart,
            id:2,
            title: '10K+ Matches Analyzed:',
            text: "We've analyzed over 10,000 matches, offering valuable insights."
        },
        {
            img: ball,
            id:3,
            title: '100+ Leagues:',
            text: 'Covering 100+ leagues worldwide, from the Premier League to local championships.'
        },
        {
            img: double,
            id:4,
            title: '1K+ Success Stories:',
            text: 'Contributing to over a thousand success stories, from fantasy football wins to on-field victories.'
        },
        {
            img: tick,
            id:5,
            title: '99% Satisfaction:',
            text: 'Our 99% user satisfaction rate reflects our commitment to excellence.'
        },
        {
            img: expor,
            id:6,
            title: '10K+ Daily Updates:',
            text: 'Get over 10,000 daily real-time football updates, staying ahead of the game.'
        }

    ]
  return (
    <Box w='full'h='100%' style={{ backgroundImage: `transparent`,backgroundRepeat:'' }} >
        <Box w='full'h={['50vh','100%','100vh']}   display='flex' p='2rem' alignItems='center' justifyContent='space-betweeen' flexDirection={['column','row']}>
            <Box w={['full','50%']} p={['0rem','2rem']}>
                <Text fontFamily='Raleway' fontSize={['2rem','4rem']} mb={['1rem','']}  fontWeight='700' color='#E5AA42' >We are here to solve the football analytics problem</Text>
                <Text fontFamily='Raleway' fontWeight={['400','700']} fontSize={['1rem','24px']} color='#E5AA42'>Unlock Football's Secrets with ScoutFlair – Your Premier Destination for Advanced Analytics and Insights</Text>
                <Button _hover={{
                    color:'#E5AA42',
                    background:'var(--Gradient, linear-gradient(270deg, #A83733 5.33%, #E5AA42 100%))',
                    shadow:'-2px 8px 0px #232b30'
                }} 
                color='#fff'
                border='1px solid rgba(0,0,0,.15)'
                mt='1rem'
                w='150px'
                shadow='-2px 8px 0px #ddd'
                bg='var(--Gradient, linear-gradient(270deg, #A83733 5.33%, #E5AA42 100%))'
                p='16px, 48px, 16px, 48px'
                borderRadius='48px'>Contact</Button>
            </Box>
            <Box w={['full','50%']}  position='relative' alignItems='center' justifyContent='center' display={['none','flex']} flexDirection='column' >
                <Image src={pic} position='absolute'  />
            </Box>
        </Box>
        <Box w='full'h={['100%','100%','100%']}  display='flex' p='1rem' alignItems='center' justifyContent='space-betweeen' flexDirection={['column','column']}>
            <Text fontFamily='Raleway' fontSize={['2.3rem','52px']} mt='1rem' fontWeight='700'  color='#E5AA42' >What We Do</Text>
            <Text fontFamily='Raleway' fontWeight='400' fontSize={['1rem','28px']} color='#E5AA42' textAlign='center'>We solve the analytics problem</Text>
            <Image  src={tri} width='400px' height='400px'  />
       </Box>
       <Box w='full'h={['100%','100%','100%']} mt='1.5rem'  display='flex' p='1rem' alignItems='center' justifyContent='space-betweeen' flexDirection={['column','column']}>
            <Text fontFamily='Raleway' fontSize={['2.3rem','52px']} mt='1rem' fontWeight='700' color='#E5AA42' >Analyze Us</Text>
            <Text fontFamily='Raleway' fontWeight='400' fontSize='28px' color='#E5AA42' textAlign='center'>Our numbers</Text>
            <Grid w='full' h='100%' placeItems='center' mt='2rem' p={['2rem','']} templateColumns={['repeat(1,1fr)','repeat(1,1fr)','repeat(1,1fr)','repeat(2,1fr)']} gap='9'>
                { detail.map((details)=>{
                return(
                <Box key={details.id} w={['full','402px']} h='207px' shadow='-9px 8px 0px #ddd' borderRadius='12px' bg='#E5AA42' color='#1a1818'  display='flex' p='1rem' alignItems='baseline' justifyContent='space-evenly' flexDirection='column'>
                   <Image src={details?.img} alt=''/>
                   <Text fontFamily='Raleway' fontSize={['1.2rem','24px']} fontWeight='700' color='#1A1818'>{details?.title}</Text>
                    <Text fontFamily='Raleway' fontSize={['.9rem','18px']} fontWeight='400' color='#1A1818'>{details?.text}</Text>
                </Box>
                )
                })
                }
            </Grid>
       </Box>
       <Box w='full'h={['100%','100%','100%']}  mt={['','4rem']} display='flex' p='2rem' alignItems='center' justifyContent='space-betweeen' flexDirection={['column-reverse','row']}>
            <Box w={['full','50%']} p={['0rem','2rem']}>
                <Text fontFamily='Raleway' fontSize={['1.5rem','52px']} fontWeight='700' color='#E5AA42' >What We Do Different</Text>
                <Text fontFamily='Raleway' fontWeight='400' mt={['2rem','']} fontSize={['1rem','24px']} color='#E5AA42'>ScoutFlair stands out with detailed player data, personalized analysis, and real-time updates, empowering football enthusiasts, coaches, and analysts to gain a deeper understanding of the game and make informed decisions. 

We're your trusted source for next-level football insights.</Text>
            </Box>
            <Box w={['full','50%']}  alignItems={['','center']} mb={['1rem','']} justifyContent={['','center']}  flexDirection='column' >
                <Image src={wwd}  />
            </Box>
        </Box>
        <Box w='full'h={['100%','100%','100%']}  display='flex' p={['0','2rem']} alignItems='center' justifyContent='space-betweeen' flexDirection={['column','row']}>
             <Box w={['full','50%']}  position='relative' alignItems='center' justifyContent='center' display={['block','flex']} flexDirection='column' >
                <Image src={tripic}  />
            </Box>
            <Box w={['full','50%']} p={['0rem','2rem']}>
                <Image mr='1rem' src={yellowcomma} position='absolute' display={['none','block','none','block']} transform={['translate(-250%,-250%)' ,'translate(-250%,-250%)','translate(-250%,-250%)','translate(-120%,0%)']} />
                <Box w={['full','full','full','70%']} h='70%' display='flex' flexDirection={['column','column','column','row']} alignItems='center' justifyContent='space-between'>
                    <Box display='flex' justifyContent='center' alignItems='center' p='1rem'>
                        <Text fontFamily='Raleway' fontSize={['1rem','22px']} textAlign='center' fontWeight='400' color='#E5AA42' >
                            "I'm a football enthusiast, and Scoutflair transformed my passion. Detailed stats and real-time insights are game-changers. Highly recommended!"
                            <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' >
                                <Text fontFamily='Raleway' fontSize={['.9rem','20px']} fontWeight='400' color='#fff'>Chinedu Okonkwo</Text>
                                <Box display='flex'>
                                    <StarIcon color='#E5AA42'/>
                                    <StarIcon color='#E5AA42'/>
                                    <StarIcon color='#E5AA42'/>
                                    <StarIcon color='#E5AA42'/>
                                    <StarIcon color='#E5AA42'/>
                                </Box>
                            </Box>  
                        </Text>
                    </Box>
                </Box>
            </Box>
        </Box>
        <Faq/>
        <Footer/>
    </Box>
  )
}

export default About