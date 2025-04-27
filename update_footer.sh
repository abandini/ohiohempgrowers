#!/bin/bash

# Remove contact information and fix domain in footer link in all HTML files
find . -name "*.html" -type f -exec sed -i '' \
  -e '/<div class="footer-contact">/,/<\/div>/d' \
  -e 's|https://www.handcraftedcomains.io|https://www.handcrafteddomains.io|g' \
  {} \;

echo "Footer updated in all HTML files"
