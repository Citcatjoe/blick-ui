# @blick/ui

Composants React simples pour Blick.

## Installation

```bash
npm install @blick/ui
```

## Utilisation

```jsx
import { Button, Input } from '@blick/ui'
import '@blick/ui/styles.css'

function App() {
  return (
    <div>
      <Button variant="primary">Cliquez-moi</Button>
      <Input label="Nom" placeholder="Votre nom" />
    </div>
  )
}
```

## Composants

### Button

```jsx
// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>

// Tailles
<Button size="sm">Petit</Button>
<Button size="md">Moyen</Button>
<Button size="lg">Grand</Button>

// Pleine largeur
<Button fullWidth>Pleine largeur</Button>
```

### Input

```jsx
<Input 
  label="Email"
  placeholder="votre@email.com"
  helperText="Message d'aide"
  error="Message d'erreur"
  size="md"
  fullWidth
/>
```

## Dark Mode

Le dark mode fonctionne automatiquement avec les variables CSS Blick.

## 🎨 Composants disponibles

### Button

Bouton avec plusieurs variants et tailles.

**Props:**
- `variant`: `'primary' | 'secondary' | 'outline' | 'ghost'` (défaut: `'primary'`)
- `size`: `'sm' | 'md' | 'lg'` (défaut: `'md'`)
- `fullWidth`: `boolean` (défaut: `false`)
- Toutes les props HTML standard de `<button>`

**Exemple:**
```tsx
<Button variant="primary" size="lg">
  Bouton Primary
</Button>

<Button variant="outline" fullWidth>
  Pleine largeur
</Button>
```

### Input

Champ de saisie avec label, message d'aide et gestion d'erreurs.

**Props:**
- `label`: `string` - Label affiché au-dessus
- `error`: `string` - Message d'erreur
- `helperText`: `string` - Texte d'aide
- `size`: `'sm' | 'md' | 'lg'` (défaut: `'md'`)
- `fullWidth`: `boolean` (défaut: `false`)
- Toutes les props HTML standard de `<input>`

**Exemple:**
```tsx
<Input
  label="Email"
  placeholder="exemple@blick.ch"
  helperText="Entrez votre email"
/>

<Input
  label="Nom"
  error="Ce champ est requis"
/>
```

## 🎨 Style et thème

Cette bibliothèque utilise:
- **Tailwind CSS v4** pour le styling
- **Variables CSS Blick** pour les couleurs et thèmes
- Support automatique du **dark mode** via les variables CSS

Les composants s'adaptent automatiquement au thème défini dans votre application via les variables CSS `--is-light-theme` et `--is-dark-theme`.

## 🛠️ Développement

### Prérequis
- Node.js 18+
- npm ou yarn

### Installation des dépendances
```bash
npm install
```

### Lancer Storybook
```bash
npm run storybook
```

Ouvrez http://localhost:6006 pour voir les composants.

### Build de la bibliothèque
```bash
npm run build
```

Le résultat est généré dans le dossier `dist/` avec:
- `index.js` - Module ES
- `index.cjs` - CommonJS
- `index.d.ts` - Définitions TypeScript
- `style.css` - CSS compilé

## 📝 Scripts disponibles

- `npm run dev` - Lance le serveur de développement Vite
- `npm run build` - Compile la bibliothèque pour la production
- `npm run storybook` - Lance Storybook
- `npm run build-storybook` - Build Storybook pour le déploiement

## 🏗️ Structure du projet

```
blick:ui/
├── src/
│   ├── components/          # Composants React
│   │   ├── Button.tsx
│   │   ├── Button.stories.tsx
│   │   ├── Input.tsx
│   │   └── Input.stories.tsx
│   ├── styles/
│   │   └── index.css       # Styles globaux + import base.css
│   ├── index.ts            # Point d'entrée principal
│   └── main.tsx            # Point d'entrée avec styles
├── .storybook/             # Configuration Storybook
├── dist/                   # Build output (généré)
├── package.json
├── vite.config.ts
├── tsconfig.json
└── tailwind.config.js
```

## 📄 Licence

MIT © Blick

## 🤝 Contribution

1. Créez votre branche (`git checkout -b feature/AmazingFeature`)
2. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
3. Poussez vers la branche (`git push origin feature/AmazingFeature`)
4. Ouvrez une Pull Request
