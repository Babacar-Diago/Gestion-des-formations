# Gestion-des-formations
Une application simple qui gère les formations d'un établissement.
Chaque étdiant est affecté à une formation et dans une formation on peut inscrir plusieurs étudiant.
L'administrateur peut ajouter une formation et d'y inscrir des étudiants. L'administrateur peut aussi modifier et supprimer des formation et des étudiant.
Les étudiants peuvent s'inscrir sur la plateforme pour consulter la liste des formation et voir dans quelle formation ils se trouvent.
Il n'est pas possible d'utiliser la plateforme sans s'authentifier.
******************
L'application est constitué de deux partie : 
  - Une front-end développée avec Angular
  - Un back-end constitué de cinq (5) microservices developpés en java avec le framework Spring (spring boot + spring sécurity + spring cloud). Pour la sécurité nous avons utilisé JWT Security (JSON Web Token)
******************
Aide :
  - La configuration globale de l'application se trouve dans le dossier *cloud-conf*
  - Vous devez le mettre dans le répertoire *file:///${user.home}/*  (exemple:  C:\Users\nom_utilisateur\cloud-conf) pour que l'application fonctionne correctement.
