import { Box, Button, Text, Spinner } from '@chakra-ui/react'
import { useState } from 'react';
import InputValue from './InputValue'
import axios from 'axios'
import Swal from 'sweetalert2';

const VideoUpload = () => {
    
    const [file, setFile] = useState();
    const [preview, setPreview] = useState(null);
    const [vidUrl, setVidUrl] = useState();
    const [category, setCategory] = useState();
    const [date, setDate]= useState();
    const [description, setDescription] = useState();
    const [title, setTitle] = useState();
    const [loading, setLoading] = useState();

function handleOnChange(e) {
  const { files } = e.target;

  if (files && files.length > 0) {
    const selectedFile = files[0];

    setFile(selectedFile);
    console.log(file)

    const fileReader = new FileReader();

    fileReader.onload = function() {
      const result = fileReader.result;
      setPreview(result);
    };

    fileReader.readAsDataURL(selectedFile);
  }
}


  const handleSubmit = (e)=>{
        e.preventDefault();
        const input ={
            title:title,
            category:category,
            description:description,
            date:date,
            videoUrl:vidUrl
        }


    setLoading(true);

    axios({
      method: 'post',
      responseType: 'json',
      headers:{
         'Content-Type': 'multipart/form-data',
         Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`,
      },
      url: ' https://scoutflair.top:8080/api/v1/tactics/video/upload',
      data: {
        file:file
      },
    })
      .then(response => {
        setLoading(false);
        setVidUrl(response?.data?.imageUrl);
        axios({
      method: 'post',
      headers:{
        Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`,
      },
      responseType: 'json',
      url: 'https://scoutflair.top:8080/api/v1/tactics/uploadTacticsWithoutFile',
      data: input,
    })
      .then(response => {
        setLoading(false);
               Swal.fire({
  title: 'Success',
  text: response?.data,
  icon: 'success',
})
      })
      .catch(err => {
        console.log(err.response)
        setLoading(false);
         Swal.fire({
  title: 'Error',
  text: err?.response?.data,
  icon: 'error',
  confirmButtonText: 'Okay'
})
      });
        
      })
      .catch(err => {
        console.log(err.response)
        setLoading(false);
         Swal.fire({
  title: 'Error',
  text: err?.response?.data,
  icon: 'error',
  confirmButtonText: 'Okay'
})
      });
    }


//     const handleSubmits = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const newProfile = Object.fromEntries(formData.entries());

//     try {
//       await mutation.mutateAsync(newProfile);
//       // Handle success
//       alert('sucess')
//     } catch (error) {
//       // Handle error
//     }
//   };

  return (
    <Box w='full' h='100%' display='flex' justifyContent='space-between' p='1rem'  flexDirection='column' >
        <Box w={["full",'100%']}>
            <Text fontSize='28px' fontWeight='700' >Video Upload</Text>
            <Box mt='1rem'>
                <InputValue text='Title' name='title' value={title}
          onChange={(e)=>{setTitle(e.target.value)}} placeholder='Name' />
                <InputValue text='Date' value={date} name='date'
          onChange={(e)=>{setDate(e.target.value)}} type='date' placeholder='DD/MM/YYYY'/>
                <InputValue text='Category' value={category} name='category'
          onChange={(e)=>{setCategory(e.target.value)}} placeholder='Goals' />
                <InputValue text='Description' value={description} name='description'
          onChange={(e)=>{setDescription(e.target.value)}} placeholder='Video description goes in here' />
            </Box>
        </Box>
        <Box w={["full",'100%']} mt='1rem'>
            <input
            id="file"
            type="file"
            name='file'
            accept="image/*"
            onChange={handleOnChange}
            />
        </Box>
        {preview && (
  <Box shadow='md' mt='1rem'  ><img src={preview} alt="Upload preview" /></Box>
)}
    <Button type='submit' onClick={handleSubmit} >{loading? <Spinner/>:'Submit'}</Button>
    </Box>
  )
}

export default VideoUpload