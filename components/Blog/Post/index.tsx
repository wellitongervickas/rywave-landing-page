import type { FC } from 'react'

import CardWrapper from '@components/CardWrapper'
import Image from '@components/Image'
import { LogoIcon } from '@components/Logo'
import Link from '@components/Link'

import classnames from '@modules/handlers/classnames'
import appRoutes from '@app.routes'
import date from '@modules/handlers/date'

interface BlogPost {
	post: Blog.Post
	className?: string
	featured?: boolean
}

const BlogPost: FC<BlogPost> = ({ post, className, featured }) => {
	const route = `${appRoutes.navMain.blog.path}${post.slug}/`

	return (
		<Link href={route} passHref className={className}>
			<a>
				<CardWrapper className="group">
					<div
						className={classnames.merge([
							'relative w-full overflow-hidden',
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
								<LogoIcon
									className="text-gray-200 opacity-10"
									height={28}
									width={134}
								/>
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

							<address className="flex space-x-2 text-xs not-italic text-gray-500">
								<time dateTime={post.date.toString()}>
									{date.format(post.date)}
								</time>
								<span>by</span>
								<ul className="flex space-x-2">
									{post.authors.map((author) => (
										<li key={author.id}>
											<span>{author.name}</span>
										</li>
									))}
								</ul>
								<span>on</span>
								<ul className="flex space-x-2">
									{post.categories.map((category, index) => (
										<li key={category.id}>
											<span>{category.name}</span>
											{post.categories.length >= 0 &&
												index !== post.categories.length - 1 &&
												','}
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
