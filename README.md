# Projet d'intégration de données connectées:

Ce projet à pour but de permettre à un utilisateur qui souhaite s'installer dans une nouvelle ville de chercher une ville "écologique".

IL aura accès a plusieurs informations telles que : 

- La consommation énergétiques les villes
- La qualité de l'eau des villes 
- Les aires de covoiturages 
- Le prix au mètre carré 


## Critique des bases de données choisies:


#### Aires de covoiturages 

Ces données proviennent de Point d'Accès National transport.data.gouv.fr. 

Les données ne semblent pas 100% exactes. 
Les données sont actualisées elles nen sont donc pas statiques. 


Complétude : Est-ce que les informations sont complètes ? Les champs à renseigner le sont-ils ? D’autres champs utiles pourraient-ils être ajoutés ?

Certaines données sont manquantes comme le nombre de places ou l'adresse : parfois un chiffre est renseigné mais souvent il est manquant. 
On retrouve parfois des données aberrantes: 5361 comme donnée de longitude par exemple.

Fiabilité :	Les différentes données sont-elles justes ? Certaines informations sont très complètes… mais totalement fausses ! Un haut pourcentage d’erreurs peut être très impactant pour une entreprise.

Pas tout à fait. Par exemple on retrouve parfois des données aberrantes: 5361 comme donnée de longitude.


Cohérence :	Est-ce que certaines données sont contradictoires ? Si une même donnée contenue dans plusieurs bases présente des résultats différents, elle ne peut pas être considérée comme fiable et une investigation doit être menée.

Non. Cela semble cohérent. 

Pertinence : Est-ce que les informations stockées sont d’une quelconque utilité pour l’entreprise ? La collecte de données non pertinentes est une perte de temps et d’argent.

Oui, nous avons les adresse des aires de covoiturages, leur type ( parking ou aire d'autoroute par exemple), leur coordonnées GPS pour les situer sur une carte et encores d'autres données pertinentes. 

Accessibilité :	Aussi intéressantes soient-elles, les données concernées peuvent-elles être consultées facilement par les collaborateurs habilités ? Une information difficile d’accès est une information peu ou pas exploitée.

Elles sont en libre service donc l'accessibilité est confirmée. 

Ancienneté : Les informations stockées sont-elles récentes ou anciennes ? Le temps érode inéluctablement la valeur d’une information, des mises à jour régulières sont donc indispensables.

Dans la colonne " mise à jour" on voit que certaine données ont été mises à jour en 2017. Certe la dernière modification du fichier date d'Octobre 20022 cependant certaine lignes n'ont pas été mises à jour depuis 5 ans.

## Critique des bases de données choisies:

_Commentaires sur les données de transports en commun:_

### Exactitude: 

#### Plusieurs horaires ne correspondent pas à ce qu'il est affiché sur les sites internet par les agences de transports en commun.

### Cohérence:

#### Pour chaque ville, la base de données sous format de texte contient tout transport de tout type existant. La base de données d'une telle ville peut être appelé par exemple "tram+bus". Mais en explorant les données, on a eu du mal à distinguer ces lignes : manque d'un identifiant unique pour chaque type de transport qui aurait pu faliciter la tâche.

### Trouvabilité:

#### Les coordonnées des routes concernées par les transports en commun sont souvent manquantes. (La colonne route_url est vide chez presque toutes les villes).

### Actualité:

#### On remarque qu'il y a souvent des données très récentes qui datent de 2022, sinon de 2021 ou 2020. Certes, il existe aussi des données périmées des villes que l'on ne va pas utiliser. 

### Traçabilité:

#### Pas de colonne qui mentionne la ville concernée par les données dans les fichiers .txt. Ceci est limitant au niveau des opérations que l'on veut appliquer sur ces données, car on ne peut pas construire une grande base de données à partir de ces fichiers qui correspondent aux villes. Néamoins, le travail qui a été fait par notre groupe c'est de nommer chaque fichier .txt par le nom de la ville avant la manipulation de la data. 

### Intégrité: 

#### On a conclu de la manipulation des données citée dans le commentaire précédent que les données non référencées peuvent poser problème : il existe +35000 villes en France. Leur traçabilité peut durer des heures vu la taille de données.
