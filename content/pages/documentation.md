--- 
title: Documentation
---

# Ressources

Cette page référence les documentations utiles au cours dont des vidéos explicatives sur l'usage des outils. 

-------------------------

## Raccourcis clavier 

### Gestion Écriture
- CTRL/Cmd + C : Copier (*Copy*)
- CTRL/Cmd + V : Coller (*Varnish*)
- CTRL/Cmd + X : Couper (*eXterminate*)

- CTRL/Cmd + A : Sélectionner tout (*All*)
- CTRL/Cmd + F : Rechercher (*Find*)

- CTRL/Cmd + Z : Annuler (*Zut*)
- CTRL/Cmd + Y : Revenir à l'état précédent (*Yesterday*)

### Gestion Document
- CTRL/Cmd + S : Sauvegarder (*Save*)
- CTRL/Cmd + O : Ouvrir (*Open*)
- CTRL/Cmd + Q : Quitter (*Quit*)

- CTRL/Cmd + F : Mettre en plein écran (*Full screen*)
- CTRL/Cmd + N : Nouvelle fenêtre (*New*)
### Traitement texte 
- CTRL/Cmd + B : Mise en gras (*Bold*)
- CTRL/Cmd + I : Mise en italique (*Italique*)
- CTRL/Cmd + U : Souligner (*Underline*)

-------------------------
-------------------------

## Commandes Terminal 

### Navigation 

- où je suis : `pwd` (*Print Working Directory*)

- aller : `cd chemin` (*Change Directory*)
- revenir en arrière : `cd ..`

- lister les fichiers : `ls` ou `ll` (*List*)
- recherche dans les noms ou dans les fichiers : `find`

### Gestion des fichiers

- déplacer un fichier : `mv nom.extension` (*Move*)
- supprimer un fichier : `rm nom.extension` (*Remove*)
- afficher le contenu : `cat nom.extension` (*Concatenate*)

- créer un fichier : `touch nom.extension`
- créer un dossier : `mkdir nom` (*Make Directory*)

- copier un fichier : `cp nom.extension chemin/nom.extension` (*Copy*)
- copier un dossier : `cp -r nom chemin/`

### Astuces 

- tabulation : autocomplétion
- flèche du haut : historique des commandes
- CTRL + R : rechercher dans l’historique

- `clear` pour effacer les commandes affichées

- `&&` pour enchaîner les commandes
- `wc nom.extension` pour compter les noms (*WordCounter*)

--------------------
------------------

<!--
## Hypothesis 

<iframe src="https://mmellet.github.io/fra3825_2023/videos/Hypothesis.mp4" title="description"  height="500" width="800" allowfullscreen="allowfullscreen"></iframe>

-------------------------
-------------------------
-->

## Zotero 

<iframe src="https://mmellet.github.io/FRA3825_2023/slides/Zotero.html" title="description" height="500" width="800" ></iframe>

<div style="text-align:center">
<a href="https://mmellet.github.io/FRA3825_2023/slides/Zotero.html" target="_blank">ouvrir dans mon navigateur</a>
</div>

-------------------------
-------------------------

<!--
## HedgeDoc 

[HedgeDoc](https://docs.hedgedoc.org/) est un espace pour l'écriture collaborative et synchrone. 

 
Cet espace se structure selon 2 espaces :

![](/images/hedge.png)

### ![](/images/writing.png) Espace d'édition 

![](/images/exwriting.png)

C'est dans cet espace que vous pourrez éditer. 

L'édition d'une note peut être effectuée via l'éditeur visuel :

![](/images/editor.png)

ou directement en Markdown dans le texte.


### ![](/images/visual.png) Espace de visualisation 

![](/images/exvisual.png)

Cet espace n'est pas éditable mais permet un rendu type web. 

### ![](/images/double.png) Double configuration

![](/images/exemple.png)

Afin de suivre en simultané le rendu de votre édition vous pouvez choisir la double configuration. 


### [Index des notes collaboratives](https://demo.hedgedoc.org/sl_ISH8hSDSCQ9TUQEDzQg?both)

L'index pour les prises de notes collaboratives se trouve [ici](https://demo.hedgedoc.org/sl_ISH8hSDSCQ9TUQEDzQg#).

-------------------------
-------------------------
-->

## Markdown

Markdown est un langage sémantique. 

Voici les fondamentaux : 

### Niveaux de titre 

Les niveaux de titre se notent avec l'utilisation du dièse : 

```

## Titre de niveau 2 

### Titre de niveau 3 

```

### Italique et gras

```
- *italique*
- **gras** 
- ***gras italique***

```

### Notes 

```
Voici mon texte^[une note de bas de page inline.]

Voici mon texte[^1] 

[^1]:Une note de bas de page avec appel et renvoi

```

### Liens

```
[un lien vers une page Wikipédia](https://fr.wikipedia.org/wiki/Hyperlien)

```
 
### Image

```
![Légende](https://tonpetitlook.com/wp-content/uploads/2017/05/nouveau-chaton-nouveau-defi-430442.png)
```

### Tutoriel

<a href="https://www.arthurperret.fr/tutomd/" target="blank">Traduction en ligne par Arthur Perret</a>
					

-------------------------
-------------------------


## HedgeDoc 

[HedgeDoc](https://docs.hedgedoc.org/) est un espace pour l'écriture collaborative et synchrone. 

 
Cet espace se structure selon 2 espaces :

![](https://mmellet.github.io/FRA3825_2023/images/hedge.png)

### ![](https://mmellet.github.io/FRA3825_2023/images/writing.png) Espace d'édition 

![](https://mmellet.github.io/FRA3825_2023/images/edition.png)

C'est dans cet espace que vous pourrez éditer. 

L'édition d'une note peut être effectuée via l'éditeur visuel :

![](https://mmellet.github.io/FRA3825_2023/images/editor.png)

ou directement en Markdown dans le texte.


### ![](https://mmellet.github.io/FRA3825_2023/images/visual.png) Espace de visualisation 

![](https://mmellet.github.io/FRA3825_2023/images/visualisation.png)

Cet espace n'est pas éditable mais permet un rendu type web. 

### ![](https://mmellet.github.io/FRA3825_2023/images/double.png) Double configuration

![](https://mmellet.github.io/FRA3825_2023/images/dual.png)

Afin de suivre en simultané le rendu de votre édition vous pouvez choisir la double configuration. 


-------------------------
-------------------------

## Stylo 

- [Documentation officielle](http://stylo-doc.ecrituresnumeriques.ca/fr_FR/#!index.md)

<iframe src="https://ia803205.us.archive.org/13/items/stylo-doc-fr/StyloDocFR.mp4" target="blank">Vidéo de démonstration</iframe>
-------------------------

-------------------------

## Hypothesis 

- [Astuces pour des annotations réussies](https://web.hypothes.is/annotation-tips-for-students/)

