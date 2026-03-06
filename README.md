# 🛍️ E-Commerce 3D Product Viewer

Visionneuse 3D interactive - React Three Fiber, utilisant **React Three Fiber**.

## 🚀 Demo Live
[Accéder à la démo](https://e-commerce3d.vercel.app/)

## ✨ Fonctionnalités
- **Visionneuse 3D interactive :** Support des formats GLB/GLTF.
- **Configurateur temps réel :** Sélecteur de variantes et de couleurs dynamique.
- **Rendu professionnel :** Système d'éclairage 3 points (*3-light setup*).
- **Réalisme :** Ombres dynamiques haute résolution (`shadowMap` 2048px).
- **Gestion d'état :** Panier géré via le store global **Zustand**.
- **Responsive design :** Expérience fluide sur Mobile, Tablette et Desktop.
- **Optimisation performance :** Utilisation de la compression Draco, temps de chargement < 3s.

## 🛠️ Technologies

| Technologie | Version | Usage |
| :--- | :--- | :--- |
| **React** | 18.x | UI Framework |
| **Three.js** | 0.160 | Moteur 3D WebGL |
| **@react-three/fiber** | 8.x | Binding React |
| **@react-three/drei** | 9.x | Helpers R3F |
| **Zustand** | 4.x | State management |
| **GSAP** | 3.x | Animations |
| **Tailwind CSS** | 3.x | Styling |
| **Vite** | 5.x | Build tool |

## 📦 Installation

Pour lancer ce projet en local :

```bash
# Cloner le dépôt
git clone <url-de-ton-repo>

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev