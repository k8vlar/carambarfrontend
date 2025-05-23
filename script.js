const apiUrl = "https://carambar-y6ch.onrender.com/jokes"; 

document.addEventListener('DOMContentLoaded', () => {
    const jokeContainer = document.getElementById('joke-container');
    const answerElement = document.getElementById('answer');

    jokeContainer.addEventListener('mouseover', () => {
        answerElement.classList.remove('blurred');
    });
    
});

async function getRandomJoke() {
    try {
        console.log('Fetching joke...');
        const response = await fetch(`${apiUrl}/random`);
        console.log('Response received:', response);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
        const data = await response.json();
        console.log('Joke data:', data);
        document.getElementById('question').textContent = data.question;
        
        // Afficher la réponse
        const answerElement = document.getElementById('answer');
        answerElement.textContent = data.reponse;
        
        // Réinitialiser l'état d'affichage 
        answerElement.classList.add('blurred');

    } catch (error) {
        console.error('Erreur:', error);
        document.getElementById('question').textContent = 'Erreur lors du chargement de la blague';
        document.getElementById('answer').textContent = '';
    }
}

async function addNewJoke(question, reponse) {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, reponse })
      });
      
      if (!response.ok) throw new Error('Erreur lors de l\'ajout de la blague');
      
      const newJoke = await response.json();
      console.log('Nouvelle blague ajoutée :', newJoke);
      
    } catch (error) {
      console.error('Erreur:', error);
    }
  }

//   addNewJoke('Pourquoi les plongeurs plongent-ils toujours en arrière ?', 'Parce que sinon ils tombent dans le bateau.');