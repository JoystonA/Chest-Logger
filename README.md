# Chest-Logger, Copyright 2020 ©
## Pour utiliser l'application, vous devez télécharger le fichier chest_logger_setup_v1.0.exe
``` SHA256SUM : b3dca7a55dfa7ef23eb2cb6e781f7cc85d295d7fc4bad72940066042a62eb234 ```
* Installer le logiciel en suivant les indications de l'installateur
* Ouvrir l'application à la suite l'installation en cliquant sur l'icône 🔒 de Chest-Logger se trouvant sur le Bureau

## Pour travailler sur le projet, le compiler, et l’utiliser si besoin, voici les étapes à faire : 
* Installer Microsoft Visual Studio Code via le lien suivant : https://code.visualstudio.com/ 
* Installer Node.js via le lien suivant : https://nodejs.org/en/
* Installer Git via le lien suivant : https://git-scm.com/ 
* Vérifier sur le terminal le bon déroulement de l’installation via les commandes suivantes (s’il y a une valeur, alors l’installation s’est bien déroulée) : 
    * ```node -v```
    * ```npm -v```
* Sur Microsoft Visual Studio Code, effectuer la commande ```Ctrl+P``` puis ```>Git : Clone```
    * Entrer le lien suivant https://github.com/JoystonA/Chest-Logger.git 
    * Ou par la commande suivante : 
        * ```git clone https://github.com/JoystonA/Chest-Logger.git``` 
* Choisir l’emplacement sur le PC sur lequel vous voulez enregistrer les fichiers
* Installer les paquets manquant via la commande : 
    * ```npm install && npm install electron && npm install electron-packager && npm install asar```
* Lancer l’application via la commande suivante : 
    * ```npm start``` 
* Exporter l’application sous un fichier .exe via la commande suivante : 
    * ```electron-packager . --app-copyright="Copyright (C) 2020 ESIEE Paris | All rights reserved." --asar --icon="logo.ico" --overwrite --out=release_v1.1/```
* Utiliser InnoSetup Compiler pour créer un installateur :
    * ```(cf. Annexes)```
