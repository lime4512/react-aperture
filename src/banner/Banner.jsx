import Parameters from '../parameters/Parameters'
import './Banner.css'
import { motion } from 'framer-motion'

const Banner = () => {
	const titleAnimation = {
		hidden: {
			x: -100,
			opacity: 0,
		},
		visible: custom => ({
			x: 0,
			opacity: 1,
			transition: { delay: custom },
		}),
	}

	const textAnimation = {
		hidden: {
			y: 100,
			opacity: 0,
		},
		visible: {
			y: 0,
			opacity: 1,
			transition: { delay: 0.5 },
		},
	}
	return (
		<motion.section
			className='banner-container'
			initial='hidden'
			animate='visible'
		>
			<div className='banner-content'>
				<div className='banner-info'>
					<motion.h3
						className='banner-subtitle'
						custom={0.2}
						variants={titleAnimation}
					>
						Photographer & Filmmaker
					</motion.h3>
					<motion.h1
						className='banner-title'
						custom={0.4}
						variants={titleAnimation}
					>
						Aperture Studios
					</motion.h1>
					<motion.p className='banner-text' variants={textAnimation}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						varius enim in eros elementum tristique. Duis cursus, mi quis
						viverra ornare, eros dolor interdum nulla, ut commodo diam libero
						vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
						imperdiet. Nunc ut sem vitae risus tristique posuere.
					</motion.p>
				</div>
			</div>
			<Parameters />
		</motion.section>
	)
}

export default Banner
