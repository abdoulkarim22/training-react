import React, { useState } from 'react';

const LoginForm = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [getdonnees, setData] = useState(null);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Nom d\'utilisateur:', username);
    console.log('Mot de passe:', password);

    const data = {
        name: username,
        password: password
    }
    setData(data);
    setUsername('');
    setPassword('');
  };




  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Nom d'utilisateur:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
        <p>Valeur du nom d'utilisateur en temps réel : {username}</p>
      </div>
      <div>
        <label htmlFor="password">Mot de passe:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
            <p>Valeur du mot de passe en temps réel : {password}</p>
      </div>
      <button type="submit">Se connecter</button>

      {getdonnees && (  <div> 
         <h2>Données soumises </h2> 
         <p>Nom d'utilisateur : {getdonnees.username}</p>
         <p>Mot de passe : {getdonnees.password}</p> 
        
        </div>)}
    </form>
  );
};

export default LoginForm;
