import img1 from './I-1.png'
import img2 from './I-2.png'
import img3 from './I-3.png'
import img4 from './I-4.png'

import './Parameters.css'
import ParametersItem from './ParametersItem'

const Parameters = () => {
	return (
		<div className='parameters'>
			<div className='parameters-content'>
				<ParametersItem img={img1} text='1/2000s' />
				<ParametersItem img={img2} text='f/11' />
				<ParametersItem img={img3} text='100' />
				<ParametersItem img={img4} text='Iceland' />
			</div>
		</div>
	)
}

export default Parameters
