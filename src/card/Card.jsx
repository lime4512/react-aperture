import './Card.css'
import img1 from './img/IMAGE-1.png'
import img2 from './img/IMAGE-2.png'
import img3 from './img/IMAGE-3.png'
import img4 from './img/IMAGE-4.png'
import CardItem from './CardItem'
import { motion } from 'framer-motion'
const Card = () => {
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

	return (
		<div className='card-container'>
			<motion.div
				className='cards-container-title'
				initial='hidden'
				whileInView='visible'
			>
				<motion.p
					className='cards-title'
					variants={titleAnimation}
					custom={0.2}
				>
					What we do.
				</motion.p>
				<motion.span
					className='cards-subtitle'
					variants={titleAnimation}
					custom={0.4}
				>
					The areas that we're specialized in.
				</motion.span>
			</motion.div>
			<div className='card-content'>
				<CardItem
					title='Product Photography'
					text='Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.'
					img={img1}
					x='-100'
					delay='0.1'
				/>
				<CardItem
					title='Architecture Photography'
					text='Aenean porta neque eget consequat fringilla. Vestibulum ultrices, orci nec egestas pharetra, ligula est semper enim, nec auctor sapien leo nec purus. Fusce tincidunt aliquet sapien, sit amet rhoncus leo imperdiet nec.'
					img={img2}
					x='100'
					delay='0.3'
				/>

				<CardItem
					title='Drone Photography'
					text='Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt. Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.'
					img={img3}
					x='-100'
					delay='0.5'
				/>

				<CardItem
					title='Wildlife Photography'
					text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis.'
					img={img4}
					x='100'
					delay='0.7'
				/>
			</div>
		</div>
	)
}
export default Card
