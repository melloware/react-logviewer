import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	rollupOptions: {
	  // make sure to externalize deps that shouldn't be bundled
	  // into your library
	  external: ['react', 'react/jsx-runtime', 'react-dom', 'react-dom/client'],
	  output: {
		exports: "named",
		// Provide global variables to use in the UMD build
		// for externalized deps
		globals: {
		  react: "React",
		  "react-dom": "ReactDOM",
		},
	  },
})


