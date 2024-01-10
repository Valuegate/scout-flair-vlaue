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

export const GetProfile = async () => {
  const response = await userInformationApi.get(`/profile/getProfile`);
  return response.data;
};

export const EditProfiles = async (newProfile) => {
  const response = await userInformationApi.post(
    '/profile/editProfile',newProfile
  );
  return response.data;
};

export const Exvolunter = async () => {
  const response = await userInformationApi.post(
    '/api/v1/profile/exVolunteer/add'
  );
  return response.data;
};

export const terminalAnalytics = async () => {
  const response = await userInformationApi.get(
    '/apis/v1/bizzdesk/terminals/merchants/analytics'
  );
  return response.data;
};

export const terminalList = async () => {
  const response = await userInformationApi.get(
    '/apis/v1/bizzdesk/terminals/admin/getTerminalsByMerchant?limit=10&offset=0'
  );
  return response.data;
};

export const terminalAllList = async () => {
  const response = await userInformationApi.get(
    '/apis/v1/bizzdesk/terminals/admin/getTerminalsByMerchant?limit=30000&offset=0'
  );
  return response.data;
};

export default userInformationApi;