#!/bin/bash

# Remove membership link from footer in all HTML files
find . -name "*.html" -type f -exec sed -i '' \
  -e '/<li><a href="..\/membership.html">Membership<\/a><\/li>/d' \
  -e '/<li><a href="membership.html">Membership<\/a><\/li>/d' \
  {} \;

echo "Membership page removed from footer in all HTML files"
