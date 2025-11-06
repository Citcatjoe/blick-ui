# Guide de contribution - Ajouter un nouveau composant

Ce guide explique comment ajouter un nouveau composant à la bibliothèque @blick/ui.

## Structure d'un composant

Chaque composant doit suivre cette structure :

```
src/components/
├── MonComposant.tsx          # Le composant React
└── MonComposant.stories.tsx  # Les stories Storybook
```

## Étapes pour créer un nouveau composant

### 1. Créer le fichier du composant

Créez `src/components/MonComposant.tsx` :

```tsx
import React from 'react'

export interface MonComposantProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Description de la prop
   */
  variant?: 'default' | 'autre'
  /**
   * Contenu du composant
   */
  children: React.ReactNode
}

export const MonComposant: React.FC<MonComposantProps> = ({
  variant = 'default',
  className = '',
  children,
  ...props
}) => {
  const baseStyles = 'classe-de-base'
  
  const variantStyles = {
    default: 'bg-[var(--color-fill-default)] text-[var(--color-text-default)]',
    autre: 'bg-[var(--color-fill-brand)] text-[var(--color-text-inverse)]'
  }
  
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`.trim()
  
  return (
    <div className={combinedClassName} {...props}>
      {children}
    </div>
  )
}
```

### 2. Créer les stories Storybook

Créez `src/components/MonComposant.stories.tsx` :

```tsx
import type { Meta, StoryObj } from '@storybook/react'
import { MonComposant } from './MonComposant'

const meta = {
  title: 'Components/MonComposant',
  component: MonComposant,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'autre']
    }
  }
} satisfies Meta<typeof MonComposant>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Contenu par défaut'
  }
}

export const Autre: Story = {
  args: {
    variant: 'autre',
    children: 'Contenu autre variant'
  }
}
```

### 3. Exporter le composant

Ajoutez l'export dans `src/index.ts` :

```tsx
export { MonComposant } from './components/MonComposant'
export type { MonComposantProps } from './components/MonComposant'
```

### 4. Tester dans Storybook

```bash
npm run storybook
```

Ouvrez http://localhost:6006 et vérifiez que votre composant s'affiche correctement.

### 5. Documenter dans le README

Ajoutez une section dans `README.md` pour documenter votre nouveau composant.

## Bonnes pratiques

### Utilisation des variables CSS Blick

Toujours utiliser les variables CSS de Blick pour les couleurs :

```tsx
// ✅ BON
'bg-[var(--color-fill-default)]'
'text-[var(--color-text-default)]'
'border-[var(--color-stroke-default)]'

// ❌ MAUVAIS
'bg-white'
'text-black'
'border-gray-300'
```

### Variables CSS disponibles

**Couleurs de texte :**
- `--color-text-default` - Texte principal
- `--color-text-weak` - Texte secondaire
- `--color-text-inverse` - Texte inversé (sur fond coloré)
- `--color-text-brand` - Texte de marque (rouge Blick)
- `--color-text-sport` - Texte sport (vert)

**Couleurs de fond :**
- `--color-fill-default` - Fond par défaut
- `--color-fill-weak` - Fond léger
- `--color-fill-strong` - Fond marqué
- `--color-fill-brand` - Fond de marque
- `--color-fill-sport` - Fond sport
- `--color-fill-inverse` - Fond inversé

**Couleurs de bordure :**
- `--color-stroke-default` - Bordure par défaut
- `--color-stroke-weak` - Bordure légère
- `--color-stroke-strong` - Bordure forte
- `--color-stroke-brand` - Bordure de marque

### Classes utilitaires disponibles

Le fichier `src/styles/index.css` contient des classes utilitaires de base qui remplacent Tailwind :

- Layout : `flex`, `flex-col`, `inline-flex`, `items-center`, `justify-center`
- Spacing : `gap-1`, `px-3`, `px-4`, `py-2`, etc.
- Sizing : `w-full`
- Typography : `text-sm`, `text-base`, `text-lg`, `font-medium`
- Borders : `border`, `border-2`, `rounded-lg`
- States : `transition-colors`, `disabled:opacity-50`, etc.

### TypeScript

- Toujours typer les props avec `interface`
- Étendre les types HTML appropriés (`HTMLButtonElement`, `HTMLInputElement`, etc.)
- Documenter les props avec des commentaires JSDoc

### Accessibilité

- Ajouter les attributs ARIA appropriés (`aria-label`, `aria-disabled`, etc.)
- Gérer les états de focus
- Supporter la navigation au clavier

## Exemples de composants

### Composant simple (Card)

```tsx
import React from 'react'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export const Card: React.FC<CardProps> = ({
  padding = 'md',
  className = '',
  children,
  ...props
}) => {
  const paddingStyles = {
    sm: 'px-3 py-2',
    md: 'px-4 py-3',
    lg: 'px-6 py-4'
  }
  
  const classes = `
    rounded-lg
    border
    border-[var(--color-stroke-weak)]
    bg-[var(--color-fill-default)]
    ${paddingStyles[padding]}
    ${className}
  `.trim().replace(/\s+/g, ' ')
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}
```

### Composant avec forwardRef (TextField)

```tsx
import React from 'react'

export interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  error?: string
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label className="text-sm font-medium text-[var(--color-text-default)]">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`
            px-4 py-2
            border rounded-lg
            text-[var(--color-text-default)]
            bg-[var(--color-fill-default)]
            ${error ? 'border-[var(--color-static-red-500)]' : 'border-[var(--color-stroke-default)]'}
            ${className}
          `.trim().replace(/\s+/g, ' ')}
          aria-invalid={error ? 'true' : 'false'}
          {...props}
        />
        {error && (
          <span className="text-sm text-[var(--color-static-red-500)]">
            {error}
          </span>
        )}
      </div>
    )
  }
)

TextField.displayName = 'TextField'
```

## Build et publication

### Build local

```bash
./build.sh
# ou
npm run build
```

### Publication sur npm

1. Vérifier la version dans `package.json`
2. Build de la bibliothèque
3. Publier

```bash
npm run build
npm publish --access public
```

## Questions fréquentes

**Q : Puis-je utiliser Tailwind directement ?**  
R : Non, nous utilisons des classes CSS personnalisées pour garder le contrôle total sur le styling et éviter les conflits avec les projets consommateurs.

**Q : Comment gérer le dark mode ?**  
R : Utilisez les variables CSS Blick qui s'adaptent automatiquement au thème via `--is-light-theme` et `--is-dark-theme`.

**Q : Que faire si j'ai besoin d'une nouvelle classe utilitaire ?**  
R : Ajoutez-la dans `src/styles/index.css` dans la section des classes utilitaires.
