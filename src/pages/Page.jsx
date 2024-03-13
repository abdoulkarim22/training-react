import React, { useState } from 'react';

function HomePage() {
  // State pour stocker la liste des tâches
  const [tasks, setTasks] = useState([]);
  // State pour stocker la nouvelle tâche saisie par l'utilisateur
  const [newTask, setNewTask] = useState('');

  // Fonction pour ajouter une nouvelle tâche
  const Ajouterunetâche = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask(''); 
    }
  };



  return (
    <div>
      <h1>Liste de tâches</h1>
      <ul>
      
        {tasks.map((tâche, index) => (
          <li key={index}>
            {tâche} 
          </li>
        ))}
      </ul>
      {/* Formulaire pour ajouter une nouvelle tâche */}
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Entrez une nouvelle tâche"
        />
        <button onClick={Ajouterunetâche}>Ajouter</button>
      </div>
    </div>
  );
}

export default HomePage;
