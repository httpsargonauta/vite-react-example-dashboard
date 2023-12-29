import CryptoJS from 'crypto-js';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

// Encrypt and decrypt values
export const encrypt = (value) => {
  let key = CryptoJS.AES.encrypt(value, 'argonautrules').toString();
  return key;
};

export const decrypt = (value) => {
  let bytes = CryptoJS.AES.decrypt(value, 'argonautrules');
  let originalvalue = bytes.toString(CryptoJS.enc.Utf8);
  return originalvalue;
};

// Check email and password
export const checkEmail = (email) => {
  if (!email) return false;
  else if (typeof email !== 'string') return false;
  else
    return email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};

export const checkPassword = (password) => {
  if (!password) return false;
  if (typeof password !== 'string') return false;
  return password.length >= 6;
};

export const checkUser = (user) => {
  if (!user) return false;
  if (typeof user !== 'string') return false;
  if (user.length < 3 || user.length > 20) return false;
  return user.toLowerCase().match(/^[a-zA-Z0-9][a-zA-Z0-9]*$/);
};

// Check exist values
export const checkExistValues = (email, password, user) => {
  if (
    !email &&
    email === null &&
    email === '' &&
    email === undefined &&
    !password &&
    password === null &&
    password === '' &&
    password === undefined &&
    !user &&
    user === null &&
    user === '' &&
    user === undefined
  )
    return false;
  else return true;
};

export const Token = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('loggedIn');
    if (!token) {
      navigate('/login');
    }
  }, []);
  let getAccounts = JSON.parse(localStorage.getItem('users'));
  let getUserToken = '';
  for (let i = 0; i < getAccounts.length; i++) {
    if (getAccounts[i].token === localStorage.getItem('loggedIn')) {
      getUserToken = getAccounts[i].token;
    }
  }
  return getUserToken;
};

export function checkPermissions() {
  const token = localStorage.getItem('loggedIn');
  const isAllowed = token ? true : false;
  if (isAllowed) {
    const getUserData = JSON.parse(localStorage.getItem('users'));
    const userData = getUserData.find((user) => user.token === token);
    if (userData.token === token && decrypt(userData.role) === 'admin') {
      localStorage.setItem('permissions', true);
    } else if (userData.token === token && decrypt(userData.role) === 'user') {
      localStorage.setItem('permissions', false);
    } else {
      localStorage.setItem('permissions', false);
    }
  }
  return isAllowed;
}

export function UserDashboard() {
  const token = Token();
  const getUserData = JSON.parse(localStorage.getItem('users'));
  const userData = getUserData.find((user) => user.token === token);
  let admin = decrypt(userData.role) === 'admin' ? true : false;
  return { userData, admin };
}

export function DeleteUser(token) {
  const getUserData = JSON.parse(localStorage.getItem('users'));
  const userData = getUserData.find((user) => user.token === token);
  getUserData.splice(getUserData.indexOf(userData), 1);
  localStorage.setItem('users', JSON.stringify(getUserData));
  localStorage.removeItem('loggedIn');
  localStorage.removeItem('permissions');
  window.location.reload();
}

export function ChangeName(token, name) {
  const getUserData = JSON.parse(localStorage.getItem('users'));
  const userData = getUserData.find((user) => user.token === token);
  userData.name = encrypt(name);
  getUserData.splice(getUserData.indexOf(userData), 1, userData);
  localStorage.setItem('users', JSON.stringify(getUserData));
  window.location.reload();
}
