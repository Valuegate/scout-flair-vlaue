import React,{useState} from 'react'
import {Box,  Checkbox,  Image, Input, Text, } from '@chakra-ui/react'
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
        localStorage.setItem('userType',JSON.stringify(response?.data?.userType))
         localStorage.setItem('login', JSON.stringify('true')) 
           Swal.fire({
  title: 'Success',
  text: 'Login successful',
  icon: 'sucess',
  confirmButtonText: 'Done 👍'
})
        // if(response.data.userType === 'NEWUSER'){
        //   navigate('/dashboard');
        //   window.location.reload();
        // }else if(response.data.userType === 'ORGANIZATION'){
        //     navigate('/');
        //     window.location.reload();
        // }else if(response.data.userType === 'INDIVIDUAL'){
        //       navigate('/individual/dashboard');
        //       window.location.reload();

        // }else{
        //   navigate('/organization/dashboard')
        //   window.location.reload();
        // }
        navigate('/dashboard')
      })
      .catch(err => {
        console.log(err.response)
        setLoading(false);
         Swal.fire({
  title: 'Error',
  text: err.response.data,
  icon: 'error',
  confirmButtonText: 'Cool'
})
      });
    }

  return (
    <Box w='full' h={['100%','100vh']} bg='#1A1818' position='relative' display='flex' p='2rem' alignItems='center' justifyContent='center' flexDirection={['column','column']}>
       <Image src={ball} alt='' position='absolute' zIndex='2' display={['none','block']}  mt='2rem' transform='translate(-300%,-150%)' />
        <Box w={['full','50%']} h={['100%','100%','100%']} bg='#fff' zIndex='5' display='flex' p='2rem' alignItems='center' justifyContent='space-betweeen' flexDirection={['column','column']}>
            <Image src={scoutflair} alt='' />
            <Box p='2rem' w={['100%','75%']} m='auto' alignItems='center' justifyContent='center' flexDirection={['column','column']} display='flex'  >
                
                <Input placeholder='Email' mt='5' color='#0C1017'  onChange={(e)=>setEmail(e.target.value)}  value={email}  border='1px solid #B0B0B0' bg='#FDFDFD'/>
                
                <Input placeholder='Password' mt='5' type={showPwd ? "text" : "password"} color='#0C1017' border='1px solid #B0B0B0'  onChange={(e)=>setPassword(e.target.value)}  value={password}   />
                <Text as='div' display='flex' w='full' justifyContent='flex-start' onClick={togglePassword} alignItems='center' mt='.75rem'> <Checkbox onChange={togglePassword} /> &nbsp;Show password </Text>
               
                <Input _hover={{
                color:'#fff',
                background:'var(--Blue-Gradient, linear-gradient(270deg, #1B2B4C -0.67%, #345670 30.6%, #558F9F 63.72%, #E5AA42 100%))',
                shadow:'-2px 8px 0px #232b30',
                cursor: 'pointer'
            }} 
            color='#fff'
            border='1px solid rgba(0,0,0,.15)'
            mt='1rem'
            //w='330px'
            fontSize='24px'
            fontWeight='700'
            textAlign='center'
            shadow='-2px 8px 0px #D4D6DB'
            bg='var(--Blue-Gradient, linear-gradient(270deg, #1B2B4C -0.67%, #345670 30.6%, #558F9F 63.72%, #E5AA42 100%))'
            p='1.5rem, 48px, 1.5rem, 48px'
            borderRadius='48px'
            value={loading? 'loading...':'Login'}
            type='submit'
            onClick={handleSubmit}
            />
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