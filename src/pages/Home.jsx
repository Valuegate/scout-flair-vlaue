import React from 'react'
import { Box,Grid,Image,Text } from '@chakra-ui/react'
import pic from '../assets/anyrgb 2.png'
import pic2 from '../assets/Ellipse 73.png'
import pic3 from '../assets/Group 3102.png'
import pic4 from '../assets/anyrgb 4.png'
import pic5 from '../assets/Ellipse 75.png'
import pic6 from '../assets/anyrgb 5.png'
import pic7 from '../assets/anyrgb 6.png'
import comma from '../assets/comma.svg'
import cir from '../assets/whitecircle.png'
import {StarIcon} from '@chakra-ui/icons'
import chart from '../assets/chart.png'
import double from '../assets/doublecoma.png'
import ball from '../assets/ball.png'
import tick from '../assets/tick.png'
import users from '../assets/users.png'
import expor from '../assets/export.png'
import ronaldo from '../assets/ronaldo.png'
import small from '../assets/smallchart.png'
import Footer from '../componets/Footer'
// import Faq from '../componets/Faq'
//import bg from '../assets/bg.jpg'
// import { Link } from 'react-router-dom'
//import Navbar from '../componets/Navbar'

const Home = () => {
    // const text = ['Logo','Logo','Logo','Logo','Logo','Logo','Logo','Logo','Logo','Logo','Logo','Logo','Logo','Logo','Logo']
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
    const more =[
        {
            id:1,
            title: 'Player Performance Insights:',
            text: 'Detailed stats and heatmaps for in-depth player performance analysis, enhancing your football understanding.'
        },
        {
            id:2,
            title: 'Tactical Analysis',
            text: "Visualize player movements and strategies for a deeper understanding of the game's tactical nuances."
        },
        {
            id:3,
            title: 'Personalized Dashboards',
            text: 'Customize dashboards for tailored football analysis, focusing on what matters most to you.'
        },
        {
            id:4,
            title: 'Live Match Updates',
            text: 'Stay connected with instant match updates, ensuring you never miss a game-changing moment..'
        },
        {
            id:5,
            title: 'Fantasy Football Tools',
            text: 'Boost fantasy football success with advanced metrics and insights for confident team selection'
        },
        {
            id:6,
            title: 'Coach and Analyst Toolkit',
            text: 'Empower coaches with advanced analytics, predictive models, and tools for strategic decision-making and improvement.'
        },
    ]
  return (
    <Box w='full'h='100%' fontFamily='Knewave !important' style={{ backgroundImage: `transparent`,backgroundRepeat:'' }} >
        <Box w='full'h={['100%','100%','100vh']}  display='flex' p='2rem' alignItems='center' justifyContent='space-betweeen' flexDirection={['column','row']}>
            <Box w={['full','50%']} p={['0rem','2rem']}>
                <Text fontSize={['2.5rem','4rem']} fontFamily='Knewave' fontWeight='700' color='#E5AA42' >Capturing <br/>
                Football <br/>
                Performance</Text>
                <Text fontWeight={['400','700']} fontFamily='Knewave' fontSize={['.9rem','24px']} color='#E5AA42'>Unlock Football's Secrets with ScoutFlair – Your Premier Destination for Advanced Analytics and Insights</Text>
               {/* <Link to='/select-role'>
                <Button _hover={{
                    color:'#E5AA42',
                    background:'var(--Gradient, linear-gradient(270deg, #A83733 5.33%, #E5AA42 100%))',
                    shadow:'-2px 8px 0px #ddd'
                }} 
                color='#fff'
                border='1px solid rgba(0,0,0,.15)'
                mt='1rem'
                shadow='-2px 8px 0px #ddd'
                bg='var(--Gradient, linear-gradient(270deg, #A83733 5.33%, #E5AA42 100%))'
                p='16px, 48px, 16px, 48px'
                width='200px'
                borderRadius='48px'>Sign Up</Button>
                </Link> */}
            </Box>
            <Box w={['full','50%']}  position='relative' alignItems='center' justifyContent='center' display={['none','flex']} flexDirection='column' >
                <Image src={pic}zIndex='4' position='absolute'  />
                <Image src={pic2} position='absolute' transform='translate(15%,25%)'zIndex='2' />
            </Box>
        </Box>
        <Box w='full'h={['100%','100%','100%','100vh']}  display='flex' p='2rem' alignItems='center' justifyContent='space-betweeen' flexDirection={['column','column','column','row']}>
            <Box w={['full','full','full','50%']}  alignItems='center' justifyContent='center' display='flex' flexDirection='column' >
                <Image src={pic3} />
            </Box>
             <Box w={['full','full','full','50%']} mt={['2rem','']}  p={['0rem','2rem']}>
                <Text fontSize={['1rem','1.4rem']} fontFamily='Knewave' fontWeight='700' color='#E5AA42' >Limited Football Insights for Enthusiasts</Text>
                <Text fontSize={['.9rem','1.2rem']} fontFamily='Knewave' fontWeight={['400','700']} color='#fff' >Football enthusiasts lack access to comprehensive, in-depth game insights and advanced player statistics.</Text>
                <Text fontSize={['1rem','1.4rem']} fontFamily='Knewave' mt='1rem' fontWeight='700' color='#E5AA42' >Football Fan's Dilemma</Text>
                <Text fontSize={['.9rem','1.2rem']} fontFamily='Knewave' fontWeight={['400','700']} color='#fff' >You love football, but the stats you see are as basic as they come. You want more than just goals and assists; you want to explore the intricacies of the game. It's like watching a thriller with missing chapters, and you're left craving the whole story.</Text>
                <Text fontSize={['1rem','1.4rem']} fontFamily='Knewave' mt='1rem' fontWeight='700' color='#E5AA42' >Revolutionizing Football Analysis</Text>
                <Text fontWeight={['400','700']} fontSize={['.9rem','1.2rem']} fontFamily='Knewave' color='#fff'>Unlock Football's Secrets with ScoutFlair – Your Premier Destination for Advanced Analytics and Insights</Text>
                
            </Box>
        </Box>
        <Box w='full'h={['100%','100%','100vh']}  display='flex' p='2rem' alignItems='center' justifyContent='space-betweeen' flexDirection={['column','column']}>
            <Text fontSize='52px' mt='1rem' fontFamily='Knewave' fontWeight='700' display={['none','block']} color='#E5AA42' >Discover the Advantages</Text>
            <Text fontWeight='700' fontSize={['1rem','28px']} fontFamily='Knewave' textAlign='center' color='#E5AA42'>Why Choose Scoutflair: Unveiling the Advantages of Our Football Analytics Platforms</Text>
             <Box w='full' h='100%' mt={['8rem','5rem']}  display='flex' p='2rem'  alignItems='center' justifyContent='space-betweeen' flexDirection={['column','row']}>
                <Box w='full' h='100%' alignItems='center' justifyContent='center' display='flex' flexDirection='column'>
                    <Box w={['full','50%']} mb='6rem' position='relative' alignItems='center' justifyContent='center' display='flex' flexDirection='column' >
                        <Image src={pic4}zIndex='4' position='absolute'  />
                        <Image src={pic5} position='absolute' transform='translate(15%,25%)'zIndex='2' />
                    </Box>
                    <Text fontWeight='700' fontSize={['1rem','28px']} fontFamily='Knewave' textAlign='center' color='#E5AA42'>Player Metrics</Text>
                    <Text fontWeight='700' fontSize={['.9rem','22px']} fontFamily='Knewave' textAlign='center' color='#fff'>Enhance Decision-Making:</Text>
                    <Text fontWeight='700' fontSize={['.9rem','22px']} fontFamily='Knewave' textAlign='center' color='#E5AA42'> Analyze player metrics like heatmaps and passing accuracy for smarter decisions.</Text>
                </Box>
                <Box w='full' h='100%' alignItems='center' mt={['7rem','0']} justifyContent='center' display='flex' flexDirection='column'>
                    <Box w={['full','50%']} mb='6rem' position='relative' alignItems='center' justifyContent='center' display='flex' flexDirection='column' >
                        <Image src={pic6}zIndex='4' position='absolute'  />
                        <Image src={pic5} position='absolute' transform='translate(15%,25%)'zIndex='2' />
                    </Box>
                    <Text fontWeight='700' fontSize={['1rem','28px']} fontFamily='Knewave' textAlign='center' color='#E5AA42'>Personalized Dashboards</Text>
                    <Text fontWeight='700' fontSize={['.9rem','22px']} fontFamily='Knewave' textAlign='center' color='#fff'>Tailored Analysis:</Text>
                    <Text fontWeight='700' fontSize={['.9rem','22px']} fontFamily='Knewave' textAlign='center' color='#E5AA42'> Customize your dashboard for a personalized football analysis experience.</Text>
                </Box>
                <Box w='full' h='100%' alignItems='center' mt={['7rem','0']} justifyContent='center' display='flex' flexDirection='column'>
                    <Box w={['full','50%']} mb='6rem' position='relative' alignItems='center' justifyContent='center' display='flex' flexDirection='column' >
                        <Image src={pic7}zIndex='4' position='absolute'  />
                        <Image src={pic5} position='absolute' transform='translate(15%,25%)'zIndex='2' />
                    </Box>
                    <Text fontWeight='700' fontSize={['1rem','28px']} fontFamily='Knewave' textAlign='center' color='#E5AA42'>Real-Time Insights</Text>
                    <Text fontWeight='700' fontSize={['.9rem','22px']} fontFamily='Knewave' textAlign='center' color='#fff'>Stay Informed Instantly:</Text>
                    <Text fontWeight='700' fontSize={['.9rem','22px']} fontFamily='Knewave' textAlign='center' color='#E5AA42'> Receive real-time tactical insights, reacting swiftly to game changes.</Text>
                </Box>
             </Box>
        </Box>
        <Box w='full'h={['100%','100%','100vh']}  display='flex' p='1rem' alignItems='center' justifyContent='space-betweeen' flexDirection={['column','column']}>
            <Text fontSize='52px' mt='1rem' fontFamily='Knewave' fontWeight='700' display={['none','inline-block']} color='#E5AA42' >Success Stories</Text>
            <Text fontWeight='700' fontSize='25px' fontFamily='Knewave' color='#E5AA42' textAlign='center'>Discover Inspirational Success Stories: How ScoutFlaire Has Transformed Football Analysis for Our Users</Text>
            <Box  w='full' h='100%' display='flex'  position='relative' flexDirection={['column','row','row']} alignItems='center' justifyContent='center' >
                <Image mr='1rem' src={comma} position='absolute' display={['none','block','none','block']} transform={['translate(-250%,-250%)' ,'translate(-250%,-250%)','translate(-250%,-250%)','translate(-420%,-125%)']} />
                <Box w={['full','full','full','70%']} h='70%' mt={['1rem','']} display='flex' flexDirection={['column','column','column','row']} alignItems='center' justifyContent='space-between'>
                    <Box display='flex' justifyContent='center' alignItems='center' p='1rem'>
                        <Text fontSize={['.9rem','22px']} textAlign='center' fontWeight='400' color='#E5AA42' >
                            "I'm a football enthusiast, and Scoutflair transformed my passion. Detailed stats and real-time insights are game-changers. Highly recommended!"
                            <Box display='flex' justifyContent='center' alignItems='center' >
                                <Image src={cir}  />
                                <Box ml='1rem' >
                                    <Text fontSize='20px' fontWeight='400' color='#fff'>Chinedu Okonkwo</Text>
                                    <Box display='flex'>
                                        <StarIcon color='#E5AA42'/>
                                        <StarIcon color='#E5AA42'/>
                                        <StarIcon color='#E5AA42'/>
                                        <StarIcon color='#E5AA42'/>
                                        <StarIcon color='#E5AA42'/>
                                    </Box>
                                </Box>
                            </Box>  
                        </Text>
                    </Box>
                    <Box display='flex' justifyContent='center' alignItems='center' p='1rem'>
                        <Text fontSize={['.9rem','22px']} textAlign='center' fontWeight='400' color='#E5AA42' >
                            "For fantasy football,ScoutFlare is my secret weapon. Personalized dashboards and live updates keep me ahead of the curve."
                            <Box display='flex' justifyContent='center' alignItems='center'>
                                <Image src={cir} />
                                <Box ml='1rem'>
                                    <Text fontSize='20px' whiteSpace='nowrap' fontWeight='400' color='#fff'>Chinedu Okonkwo</Text>
                                    <Box display='flex'>
                                        <StarIcon color='#E5AA42'/>
                                        <StarIcon color='#E5AA42'/>
                                        <StarIcon color='#E5AA42'/>
                                        <StarIcon color='#E5AA42'/>
                                        <StarIcon color='#E5AA42'/>
                                    </Box>
                                </Box>
                            </Box>  
                        </Text>
                    </Box>
                    <Box display='flex' justifyContent='center' alignItems='center' p='1rem'>
                        <Text fontSize={['.9rem','22px']} fontWeight='400' textAlign='center' color='#E5AA42' >
                        "I'm a football enthusiast, and Scoutflair transformed my passion. Detailed stats and real-time insights are game-changers. Highly recommended!"
                            <Box display='flex' justifyContent='center' alignItems='center'>
                                <Image src={cir} />
                                <Box ml='1rem'>
                                    <Text fontSize='20px' fontWeight='400' color='#fff'>Amina Yusuf</Text>
                                    <Box display='flex'>
                                        <StarIcon color='#E5AA42'/>
                                        <StarIcon color='#E5AA42'/>
                                        <StarIcon color='#E5AA42'/>
                                        <StarIcon color='#E5AA42'/>
                                        <StarIcon color='#E5AA42'/>
                                    </Box>
                                </Box>
                            </Box>  
                        </Text>
                    </Box>
                </Box>
            </Box>
        </Box>
        <Box w='full'h={['100%','100%','100%']}  display='flex' p='1rem' alignItems='center' justifyContent='space-betweeen' flexDirection={['column','column']}>
            <Text fontSize='52px' mt='1rem' fontWeight='700' display={['none','inline-block']} color='#E5AA42' >Our Impact in Numbers</Text>
            <Text fontWeight='700' fontSize='25px' color='#E5AA42' textAlign='center'>See How ScoutFlair Is Changing Football Analysis</Text>
            <Grid w='full' h='100%' placeItems='center' justifyContent='space-evenly' mt='2rem' p={['2rem','']}  templateColumns={['repeat(1,1fr)','repeat(2,1fr)']} gap='9'>
                { detail.map((details)=>{
                return(
                <Box key={details.id} w={['full','402px']} h='287px' shadow='-9px 8px 0px #D0D3D8' borderRadius='12px'  transform={['none','skew(0deg,0deg)']} bg='#E5AA42' color='#1a1818'  display='flex' p='1rem' alignItems='baseline' justifyContent='space-evenly' flexDirection='column'>
                   <Image src={details?.img} alt=''/>
                   <Text fontSize={['1rem','24px']} fontWeight='700' color='#1A1818'>{details?.title}</Text>
                    <Text fontSize={['.9rem','18px']} fontWeight='400' color='#1A1818'>{details?.text}</Text>
                </Box>
                )
                })
                }
            </Grid>
        </Box>
        {/* <Box w='full'h={['100%','100%','100%']}  display='flex' p='1rem' mt='2rem' alignItems='center' justifyContent='space-betweeen' flexDirection={['column','column']}>
            <Text fontSize='52px' mt='1rem' fontWeight='700' display={['none','inline-block']} color='#E5AA42' >Covered By The Media </Text>
            <Text fontWeight='700' fontSize='25px'  color='#E5AA42' textAlign='center'>See What the Media Is Saying About ScoutFlair</Text>
            <Grid w='full' h='100%' placeItems='center' mt='1rem' templateColumns={['repeat(3,1fr)','repeat(5,1fr)']} gap='6'>
                {text.map((t)=>{
                    return(
                        <Text fontSize={['1.75rem','48px']}  fontWeight='400' color='#E5AA42' fontFamily='Knewave'>{t}</Text>
                    )
                })}
                
            </Grid>
        </Box> */}
        <Box w='full'h={['100%','100%','100%']}  display='flex' p='1rem' mt='2rem' alignItems='center' justifyContent='space-betweeen' flexDirection={['column','column']}>
            <Text fontSize='52px' mt='1rem' fontWeight='700' display={['none','inline-block']} color='#E5AA42' >Discover Our Key Features</Text>
            <Text fontWeight='700' fontSize='25px' color='#E5AA42' textAlign='center'>Unlock the Power of ScoutFlair for a Deeper Football Experience</Text>
            <Box w='full' h='100%' display='flex' alignItems='center' flexDirection={['column','row']} justifyContent='center' mt='2rem'>
                <Box w={['full','full','full','50%']}>
                    <Image src={ronaldo} alt=''/>
                </Box>
                <Box w={['full','full','full','50%']} h='full'>
                     <Grid w='full' h='100%' placeItems='center' mt='1rem' templateColumns={['repeat(1,1fr)','repeat(2,1fr)']} gap={['9','4']}>
                { more.map((details)=>{
                return(
                <Box key={details.id} w='278px' h='278px' shadow='-9px 8px 0px #D0D3D8' borderRadius='8px' bg='#E5AA42' color='#1a1818'  display='flex' p='1rem' alignItems='baseline' justifyContent='space-evenly' flexDirection='column'>
                   <Image src={small} alt=''/>
                   <Text fontSize={['1rem','24px']} fontWeight='700' color='#1A1818'>{details?.title}</Text>
                    <Text fontSize={['.9rem','18px']} fontWeight='400' color='#1A1818'>{details?.text}</Text>
                </Box>
                )
                })
                }
            </Grid>
                </Box>
            </Box>
        </Box>
        {/* <Faq/> */}
        <Footer/>
    </Box>
  )
}

export default Home
import React from 'react'
import { Box,Grid,Image,Text } from '@chakra-ui/react'
import pic from '../assets/anyrgb 2.png'
import pic2 from '../assets/Ellipse 73.png'
import pic3 from '../assets/Group 3102.png'
import pic4 from '../assets/anyrgb 4.png'
import pic5 from '../assets/Ellipse 75.png'
import pic6 from '../assets/anyrgb 5.png'
import pic7 from '../assets/anyrgb 6.png'
import comma from '../assets/comma.svg'
import cir from '../assets/whitecircle.png'
import {StarIcon} from '@chakra-ui/icons'
import chart from '../assets/chart.png'
import double from '../assets/doublecoma.png'
import ball from '../assets/ball.png'
import tick from '../assets/tick.png'
import users from '../assets/users.png'
import expor from '../assets/export.png'
import ronaldo from '../assets/ronaldo.png'
import small from '../assets/smallchart.png'
import Footer from '../componets/Footer'
// import Faq from '../componets/Faq'
//import bg from '../assets/bg.jpg'
// import { Link } from 'react-router-dom'
//import Navbar from '../componets/Navbar'

const Home = () => {
    // const text = ['Logo','Logo','Logo','Logo','Logo','Logo','Logo','Logo','Logo','Logo','Logo','Logo','Logo','Logo','Logo']
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
    const more =[
        {
            id:1,
            title: 'Player Performance Insights:',
            text: 'Detailed stats and heatmaps for in-depth player performance analysis, enhancing your football understanding.'
        },
        {
            id:2,
            title: 'Tactical Analysis',
            text: "Visualize player movements and strategies for a deeper understanding of the game's tactical nuances."
        },
        {
            id:3,
            title: 'Personalized Dashboards',
            text: 'Customize dashboards for tailored football analysis, focusing on what matters most to you.'
        },
        {
            id:4,
            title: 'Live Match Updates',
            text: 'Stay connected with instant match updates, ensuring you never miss a game-changing moment..'
        },
        {
            id:5,
            title: 'Fantasy Football Tools',
            text: 'Boost fantasy football success with advanced metrics and insights for confident team selection'
        },
        {
            id:6,
            title: 'Coach and Analyst Toolkit',
            text: 'Empower coaches with advanced analytics, predictive models, and tools for strategic decision-making and improvement.'
        },
    ]
  return (
    <Box w='full'h='100%' fontFamily='Knewave !important' style={{ backgroundImage: `transparent`,backgroundRepeat:'' }} >
        <Box w='full'h={['100%','100%','100vh']}  display='flex' p='2rem' alignItems='center' justifyContent='space-betweeen' flexDirection={['column','row']}>
            <Box w={['full','50%']} p={['0rem','2rem']}>
                <Text fontSize={['2.5rem','4rem']} fontFamily='Knewave' fontWeight='700' color='#E5AA42' >Capturingss <br/>
                Football <br/>
                Performance</Text>
                <Text fontWeight={['400','700']} fontFamily='Knewave' fontSize={['.9rem','24px']} color='#E5AA42'>Unlock Football's Secrets with ScoutFlair – Your Premier Destination for Advanced Analytics and Insights</Text>
               {/* <Link to='/select-role'>
                <Button _hover={{
                    color:'#E5AA42',
                    background:'var(--Gradient, linear-gradient(270deg, #A83733 5.33%, #E5AA42 100%))',
                    shadow:'-2px 8px 0px #ddd'
                }} 
                color='#fff'
                border='1px solid rgba(0,0,0,.15)'
                mt='1rem'
                shadow='-2px 8px 0px #ddd'
                bg='var(--Gradient, linear-gradient(270deg, #A83733 5.33%, #E5AA42 100%))'
                p='16px, 48px, 16px, 48px'
                width='200px'
                borderRadius='48px'>Sign Up</Button>
                </Link> */}
            </Box>
            <Box w={['full','50%']}  position='relative' alignItems='center' justifyContent='center' display={['none','flex']} flexDirection='column' >
                <Image src={pic}zIndex='4' position='absolute'  />
                <Image src={pic2} position='absolute' transform='translate(15%,25%)'zIndex='2' />
            </Box>
        </Box>
        <Box w='full'h={['100%','100%','100%','100vh']}  display='flex' p='2rem' alignItems='center' justifyContent='space-betweeen' flexDirection={['column','column','column','row']}>
            <Box w={['full','full','full','50%']}  alignItems='center' justifyContent='center' display='flex' flexDirection='column' >
                <Image src={pic3} />
            </Box>
             <Box w={['full','full','full','50%']} mt={['2rem','']}  p={['0rem','2rem']}>
                <Text fontSize={['1rem','1.4rem']} fontFamily='Knewave' fontWeight='700' color='#E5AA42' >Limited Football Insights for Enthusiasts</Text>
                <Text fontSize={['.9rem','1.2rem']} fontFamily='Knewave' fontWeight={['400','700']} color='#fff' >Football enthusiasts lack access to comprehensive, in-depth game insights and advanced player statistics.</Text>
                <Text fontSize={['1rem','1.4rem']} fontFamily='Knewave' mt='1rem' fontWeight='700' color='#E5AA42' >Football Fan's Dilemma</Text>
                <Text fontSize={['.9rem','1.2rem']} fontFamily='Knewave' fontWeight={['400','700']} color='#fff' >You love football, but the stats you see are as basic as they come. You want more than just goals and assists; you want to explore the intricacies of the game. It's like watching a thriller with missing chapters, and you're left craving the whole story.</Text>
                <Text fontSize={['1rem','1.4rem']} fontFamily='Knewave' mt='1rem' fontWeight='700' color='#E5AA42' >Revolutionizing Football Analysis</Text>
                <Text fontWeight={['400','700']} fontSize={['.9rem','1.2rem']} fontFamily='Knewave' color='#fff'>Unlock Football's Secrets with ScoutFlair – Your Premier Destination for Advanced Analytics and Insights</Text>
                
            </Box>
        </Box>
        <Box w='full'h={['100%','100%','100vh']}  display='flex' p='2rem' alignItems='center' justifyContent='space-betweeen' flexDirection={['column','column']}>
            <Text fontSize='52px' mt='1rem' fontFamily='Knewave' fontWeight='700' display={['none','block']} color='#E5AA42' >Discover the Advantages</Text>
            <Text fontWeight='700' fontSize={['1rem','28px']} fontFamily='Knewave' textAlign='center' color='#E5AA42'>Why Choose Scoutflair: Unveiling the Advantages of Our Football Analytics Platforms</Text>
             <Box w='full' h='100%' mt={['8rem','5rem']}  display='flex' p='2rem'  alignItems='center' justifyContent='space-betweeen' flexDirection={['column','row']}>
                <Box w='full' h='100%' alignItems='center' justifyContent='center' display='flex' flexDirection='column'>
                    <Box w={['full','50%']} mb='6rem' position='relative' alignItems='center' justifyContent='center' display='flex' flexDirection='column' >
                        <Image src={pic4}zIndex='4' position='absolute'  />
                        <Image src={pic5} position='absolute' transform='translate(15%,25%)'zIndex='2' />
                    </Box>
                    <Text fontWeight='700' fontSize={['1rem','28px']} fontFamily='Knewave' textAlign='center' color='#E5AA42'>Player Metrics</Text>
                    <Text fontWeight='700' fontSize={['.9rem','22px']} fontFamily='Knewave' textAlign='center' color='#fff'>Enhance Decision-Making:</Text>
                    <Text fontWeight='700' fontSize={['.9rem','22px']} fontFamily='Knewave' textAlign='center' color='#E5AA42'> Analyze player metrics like heatmaps and passing accuracy for smarter decisions.</Text>
                </Box>
                <Box w='full' h='100%' alignItems='center' mt={['7rem','0']} justifyContent='center' display='flex' flexDirection='column'>
                    <Box w={['full','50%']} mb='6rem' position='relative' alignItems='center' justifyContent='center' display='flex' flexDirection='column' >
                        <Image src={pic6}zIndex='4' position='absolute'  />
                        <Image src={pic5} position='absolute' transform='translate(15%,25%)'zIndex='2' />
                    </Box>
                    <Text fontWeight='700' fontSize={['1rem','28px']} fontFamily='Knewave' textAlign='center' color='#E5AA42'>Personalized Dashboards</Text>
                    <Text fontWeight='700' fontSize={['.9rem','22px']} fontFamily='Knewave' textAlign='center' color='#fff'>Tailored Analysis:</Text>
                    <Text fontWeight='700' fontSize={['.9rem','22px']} fontFamily='Knewave' textAlign='center' color='#E5AA42'> Customize your dashboard for a personalized football analysis experience.</Text>
                </Box>
                <Box w='full' h='100%' alignItems='center' mt={['7rem','0']} justifyContent='center' display='flex' flexDirection='column'>
                    <Box w={['full','50%']} mb='6rem' position='relative' alignItems='center' justifyContent='center' display='flex' flexDirection='column' >
                        <Image src={pic7}zIndex='4' position='absolute'  />
                        <Image src={pic5} position='absolute' transform='translate(15%,25%)'zIndex='2' />
                    </Box>
                    <Text fontWeight='700' fontSize={['1rem','28px']} fontFamily='Knewave' textAlign='center' color='#E5AA42'>Real-Time Insights</Text>
                    <Text fontWeight='700' fontSize={['.9rem','22px']} fontFamily='Knewave' textAlign='center' color='#fff'>Stay Informed Instantly:</Text>
                    <Text fontWeight='700' fontSize={['.9rem','22px']} fontFamily='Knewave' textAlign='center' color='#E5AA42'> Receive real-time tactical insights, reacting swiftly to game changes.</Text>
                </Box>
             </Box>
        </Box>
        <Box w='full'h={['100%','100%','100vh']}  display='flex' p='1rem' alignItems='center' justifyContent='space-betweeen' flexDirection={['column','column']}>
            <Text fontSize='52px' mt='1rem' fontFamily='Knewave' fontWeight='700' display={['none','inline-block']} color='#E5AA42' >Success Stories</Text>
            <Text fontWeight='700' fontSize='25px' fontFamily='Knewave' color='#E5AA42' textAlign='center'>Discover Inspirational Success Stories: How ScoutFlaire Has Transformed Football Analysis for Our Users</Text>
            <Box  w='full' h='100%' display='flex'  position='relative' flexDirection={['column','row','row']} alignItems='center' justifyContent='center' >
                <Image mr='1rem' src={comma} position='absolute' display={['none','block','none','block']} transform={['translate(-250%,-250%)' ,'translate(-250%,-250%)','translate(-250%,-250%)','translate(-420%,-125%)']} />
                <Box w={['full','full','full','70%']} h='70%' mt={['1rem','']} display='flex' flexDirection={['column','column','column','row']} alignItems='center' justifyContent='space-between'>
                    <Box display='flex' justifyContent='center' alignItems='center' p='1rem'>
                        <Text fontSize={['.9rem','22px']} textAlign='center' fontWeight='400' color='#E5AA42' >
                            "I'm a football enthusiast, and Scoutflair transformed my passion. Detailed stats and real-time insights are game-changers. Highly recommended!"
                            <Box display='flex' justifyContent='center' alignItems='center' >
                                <Image src={cir}  />
                                <Box ml='1rem' >
                                    <Text fontSize='20px' fontWeight='400' color='#fff'>Chinedu Okonkwo</Text>
                                    <Box display='flex'>
                                        <StarIcon color='#E5AA42'/>
                                        <StarIcon color='#E5AA42'/>
                                        <StarIcon color='#E5AA42'/>
                                        <StarIcon color='#E5AA42'/>
                                        <StarIcon color='#E5AA42'/>
                                    </Box>
                                </Box>
                            </Box>  
                        </Text>
                    </Box>
                    <Box display='flex' justifyContent='center' alignItems='center' p='1rem'>
                        <Text fontSize={['.9rem','22px']} textAlign='center' fontWeight='400' color='#E5AA42' >
                            "For fantasy football,ScoutFlare is my secret weapon. Personalized dashboards and live updates keep me ahead of the curve."
                            <Box display='flex' justifyContent='center' alignItems='center'>
                                <Image src={cir} />
                                <Box ml='1rem'>
                                    <Text fontSize='20px' whiteSpace='nowrap' fontWeight='400' color='#fff'>Chinedu Okonkwo</Text>
                                    <Box display='flex'>
                                        <StarIcon color='#E5AA42'/>
                                        <StarIcon color='#E5AA42'/>
                                        <StarIcon color='#E5AA42'/>
                                        <StarIcon color='#E5AA42'/>
                                        <StarIcon color='#E5AA42'/>
                                    </Box>
                                </Box>
                            </Box>  
                        </Text>
                    </Box>
                    <Box display='flex' justifyContent='center' alignItems='center' p='1rem'>
                        <Text fontSize={['.9rem','22px']} fontWeight='400' textAlign='center' color='#E5AA42' >
                        "I'm a football enthusiast, and Scoutflair transformed my passion. Detailed stats and real-time insights are game-changers. Highly recommended!"
                            <Box display='flex' justifyContent='center' alignItems='center'>
                                <Image src={cir} />
                                <Box ml='1rem'>
                                    <Text fontSize='20px' fontWeight='400' color='#fff'>Amina Yusuf</Text>
                                    <Box display='flex'>
                                        <StarIcon color='#E5AA42'/>
                                        <StarIcon color='#E5AA42'/>
                                        <StarIcon color='#E5AA42'/>
                                        <StarIcon color='#E5AA42'/>
                                        <StarIcon color='#E5AA42'/>
                                    </Box>
                                </Box>
                            </Box>  
                        </Text>
                    </Box>
                </Box>
            </Box>
        </Box>
        <Box w='full'h={['100%','100%','100%']}  display='flex' p='1rem' alignItems='center' justifyContent='space-betweeen' flexDirection={['column','column']}>
            <Text fontSize='52px' mt='1rem' fontWeight='700' display={['none','inline-block']} color='#E5AA42' >Our Impact in Numbers</Text>
            <Text fontWeight='700' fontSize='25px' color='#E5AA42' textAlign='center'>See How ScoutFlair Is Changing Football Analysis</Text>
            <Grid w='full' h='100%' placeItems='center' justifyContent='space-evenly' mt='2rem' p={['2rem','']}  templateColumns={['repeat(1,1fr)','repeat(2,1fr)']} gap='9'>
                { detail.map((details)=>{
                return(
                <Box key={details.id} w={['full','402px']} h='287px' shadow='-9px 8px 0px #D0D3D8' borderRadius='12px'  transform={['none','skew(0deg,0deg)']} bg='#E5AA42' color='#1a1818'  display='flex' p='1rem' alignItems='baseline' justifyContent='space-evenly' flexDirection='column'>
                   <Image src={details?.img} alt=''/>
                   <Text fontSize={['1rem','24px']} fontWeight='700' color='#1A1818'>{details?.title}</Text>
                    <Text fontSize={['.9rem','18px']} fontWeight='400' color='#1A1818'>{details?.text}</Text>
                </Box>
                )
                })
                }
            </Grid>
        </Box>
        {/* <Box w='full'h={['100%','100%','100%']}  display='flex' p='1rem' mt='2rem' alignItems='center' justifyContent='space-betweeen' flexDirection={['column','column']}>
            <Text fontSize='52px' mt='1rem' fontWeight='700' display={['none','inline-block']} color='#E5AA42' >Covered By The Media </Text>
            <Text fontWeight='700' fontSize='25px'  color='#E5AA42' textAlign='center'>See What the Media Is Saying About ScoutFlair</Text>
            <Grid w='full' h='100%' placeItems='center' mt='1rem' templateColumns={['repeat(3,1fr)','repeat(5,1fr)']} gap='6'>
                {text.map((t)=>{
                    return(
                        <Text fontSize={['1.75rem','48px']}  fontWeight='400' color='#E5AA42' fontFamily='Knewave'>{t}</Text>
                    )
                })}
                
            </Grid>
        </Box> */}
        <Box w='full'h={['100%','100%','100%']}  display='flex' p='1rem' mt='2rem' alignItems='center' justifyContent='space-betweeen' flexDirection={['column','column']}>
            <Text fontSize='52px' mt='1rem' fontWeight='700' display={['none','inline-block']} color='#E5AA42' >Discover Our Key Features</Text>
            <Text fontWeight='700' fontSize='25px' color='#E5AA42' textAlign='center'>Unlock the Power of ScoutFlair for a Deeper Football Experience</Text>
            <Box w='full' h='100%' display='flex' alignItems='center' flexDirection={['column','row']} justifyContent='center' mt='2rem'>
                <Box w={['full','full','full','50%']}>
                    <Image src={ronaldo} alt=''/>
                </Box>
                <Box w={['full','full','full','50%']} h='full'>
                     <Grid w='full' h='100%' placeItems='center' mt='1rem' templateColumns={['repeat(1,1fr)','repeat(2,1fr)']} gap={['9','4']}>
                { more.map((details)=>{
                return(
                <Box key={details.id} w='278px' h='278px' shadow='-9px 8px 0px #D0D3D8' borderRadius='8px' bg='#E5AA42' color='#1a1818'  display='flex' p='1rem' alignItems='baseline' justifyContent='space-evenly' flexDirection='column'>
                   <Image src={small} alt=''/>
                   <Text fontSize={['1rem','24px']} fontWeight='700' color='#1A1818'>{details?.title}</Text>
                    <Text fontSize={['.9rem','18px']} fontWeight='400' color='#1A1818'>{details?.text}</Text>
                </Box>
                )
                })
                }
            </Grid>
                </Box>
            </Box>
        </Box>
        {/* <Faq/> */}
        <Footer/>
    </Box>
  )
}

export default Home