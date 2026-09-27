import { Facebook, Instagram, Twitter, Youtube, Headphones, MapPin, Users, Building2 } from 'lucide-react'
import { scrollTop } from '../utils/helpers'

export default function Footer({ navigate }) {
  const go = (p) => { navigate(p); scrollTop() }
  return <footer>
    <div className="footer-main">
      <div><button className="footer-brand" onClick={() => go('/')}><span className="brand-mark"><Building2 size={22}/></span><b>Stay<span>Finder</span></b></button><p>Discover stays you will remember. Compare hotels, explore destinations and book with confidence.</p><div className="socials"><button aria-label="Facebook"><Facebook/></button><button aria-label="Instagram"><Instagram/></button><button aria-label="Twitter"><Twitter/></button><button aria-label="YouTube"><Youtube/></button></div></div>
      <div><h4>Explore</h4><button onClick={() => go('/hotels')}>Hotels</button><button onClick={() => go('/destinations')}>Destinations</button><button onClick={() => go('/offers')}>Offers</button><button onClick={() => go('/travel-guide')}>Travel Guide</button></div>
      <div><h4>Company</h4><button onClick={() => go('/about')}>About Us</button><button onClick={() => go('/contact')}>Contact</button><button onClick={() => go('/business-stay')}>Business Stay</button><button onClick={() => go('/list-hotel')}>List Your Hotel</button></div>
      <div><h4>Support</h4><p><Headphones size={15}/> 24/7 customer support</p><p><MapPin size={15}/> 700+ cities across India</p><p><Users size={15}/> 10M+ happy customers</p></div>
    </div>
    <div className="footer-bottom"><span>© 2026 StayFinder India. Frontend demo for educational use.</span><span>Privacy · Terms · Help</span></div>
  </footer>
}
