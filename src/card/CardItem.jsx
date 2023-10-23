import Btn from '../btn/Btn'
import './CardItem.css'
import { motion } from 'framer-motion'

const CardItem = props => {
	const imgPath = {
		background: `url(${props.img})`,
	}

	const cardAnimation = {
		hidden: {
			x: Number(props.x),
			opacity: 0,
		},
		visible: {
			x: 0,
			opacity: 1,
			transition: { delay: Number(props.delay) },
		},
	}
	return (
		<motion.div
			className='card'
			style={imgPath}
			initial={'hidden'}
			whileInView={'visible'}
			variants={cardAnimation}
			whileHover={{
				scale: 1.1,
			}}
		>
			<div className='card-contentt'>
				<p className='card-title'>{props.title}</p>
				<span className='card-text'>{props.text}</span>
				<Btn />
			</div>
		</motion.div>
	)
}

export default CardItem
