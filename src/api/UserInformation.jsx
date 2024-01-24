import axios from 'axios';

const userInformationApi = axios.create({
  baseURL: 'https://scoutflair.top:8080/api/v1',
  headers: {
    Authorization: `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`,
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'Application/json',
    'Access-Control-Allow-Headers':
      'x-access-token, Origin, X-Requested-With, Content-Type, Accept',
  },
});

export const Signup = async () => {
  const response = await userInformationApi.get(`/nextjobs/v1/signup`);
  return response.data;
};
export const Signin = async () => {
  const response = await userInformationApi.get(`/nextjobs/v1/signin`);
  return response.data;
};

export const Verify = async (mail) => {
  const response = await userInformationApi.get(`/signup/recover/first/${mail}`);
  return response.data;
};


export const GetProfile = async () => {
  const response = await userInformationApi.get(`/profile/getProfile`);
  return response?.data;
};

export const GetTatics = async () => {
  const response = await userInformationApi.get(`/tactics/getUserTactics?limit=10&offset=0`);
  return response?.data;
};

export const EditProfiles = async (newProfile) => {
  const response = await userInformationApi.post(
    '/profile/editProfile',newProfile
  );
  return response.data;
};
export const AddTactics = async (uploadTactics) => {
  const response = await userInformationApi.post(
    'tactics/uploadTactics',uploadTactics
  );
  return response.data;
};

export const DeleteTactics = async (tacticsId) => {
  const response = await userInformationApi.delete(
    `/tactics/deleteTactics?tacticsId=${tacticsId}`
  );
  return response.data;
};

export default userInformationApi;