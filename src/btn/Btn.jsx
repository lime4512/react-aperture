import './Btn.css'
import img from './Frame.png'
const Btn = () => {
	return (
		<button className='btn'>
			{' '}
			<img src={img} alt='error img' className='btn-img'/>
			Read more
		</button>
	)
}

export default Btn
