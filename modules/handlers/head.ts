type GetTitleProps = {
	title?: string
}

const getTitle = (sitename?: string, props?: GetTitleProps) => {
	const hasTitle = props && 'title' in props

	if (!sitename && hasTitle) {
		return props.title
	}

	if (!hasTitle) {
		return sitename
	}

	return `${sitename} ${hasTitle && `- ${props.title}`}`
}

const head = {
	getTitle,
}

export default head
