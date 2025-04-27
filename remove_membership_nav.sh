#!/bin/bash

# Remove membership link from navigation in all HTML files
find . -name "*.html" -type f -exec sed -i '' \
  -e '/<li><a href="..\/membership.html".*>Membership<\/a><\/li>/d' \
  -e '/<li><a href="membership.html".*>Membership<\/a><\/li>/d' \
  {} \;

echo "Membership page removed from navigation in all HTML files"
