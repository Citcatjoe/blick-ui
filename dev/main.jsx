import React from 'react'
import ReactDOM from 'react-dom/client'
import '../blick-variables.css'
import '../styles.css'
import { Button } from '../components/Button.jsx'
import { Input } from '../components/Input.jsx'

function App() {
  const [value, setValue] = React.useState('')
  const [error, setError] = React.useState('')
  const [isDark, setIsDark] = React.useState(false)

  // Détecter le thème depuis l'URL au chargement
  React.useEffect(() => {
    const checkTheme = () => {
      const hash = window.location.hash
      const shouldBeDark = hash.includes('theme=dark')
      setIsDark(shouldBeDark)
      if (shouldBeDark) {
        document.documentElement.classList.add('dark-mode')
      } else {
        document.documentElement.classList.remove('dark-mode')
      }
    }

    // Vérifier au chargement
    checkTheme()

    // Écouter les changements de hash
    window.addEventListener('hashchange', checkTheme)
    return () => window.removeEventListener('hashchange', checkTheme)
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    
    // Mettre à jour l'URL avec #theme=dark ou retirer le hash
    if (newIsDark) {
      window.location.hash = 'theme=dark'
      document.documentElement.classList.add('dark-mode')
    } else {
      window.location.hash = ''
      document.documentElement.classList.remove('dark-mode')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (value.length < 3) {
      setError('Le nom doit contenir au moins 3 caractères')
    } else {
      setError('')
      alert(`Formulaire soumis avec : ${value}`)
    }
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
      {/* Bouton de toggle fixé en haut à droite */}
      <div style={{ 
        position: 'fixed', 
        top: '1rem', 
        right: '1rem', 
        zIndex: 1000 
      }}>
        <Button 
          variant="outline"
          size="sm"
          onClick={toggleTheme}
        >
          {isDark ? '☀️' : '🌙'}
        </Button>
      </div>

      <h1 style={{ color: 'var(--color-text-brand)', marginBottom: '0.5rem' }}>
        @blick/ui - Développement
      </h1>
      <p style={{ color: 'var(--color-text-weak)', marginBottom: '2rem' }}>
        Modifiez les composants et voyez les changements en temps réel !
      </p>

      {/* Section Buttons */}
      <section style={{ 
        marginBottom: '3rem', 
        padding: '2rem', 
        backgroundColor: 'var(--color-fill-weak)',
       
      }}>
        <h2>Buttons</h2>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '0.875rem', textTransform: 'uppercase', color: 'var(--color-text-weak)', marginBottom: '0.5rem' }}>
            Variants
          </h3>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <Button variant="normal">Normal</Button>
            <Button variant="outline">Outline</Button>
          </div>
        </div>

        <div>
          <h3 style={{ fontSize: '0.875rem', textTransform: 'uppercase', color: 'var(--color-text-weak)', marginBottom: '0.5rem' }}>
            States
          </h3>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <Button onClick={() => alert('Clicked!')}>Normal</Button>
            <Button disabled>Disabled</Button>
          </div>
        </div>
      </section>

      {/* Section Inputs */}
      <section style={{ 
        marginBottom: '3rem', 
        padding: '2rem', 
        backgroundColor: 'var(--color-fill-weak)',
        borderRadius: '0.75rem'
      }}>
        <h2>Inputs</h2>
        
        <div style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Input 
            label="Nom complet"
            placeholder="John Doe"
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
            label="Avec erreur"
            placeholder="Testez la validation"
            error={error}
          />

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Input size="sm" placeholder="Small" />
            <Input size="md" placeholder="Medium" />
            <Input size="lg" placeholder="Large" />
          </div>
        </div>
      </section>

      {/* Formulaire interactif */}
      <section style={{ 
        padding: '2rem', 
        backgroundColor: 'var(--color-fill-weak)',
        borderRadius: '0.75rem'
      }}>
        <h2>Formulaire de test</h2>
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Input 
            label="Votre nom"
            placeholder="Minimum 3 caractères"
            value={value}
            onChange={(e) => {
              setValue(e.target.value)
              setError('')
            }}
            error={error}
          />
          <Button type="submit" variant="normal" fullWidth>
            Soumettre
          </Button>
        </form>
      </section>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
