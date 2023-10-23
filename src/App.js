import Banner from './banner/Banner'
import Header from './header/Header'
import Card from './card/Card'
import './style/common.css'
import './style/reset.css'

function App() {
	return (
		<div className='App'>
			<Header />
			<Banner />
			<div className='container'>
				<Card />
			</div>
		</div>
	)
}

export default App
