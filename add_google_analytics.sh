#!/bin/bash

# Google Analytics tag to be added after <head> tag
GOOGLE_TAG='<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-NJ1Q4FRLH1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag("js", new Date());

  gtag("config", "G-NJ1Q4FRLH1");
</script>'

# Find all HTML files and add Google Analytics tag after <head> tag
find . -name "*.html" -type f -exec sed -i '' "s/<head>/<head>\\
${GOOGLE_TAG}/" {} \;

echo "Added Google Analytics tag to all HTML files"
