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

export const GetMatchesCount = async () => {
  const response = await userInformationApi.get(`/matches/upcoming/getMatchesCount`);
  return response?.data;
};

export const GetLocalPitchesCount = async () => {
  const response = await userInformationApi.get(`/pitches/getLocalPitchesCount`);
  return response?.data;
};

export const GetFootballClubCount = async () => {
  const response = await userInformationApi.get(`/est/fc/getFootballClubsCount`);
  return response?.data;
};

export const GetAcademiesCount = async () => {
  const response = await userInformationApi.get(`/est/academy/getAcademiesCount`);
  return response?.data;
};

export const GetTopPlayersCount = async () => {
  const response = await userInformationApi.get(`/profile/getTopPlayers`);
  return response?.data;
};
export const GetAdminPlayersCount = async () => {
  const response = await userInformationApi.get(`/profile/admin/getPlayersCount`);
  return response?.data;
};

export const GetAdminCoachCount = async () => {
  const response = await userInformationApi.get(`/profile/admin/getCoachesCount`);
  return response?.data;
};


export const GetAdminScoutCount = async () => {
  const response = await userInformationApi.get(`/profile/admin/getScoutCount`);
  return response?.data;
};


export const GetAdminCount = async () => {
  const response = await userInformationApi.get(`/profile/admin/getAdminCount`);
  return response?.data;
};


export const GetNotification = async () => {
  const response = await userInformationApi.get(`/notifications/getNotifications?limit=10&offset=0`);
  return response?.data;
};

export const AddAcademies = async () => {
  const response = await userInformationApi.post(`/est/academy/addAcademy`);
  return response?.data;
};
export const Addplayers= async () => {
  const response = await userInformationApi.post(`https://scoutflair.top:8080/api/v1/profile/coach/createPlayer`);
  return response?.data;
};

export const AddLocalPitches = async () => {
  const response = await userInformationApi.post(`/pitches/addLocalPitches`);
  return response?.data;
};


export const GetAcademy = async () => {
  const response = await userInformationApi.get(`/est/academy/getAcademies?limit=200&offset=0`);
  return response?.data?.content;
};

export const GetPreviousMatches = async () => {
  const response = await userInformationApi.get(`https://scoutflair.top:8080/api/v1/matches/previous/getMatches?limit=200&offset=0`);
  return response?.data;
};

export const GetUsers = async () => {
  const response = await userInformationApi.get(`https://scoutflair.top:8080/api/v1/profile/admin/getPlayers?limit=200&offset=0`);
  return response?.data?.content;
};

export const GetPlayers = async () => {
  const response = await userInformationApi.get(`https://scoutflair.top:8080/api/v1/profile/coach/getPlayers?limit=200&offset=0`);
  return response?.data?.content;
};

export const GetAdminPlayers = async () => {
  const response = await userInformationApi.get(`https://scoutflair.top:8080/api/v1/profile/admin/getPlayers?limit=200&offset=0`);
  return response?.data?.content;
};

export const GetCoach = async () => {
  const response = await userInformationApi.get(`https://scoutflair.top:8080/api/v1/profile/admin/getCoaches?limit=200&offset=0`);
  return response?.data?.content;
};

export const GetScout = async () => {
  const response = await userInformationApi.get(`https://scoutflair.top:8080/api/v1/profile/admin/getScout?limit=200&offset=0`);
  return response?.data?.content;
};

export const GetUpComingMatches = async () => {
  const response = await userInformationApi.get(`https://scoutflair.top:8080/api/v1/matches/upcoming/getMatches?limit=200&offset=0`);
  return response?.data;
};

export const GetFootballClub = async () => {
  const response = await userInformationApi.get(`/est/fc/getFootballClubs?limit=200&offset=0`);
  return response?.data?.content;
};

export const GetLocalPitches = async () => {
  const response = await userInformationApi.get(`https://scoutflair.top:8080/api/v1/pitches/getLocalPitches?limit=200&offset=0`);
  return response?.data?.content;
};

export const GetTatics = async () => {
  const response = await userInformationApi.get(`https://scoutflair.top:8080/api/v1/tactics/coach/getPlayersTactics?limit=200&offset=0`);
  return response?.data.content;
};
export const GetAdminTatics = async () => {
  const response = await userInformationApi.get(`/tactics/admin/getUserTactics?limit=200&offset=0`);
  return response?.data?.content;
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