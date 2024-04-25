import { Box, Text, Button, Spinner,Checkbox } from '@chakra-ui/react'
import React,{useState} from 'react'
import InputValue from '../components/InputValue'
import axios from 'axios'
import Swal from 'sweetalert2';
// import { DeleteIcon} from '@chakra-ui/icons'

const Settings = () => {

    const userType = JSON.parse(localStorage.getItem('userType'));

    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
        const [showPwd, setShowPwd] = useState(false);

    const togglePassword = () => {
		setShowPwd((prev) => !prev);
	};


       const handleSubmit = async (e) => {
        if (newPassword===confirmPassword){
    e.preventDefault();
    setLoading(true);
    
     const input= {
        oldPassword:password,
        newPassword:newPassword
    }
    

    try {
      const headers= {
        Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`,
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'Application/json',
        'Access-Control-Allow-Headers':
          'x-access-token, Origin, X-Requested-With, Content-Type, Accept',
      };
      const response = await axios.post('https://scoutflair.top:8080/api/v1/profile/changePassword', input,{ headers });
       Swal.fire({
  title: 'Success',
  text: response.data.message,
  icon: 'sucess',
})
      setLoading(false)
    } catch (error) {
      setLoading(false)
       Swal.fire({
  title: 'Error',
  text: error,
  icon: 'error',
})
    }
}else{
    setError('Password do not match')
}
  };
  return (
    <Box display='flex'  flexDir='column'>
        <Box p='1rem' borderRadius='8px' bg='white' alignItems='center' display='flex'  justifyContent='space-between' >
            <Box border='1px solid #333' p='.5rem' alignItems='center' display='flex'>
                <Text>Profile &nbsp;</Text>
                <Text display='inline-block' fontWeight='700' borderLeft='1px solid #333'>&nbsp;Settings</Text>
            </Box>
            
        </Box>
    
    <Box w='full' display='flex' flexDir={['column','column']}  justifyContent='space-between' >        
        
        <Box w={['full','50%']}  p='1rem' mt='1rem' >
            <Text fontWeight='700'>Change Password</Text>
            <form onSubmit={handleSubmit}>
            <Box  borderRadius='8px' mt='.5rem' p='.5rem' bg='#fff'>
                <InputValue placeholder='********' type={showPwd ? "text" : "password"} name='oldPassword' value={password} onChange={(e)=>{setPassword(e.target.value)}} text='Current Password'/>
                <InputValue placeholder='********' type={showPwd ? "text" : "password"} name='newPassword' value={newPassword} onChange={(e)=>{setNewPassword(e.target.value)}} text='New Password'/>
                <InputValue placeholder='********'  type={showPwd ? "text" : "password"} text='Confirm Password'  value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
                <Text mt='.5rem' color='red'>{error}</Text>
                 <Text as='div' display='flex' w='full' justifyContent='flex-start'  alignItems='center' mt='.75rem'> <Checkbox onChange={togglePassword} /> &nbsp;Show password </Text>
               <Box w='full' display='flex' mt='1rem' justifyContent='flex-end'>
                <Button bg='#E5AA42' color='#fff' type='submit'  p='.75rem' w='30%' cursor='pointer' _hover={{color:'#000'}} >{loading?<Spinner/> :'Save'}</Button>
            </Box>
            </Box>
             
           </form>
        </Box>
       
        <Box w={['full','50%']}  p='1rem' mt='1rem' >
              {userType!=='Admin' &&
                <>
                    {/* <Text  fontWeight='700'>Change Settings</Text>
                    <Box  borderRadius='8px' mt='.5rem' p='1rem ' bg='#fff'>
                        <Box display='flex' justifyContent='space-between' w='full' boxShadow='3px 3px 3px #ccc' p='1rem' borderRadius='4px' >
                            <Box >
                                <Text fontWeight='700' >Match Notification</Text>
                                <Text>Get notified for upcoming matchs</Text>
                            </Box>
                            <Switch />
                        </Box>
                        <Box display='flex' mt='.5rem' justifyContent='space-between' w='full' boxShadow='3px 3px 3px #ccc' p='1rem' borderRadius='4px' >
                            <Box >
                                <Text fontWeight='700' >Promotion</Text>
                                <Text>Get notification on updates from  ScoutFlair</Text>
                            </Box>
                            <Switch />
                        </Box>
                        <Box display='flex' mt='.5rem' justifyContent='space-between' w='full' boxShadow='3px 3px 3px #ccc' p='1rem' borderRadius='4px' >
                            <Box >
                                <Text fontWeight='700' >Player Abscence</Text>
                                <Text>Get notified when a player has been absent</Text>
                            </Box>
                            <Switch />
                        </Box>
                        <Box display='flex' mt='.5rem'  justifyContent='space-between' w='full' boxShadow='3px 3px 3px #ccc' p='1rem' borderRadius='4px' >
                            <Box >
                                <Text fontWeight='700' >Email Notification</Text>
                                <Text>Get notified by mail</Text>
                            </Box>
                            <Switch />
                        </Box>
                    </Box> */}
                </>
                }
            {/* <Box w='full' display='flex' mt='1rem' justifyContent='flex-end'>
                <Button bg='#E5AA42' color='#fff' p='.75rem' w='30%' cursor='pointer' _hover={{color:'#000'}} >Save</Button>
            </Box> */}
            {/* {userType!=='Admin' &&
            <Box border='1px solid #ff1818' w='189px' display='flex' bg='none' color='#ff1818' justifyContent='space-evenly' alignItems='center' p='.25rem' borderRadius='.5rem'>
                <DeleteIcon/>
                <Text fontWeight='700'>Delete Account</Text>
            </Box>
} */}
        </Box>


            
    </Box>
    </Box>
  )
}

export default Settings