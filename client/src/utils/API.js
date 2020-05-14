import axios from 'axios';



export const createUser = async (data) => {
  try {
    const res = await axios.post('/api/users', data);
    console.log("CLIENT", res);
    if (res.status === 200) {
      return res.data;
    }
  }
  catch (err) {
    return err;
  }
};

export const login = async (data) => {
  try {

  }
  catch (err) {
    return err;
  }
};

export const logout = async () => {
  try {

  }
  catch (err) {
    return err;
  }
};