# Exemple d'utilisation de @blick/ui

## Installation

```bash
npm install @blick/ui
```

## Utilisation basique

```tsx
import { Button, Input } from '@blick/ui'
import '@blick/ui/style.css'

function MyApp() {
  const [value, setValue] = React.useState('')

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Mon Application Blick</h1>
      
      {/* Boutons */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <Button variant="primary" onClick={() => alert('Primary!')}>
          Primary
        </Button>
        <Button variant="secondary">
          Secondary
        </Button>
        <Button variant="outline">
          Outline
        </Button>
        <Button variant="ghost">
          Ghost
        </Button>
      </div>

      {/* Inputs */}
      <div style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Input
          label="Nom complet"
          placeholder="Entrez votre nom"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        
        <Input
          label="Email"
          type="email"
          placeholder="exemple@blick.ch"
          helperText="Nous ne partagerons jamais votre email"
        />
        
        <Input
          label="Mot de passe"
          type="password"
          error="Le mot de passe doit contenir au moins 8 caractères"
        />
      </div>

      {/* Formulaire complet */}
      <form style={{ marginTop: '2rem', maxWidth: '400px' }}>
        <Input
          label="Username"
          placeholder="Choisissez un nom d'utilisateur"
          fullWidth
          style={{ marginBottom: '1rem' }}
        />
        
        <Button type="submit" variant="primary" fullWidth>
          S'inscrire
        </Button>
      </form>
    </div>
  )
}

export default MyApp
```

## Gestion du Dark Mode

Les composants utilisent automatiquement les variables CSS de Blick. Le dark mode est géré via les variables CSS `--is-light-theme` et `--is-dark-theme`.

Par défaut, le mode est détecté via `prefers-color-scheme`, mais vous pouvez le contrôler manuellement :

```tsx
// Forcer le light mode
document.documentElement.style.setProperty('--is-light-theme', 'initial')
document.documentElement.style.setProperty('--is-dark-theme', '')

// Forcer le dark mode
document.documentElement.style.setProperty('--is-light-theme', '')
document.documentElement.style.setProperty('--is-dark-theme', 'initial')
```

## Utilisation avec Next.js

```tsx
// app/layout.tsx
import '@blick/ui/style.css'

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}

// app/page.tsx
import { Button, Input } from '@blick/ui'

export default function Home() {
  return (
    <main>
      <Button variant="primary">Cliquez-moi</Button>
    </main>
  )
}
```

## Utilisation avec Vite

```tsx
// main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@blick/ui/style.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

## TypeScript

Tous les composants sont typés avec TypeScript. Les définitions de types sont automatiquement incluses :

```tsx
import type { ButtonProps, InputProps } from '@blick/ui'

const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />
}
```

## Composants disponibles

### Button
- **Variants**: `primary`, `secondary`, `outline`, `ghost`
- **Sizes**: `sm`, `md`, `lg`
- **Props**: `fullWidth`, `disabled`, toutes les props HTML `<button>`

### Input
- **Sizes**: `sm`, `md`, `lg`
- **Props**: `label`, `error`, `helperText`, `fullWidth`, `disabled`, toutes les props HTML `<input>`
