# Projet d'intégration de données connectées:

## Critique des bases de données choisies:

_Commentaires sur les données de transports en commun:_

### Exactitude: 

#### Plusieurs horaires ne correspondent pas à ce qu'il est affiché sur le site internet des agences de transports en commun.

### Cohérence:

#### Pour chaque ville, la base de données sous format de texte contient tout transport de tout type existant. La base de données d'une telle ville peut être appelé par exemple "tram+bus". Mais en explorant les données, on a eu du mal à les distinguer ces lignes : manque d'un identifiant unique pour chaque type de transport qui aurait pu faliciter la tâche.

### Trouvabilité:

#### Les coordonnées des routes concernées par les transports en commun sont souvent manquantes. (La colonne route_url est vide chez presque toutes les villes).

### Actualité:

#### On remarque qu'il y a souvent des données très récentes qui datent de 2022, sinon de 2021 ou 2020. Certes, il existe aussi des données périmées des villes que l'on ne va pas utiliser. 

### Traçabilité:

#### Pas de colonne qui mentionne la ville concernée par les données dans les fichiers .txt. Ceci est limitant au niveau des opérations que l'on veut appliquer sur ces données, car on ne peut pas construire une grande base de données à partir de ces fichiers qui correspondent aux villes. Néamoins, le travail qui a été fait par notre groupe c'est de nommer chaque fichier .txt par le nom de la ville avant la manipulation de la data. 

### Intégrité: 

#### On a conclu de la manipulation des données citée dans le commentaire précédent que les données non référencées peuvent poser problème : il existe +35000 villes en France. Leur traçabilité peut durer des heures vu la taille de données.
