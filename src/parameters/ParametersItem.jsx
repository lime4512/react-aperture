import './ParametersItem.css'
const ParametersItem = props => {
	return (
		<div className='parametersItem'>
			<img src={props.img} alt='' />
			<p className='parameters-text'>{props.text}</p>
		</div>
	)
}
export default ParametersItem
