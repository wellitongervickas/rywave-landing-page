const theme = require('./modules/tailwind/themes/default')
const container = require('./modules/tailwind/plugins/container')
const forms = require('@tailwindcss/forms')
const lineClamp = require('@tailwindcss/line-clamp')

const config = {
	mode: 'jit',
	darkMode: 'media',
	content: ['./**/*.tsx'],
	corePlugins: {
		container: false,
	},
	theme: {
		...theme,
	},
	plugins: [container, forms, lineClamp],
}

module.exports = config
