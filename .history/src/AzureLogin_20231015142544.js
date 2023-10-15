import React from 'react';

const AzureLogin = () => {
  const handleLogin = () => {
    // Replace these placeholders with your Azure AD application details
    const clientId = 'c9628c9e-07fd-488a-811a-9c1a12ffa7fe';
    const redirectUri = 'http://localhost:3000/login/callback'; // This should match your Azure AD app's redirect URI
    const authorizationEndpoint = 'https://login.microsoftonline.com/aa850f7f-4144-444d-bcbf-be717b02c121/oauth2/v2.0/authorize';

    // Construct the authorization URL
    const authUrl = `${authorizationEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=openid profile`;

    // Redirect the user to the Azure AD login page
    window.location.href = authUrl;
  };

  return (
    <div>
      <button onClick={handleLogin}>Login with Azure AD</button>
    </div>
  );
};

export default AzureLogin;
