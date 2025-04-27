#!/bin/bash

# Find all HTML files and add the header-fix.css link after the main CSS link
for file in $(find . -name "*.html" -type f); do
  # Add the header-fix.css link after the main CSS link
  sed -i '' 's|<link rel="stylesheet" href="css/styles.css">|<link rel="stylesheet" href="css/styles.css">\n    <link rel="stylesheet" href="css/header-fix.css">|g' "$file"
  sed -i '' 's|<link rel="stylesheet" href="../css/styles.css">|<link rel="stylesheet" href="../css/styles.css">\n    <link rel="stylesheet" href="../css/header-fix.css">|g' "$file"
  echo "Added header-fix.css to $file"
done

echo "Completed adding header-fix.css to all HTML files"
