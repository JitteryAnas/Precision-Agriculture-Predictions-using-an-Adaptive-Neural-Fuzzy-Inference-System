<<<<<<< HEAD
# Application d'Agriculture Intelligente

Cette application combine un frontend React/TypeScript avec un backend Flask pour fournir des prédictions agricoles basées sur des modèles ANFIS.

## Prérequis

- Node.js (version 18 ou plus récente)
- Python (version 3.10 ou plus récente)
- PostgreSQL (pour la base de données)

## Installation

1. **Cloner le projet**
```bash
git clone [URL_DU_REPO]
cd GraphicInterface
```

2. **Installer les dépendances Node.js**
```bash
npm install
```

3. **Installer les dépendances Python**
```bash
pip install flask simpful
```

4. **Configurer la base de données PostgreSQL**
- Créez une base de données PostgreSQL
- Créez un fichier `.env` à la racine du projet avec :
```
DATABASE_URL="postgresql://username:password@localhost:5432/agrfuzzy"
```

5. **Initialiser la base de données**
```bash
npm run db:push
```

## Lancement de l'application

Pour lancer l'application en mode développement :

```bash
npm run dev
```

L'application sera accessible sur :
- Frontend + API : http://localhost:5000

## Structure du projet

```
GraphicInterface/
├── client/                 # Frontend React/TypeScript
│   └── src/
│       ├── pages/         # Pages de l'application
│       ├── components/    # Composants réutilisables
│       └── ...
├── server/                # Backend
│   ├── flask_app.py      # Serveur Flask pour les prédictions
│   ├── index.ts          # Serveur Express principal
│   └── ...
└── shared/               # Code partagé entre frontend et backend
```

## Fonctionnalités

- Interface utilisateur moderne avec Tailwind CSS
- Prédictions agricoles basées sur des modèles ANFIS
- Dashboard administrateur
- Documentation intégrée
- FAQ

## Identifiants par défaut

- Admin : admin
- Mot de passe : admin123

## Développement

- Frontend : React + TypeScript + Vite
- Backend : Express.js + Flask
- Base de données : PostgreSQL avec Drizzle ORM
- Styling : Tailwind CSS

## Scripts disponibles

- `npm run dev` : Lance le serveur de développement
- `npm run build` : Crée une version de production
- `npm run start` : Lance la version de production
- `npm run check` : Vérifie les types TypeScript
- `npm run db:push` : Met à jour la base de données

## Contribution

1. Fork le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.
=======
# Application d'Agriculture Intelligente

Cette application combine un frontend React/TypeScript avec un backend Flask pour fournir des prédictions agricoles basées sur des modèles ANFIS.

## Prérequis

- Node.js (version 18 ou plus récente)
- Python (version 3.10 ou plus récente)
- PostgreSQL (pour la base de données)

## Installation

1. **Cloner le projet**
```bash
git clone [URL_DU_REPO]
cd GraphicInterface
```

2. **Installer les dépendances Node.js**
```bash
npm install
```

3. **Installer les dépendances Python**
```bash
pip install flask simpful
```

4. **Configurer la base de données PostgreSQL**
- Créez une base de données PostgreSQL
- Créez un fichier `.env` à la racine du projet avec :
```
DATABASE_URL="postgresql://username:password@localhost:5432/agrfuzzy"
```

5. **Initialiser la base de données**
```bash
npm run db:push
```

## Lancement de l'application

Pour lancer l'application en mode développement :

```bash
npm run dev
```

L'application sera accessible sur :
- Frontend + API : http://localhost:5000

## Structure du projet

```
GraphicInterface/
├── client/                 # Frontend React/TypeScript
│   └── src/
│       ├── pages/         # Pages de l'application
│       ├── components/    # Composants réutilisables
│       └── ...
├── server/                # Backend
│   ├── flask_app.py      # Serveur Flask pour les prédictions
│   ├── index.ts          # Serveur Express principal
│   └── ...
└── shared/               # Code partagé entre frontend et backend
```

## Fonctionnalités

- Interface utilisateur moderne avec Tailwind CSS
- Prédictions agricoles basées sur des modèles ANFIS
- Dashboard administrateur
- Documentation intégrée
- FAQ

## Identifiants par défaut

- Admin : admin
- Mot de passe : admin123

## Développement

- Frontend : React + TypeScript + Vite
- Backend : Express.js + Flask
- Base de données : PostgreSQL avec Drizzle ORM
- Styling : Tailwind CSS

## Scripts disponibles

- `npm run dev` : Lance le serveur de développement
- `npm run build` : Crée une version de production
- `npm run start` : Lance la version de production
- `npm run check` : Vérifie les types TypeScript
- `npm run db:push` : Met à jour la base de données

## Contribution

1. Fork le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.
>>>>>>> 5ec54579c4eae04f1bcd424e6327381c28d47a2b
