# Exercice 04 : Time to compose

Maintenant que vous save créer des conteneurs, il est temps de les lier entre eux.  
Pour cela nous devons utiliser l'outil docker-compose. Il permet de lier des conteneurs afin de les faire dialoguer et ainsi, créer une application complète.  
Dans cet exercie, vous aurez besoin d'utiliser les fichiers `app.py` et `requirements.txt`  
> Note : Cette application est un simple serveur web utilisant [Redis](redis.io)  
> Une fois l'application fonctionnelle, elle comptera simplement le nombre de fois que la page d'accueil à été visité.  

Afin de faire fonctionner tout cela vous devez d'abord compléter le `Dockerfile` ainsi que le `docker-compose.yml`. Pour les tester, utilisez la commande `docker-compose up --build`
