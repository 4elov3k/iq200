import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const figmaAssetPlugin = () => {
  const prefix = 'figma:asset/'
  const virtualPrefix = '\0figma:asset/'
  const transparentPixel =
    'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=='

  return {
    name: 'figma-asset-placeholder',
    resolveId(source: string) {
      if (source.startsWith(prefix)) {
        return source.replace(prefix, virtualPrefix)
      }
      return null
    },
    load(id: string) {
      if (id.startsWith(virtualPrefix)) {
        return `export default ${JSON.stringify(transparentPixel)}`
      }
      return null
    },
  }
}

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    figmaAssetPlugin(),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
