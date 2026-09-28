# Portfolio — Rania Oulmidi

Portfolio personnel one-page avec fond 3D animé (Three.js), effets de parallaxe et révélations au scroll.

## Ouvrir le site

Double-clique simplement sur `index.html` — aucune installation ni serveur nécessaire.

## Structure

```
portfolio rania/
├── index.html          Contenu du site (CV, expériences, projets, certifications...)
├── css/style.css        Thème sombre + animations
├── js/three-scene.js    Fond 3D (réseau de particules) — Three.js
├── js/main.js           Interactions (menu, tilt 3D, compteurs, révélations)
├── js/vendor/three.min.js  Bibliothèque Three.js (locale, pas besoin d'internet)
└── assets/               Photo de profil + CV en PDF téléchargeable
```

## Modifier le contenu

- Textes et sections : `index.html`
- Liste des certifications : tableau `CERTIFICATIONS` en haut de `js/main.js`
- Couleurs / style : variables `:root` en haut de `css/style.css`
- Remplacer le CV téléchargeable : remplace `assets/CV_Rania_Oulmidi.pdf`
- Remplacer la photo : remplace `assets/profile-cutout.jpg`

## Mettre en ligne (optionnel)

Le dossier est un site statique pur : tu peux le déposer tel quel sur GitHub Pages, Netlify ou Vercel pour avoir un lien à partager.
