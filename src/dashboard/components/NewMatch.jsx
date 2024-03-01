import  {useState} from 'react'
import { Box, Button, Spinner, Text, } from '@chakra-ui/react'
import InputValue from './InputValue'
import axios from 'axios'
import Swal from 'sweetalert2';

const NewMatch = ({onClose}) => {
  const [homeTeam,setHomeTeam] = useState();
  const [awayTeam, setAwayTeam] = useState();
  const [dateTime, setDateTime] = useState();
  const [competition, setCompetition] = useState();
  const [refree, setRefree]  = useState();
  const [homeTeamLogoUrl, setHomeTeamLogoUrl] = useState();
  const [awayTeamLogoUrl, setAwayTeamLogoUrl] = useState();
  const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
     const input= {
        homeTeam : homeTeam,
        awayTeam:awayTeam,
        dateTime:dateTime,
        competition:competition,
        refree:refree,
        homeTeamLogoUrl:homeTeamLogoUrl,
        awayTeamLogoUrl:awayTeamLogoUrl

    }
    

    try {
      const headers= {
        Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`,
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'Application/json',
        'Access-Control-Allow-Headers':
          'x-access-token, Origin, X-Requested-With, Content-Type, Accept',
      };
      const response = await axios.post('https://scoutflair.top:8080/api/v1/matches/addMatches', input,{ headers });
      onClose();
       Swal.fire({
  title: 'Success',
  text: response.data.message,
  icon: 'sucess',
})
      setLoading(false)
    } catch (error) {
      setLoading(false)
      onClose();
       Swal.fire({
  title: 'Error',
  text: error,
  icon: 'error',
})
    }
  };

  return (
    <Box w='full' h='100%' display='flex' justifyContent='space-between' p='1rem'  flexDirection='column' >
        <Box w={["full",'100%']}>
            <Text fontSize='28px' fontWeight='700' >Add New Match</Text>
            <Box mt='1rem'>
                <InputValue text='Home team:' name='Home team' value={homeTeam} onChange={(e)=>setHomeTeam(e.target.value)}
          placeholder='Home team' />
           <InputValue text='Away team:' name='Away team' value={awayTeam} onChange={(e)=>setAwayTeam(e.target.value)}
          placeholder='Away team' />
          <InputValue text='Time' name='time' value={dateTime} onChange={(e)=>setDateTime(e.target.value)}
          type='datetime-local' placeholder='Select time'/>
                <InputValue text='Competition' name='competition' value={competition} onChange={(e)=>setCompetition(e.target.value)}
           placeholder='Competition' />
                <InputValue text='Refree' name='refree' value={refree} onChange={(e)=>setRefree(e.target.value)}
           placeholder='name' />
            </Box>
        </Box>
        <Box w={["full",'100%']} mt='1rem'>
            <Text>Home Logo</Text>
            <InputValue
            type="text"
            name='homeTeamLogo'
            value={homeTeamLogoUrl} onChange={(e)=>setHomeTeamLogoUrl(e.target.value)}
            />
        </Box>
        <Box w={["full",'100%']} mt='1rem' >
            <Text>Away Logo</Text>
            <InputValue
            type="text"
            accept="image/*"
            value={awayTeamLogoUrl} onChange={(e)=>setAwayTeamLogoUrl(e.target.value)}
            />
        </Box>
        {/* {preview && (
  <Box shadow='md' mt='1rem'  ><img src='' alt="Upload preview" /></Box>
)} */}
    <Button type='submit' onClick={handleSubmit} mt='1rem' > {loading? <Spinner/>:'Submit'} </Button>
    </Box>
  )
}

export default NewMatch