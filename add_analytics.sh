#!/bin/bash

# Create a temporary file with the Google Analytics tag
cat > analytics_tag.txt << 'EOL'
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-NJ1Q4FRLH1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-NJ1Q4FRLH1');
</script>
EOL

# Find all HTML files and add Google Analytics tag after <head> tag
for file in $(find . -name "*.html" -type f); do
  # Check if the tag already exists in the file
  if ! grep -q "G-NJ1Q4FRLH1" "$file"; then
    # Add the tag after the <head> tag
    sed -i '' '/<head>/r analytics_tag.txt' "$file"
    echo "Added Google Analytics tag to $file"
  else
    echo "Google Analytics tag already exists in $file"
  fi
done

# Remove the temporary file
rm analytics_tag.txt

echo "Completed adding Google Analytics tags to HTML files"
