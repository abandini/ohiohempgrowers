#!/bin/bash

# Make the "More Premium Domains" link more prominent in all HTML files
find . -name "*.html" -type f -exec sed -i '' \
  -e 's|<a href="https://www.handcrafteddomains.io" target="_blank">More Premium Domains →</a>|<a href="https://www.handcrafteddomains.io" target="_blank" style="color: #E5A13D; font-weight: bold; font-size: 1.1em; text-decoration: underline; padding: 5px; background-color: rgba(0,0,0,0.1); border-radius: 4px;">More Premium Domains →</a>|g' \
  {} \;

echo "Footer link made more prominent in all HTML files"
