import classnames from '@modules/handlers/classnames'

describe('Handlers/Classnames: merge', () => {
	it('should return a string of classes from a single string', () => {
		expect(classnames.merge('single-class')).toBe('single-class')
	})

	it('should return a string of classes from an array of string', () => {
		const classes = ['one-class', 'two-class']
		expect(classnames.merge(classes)).toBe('one-class two-class')
	})

	it('should return a string of classes from deep array of string', () => {
		const classes = ['one-class', 'two-class']
		const deepArray = [classes, [classes]]

		expect(classnames.merge(deepArray)).toBe(
			'one-class two-class one-class two-class'
		)
	})

	it('should return a string of classes from object properties with expressions', () => {
		const classes = {
			'col-span-2': true,
			'col-span-3': false,
		}

		expect(classnames.merge(classes)).toBe('col-span-2')
	})

	it('should return a string of classes from object properties inside an array', () => {
		const classes = [
			{
				'col-span-2': true,
				'col-span-3': false,
			},
		]

		expect(classnames.merge(classes)).toBe('col-span-2')
	})
})
