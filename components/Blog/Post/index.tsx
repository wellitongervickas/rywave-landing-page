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
}

const BlogPost: FC<BlogPost> = ({ post, className }) => {
	const route = `${appRoutes.navMain.blog.path}post/${post.slug}/`

	return (
		<Link href={route} passHref className={className}>
			<a className="block">
				<CardWrapper className="group flex h-full flex-col justify-between">
					<div
						className={classnames.merge([
							'relative min-h-[14.5rem] w-full overflow-hidden',
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
								className="transition-all duration-200 group-hover:scale-105 group-hover:opacity-70"
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
					<section className="flex flex-1 flex-col justify-between space-y-4 p-4">
						<h2
							className={classnames.merge([
								'block overflow-hidden font-bold leading-8 line-clamp-4',
								'text-base lg:text-lg 2xl:text-2xl',
							])}
							dangerouslySetInnerHTML={{ __html: post.title }}
						/>

						<address className="flex space-x-2 text-xs not-italic  text-gray-500">
							<time className="hidden" dateTime={post.date.toString()}>
								{date.format(post.date)}
							</time>

							<ul className="hidden">
								{post.authors.map((author) => (
									<li key={author.id}>{author.name}</li>
								))}
							</ul>
							<ul className="!ml-0 flex space-x-2">
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
						{post.description && (
							<div
								className="hidden"
								dangerouslySetInnerHTML={{ __html: post.description }}
							/>
						)}
					</section>
				</CardWrapper>
			</a>
		</Link>
	)
}

export default BlogPost
