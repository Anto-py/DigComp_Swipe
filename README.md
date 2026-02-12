# DigiSwipe - Révélateur de pratiques DigComp

Application web ludique pour découvrir le référentiel DigComp 3.0 à travers 10 situations concrètes de classe.

## Déploiement sur GitHub Pages

### 1. Créer un nouveau repository

1. Allez sur https://github.com/new
2. Nommez votre repository : `digcomp-swipe`
3. Cochez "Public"
4. Cliquez sur "Create repository"

### 2. Upload des fichiers

**Option A - Via l'interface web :**
1. Cliquez sur "uploading an existing file"
2. Glissez-déposez tous les fichiers du projet
3. Commit les changements

**Option B - Via Git (ligne de commande) :**
```bash
git init
git add .
git commit -m "Initial commit - DigiSwipe MVP"
git branch -M main
git remote add origin https://github.com/VOTRE-USERNAME/digcomp-swipe.git
git push -u origin main
```

### 3. Activer GitHub Pages

1. Dans votre repository, allez dans **Settings** > **Pages**
2. Source : sélectionnez **main** branch
3. Folder : laissez **/ (root)**
4. Cliquez sur **Save**

**Votre site sera disponible à :** `https://VOTRE-USERNAME.github.io/digcomp-swipe/`

## Partage sur Microsoft Teams

### Lien direct
Copiez simplement l'URL GitHub Pages dans un post Teams :
```
https://VOTRE-USERNAME.github.io/digcomp-swipe/
```

### Post Teams avec preview (exemple)
```
🎯 DigiSwipe - Révélateur de pratiques DigComp

Découvrez le référentiel européen DigComp 3.0 en 10 minutes chrono !

🎮 Swipe droite ou gauche sur 10 situations concrètes de classe
📊 5 domaines, 21 compétences, 500+ acquis d'apprentissage
⚡ Court, ludique, engageant

👉 https://VOTRE-USERNAME.github.io/digcomp-swipe/
```

## Structure du projet
```
digcomp-swipe/
├── index.html          # Structure HTML
├── css/
│   └── styles.css      # Design responsive
├── js/
│   ├── data.js         # 10 situations + feedbacks
│   └── app.js          # Logique de l'application
└── README.md           # Documentation
```

## Fonctionnalités

✅ Interface type Tinder (swipe gauche/droite)  
✅ 10 situations couvrant les 5 domaines DigComp  
✅ Feedbacks détaillés avec compétences activées  
✅ Progression visuelle  
✅ Récapitulatif final  
✅ 100% responsive (desktop + mobile)  
✅ Aucune dépendance externe  
✅ Hébergement gratuit sur GitHub Pages  

## Licence

Contenu pédagogique © 2025 - DigComp 3.0 référence le cadre européen publié par le JRC.  
Code source libre d'utilisation pour usage éducatif.
