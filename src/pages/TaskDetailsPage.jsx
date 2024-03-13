import React from 'react';

const TaskDetailsPage = () => {

    const task = {
        id: 1,
        name: 'coder',
        description: 'Ceci est une tâche exemple.',
        Datedecréation : "La date à laquelle la tâche a été créée.",
        Datelimite : "La date à laquelle la tâche doit être complétée.",
        Statut :"L'état actuel de la tâche (en cours, terminée, en attente, etc.).",
        Assigné  : "La personne ou l'équipe responsable de l'accomplissement de la tâche.",
        Priorité : "L'importance relative de la tâche par rapport aux autres tâches.",
        Commentaires : "Toute note ou information supplémentaire pertinente associée à la tâche.",
      }

  return (
    <div>
      <h2>Détails de la tâche</h2>
      <p>ID de la tâche : {task.id}</p>
      <p>Nom de la tâche : {task.name}</p>
      <p>Description : {task.description}</p>
      <p>Datelimite : {task.Datelimite}</p>
      <p>Statut : {task.Statut}</p>
      <p>Assigné: {task.Assigné}</p>
      <p>Priorité : {task.Priorité}</p>
      <p>Commentaires : {task.Commentaires}</p>
    </div>
  );
};

export default TaskDetailsPage;
