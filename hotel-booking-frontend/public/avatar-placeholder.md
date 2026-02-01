# Avatar Image Placeholder

## Instructions

Please place your avatar image file at: `hotel-booking-frontend/public/avatar.jpg`

### Image Specifications:
- **Format**: JPEG or PNG
- **Dimensions**: 192x192px or 256x256px (square aspect ratio)
- **File Size**: < 50KB (optimized for web)
- **Style**: Anime-style profile picture (as shown in the design screenshot)

### How to Add:
1. Extract or download the anime avatar image from the design screenshot
2. Crop to a square aspect ratio (1:1)
3. Optimize/compress for web performance
4. Save as `avatar.jpg` in the `hotel-booking-frontend/public/` directory

### Fallback Behavior:
If the image is not found or fails to load, the component automatically displays a default SVG avatar (simple circle with a person icon).

### Alternative SVG Avatar:
If you prefer to use an SVG instead of a raster image, you can modify the Footer component to use an inline SVG or create an SVG file at `/avatar.svg`.
