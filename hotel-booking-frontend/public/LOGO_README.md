# Fei Avatar Logo

This directory should contain the Fei Avatar logo for use as the application favicon and branding.

## Current Implementation

The Fei Avatar logo has been implemented as a React component (`FeiAvatarLogo.tsx`) that can be used throughout the application.

## Generating Favicon/PNG Assets

Since SVG files cannot be directly modified through this system, you can generate the logo assets in two ways:

### Option 1: Use the React Component
The `FeiAvatarLogo` component is available at `src/components/FeiAvatarLogo.tsx` and can be rendered in the application.

### Option 2: Generate PNG from Component
To create a PNG file for use as favicon:

1. Run the application
2. Open the component in a browser
3. Use browser developer tools to:
   - Right-click on the SVG element
   - "Save as PNG" or use a screenshot tool
4. Resize the image to desired favicon sizes (16x16, 32x32, 64x64)
5. Save as `fei-logo.png` in this directory

### Option 3: Create SVG Manually
Create a new file `fei-avatar.svg` with the SVG content from the React component, then use tools like:
- ImageMagick: `convert fei-avatar.svg -resize 32x32 fei-logo-32.png`
- Inkscape: Export PNG at desired resolution
- Online converters: svgtopng.com or similar

## Logo Description

The Fei Avatar features:
- A wizard hat with moon and star decorations (blue with gold accents)
- A TV monitor head with green screen
- A robot body with brown/wooden texture
- Four arms with white gloves
- Robot legs with brown boots
- Circular blue background (#2194ba)

## Usage in HTML

Once you have a PNG file, update `index.html`:

```html
<link rel="icon" type="image/png" href="/fei-logo.png" />
<meta property="og:image" content="/fei-logo.png" />
<meta name="twitter:image" content="/fei-logo.png" />
```

Or keep using the existing vite.svg and update its content with the Fei Avatar design.
