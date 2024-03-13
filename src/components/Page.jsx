import React, { useState } from 'react';

function HomePage() {
  // State pour stocker la liste des tâches
  const [tasks, setTasks] = useState([]);

  // State pour stocker la nouvelle tâche saisie par l'utilisateur
  const [newTask, setNewTask] = useState('');

  // Fonction pour ajouter une nouvelle tâche à la liste
  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  // Fonction pour supprimer une tâche de la liste
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Liste de tâches</h1>
      {/* Affichage de la liste des tâches */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>Supprimer</button>
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
        <button onClick={addTask}>Ajouter</button>
      </div>
    </div>
  );
}

export default HomePage;
