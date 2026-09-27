import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useLocalStorage } from './hooks/useLocalStorage'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { HotelsPage, DestinationsPage, OffersPage, AboutPage, ServicesPage, ContactPage, TravelGuidePage, BusinessPage, NearMePage, SimplePage } from './pages/GenericPage'

function path() { return window.location.hash.replace(/^#/, '') || '/' }
export default function App() {
  const [route,setRoute] = useState(path())
  const [wishlist,setWishlist] = useLocalStorage('stayfinder-wishlist', [])
  useEffect(()=>{ const onHash=()=>setRoute(path()); window.addEventListener('hashchange',onHash); return ()=>window.removeEventListener('hashchange',onHash)},[])
  const navigate = (to) => { window.location.hash = to }
  let page
  if(route === '/') page=<Home navigate={navigate} wishlist={wishlist} setWishlist={setWishlist}/>
  else if(route === '/hotels') page=<HotelsPage navigate={navigate} wishlist={wishlist} setWishlist={setWishlist}/>
  else if(route === '/destinations') page=<DestinationsPage navigate={navigate}/>
  else if(route === '/offers') page=<OffersPage/>
  else if(route === '/about') page=<AboutPage/>
  else if(route === '/services') page=<ServicesPage/>
  else if(route === '/contact') page=<ContactPage/>
  else if(route === '/travel-guide') page=<TravelGuidePage/>
  else if(route === '/business-stay') page=<BusinessPage/>
  else if(route === '/near-me') page=<NearMePage/>
  else if(route === '/wishlist') page=<SimplePage title="Your Wishlist" subtitle="Your saved stays live in this browser only." action={`${wishlist.length} saved hotel${wishlist.length===1?'':'s'} ready to revisit.`}/>
  else if(route === '/login') page=<SimplePage title="Login / Sign Up" subtitle="Authentication is intentionally excluded from this frontend-only project." action="Demo account screen"/>
  else if(route === '/list-hotel') page=<SimplePage title="List Your Hotel" subtitle="A visual demo page for the partner call-to-action." action="Hotel listing form concept"/>
  else page=<NotFound navigate={navigate}/>
  return <div className="app"><Navbar navigate={navigate} wishlistCount={wishlist.length}/>{page}<Footer navigate={navigate}/></div>
}
