# PowerShell script to generate favicon files using ImageMagick
# Make sure you have ImageMagick installed: https://imagemagick.org/script/download.php

# Check if ImageMagick is installed
if (-not (Get-Command magick -ErrorAction SilentlyContinue)) {
    Write-Host "ImageMagick is not installed or not in your PATH."
    Write-Host "Please install ImageMagick from https://imagemagick.org/script/download.php"
    exit 1
}

# Paths
$sourceImage = ".\src\assets\Smith-logo.png"
$publicDir = ".\public"

# Check if source image exists
if (-not (Test-Path $sourceImage)) {
    Write-Host "Source image not found: $sourceImage"
    exit 1
}

# Create favicons of different sizes
Write-Host "Generating favicon files..."

# Generate 16x16 favicon
magick convert $sourceImage -resize 16x16 "$publicDir\favicon-16x16.png"
Write-Host "Created favicon-16x16.png"

# Generate 32x32 favicon
magick convert $sourceImage -resize 32x32 "$publicDir\favicon-32x32.png"
Write-Host "Created favicon-32x32.png"

# Generate 180x180 apple touch icon
magick convert $sourceImage -resize 180x180 "$publicDir\apple-touch-icon.png"
Write-Host "Created apple-touch-icon.png"

# Generate multi-size favicon.ico (16x16, 32x32, 48x48)
magick convert $sourceImage -resize 16x16 $sourceImage -resize 32x32 $sourceImage -resize 48x48 "$publicDir\favicon.ico"
Write-Host "Created favicon.ico"

Write-Host "Favicon generation complete!"
