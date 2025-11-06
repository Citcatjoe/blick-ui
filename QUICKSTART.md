# 📋 Quick Start Guide - @blick/ui

## Installation rapide

```bash
npm install @blick/ui
```

## Utilisation en 3 étapes

### 1️⃣ Importer les styles

```tsx
// Dans votre fichier principal (main.tsx, App.tsx, ou _app.tsx)
import '@blick/ui/style.css'
```

### 2️⃣ Importer les composants

```tsx
import { Button, Input } from '@blick/ui'
```

### 3️⃣ Utiliser les composants

```tsx
function MyComponent() {
  return (
    <div>
      <Button variant="primary">Cliquez-moi</Button>
      <Input label="Email" placeholder="votre@email.com" />
    </div>
  )
}
```

## Exemples rapides

### Boutons

```tsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>

{/* Tailles */}
<Button size="sm">Petit</Button>
<Button size="md">Moyen</Button>
<Button size="lg">Grand</Button>

{/* Pleine largeur */}
<Button fullWidth>Pleine largeur</Button>

{/* Désactivé */}
<Button disabled>Désactivé</Button>
```

### Inputs

```tsx
{/* Basique */}
<Input placeholder="Entrez du texte" />

{/* Avec label */}
<Input label="Nom" placeholder="Votre nom" />

{/* Avec message d'aide */}
<Input 
  label="Email"
  placeholder="email@example.com"
  helperText="Nous ne partagerons jamais votre email"
/>

{/* Avec erreur */}
<Input 
  label="Mot de passe"
  type="password"
  error="Le mot de passe est requis"
/>

{/* Tailles */}
<Input size="sm" placeholder="Petit" />
<Input size="md" placeholder="Moyen" />
<Input size="lg" placeholder="Grand" />

{/* Pleine largeur */}
<Input fullWidth placeholder="Pleine largeur" />
```

## Frameworks populaires

### Next.js (App Router)

```tsx
// app/layout.tsx
import '@blick/ui/style.css'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}

// app/page.tsx
import { Button } from '@blick/ui'

export default function Home() {
  return <Button>Cliquez-moi</Button>
}
```

### Next.js (Pages Router)

```tsx
// pages/_app.tsx
import '@blick/ui/style.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

// pages/index.tsx
import { Button } from '@blick/ui'

export default function Home() {
  return <Button>Cliquez-moi</Button>
}
```

### Vite

```tsx
// main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import '@blick/ui/style.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// App.tsx
import { Button, Input } from '@blick/ui'

function App() {
  return (
    <div>
      <h1>Mon App</h1>
      <Button variant="primary">Action</Button>
    </div>
  )
}

export default App
```

### Create React App

```tsx
// index.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import '@blick/ui/style.css'
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// App.tsx
import { Button, Input } from '@blick/ui'

function App() {
  return (
    <div className="App">
      <Button variant="primary">Bienvenue</Button>
    </div>
  )
}

export default App
```

## Dark Mode

Le dark mode est automatique ! Il utilise `prefers-color-scheme` par défaut.

Pour contrôler manuellement :

```tsx
// Forcer le light mode
useEffect(() => {
  document.documentElement.style.setProperty('--is-light-theme', 'initial')
  document.documentElement.style.setProperty('--is-dark-theme', '')
}, [])

// Forcer le dark mode
useEffect(() => {
  document.documentElement.style.setProperty('--is-light-theme', '')
  document.documentElement.style.setProperty('--is-dark-theme', 'initial')
}, [])

// Toggle
const [isDark, setIsDark] = useState(false)

const toggleTheme = () => {
  if (isDark) {
    document.documentElement.style.setProperty('--is-light-theme', 'initial')
    document.documentElement.style.setProperty('--is-dark-theme', '')
  } else {
    document.documentElement.style.setProperty('--is-light-theme', '')
    document.documentElement.style.setProperty('--is-dark-theme', 'initial')
  }
  setIsDark(!isDark)
}
```

## TypeScript

Tous les composants sont typés :

```tsx
import type { ButtonProps, InputProps } from '@blick/ui'

// Étendre un composant
interface MyButtonProps extends ButtonProps {
  customProp?: string
}

const MyButton: React.FC<MyButtonProps> = ({ customProp, ...props }) => {
  return <Button {...props} />
}
```

## Besoin d'aide ?

- 📖 Documentation complète : `README.md`
- 🎨 Exemples détaillés : `USAGE.md`
- 🛠️ Contribuer : `CONTRIBUTING.md`
- 📚 Storybook : `npm run storybook`

---

**C'est tout ! Vous êtes prêt à utiliser @blick/ui dans vos projets ! 🎉**
