const plugin = require('tailwindcss/plugin')

const SIZES = {
	fallback: '100%',
	lg: '1266px',
	md: '768px',
}

const container = plugin(({ addUtilities }) => {
	const utility = {
		'.container': {
			width: SIZES.fallback,
			margin: 'auto',
			paddingRight: '16px',
			paddingLeft: '16px',

			'@screen md': {
				maxWidth: SIZES.md,
			},

			'@screen lg': {
				maxWidth: SIZES.lg,
			},
		},
	}

	addUtilities(utility, {
		variants: ['responsive'],
	})
})

module.exports = container
