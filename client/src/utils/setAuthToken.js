import axios from 'axios';

// Alter defaults after instance has been created
axios.defaults.headers.post['Content-Type'] = 'application/json';

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;
