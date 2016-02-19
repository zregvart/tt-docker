# CROZ TechThursday - Docker za sve prezentacija

## Pokretanje prezentacije kroz Docker

Buildanje image-a:

	 docker build -t tt-docker .

Nakon buildanja image, pokretanje kontejnera sa

	 docker run -it --rm -p 80:3000 --name preza tt-docker

I otvorite u browseru [http://192.168.99.100](http://192.168.99.100). 
IP se može uvijek saznati sa:

	echo "$(docker-machine ip default)"

ukoliko je docker server pokrenut u `default` docker mašini.

Za pokretanje prezentacije:

    npm start

i otvorite [http://localhost:3000](http://localhost:3000).

Kreiranje verzije za distribuciju:

    npm run build

i otvoriti `index.html`.

Komande:

 * Alt/Option-P - mod za predavača
 * Alt/Option-O - pregled prezentacije

