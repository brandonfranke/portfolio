import Section 		from '../../structure/section';
import Container 	from '../../structure/container';

import Image from 'next/image'
import SectionTitle from '../../blocks/section.title.block'

import Icon from '../../utils/icon.util'

import css from '../../../styles/sections/articles/recent.module.scss'

export default function Recent({ devToArticles }) {

	return (
		<Section classProp="borderBottom">
			<Container spacing={'verticalXXXXLrg'}>
				<SectionTitle
					title="Recent Articles"
					preTitle="Informative"
					subTitle="A personal quest to become a better creative writer."
				/>
				<section className={css.projects}>
					{
					devToArticles.map(({ title, readable_publish_date, url, user, cover_image, tag_list }, index) => {
						return (
							<>
							<article key={index} className={css.project}>
								<span className={css.featuredImage}>
									{cover_image &&
										<img src={cover_image} alt="Article thumbnail" />
									}
								</span>
								<span className={css.header}>
									<a href={url} rel="noreferrer" target="_blank">{title} <Icon icon={[ 'fad', 'arrow-up-right-from-square' ]} /></a>
								</span>
								<span className={css.descriptionContainer}>
								</span>
								<span className={css.details}>
									<p>By {user.name}</p>
									<p className={css.pushedAt}>{readable_publish_date}</p>
								</span>
								<span className={css.topicsContainer}>
									{
									tag_list.map( (e, index) => {
										return ( <span key={index} className={css.topics}><Icon icon={[ 'fab', 'medium' ]} /> {e}</span> )
									})
									}
								</span>
							</article>
							</>
						)
					})
					}
				</section>
			</Container>
		</Section>
	)
}