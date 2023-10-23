import LogoIMG from './IMAGE.png'
import './Header.css'

const Header = () => {
	return (
		<header>
			<div className='header-container'>
				<img src={LogoIMG} alt='error-Img' className='header-logo' />
				<div className='header-nav'>
					<ul className='header-nav-list'>
						<li className='header-nav-item'>
							<a href='# ' className='header-item-link'>
								Business areas
							</a>
						</li>
						<li className='header-nav-item'>
							<a href='# ' className='header-item-link'>
								Featured images
							</a>
						</li>
						<li className='header-nav-item'>
							<a href='# ' className='header-item-link'>
								Gear cage
							</a>
						</li>
						<li className='header-nav-item'>
							<a href='# ' className='header-item-link'>
								Contact
							</a>
						</li>
					</ul>
					<button className='header-btn'>Get template</button>
				</div>
			</div>
		</header>
	)
}

export default Header
