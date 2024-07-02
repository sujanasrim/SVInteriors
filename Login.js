
import React from 'react';

const Login = ({ userType }) => {
  return (
    <div>
      <h2>{userType === 'client' ? 'Customer' : 'Designer'} Login</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
