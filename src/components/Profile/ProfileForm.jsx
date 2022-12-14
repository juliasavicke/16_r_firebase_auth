import classes from './ProfileForm.module.css';
import { useState, useEffect } from 'react';
import { useAuthCtx } from '../../store/AuthContext';
import { sendRequest } from '../../helpers';

const ProfileForm = () => {
  const { token } = useAuthCtx();
  //susikurti state password
  const [password, setPassword] = useState('');

  //prijungti password two way binding

  //sukurti handleSubmit() funkcija

  //sustabdyti perkrovima

  //panaudoti sendRequest() funkcija ir issiusti pakeisti slaptazodi

  //isspausdinti atsakyma tiek sekmes tiek nesekmes

  //url =

  async function handleSubmit(e) {
    e.preventDefault();
    console.log('e ===', e);
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${
      import.meta.env.VITE_API_KEY
    }`;
    const values = {
      idToken: token,
      password: password,
    };
    console.log('values ===', values);
    console.log('url ===', url);
    const [sendResult, postError] = await sendRequest(values, url);

    if (postError) {
      console.log('postError ===', postError);
      return;
    }
    if (sendResult) {
      console.log('sendResult ===', sendResult);
    }
  }
  function passwordHandler(e) {
    setPassword(e.target.value.trim());
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  function getUserInfo() {
    console.log('get user info');
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <p>new password: {password}</p>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input
          onChange={passwordHandler}
          value={password}
          type='password'
          id='new-password'
        />
      </div>
      <div className={classes.action}>
        <button type='submit'>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
