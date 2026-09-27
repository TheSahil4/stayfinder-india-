import { useMemo, useState } from 'react'
import { CalendarDays, ChevronDown, MapPin, Search, Users, ShieldCheck, Headphones, BadgeCheck, Tag, ArrowRight, Star, Mail, Navigation, Sparkles } from 'lucide-react'
import Button from '../components/Button'
import Modal from '../components/Modal'
import { DestinationCard, HotelCard } from '../components/Card'
import { destinations, hotels, popularSearches, offers } from '../data/data'
import { formatINR } from '../utils/helpers'

export default function Home({ navigate, wishlist, setWishlist }) {
  const [query, setQuery] = useState('')
  const [destination, setDestination] = useState('')
  const [guests, setGuests] = useState('2 Guests, 1 Room')
  const [sort, setSort] = useState('Recommended')
  const [details, setDetails] = useState(null)
  const [notice, setNotice] = useState('')
  const [email, setEmail] = useState('')
  const [emailState, setEmailState] = useState('')
  const [locationState, setLocationState] = useState(false)

  const shownHotels = useMemo(() => {
    let list = [...hotels]
    if (sort === 'Price - Low to High') list.sort((a,b) => a.price - b.price)
    if (sort === 'Price - High to Low') list.sort((a,b) => b.price - a.price)
    if (sort === 'Top Rated') list.sort((a,b) => b.rating - a.rating)
    return list.slice(0, 3)
  }, [sort])

  const toggleWishlist = (id) => setWishlist(wishlist.includes(id) ? wishlist.filter(x => x !== id) : [...wishlist, id])
  const search = () => { if (!destination.trim()) { setNotice('Please choose a city, landmark or hotel first.'); return } setNotice(`Showing demo stays around ${destination}.`); navigate('/hotels', { search: destination }) }
  const subscribe = (e) => { e.preventDefault(); if (!/^\S+@\S+\.\S+$/.test(email)) { setEmailState('Please enter a valid email address.'); return } setEmailState('You’re subscribed! Watch your inbox for the next deal.'); setEmail('') }

  return <>
    <main>
      <section className="hero">
        <div className="hero-art"><div className="hero-mountains"/><div className="hero-lights"/></div>
        <div className="hero-content container"><div className="hero-copy"><span className="eyebrow"><Sparkles size={14}/> Curated stays across India</span><h1>Find the Best Hotels<br/>Near You, Across India</h1><p>Compare prices, read reviews & book your perfect stay.</p></div><button className="location-pill" onClick={() => { setLocationState(true); setNotice('Location access simulated — nearby stays are ready to explore.') }}><Navigation size={17}/><span><b>Use My Location</b><small>Find hotels near you</small></span></button></div>
        <div className="search-box container">
          <div className="search-fields">
            <label><span>Where are you going?</span><div className="field"><MapPin size={18}/><input value={destination} onChange={e => setDestination(e.target.value)} placeholder="Search city, landmark or hotel"/><ChevronDown size={15}/></div></label>
            <label><span>Check-in</span><div className="field"><CalendarDays size={17}/><input type="date" defaultValue="2026-09-28"/></div></label>
            <label><span>Check-out</span><div className="field"><CalendarDays size={17}/><input type="date" defaultValue="2026-09-29"/></div></label>
            <label><span>Guests & Rooms</span><div className="field select-field"><Users size={17}/><select value={guests} onChange={e => setGuests(e.target.value)}><option>2 Guests, 1 Room</option><option>1 Guest, 1 Room</option><option>3 Guests, 1 Room</option><option>4 Guests, 2 Rooms</option></select><ChevronDown size={15}/></div></label>
            <Button onClick={search}><Search size={17}/> Search Hotels</Button>
          </div>
          <div className="popular"><b>Popular Searches:</b>{popularSearches.map(item => <button key={item} onClick={() => setDestination(item)}>{item}</button>)}<button className="view-all" onClick={() => navigate('/destinations')}>View All</button></div>
        </div>
      </section>

      <section className="trust-strip"><div className="container trust-grid">{[[BadgeCheck,'Best Price Guarantee','We ensure the lowest price for your perfect stay.'],[Tag,'Wide Selection','Choose from 50,000+ hotels across 700+ cities in India.'],[Users,'Trusted by Millions','10M+ happy customers book with confidence.'],[ShieldCheck,'Secure Booking','Easy, fast & secure online booking.'],[Headphones,'24/7 Support','We are here for you anytime, anywhere.']].map(([Icon,title,text]) => <div className="trust-item" key={title}><span><Icon/></span><div><b>{title}</b><p>{text}</p></div></div>)}</div></section>

      <section className="section container"><div className="section-heading"><h2>Top Hotels in Popular Cities</h2><button onClick={() => navigate('/destinations')}>Explore all <ArrowRight size={15}/></button></div><div className="destination-grid">{destinations.map(item => <DestinationCard key={item.id} item={item} onClick={() => { setDestination(item.name); navigate('/hotels') }}/>)}</div></section>

      <section className="section container hotels-section"><div className="section-heading"><h2>Recommended Hotels Near You</h2><button onClick={() => navigate('/hotels')}>View all hotels <ArrowRight size={15}/></button></div><div className="content-with-aside"><div><div className="tabs">{['Recommended','Price - Low to High','Price - High to Low','Top Rated'].map(t => <button className={sort === t ? 'selected' : ''} key={t} onClick={() => setSort(t)}>{t}</button>)}</div><div className="hotel-grid">{shownHotels.map(hotel => <HotelCard key={hotel.id} hotel={hotel} wished={wishlist.includes(hotel.id)} onWishlist={toggleWishlist} onDetails={setDetails}/>)}</div></div><aside className="why-card"><h3>Why Book With Us?</h3>{[['Exclusive Offers','Get the best deals & discounts'],['No Hidden Charges','What you see is what you pay'],['Easy Cancellation','Flexible booking & cancellation'],['Earn Rewards','Book more, earn more']].map(([a,b]) => <div className="why-row" key={a}><span><Star size={15}/></span><p><b>{a}</b><small>{b}</small></p></div>)}<Button variant="light" onClick={() => navigate('/about')}>Learn More <ArrowRight size={15}/></Button></aside></div></section>

      <section className="container bottom-promos"><div className="member-banner"><div><span className="promo-star">★</span><div><h3>Unlock Member Benefits</h3><p>Join Now & Get Up to 15% OFF + Extra Rewards on Every Booking!</p></div></div><Button onClick={() => navigate('/offers')}>Join for Free <ArrowRight size={16}/></Button></div><div className="newsletter"><div><h3>Get Exclusive Travel Deals!</h3><p>Subscribe to our newsletter & get best offers straight to your inbox.</p></div><form onSubmit={subscribe}><Mail size={17}/><input aria-label="Email address" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)}/><button>Subscribe</button></form>{emailState && <small className="form-message">{emailState}</small>}</div></section>
      <section className="stats-bar"><div className="container stats-grid">{[[BadgeCheck,'50,000+ Hotels','Across India'],[MapPin,'700+ Cities','To Explore'],[Users,'10M+ Customers','Happy Stays'],[Headphones,'24/7 Support','We are here']].map(([I,a,b]) => <div key={a}><I/><span><b>{a}</b><small>{b}</small></span></div>)}<div className="follow"><b>Follow Us</b><span>f</span><span>◎</span><span>𝕏</span><span>▶</span></div></div></section>
    </main>
    <Modal open={Boolean(details)} title={details?.name} onClose={() => setDetails(null)}>{details && <div className="details"><div className={`modal-image ${details.scene}`}/><div className="details-meta"><span className="rating"><Star size={13} fill="currentColor"/> {details.rating}</span><span>{details.reviews.toLocaleString('en-IN')} reviews</span><span>{details.city}</span></div><p>A polished demo hotel card based on the supplied reference. This project uses static frontend data, so no real reservation is submitted.</p><div className="details-price"><b>{formatINR(details.price)}</b> / night <Button onClick={() => { setDetails(null); setNotice('Demo booking selected. No payment or backend is connected.') }}>Select Stay</Button></div></div>}</Modal>
    {notice && <button className="toast" onClick={() => setNotice('')}>{notice} <span>×</span></button>}
    {locationState && <span className="sr-only">Location demo enabled</span>}
    <section className="offers-mini container">{offers.map(o => <div key={o.code}><span>NEW</span><b>{o.title}</b><p>{o.text}</p><small>Code: {o.code}</small></div>)}</section>
  </>
}
