# Exercice 05 : Time to compose, part 02

Le but ici est (en reprenant l'application de l'exercice 04), rajouter des variables d'environnement. En effet ces dernières étant écrites en clair dans le Dockerfile, il peut être embêtant que des personnes malveillantes les voient dans le cas, par exemple d'identifiants de connexion.  
Pour pallier cela, créer un fichier `.env` dans ce dossier puis déplacez ces variables dans celui-ci. Enfin importez les dans le `docker-compose.yml`  

Afin d'être sûr que Docker puisse trouver ces variable, vous pouvez éxécuter la commande `docker-compose config`. Cette commande vous permettra d'afficher votre `docker-compose.yml` en incluant ces variables d'environnement.  
