#!/bin/bash
# Gebtron Strategy — Build & Deploy Script
# Run from the repo root: bash deploy.sh

set -e

echo "=== 1. Syncing content from Deliverables ==="
rm -rf content/*
cp -r "/c/Users/Ahmed/OneDrive - Gebtron FZCO/Deliverables/"* content/
echo "Content synced."

echo "=== 2. Building Quartz ==="
npx quartz build
echo "Build complete."

echo "=== 3. Encrypting with Staticrypt ==="
find public -name "*.html" -exec staticrypt {} -p "Gebtron@2026" -d public --short \
  --template-title "Gebtron Strategy — Access Required" \
  --template-instructions "Enter the access key to view the strategic plan." \
  --template-color-primary "#1A5048" \
  --template-color-secondary "#37A797" \
  --template-button "Access Strategy" \;
echo "Encryption complete."

echo "=== 4. Deploying to gh-pages ==="
TEMP_DIR=$(mktemp -d)
cp -r public/* "$TEMP_DIR/"

git checkout gh-pages
git rm -rf . 2>/dev/null || true
rm -rf node_modules content public quartz .quartz-cache
cp -r "$TEMP_DIR"/* .
touch .nojekyll
git add -A
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M')"
git push origin gh-pages --force

git checkout main
rm -rf "$TEMP_DIR"

echo "=== DONE ==="
echo "Site: https://mr-youssry.github.io/gebtron-Strategy-2026/"
echo "Passkey: Gebtron@2026"
