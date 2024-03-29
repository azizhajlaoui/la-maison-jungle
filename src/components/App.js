import { useState } from 'react'
import Banner from './Banner'
import logo from '../assets/logo.png'
import Cart from './cart'
import Footer from './footer'
import ShoppingList from './ShoppingList'
import Time from './Time.js'
import '../styles/Layout.css'

function App() {
	const [cart, updateCart] = useState([])
	const [isFooterShown, updateIsFooterShown] = useState(true)
	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
				<Time />
			</Banner>
			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
				<button onClick={() => updateIsFooterShown(!isFooterShown)}>
					Cacher !
				</button>
			</div>
			{isFooterShown && <Footer cart={cart} />}
		</div>
	)
}

export default App