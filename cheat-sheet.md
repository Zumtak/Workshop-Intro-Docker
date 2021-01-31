# Cheat sheet commandes Docker  

> Dans ce fichier vous trouverez toutes les commandes dont vous aurez besoin pour ce workshop  

## Docker (ex00 à ex03)

- `docker build -t {IMAGE_NAME} .` : vous permettra de construire votre image Docker à partir du Dockerfile situé dans le fichier `.` (le dossier courant). L'argument `-t` sert ici à donner un nom à votre image Docker.  

- `docker run [OPTIONS] IMAGE_NAME [COMMAND] [ARGUMENTS...]` : Vous permez de lancer un conteneur à partir d'une image spécifiée (et cosntruite au préalable). Pour plus d'information sur cette commande veuillez consulter la [documentation ici](https://docs.docker.com/engine/reference/run/) !

- `docker container start {CONTAINER_NAME | CONTAINER_ID}` : démarre un conteneur  

- `docker container stop {CONTAINER_NAME | CONTAINER_ID}` : stop un conteneur 

- `docker container ls` : liste tout vos conteneurs  
- `docker container rm {CONTAINER_NAME | CONTAINER_ID}` : supprimer un conteneur, si le conteneur est en fonctionnement, le stopper avant OU utiliser l'argument `-f`
- `docker image ls` OU `docker images` : liste vos images  
- `docker image rm {IMAGE_NAME | IMAGE_ID}` : supprime une image  
- `docker exec {CONTAINER_NAME | CONTAINER_ID} CMD` : éxécute une commande dans un conteneur démarré  



## Docker compose (ex04 et ex05)  
- `docker-compose up` : lance l'entièreté de vos conteneurs docker définis dans votre `docker-compose.yml`. Vous pouvez rajouter l'argument `--build` afin de relancer la construction de ces conteneur  

- `docker-compose start` : démarre vos conteneurs  

- `docker-compose stop` : arrête vos conteneurs  

- `docker-compose config` : affiche la configuration de votre `docker-compose.yml`
