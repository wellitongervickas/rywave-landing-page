import { FC, useMemo } from 'react'
import { Children, cloneElement } from 'react'
import { useRouter } from 'next/router'
import NextLink from 'next/link'

import classnames from '@modules/handlers/classnames'

interface Link {
	activeLinkClassName?: string
	className?: string
	passHref?: boolean
	href: string
	as?: string
	children: JSX.Element
}

const Link: FC<Link> = (props) => {
	const router = useRouter()

	const child = Children.only(props.children)

	const isCurrentPath = useMemo(
		() => router.asPath === props.href,
		[router.asPath, props.href]
	)

	const className = useMemo(
		() =>
			classnames.merge([
				props?.className,
				isCurrentPath && props?.activeLinkClassName,
				child?.props?.className,
			]),
		[props, child, isCurrentPath]
	)

	return (
		<NextLink {...props}>
			{cloneElement(child, {
				className,
			})}
		</NextLink>
	)
}

export default Link
