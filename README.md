Blagues Carambar & Co - Frontend
Ce projet est la partie frontend de l'application de blagues Carambar & Co. Il s'agit d'une page web interactive qui affiche des blagues aléatoires provenant de l'API backend.

Fonctionnalités
Affichage d'une blague aléatoire

Effet de flou sur la réponse (révélée au survol)

Design responsive inspiré de la marque Carambar

Intégration avec l'API backend pour récupérer les blagues

Technologies utilisées
HTML5

CSS3

JavaScript (ES6+)

Fetch API pour les requêtes HTTP

Installation et démarrage
Clonez ce repository

Ouvrez le fichier index.html dans votre navigateur

Aucune dépendance supplémentaire n'est nécessaire pour exécuter ce projet frontend.

Structure du projet
index.html : Structure HTML de la page

script.js : Logique JavaScript pour l'interaction avec l'API et la gestion de l'affichage

images/ : Dossier contenant les ressources graphiques

Intégration avec l'API
Le frontend interagit avec l'API backend déployée sur Render.com. L'URL de base de l'API est :

text
https://carambar-y6ch.onrender.com/jokes
Fonctionnalités principales
getRandomJoke() : Récupère une blague aléatoire depuis l'API

Effet de flou sur la réponse, révélée au survol

Animation du bouton "Nouvelle blague"

Déploiement
Ce frontend est déployé sur GitHub Pages. Vous pouvez y accéder via l'URL suivante :

https://carambar-y6ch.onrender.com/

API Backend
Le backend associé à ce frontend est une API RESTful développée avec Node.js, Express, et SQLite. Elle offre les fonctionnalités suivantes :

Ajout de nouvelles blagues

Consultation de toutes les blagues

Consultation d'une blague spécifique par ID

Obtention d'une blague aléatoire

La documentation complète de l'API est disponible via Swagger UI à l'adresse suivante :

https://carambar-y6ch.onrender.com/api-docs

Contribution
Les contributions à ce projet sont les bienvenues. N'hésitez pas à ouvrir une issue ou à soumettre une pull request.

Licence
Ce projet est sous licence MIT. 
