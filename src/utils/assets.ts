/**
 * Get the correct asset path for GitHub Pages deployment
 * @param path - The asset path starting with /
 * @returns The full path with the correct base path
 */
export function getAssetPath(path: string): string {
  // Check if we're in production environment
  const isProduction = process.env.NODE_ENV === 'production';
  
  // For GitHub Pages, we need the /site prefix in production
  if (isProduction) {
    return `/site${path}`;
  }
  
  return path;
}
