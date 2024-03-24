import React,{useState} from 'react'
import {Box,  Checkbox,  Image, Input, Spinner, Text,Button } from '@chakra-ui/react'
import scoutflair from '../../assets/scoutflair.png';
import ball from '../../assets/football.png'
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios'
import Swal from 'sweetalert2';


const Login = () => {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPwd, setShowPwd] = useState(false);

    const togglePassword = () => {
		setShowPwd((prev) => !prev);
	};
    const navigate = useNavigate();
    
    const handleSubmit = (e)=>{
        e.preventDefault();

        sessionStorage.setItem(
          'email',
          JSON.stringify(email)

        );
      
   const input = {
    username: email,
      password: password,
    };

    setLoading(true);

    axios({
      method: 'post',
      responseType: 'json',
      url: 'https://scoutflair.top:8080/scoutflair/v1/signin',
      data: input,
    })
      .then(response => {
        setLoading(false);
        sessionStorage.setItem(
          'token',
          JSON.stringify(response?.data?.jwtToken)
        );
        sessionStorage.setItem(
          'verify',
          JSON.stringify(response?.data?.emailConfirmed)

        );
        console.log(response?.data?.emailConfirmed)

        localStorage.setItem('userType',JSON.stringify(response?.data?.userType))
         localStorage.setItem('login', JSON.stringify('true')) 
         localStorage.setItem('firstName', JSON.stringify(response?.data?.firstName))
         const status=JSON.parse(sessionStorage.getItem('verify'));
         if (status===true){
          navigate('/dashboard')
         }else{
          navigate('/verify')
         }
   
      })
      .catch(err => {
        console.log(err?.response)
        setLoading(false);
         Swal.fire({
  title: 'Error',
  text: err.response?.data,
  icon: 'error',
  confirmButtonText: 'Okay'
})
      });
    }

     

  return (
    <Box w='full' h={['80vh','100vh']} bg='#1A1818' position='relative' display='flex' p='2rem' alignItems='center' justifyContent='center' flexDirection={['column','column']}>
       <Image src={ball} alt='' position='absolute' zIndex='2' display={['none','block']}  mt='2rem' transform='translate(-300%,-150%)' />
        <Box w={['full','50%']} h={['100%','100%','100%']} bg='#fff' zIndex='5' display='flex' p='2rem' alignItems='center' justifyContent='space-betweeen' flexDirection={['column','column']}>
            <Image src={scoutflair} alt='' />
            <Box p='2rem' w={['100%','75%']} m='auto' alignItems='center' justifyContent='center' flexDirection={['column','column']} display='flex'  >
                
                <Input placeholder='Email' mt='5' color='#0C1017'  onChange={(e)=>setEmail(e.target.value)}  value={email}  border='1px solid #B0B0B0' bg='#FDFDFD'/>
                
                <Input placeholder='Password' mt='5' type={showPwd ? "text" : "password"} color='#0C1017' border='1px solid #B0B0B0'  onChange={(e)=>setPassword(e.target.value)}  value={password}   />
                <Text as='div' display='flex' w='full' justifyContent='flex-start'  alignItems='center' mt='.75rem'> <Checkbox onChange={togglePassword} /> &nbsp;Show password </Text>
               
                <Button _hover={{
                color:'#fff',
                background:'var(--Blue-Gradient, linear-gradient(270deg, #1B2B4C -0.67%, #345670 30.6%, #558F9F 63.72%, #E5AA42 100%))',
                shadow:'-2px 8px 0px #232b30',
                cursor: 'pointer'
            }} 
            color='#fff'
            border='1px solid rgba(0,0,0,.15)'
            mt='1rem'
            w={['full','330px']}
            fontSize='24px'
            fontWeight='700'
            textAlign='center'
            shadow='-2px 8px 0px #D4D6DB'
            bg='var(--Blue-Gradient, linear-gradient(270deg, #1B2B4C -0.67%, #345670 30.6%, #558F9F 63.72%, #E5AA42 100%))'
            p='1.5rem, 48px, 1.5rem, 48px'
            borderRadius='48px'
            
            type='submit'
            onClick={handleSubmit}
            >
              {loading? <Spinner  color='white' />:'Login'}
            </Button>
              <Text fontSize='.85rem' fontWeight='400' textAlign='center' display='flex' alignItems='center' justifyContent='center' mt='2rem' >
               <Checkbox mr='.3rem' borderColor='#0C1017' /> Remember me
            </Text>
            <Text fontSize='.85rem' fontWeight='400' textAlign='center' mt='1rem' >
                Don’t have an account? <br/> <Link style={{color:'#E5AA42'}} to='/select-role'>
Create account</Link>.
            </Text>
            </Box>
          
        </Box>
    </Box>
  )
}

export default Login