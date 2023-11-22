import React, {useState} from 'react'
import {Box,  Image, Input, Select, Text, } from '@chakra-ui/react'
import scoutflair from '../../assets/scoutflair.png';
import ball from '../../assets/football.png'
import { Link,useNavigate  } from 'react-router-dom';
import axios from 'axios'
import Swal from 'sweetalert2'

const Coach = () => {
      const [loading, setLoading] = useState('');
  const [fullName, setFullName]=useState('');
  const [dob, setDob] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [experience, setExperience]= useState('');
  const [team, setTeam] = useState('');
  const [email, setEmail ] = useState('');
  const [password, setPassword ] = useState('');
  const navigate = useNavigate();

   const validate = ( event) => {
    event.preventDefault();

    const input = {
        fullName: fullName,
        dob: dob,
        licenseNumber: licenseNumber,
      experience: experience,
      position: 'nil',
      currentTeam: team,
      email: email,
      password: password,
      usertype: 'coach'
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
          JSON.stringify(response?.data?.message)
        );
        Swal.fire({
  title: 'Success',
  text: 'Proceed to login',
  icon: 'sucess',
  confirmButtonText: 'Cool'
})
        console.log(response);
        navigate('/login');
      })
      .catch(err => {
       // toast.error(err.response.data);
       Swal.fire({
  title: 'Error!',
  text: err,
  icon: 'error',
  confirmButtonText: 'Cool'
})
        setLoading(false);
      });
  };

  return (
    <Box w='full'h='100%' bg='#1A1818' position='relative' display='flex' p='2rem' alignItems='center' justifyContent='center' flexDirection={['column','column']}>
       <Image src={ball} alt='' position='absolute' zIndex='2' display={['none','block']}  mt='2rem' transform='translate(-300%,-150%)' />
        <Box w={['full','50%']} h={['100%','100%','100%']} bg='#fff' zIndex='5' display='flex' p='2rem' alignItems='center' justifyContent='space-betweeen' flexDirection={['column','column']}>
            <Image src={scoutflair} alt='' />
            <Box p='2rem' w={['100%','75%']} m='auto' alignItems='center' justifyContent='center' flexDirection={['column','column']} display='flex'  >
                <Input placeholder='Full Name' onChange={(e)=>setFullName(e.target.value)} value={fullName}  color='#0C1017' border='1px solid #B0B0B0' bg='#FDFDFD'/>
                <Input placeholder='Date of Birth' mt='5' onChange={(e)=>setDob(e.target.value)} value={dob} type='date' color='#0C1017' border='1px solid #B0B0B0' bg='#FDFDFD' />                    
                <Input placeholder='Coach license number' mt='5' onChange={(e)=>setLicenseNumber(e.target.value)} value={licenseNumber} color='#0C1017' border='1px solid #B0B0B0' bg='#FDFDFD'  />
                <Select placholder='Coaching Experience (years)' mt='5' onChange={(e)=>setExperience(e.target.value)} value={experience} color='#0C1017' border='1px solid #B0B0B0' bg='#FDFDFD' >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Select>
                <Input placeholder='Current Team or Club' mt='5' onChange={(e)=>setTeam(e.target.value)} value={team} color='#0C1017' border='1px solid #B0B0B0' bg='#FDFDFD' />
                <Input placeholder='Email' mt='5' color='#0C1017' onChange={(e)=>setEmail(e.target.value)} value={email} border='1px solid #B0B0B0' bg='#FDFDFD'/>
                <Input placeholder='Password' mt='5' color='#0C1017'onChange={(e)=>setPassword(e.target.value)} value={password} border='1px solid #B0B0B0' bg='#FDFDFD' />
                <Input placeholder='Confirm Password' mt='5' color='#0C1017' border='1px solid #B0B0B0' bg='#FDFDFD' />
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
            value={loading?'loading...':'Sign Up'}
            type='submit'
            onClick={validate}
            />
              <Text fontSize='.85rem' fontWeight='400' textAlign='center' mt='2rem' >
                By creating an account, you are agreeing to our <Link style={{color:'#E5AA42'}} to=''>
Terms of Service and Privacy Policy</Link>.
            </Text>
            <Text fontSize='.85rem' fontWeight='400' textAlign='center' mt='1rem' >
                Already have an account? <br/> <Link style={{color:'#E5AA42'}} to='/login'>
Sign In</Link>.
            </Text>
            </Box>
          
        </Box>
    </Box>
  )
}

export default Coach