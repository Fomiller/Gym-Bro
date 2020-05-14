import axios from 'axios';

export const createUser = async (data) => {
  try {
    const res = await axios.post('/api/users', data);
    if (res.status === 200) {
      return res.data;
    }
  }
  catch (err) {
    console.log("COULD NOT CREATE USER.");
    return err;
  }
};

export const login = async (data) => {
  try {
    const res = await axios.post('/api/login', data);
    if (res.status === 200) {
      return res.data;
    };
  }
  catch (err) {
    console.log("COULD NOT LOGIN USER.");
    return err;
  }
};

export const logout = async () => {
  try {
    const res = await axios.post('/api/logout');
    if(res.status === 200) {
      console.log("USER LOGGED OUT", res);
      return res.status;
    }
    return null;
  }
  catch (err) {
    console.log("ERROR LOGGING OUT USER");
    return err;
  }
};