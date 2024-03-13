import React from 'react';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        firstName: 'abdoul',
        lastName: 'karim',
        username: 'abdoulkarim42',
        email: 'abdoulkarim42@gmail.com',
        bio: 'Lorem ipsum dolor sit amet,',
    };
  }

  render() {
  

    return (
      <div className="profile-page">
        <h1>Profil de {this.state.username}</h1>
        <div>
          <h2>Informations personnelles :</h2>
          <p>Nom complet: {this.state.firstName} {this.state.Doe}</p>
          <p>Nom d'utilisateur: {this.state.johndoe123}</p>
          <p>Email: {this.state.email}</p>
          <p>Description: {this.state.bio}</p>
        </div>
   
      </div>
    );
  }
}

export default ProfilePage;
