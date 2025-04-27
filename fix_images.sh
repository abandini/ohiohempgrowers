#!/bin/bash

# Fix all HTML files to replace image references with CSS-based solutions
find . -name "*.html" -type f -exec sed -i '' \
  -e 's|<img src="images/logo.png" alt="Ohio Hemp Growers Association Logo">|<div style="background-color: #2C5F2D; width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; border-radius: 5px; color: white; font-weight: bold;">OHGA</div>|g' \
  -e 's|<img src="images/logo-white.png" alt="Ohio Hemp Growers Association Logo" width="180">|<div style="background-color: #97724F; padding: 10px; display: inline-block; border-radius: 5px; margin-bottom: 10px;"><div style="color: white; font-weight: bold; font-size: 1.5rem; font-family: '\''Montserrat'\'', sans-serif;">OHIO HEMP GROWERS</div><div style="color: white; font-size: 1rem; font-family: '\''Montserrat'\'', sans-serif;">ASSOCIATION</div></div>|g' \
  -e 's|background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('\''images/[^'\'']*'\'');|background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), linear-gradient(to right, #2C5F2D, #97724F);|g' \
  {} \;

# Create empty image files for any remaining references
mkdir -p images
touch images/favicon.ico
touch images/logo.png
touch images/logo-white.png
touch images/hero-hemp-field.jpg
touch images/about-banner.jpg
touch images/contact-banner.jpg
touch images/regulations-banner.jpg
touch images/resources-banner.jpg
touch images/membership-banner.jpg
touch images/growing-guide-banner.jpg
touch images/events-banner.jpg
touch images/market-banner.jpg
touch images/testimonial-1.jpg
touch images/testimonial-2.jpg
touch images/testimonial-3.jpg
touch images/license-applications.jpg
touch images/processing-facility.jpg

echo "Image fixes applied to all HTML files"
