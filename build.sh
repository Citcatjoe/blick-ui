#!/bin/bash

# Script de build pour @blick/ui

echo "🧹 Nettoyage du dossier dist..."
rm -rf dist

echo "📦 Build de la bibliothèque..."
./node_modules/.bin/vite build

echo "✅ Build terminé !"
echo ""
echo "📂 Fichiers générés dans dist/ :"
ls -lh dist/

echo ""
echo "📚 Pour publier sur npm :"
echo "  npm publish --access public"
