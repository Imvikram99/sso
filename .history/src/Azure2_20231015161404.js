import React from 'react';
import axios from 'axios';

const Login = () => {
  const handleLogin = async () => {
    try {
      // Redirect to Spring Boot OAuth2 login endpoint
      window.location.href = 'http://localhost:8080/oauth2/authorize/azure-client';
    } catch (error) {
      console.error('An error occurred during login:', error);
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
};

export default Login;
