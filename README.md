# Projet d'intégration de données connectées:

Ce projet a pour but de permettre à un utilisateur qui souhaite s'installer dans une nouvelle ville de trouver une ville "écologique".

IL aura accès à plusieurs informations de la ville telles que : 

- Sa consommation électrique annuelle
- Sa qualité de l'eau
- Ses aires de covoiturages
- Son prix moyen au mètre carré


## Critique des bases de données choisies:


#### Aires de covoiturages 

Ces données proviennent de Point d'Accès National transport.data.gouv.fr. 

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


#### Consommation annuelle d’électricité par commune

Lien : https://opendata.agenceore.fr/explore/dataset/conso-elec-gaz-annuelle-par-secteur-dactivite-agregee-commune/information/

Ce jeu de donnée nous permet de visualiser l’évolution de 2011 à 2021 des consommations d'électricité et de gaz par secteur d'activité (résidentiel, tertiaire, industriel, agricole ou non affecté) et par commune. 

Nous avons mesuré la qualité des données par différents critères :

-   Complétude : Les informations de notre jeu de données sont complètes, il nous manque 0 champs. Nous avons sélectionné les colonnes qui nous intéressent pour construire notre API.

-	Fiabilité : Les données ont été ventilé sur le référentiel INSEE (Institut national de la statistique et des études économiques) au 1er janvier 2021. Le pourcentage d’erreur est donc très infime.

-	Cohérence : Les données sont cohérentes, nous avons vérifié les données pour certaines lignes en croisant les résultats avec d’autres sources.

-	Pertinence : Nous utilisons ici la consommation globale d’électricité par commune.

-	Accessibilité : Les données concernées peuvent être consultées facilement, en effet elles sont en ligne sur un site open source et libre de droit https://opendata.agenceore.fr/ qui regroupent toutes les données autour de l’énergie en France.

-	Ancienneté : Nous disposons des données sur la consommation électrique par commune depuis 2011. Les données sont mises à jour chaque fois. Ces données sont publiées dans le respect des règles relatives à la protection des Informations Commercialement Sensibles.


#### Qualité de l'eau

Lien : https://hubeau.eaufrance.fr/page/api-qualite-eau-potable

Les données diffusées concernent les résultats du contrôle sanitaire de l'eau distribuée commune par commune :

-	Prélèvements et résultats des analyses réalisées dans le cadre du contrôle sanitaire réglementaire sur les unités de distribution ou les installations directement en amont

-	Liens entre communes et unités de distribution

Les éléments mis à disposition dans ce jeu de données correspondent à une compilation des bulletins d’analyses diffusés en ligne, commune par commune, sur le site internet du Ministère des Solidarités et de la Santé : http://eaupotable.sante.gouv.fr/.

Nous avons mesuré la qualité des données par différents critères :

-	Complétude : Les informations du jeu de données ci-dessus sont complètes. Nous avons sélectionné seulement certaines colonnes pour construire notre jeu de donnée.

-	Fiabilité : L'API "Qualité de l'eau potable" diffuse les données mises en ligne par le Ministère des Solidarités et de la Santé sur le portail data.gouv.fr.

-	Cohérence : Les données nous semblent cohérentes, en effet nous les avons vérifiés en croisant les résultats avec d’autres sources de données.

-	Pertinence : Nous sélectionnons seulement les informations pertinentes pour notre API, c’est-à-dire les consommations d’eau par habitant par commune ainsi que les codes INSEE de chaque commune.

-	Accessibilité : Les données peuvent être consultées facilement, en effet elles sont en ligne sur un site qui respectent les principes de l’open data (accessible, réutilisable, sans restriction par n’importe quel utilisateur, libre de droit…).

-	Ancienneté : Les informations stockées sont récentes. Le jeu de données est mis à jour mensuellement.


#### Étude sur le logement

Ces données trouvées sur le site data.gouv ont été produites par le Groupe BPCE, qui est le deuxième acteur bancaire en France. 
https://www.data.gouv.fr/fr/datasets/etude-sur-le-logement/

Complétude : Est-ce que les informations sont complètes ? Les champs à renseigner le sont-ils ? D’autres champs utiles pourraient-ils être ajoutés ?

Il manque des informations puisqu'il y a 


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
