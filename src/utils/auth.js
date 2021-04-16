import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'dev-olp6mbys.us.auth0.com',
    clientID: '5MHKZLZn6CLJy3R3d3pD2Dlnsd4hEelH',
    redirectUri: 'http://localhost:3000/callback',
    responseType: 'token id_token',
    scope: 'openid profile email'
  })

  login = () => {
    this.auth0.authorize();
  }

  handleAuth = () => {
    this.auth0.parseHash((err, authResult) => {
      if(authResult) {
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.id_token);

        let expiresAt = JSON.stringify(authResult.expiresIn(authResult.expiresIn * 1000 + new Date().getTime()));
        localStorage.setItem('expiresAt', expiresAt);
      } else {
        console.log(err);
      }
    })
  }

  logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expiresAt')
  }

  isAuthenticated = () => {
    let expiresAt = JSON.parse(localStorage.getItem('expiresAt'));
    return new Date().getTime() < expiresAt
  }
}