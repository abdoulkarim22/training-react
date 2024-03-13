import React from 'react';

function ProfilePage() {
  const profileData = {
    firstName: 'abdoul',
    lastName: 'karim',
    username: 'abdoulkarim42',
    email: 'abdoulkarim42@gmail.com',
    bio: 'Lorem ipsum dolor sit amet,',
  };

  return (
    <div className="profile-page">
      <h1>Profil de {profileData.username}</h1>
      <div>
        <h2>Informations personnelles :</h2>
        <p>Nom complet: {profileData.firstName} {profileData.lastName}</p>
        <p>Nom d'utilisateur: {profileData.username}</p>
        <p>Email: {profileData.email}</p>
        <p>Description: {profileData.bio}</p>
      </div>
    </div>
  );
}

export default ProfilePage;
