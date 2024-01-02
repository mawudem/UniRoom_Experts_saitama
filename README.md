# GL02_Saitama

english below.

## Description
Le cahier des charges demande de développer un logiciel en ligne de commande répondant aux besoins du ministère de l'éducation nationale de la république du Sealand (SRYEM). L'université SRU souhaite faciliter la gestion de ses locaux et l'organisation de ses usagers en proposant un outil de suivi d'occupation des salles de cours. Ce projet vise à répondre à ces besoins en offrant des fonctionnalités telles que la consultation des salles associées à un cours, la récupération des capacités des salles, et la génération de fichiers iCalendar.

Le logiciel se présente sous la forme d'un invite de commande et ce dernier est basé sur les créneaux de cours hebdomadaires, chaque salle étant disponible sous le format CRU (Créneau de Réservation Universitaire). Il offre un ensemble de fonctionnalités adaptées pour chaque type d'utilisateurs.

## Functionalities for teachers and students

   - Accès aux informations sur les salles et les cours associés.
   - Consultation du calendrier de disponibilité des salles.
   - Vérification des capacités maximales des salles en fonction du nombre de places.
   - Possibilité de générer des fichiers au format ICalendar pour la planification des cours.

## Functionalities for facility managers

   - Visualisation synthétique du taux d'occupation des salles.
   - Classement des salles en fonction de leur capacité d'accueil en places.
   - Aide à l'identification des salles surexploitées et sous-exploitées en vue d'aménagements futurs.
     
## Technologies used

   Nous avons utilisé Javascript et html.

## Test

Nous avons mis en place 6 tests unitaires qui sont les suivants : UE_spec, trisalle_spec, session_spec, salle_spec, analysSalle_spec, remplirsalle_spec pour vérifier si nos fonctions marchent correctement.

## How to install

### cloner le projet
Nous allons commencer depuis github. Et je supose que vous avez l'acces au depot.
* copier  : https://github.com/mawudem/UniRoom_Experts_saitama.git 
* placez vous dans le dossier dans lequel vous avoir le projet
* ouvrez le dossier dans le terminal ou CMD. 
* Tapez les commandes : 
   git init ==> pour initialise le depost
   git remote add origin https://github.com/mawudem/UniRoom_Experts_saitama.git  ==> pour se connecter 
   git clone https://github.com/mawudem/UniRoom_Experts_saitama.git   ==> pour cloner

   après tout ça vous aurai le dossier  : UniRoom_Experts_saitama qui aparet comme magie.

   cd UniRoom_Experts_saitama ==> vous permet de vous deplacer dans le dossier du projet
### Installation 
pour installer son environement tapez :  npm install

### Aide avec git ( optionel)
pour aller plus vite sur les commandes git je vous propose de vous rendre dans le terminal,
- tapez la commande  : git config --global --edit
- un fichie de config s'ouvre.
- utiliser la fleche de bas pour defiler vers la fin
- puis  collez : 
[alias]
  st = status
  ci = commit
  pu = push
  pl = pull
  lg = log --oneline --graph --decorate --all
  co = checkout
  cm = commit -m
  br = branch
  df = diff
  hist = log --pretty=format:'%h %ad | %s%d [%an]' --graph --date=short
  type = cat-file -t
  dump = cat-file -p
  last = log -1 HEAD
  unstage = reset HEAD
  amend = commit --amend

- Ctl + X puis Y pour acceter d'enregistrer et sortir et en fin entrez.

#### Utiliseation
node Main.js

Auteurs:
KOLEDZI Kokouvi Mawudem
Anna Valier

### With binaries

Pour exécuter ce programme, vous devez simplement télécharger le bon fichier ZIP dans la section des versions, en fonction de votre système d’exploitation. Ensuite, vous devez extraire le fichier ZIP et exécuter le fichier exécutable.

## Issues
Si vous rencontrez des problèmes, faites-le nous savoir en créant un problème sur GitHub.
    


### Licence

Ce projet est développé dans le cadre d'un projet scolaire pour répondre aux besoins de l'Université centrale de la République de Sealand (SRU). L'utilisation et la distribution de ce code source sont soumises à la licence [MIT](https://opensource.org/licenses/MIT).

La licence MIT est une licence ouverte qui permet une utilisation libre du code source, même à des fins commerciales, sous réserve de conserver le texte de l'avis de licence inclus.

Nous encourageons la contribution à ce projet, que ce soit par le signalement d'erreurs, l'ajout de fonctionnalités ou toute autre amélioration. Vos contributions sont les bienvenues. Pour plus d'informations, consultez notre guide de contribution [CONTRIBUTING.md](CONTRIBUTING.md).



### =================================== English-version===================================

## Description

The specifications call for the development of command line software meeting the needs of the Ministry of National Education of the Republic of Sealand (SRYEM). The SRU University wishes to facilitate the management of its premises and the organization of its users by offering a tool for monitoring classroom occupancy. This project aims to meet these needs by offering functionalities such as consulting the rooms associated with a course, retrieving room capacities, and generating iCalendar files.

The software is in the form of a command prompt and the latter is based on weekly course slots, each room being available in the CRU (University Reservation Slot) format. It offers a set of features suitable for each type of user.

## Functionalities for teachers and students
   - Access to information about rooms and associated classes.
   - Consultation of the room availability calendar.
   - Verification of the maximum seating capacity of rooms.
   - Ability to generate ICalendar format files for class scheduling.

## Functionalities for facility managers
   - Synoptic view of room occupancy rates.
   - Ranking of rooms based on their seating capacity.
   - Assistance in identifying overused and underused rooms for future adjustments.

## Technologies used
   We are using Javascript and html.

## Test
We have set up 6 unit tests as follows: UE_spec, trisalle_spec, session_spec, salle_spec, analysSalle_spec, remplirsalle_spec to verify if our functions are working correctly.


## How to install
### clone project
We'll start from github. And I assume you have access to the repository.
* copy: https://github.com/mawudem/UniRoom_Experts_saitama.git
* place yourself in the folder in which you have the project
* open the folder in terminal or CMD.
* Type the commands:
   git init ==> to initialize the repository
   git remote add origin https://github.com/mawudem/UniRoom_Experts_saitama.git ==> to connect
   git clone https://github.com/mawudem/UniRoom_Experts_saitama.git ==> to clone

   after all that you will have the file: UniRoom_Experts_saitama which appears like magic.

   cd UniRoom_Experts_saitama ==> allows you to move to the project folder

### Installation 

to install its environment type: npm install

### Help with git (optional)
to go faster with git commands I suggest you go to the terminal,
- type the command: git config --global --edit
- a config file opens.
- use the down arrow to scroll to the end
- then paste:
[a.k.a]
  st = status
  ci = commit
  pu = push
  pl = sweater
  lg = log --oneline --graph --decorate --all
  co = checkout
  cm = commit -m
  br = branch
  df = diff
  hist = log --pretty=format:'%h %ad | %s%d [%an]' --graph --date=short
  type = cat-file -t
  dump = cat-file -p
  last = log -1 HEAD
  unstage = reset HEAD
  amend = commit --amend

- Ctl + X then Y to agree to save and exit and finally enter.

#### Use
node Main.js

Authors:
KOLEDZI Kokouvi Mawudem
Anna Valier

### With binaries
To run this program, you simply need to download the right ZIP file in the release section, according to your operating system. Then, you need to extract the ZIP file, and run the executable file.

## Issues
### English-version
If you encounter any issues, let us know by creating an issue on GitHub.


## Licence
This project is developed as part of a school project to meet the needs of the Central University of the Sealand Republic (SRU). Use and distribution of this source code is subject to the [MIT] License(https://opensource.org/licenses/MIT).

The MIT License is an open license that allows free use of the source code, even for commercial purposes, provided that you retain the text of the included license notice.

We encourage contribution to this project, whether by reporting errors, adding features, or making other improvements. Your contributions are welcome. For more information, see our contribution guide [CONTRIBUTING.md](CONTRIBUTING.md).