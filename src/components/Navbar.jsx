import { useState } from 'react'
import { ChevronDown, Heart, Menu, UserRound, X, Globe2, Headphones, Mail, Phone, Building2 } from 'lucide-react'
import { scrollTop } from '../utils/helpers'

export default function Navbar({ navigate, wishlistCount = 0 }) {
  const [open, setOpen] = useState(false)
  const [more, setMore] = useState(false)
  const links = [['Home', '/'], ['Hotels', '/hotels'], ['Offers', '/offers'], ['Destinations', '/destinations'], ['Near Me', '/near-me'], ['Business Stay', '/business-stay'], ['Travel Guide', '/travel-guide']]
  const go = (path) => { setOpen(false); setMore(false); navigate(path); scrollTop() }
  return (
    <>
      <div className="topbar">
        <div className="topbar-left"><span><Headphones size={13}/> 24/7 Support</span><span><Phone size={12}/> +91 98765 43210</span><span><Mail size={13}/> support@stayfinder.in</span></div>
        <div className="promo">Get 10% OFF on your first booking</div>
        <div className="topbar-right"><button onClick={() => go('/list-hotel')}><Building2 size={14}/> List Your Hotel</button><button onClick={() => go('/wishlist')}><Heart size={14}/> Wishlist {wishlistCount ? `(${wishlistCount})` : ''}</button><button onClick={() => go('/login')}><UserRound size={14}/> Login / Sign Up</button></div>
      </div>
      <header className="navbar">
        <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button>
        <button className="brand" onClick={() => go('/')} aria-label="StayFinder home">
          <span className="brand-mark"><Building2 size={24}/></span><span><b>Stay<span>Finder</span></b><small>India</small><em>Find Your Perfect Stay</em></span>
        </button>
        <nav className={open ? 'nav-links open' : 'nav-links'}>
          {links.map(([label, path]) => <button key={path} className={path === window.location.hash.replace('#','') || (path === '/' && !window.location.hash) ? 'active' : ''} onClick={() => go(path)}>{label}</button>)}
          <div className="more-wrap"><button onClick={() => setMore(!more)}>More <ChevronDown size={14}/></button>{more && <div className="more-menu"><button onClick={() => go('/about')}>About Us</button><button onClick={() => go('/contact')}>Contact</button><button onClick={() => go('/services')}>Services</button></div>}</div>
        </nav>
        <div className="nav-tools"><button>INR <ChevronDown size={12}/></button><button><Globe2 size={15}/> EN <ChevronDown size={12}/></button></div>
      </header>
    </>
  )
}
