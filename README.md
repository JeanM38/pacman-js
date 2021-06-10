## **Objectifs**

* Migrer ce projet fonctionnel executable sur un navigateur en **un projet node**.

* Identifier les principaux éléments du projet et en établir une structure (rétro-ingénerie). Utiliser les fonction import et export de node afin d'effectuer cette réorganisation.

* Choix d'un bundler

## **Processus de migration**

* ## Configuration
* Initialisation de npm `$ npm init -y`
* Installation des paquets nécéssaires :
    * **webpack**
    * **webpack-cli**
    * **css-loader**
    * **sass**
    * **sass-loader**
    * **style-loader**
* [Configuration de webpack](./webpack.config.js)
    * Choix du point d'entrée (fichier racine js)
    * Mise en place des loaders Sass

* ## Organisation fichiers js
* Analyse des différents fichiers (variables, classes, fonctions, etc..)
* Création d'un [dossier](./src/js/Classes) contenant les différentes **classes**, à savoir : 
    * [**Character**](./src/js/Classes/Character.js)
    * [**Ghost**](./src/js/Classes/Ghost.js) - hérite de **Character**
    * [**Pacman**](./src/js/Classes/Pacman.js) - hérite de **Character**
* Les différentes fonctions seront repertoriées dans un [fichier](./src/js/functions.js), le développeur n'aura plus qu'a importer les fonctions qu'ils désirent dans ses différents scripts, par exemple:
```js
import { gameOver } from './functions';
``` 

## **Why webpack ?**

I choosed webpack because I'm used to work with it, it is open source, and it allows us to work with js modules components and a huge amount of libraries. Webpack configuration is pretty simple to understand and to implement.

Webpack gives me the opportunity to make a build and deploy my app aon Netlify at this adress:

[https://pacman-jm.netlify.app/](https://pacman-jm.netlify.app/)

## **Auteur**

[**Jean MIONNET**](https://github.com/JeanM38) 🙂💻