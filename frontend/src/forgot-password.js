import { useState } from 'react';
import env from './env';
import { useAlert } from 'react-alert';
import LoadingButton from './loading-button';

const ForgotPassword = () => {
  const alert = useAlert();
  const [email, setEmail] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [password, setPassword] = useState('');
  const [addLoad, setAddLoad] = useState(false);
  const [submitLoad, setsubmitLoad] = useState(false);

  let type = 'success';

  async function forgotPassword() {
    setsubmitLoad(true);
    const data = { email };
    const req = await fetch(`${env}users/forgot`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const res = await req.json();
    setsubmitLoad(false);
    if (res.statusCode != 200) {
      type = 'error';
    }
    alert.show(res.message, {
      type: type,
    });
    setEmail('');
  }

  async function addUser() {
    setAddLoad(true);
    const data = { email: newEmail, password };
    const req = await fetch(`${env}users/create-user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const res = await req.json();
    setAddLoad(false);
    if (res.statusCode != 200) {
      type = 'error';
    }
    alert.show(res.message, {
      type: type,
    });
    setNewEmail('');
    setPassword('');
  }

  return (
    <>
      <form className="forgot-form">
        <h4 className="text-danger">Add New user</h4>
        <div className="form-group">
          <label htmlFor="newEmail">Enter Email address</label>
          <input type="email" className="form-control" id="newEmail" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} placeholder="name@example.com" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Enter Password</label>
          <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-group">
          {addLoad === true ? (
            <LoadingButton />
          ) : (
            <button type="button" className="btn btn-primary" onClick={addUser}>
              Add
            </button>
          )}
        </div>

        <h4 className="text-danger">Forgot Password</h4>
        <div className="form-group">
          <label htmlFor="email">Enter Email address</label>
          <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" />
        </div>
        <div className="form-group">
          {submitLoad === true ? (
            <LoadingButton />
          ) : (
            <button type="button" className="btn btn-primary" onClick={forgotPassword}>
              Submit
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default ForgotPassword;
