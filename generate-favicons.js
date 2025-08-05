// This script generates favicon files from Smith-logo.png
// Run with: node generate-favicons.js

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Path configurations
const sourceImagePath = path.join(__dirname, 'src', 'assets', 'Smith-logo.png');
const publicDir = path.join(__dirname, 'public');

// Sizes to generate
const sizes = {
  'favicon-16x16.png': 16,
  'favicon-32x32.png': 32,
  'apple-touch-icon.png': 180
};

async function generateFavicons() {
  try {
    console.log('Starting favicon generation...');
    
    // Check if source image exists
    if (!fs.existsSync(sourceImagePath)) {
      console.error(`Source image not found: ${sourceImagePath}`);
      return;
    }
    
    // Generate PNG favicons
    for (const [filename, size] of Object.entries(sizes)) {
      const outputPath = path.join(publicDir, filename);
      console.log(`Generating ${filename} (${size}x${size})...`);
      
      await sharp(sourceImagePath)
        .resize(size, size)
        .toFile(outputPath);
    }
    
    // Generate favicon.ico (contains multiple sizes: 16x16, 32x32, 48x48)
    // Note: Sharp doesn't directly support ICO format, so this is a simplified approach
    // For a production app, you might want to use a dedicated ICO generator
    console.log('Generating favicon.ico...');
    await sharp(sourceImagePath)
      .resize(32, 32)
      .png()
      .toFile(path.join(publicDir, 'favicon.ico'));
      
    console.log('Favicon generation complete!');
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

// Run the generation
generateFavicons();
