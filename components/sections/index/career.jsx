// Core packages
import Image from 'next/image'

import Badges 		from '../../utils/badge.list.util'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Career scss
import career from '../../../styles/sections/index/career.module.scss'

/**
 * Section: Career
 *
 * @returns {jsx} <Career />
 */
export default function Career() {
	return (
		<Section classProp={`${career.section} borderBottom`}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Experience"
					preTitle="Career"
					subTitle="I am currently a Software Engineer at Microsoft building apps that streamline processes and enhance customer efficiency, enabling businesses to operate more effectively. "
				/>
				<section className={career.area}>
					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Microsoft</h3>
								<h4>Permanent Full-time</h4>
								<h4>July 2024 - Present</h4>
								<h5>Vancouver, British Columbia, Canada</h5>
							</span>
							<p>
							Microsoft Dynamics 365 Resource Scheduling is a robust solution designed to optimize the allocation and management of resources across various projects and services. By leveraging advanced scheduling algorithms and real-time data, it enables businesses to efficiently assign the right resources to the right tasks, ensuring maximum productivity and customer satisfaction.</p>
						</div>
						<div className={career.companyAlt}></div>
					</article>

					<article className={career.companyPositions}>
						<div className={career.position}>
							<div className={career.positionContent}>
								<span className={career.positionHeader}>
									<h3>Software Engineer II</h3>
									<h4>July 2024 - Present</h4>
								</span>
								<p>
								I specialize in building apps within Microsoft Dynamics 365 Resource Scheduling to optimize and streamline resource allocation for various projects and services. Using advanced scheduling algorithms and real-time data integration, I create solutions that ensure the right resources are assigned to the right tasks, enhancing productivity and customer satisfaction.</p>
							</div>
							<div className={career.positionAlt}></div>
							<Badges list={microsoft} block="stack" fullContainer="fullContainer"/>
						</div>
					</article>

					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Hitachi Solutions</h3>
								<h4>Permanent Full-time</h4>
								<h4>September 2022 - July 2024</h4>
								<h5>Toronto, Ontario, Canada</h5>
							</span>
							<p>
							Hitachi Solutions is a leading provider of consulting services, specializing in offering expert advice, design, and development of applications within the Microsoft Business Apps ecosystem. With deep expertise in Microsoft Dynamics 365, Power Platform, and Azure, Hitachi Solutions helps organizations leverage the full potential of Microsoft&apos;s powerful tools to drive digital transformation and achieve business objectives. By delivering customized solutions tailored to specific business needs, Hitachi Solutions ensures enhanced productivity, operational efficiency, and sustained growth for their clients.</p>
						</div>
						<div className={career.companyAlt}></div>
					</article>

					<article className={career.companyPositions}>
						<div className={career.position}>
							<div className={career.positionContent}>
								<span className={career.positionHeader}>
									<h3>Senior Developer</h3>
									<h4>June 2023 - July 2024</h4>
								</span>
								<p>
								I design and develop custom user interfaces within the Microsoft Business Apps ecosystem. My role involves leveraging my expertise in Microsoft Dynamics 365, Power Platform, and Azure to create intuitive and effective applications. By tailoring each solution to meet specific business needs, I help clients enhance their productivity, operational efficiency, and achieve their digital transformation goals.</p>
							</div>
							<div className={career.positionAlt}></div>
							<Badges list={hitachi} block="stack" fullContainer="fullContainer"/>
						</div>
						<div className={career.position}>
							<div className={career.positionContent}>
								<span className={career.positionHeader}>
									<h3>Senior Consultant</h3>
									<h4>September 2022 - June 2023</h4>
								</span>
								<p>
								I specialize in building model-driven apps within the Microsoft Power Platform. My role involves leveraging my expertise in Power Apps and Dynamics 365 to design and develop applications that align closely with business requirements. By focusing on model-driven app development, I help clients optimize processes, improve data management, and enhance operational efficiency, ultimately supporting their digital transformation journey.</p>
							</div>
							<div className={career.positionAlt}></div>
						</div>
					</article>

					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Endeavour Solutions</h3>
								<h4>Permanent Full-time</h4>
								<h4>July 2020 - September 2022</h4>
								<h5>Halifax, Nova Scotia, Canada</h5>
							</span>
							<p>
							Endeavour Solutions is a distinguished Microsoft Gold partner renowned for delivering cutting-edge Dynamics 365 solutions to empower businesses across diverse sectors. Specializing in Dynamics 365 Customer Engagement, Finance & Operations, and the Power Platform, Endeavour Solutions excels in transforming organizational processes and enhancing efficiency through tailored technology solutions. With a commitment to understanding and meeting client needs, we provide expert consultation, seamless implementation, and ongoing support to ensure our clients achieve their digital transformation goals effectively and sustainably.</p>
						</div>
						<div className={career.companyAlt}></div>
					</article>

					<article className={career.companyPositions}>
						<div className={career.position}>
							<div className={career.positionContent}>
								<span className={career.positionHeader}>
									<h3>D365 & Power Platform Consultant</h3>
									<h4>July 2020 - September 2022</h4>
								</span>
								<p>
								I specialize in building model-driven apps within the Microsoft Power Platform, focusing on creating tailored solutions that optimize business processes and improve operational efficiency. Working closely with clients, I ensure that each app meets their specific needs and supports their strategic goals for digital transformation. This involves leveraging Power Apps and Dynamics 365 to deliver intuitive and effective applications that enhance productivity and drive organizational success.</p>
							</div>
							<div className={career.positionAlt}></div>
							<Badges list={endeavour} block="stack" fullContainer="fullContainer"/>
						</div>
					</article>
				</section>
			</Container>
		</Section>
	)
}

const microsoft	= [
	{ key: 'javascript', 	name: 'JavaScript', 		type: 'devicon' },
	{ key: 'nodejs', 		name: 'NodeJS', 			type: 'devicon' },
	{ key: 'react', 		name: 'React', 				type: 'devicon' },
	{ key: 'html5', 		name: 'HTML5', 				type: 'devicon' },
	{ key: 'css3', 			name: 'CSS3', 				type: 'devicon' },
	{ key: 'git', 			name: 'Git', 				type: 'devicon' },
	{ key: 'mysql', 		name: 'MySQL', 				type: 'devicon' },
	{ key: 'csharp', 		name: 'C#', 				type: 'devicon' },
]

const hitachi = [
	{ key: 'javascript', 	name: 'JavaScript', 		type: 'devicon' },
	{ key: 'nodejs', 		name: 'NodeJS', 			type: 'devicon' },
	{ key: 'react', 		name: 'React', 				type: 'devicon' },
	{ key: 'html5', 		name: 'HTML5', 				type: 'devicon' },
	{ key: 'css3', 			name: 'CSS3', 				type: 'devicon' },
	{ key: 'git', 			name: 'Git', 				type: 'devicon' },
	{ key: 'mysql', 		name: 'MySQL', 				type: 'devicon' },
]

const endeavour = [
	{ key: 'javascript', 	name: 'JavaScript', 		type: 'devicon' },
	{ key: 'nodejs', 		name: 'NodeJS', 			type: 'devicon' },
	{ key: 'react', 		name: 'React', 				type: 'devicon' },
	{ key: 'html5', 		name: 'HTML5', 				type: 'devicon' },
	{ key: 'css3', 			name: 'CSS3', 				type: 'devicon' },
	{ key: 'git', 			name: 'Git', 				type: 'devicon' },
	{ key: 'mysql', 		name: 'MySQL', 				type: 'devicon' },
]