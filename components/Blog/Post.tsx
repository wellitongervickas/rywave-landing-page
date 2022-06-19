import type { FC } from 'react'

import CardWrapper from '@components/CardWrapper'
import Image from '@components/Image'
import Logo from '@components/Logo'
import classnames from '@modules/handlers/classnames'
import Link from '@components/Link'
import appRoutes from '@app.routes'

interface BlogPost {
	post: Blog.Post
	className?: string
	featured?: boolean
}

const formatDate = (date: Date) => {
	return new Intl.DateTimeFormat('en', {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
	}).format(new Date(date))
}

const BlogPost: FC<BlogPost> = ({ post, className, featured }) => {
	const route = `${appRoutes.navMain.blog.path}${post.slug}/`

	return (
		<Link href={route} passHref className={className}>
			<a>
				<CardWrapper className="group">
					<div
						className={classnames.merge([
							'relative',
							featured ? 'min-h-[20.5rem]' : 'min-h-[14.5rem]',
						])}
					>
						{post.image?.sizes?.full.url ? (
							<Image
								src={post.image?.sizes?.full.url}
								alt={post.title}
								objectFit="cover"
								objectPosition="center"
								layout="fill"
								priority
								className="transition-opacity duration-200 group-hover:opacity-70"
							/>
						) : (
							<div className="absolute flex h-full w-full items-center justify-center bg-stone-900">
								<Logo className="opacity-10" url={route} />
							</div>
						)}
					</div>
					<section>
						<h2
							className={classnames.merge([
								'block overflow-hidden px-4 pt-4 pb-2 font-bold leading-8',
								featured ? 'text-2xl line-clamp-3' : 'line-clamp-2',
							])}
							dangerouslySetInnerHTML={{ __html: post.title }}
						/>
						<div className="space-y-4 px-4 pb-4">
							{post.description && (
								<div
									className="text-sm text-slate-400 line-clamp-3"
									dangerouslySetInnerHTML={{ __html: post.description }}
								/>
							)}

							<address className="not-italic">
								<time dateTime={post.date.toString()}>
									{formatDate(post.date)}
								</time>
								<ul className="flex space-x-2">
									{post.authors.map((author) => (
										<li key={author.id}>
											<span className="text-xs text-gray-stroke">
												{author.name}
											</span>
										</li>
									))}
								</ul>
							</address>
						</div>
					</section>
				</CardWrapper>
			</a>
		</Link>
	)
}

export default BlogPost
