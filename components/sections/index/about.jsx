// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					preTitle="Synopsis"
					subTitle="With a diverse skill set that includes full stack development, systems design, photography, and music creation, I am a well-rounded digital professional."
				/>
				<section className={about.content}>
					<div className={about.image}>
						<img src="/img/brandonfranke_headshot.jpg" alt="Brandon photo"/>
						{/* <Image src="/img/family-photo.jpg" width={600} height={800}/> */}
					</div>
					<div className={about.copy} >
						<BadgesBlock 
							title="Passionate Coder. Lifelong Learner. Problem Solver." 
							containerClass={about.container}
							list={methods} 
							fullContainer="fullContainer"
							block="methods" 
							icon="fingerprint"
							copy="In addition to my technical expertise—I also have strong colloboration, time management, and multitasking skills—honed through my experience as a consulant. Outside of work, I enjoy making music, gaming, and following the latest football news. I am confident in my ability to bring passion and value to any project."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const methods 	= [
	{ key: 'clock', 		    name: 'Time Management',    type: 'far' },
	{ key: 'people-group', 	    name: 'Collaboration', 	    type: 'fas' },
	{ key: 'lightbulb', 		name: 'Creativity', 	    type: 'far' },
	{ key: 'comments', 			name: 'Communication', 	    type: 'far' }
]