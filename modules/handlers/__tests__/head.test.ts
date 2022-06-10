import head from '@modules/handlers/head'

describe('Handlers/Head: getTitle', () => {
	it('should return a string with site name and page title', () => {
		expect(head.getTitle('Name', { title: 'Title' })).toBe('Name - Title')
	})

	it('should return a string with page title without name', () => {
		expect(head.getTitle(undefined, { title: 'Title' })).toBe('Title')
	})

	it('should return a string with only site name', () => {
		expect(head.getTitle('Site Name')).toBe('Site Name')
	})
})
