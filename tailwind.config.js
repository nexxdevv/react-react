module.exports = {
	purge: [ './index.html', './src/**/*.{vue,js,ts,jsx,tsx}' ],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: '#53d1f9',
				lightBg: '#1E2127',
				dim: 'rgb(109, 109, 109)',
				dark: '#131418',
				sidebar: '#f5f5f5'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
}
