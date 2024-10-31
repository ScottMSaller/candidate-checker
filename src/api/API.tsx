import filterResponse from "../util";
import CandidateI from "../interfaces/CandidateInterface";

//this function fetches a list of random users from github
const searchGithub = async () => {
  try {
    const start = Math.floor(Math.random() * 100000000) + 1;
    
    const response = await fetch(
      `https://api.github.com/users?since=${start}`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      }
    );

    const data = await response.json();
    if (!response.ok) {
      throw new Error('invalid API response, check the network tab');
    } 

    const tempList = data.map((user: any) => {
      return user.login;
    });

    return tempList;
  } catch (err) {
    console.log('an error occurred', err);
  }
};

//this function fetches an individual user, taking in the name of a user
const searchGithubUser = async (username: string) => {
  try {
    const requestString = `https://api.github.com/users/${username}`
    const response = await fetch(requestString, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    const currentUser = filterResponse<CandidateI>(data, ['avatar_url', 'login', 'location', 'email', 'company', 'bio']);
    console.log(`data object: ${data}`);
    console.log('-----------------');
    console.log(`current user: ${currentUser}`);
    if (!response.ok) {
      throw new Error('invalid API response, check the network tab');
    }
    return data;
  } catch (err) {
    console.log('an error occurred', err);
  }
};

export { searchGithub, searchGithubUser };
