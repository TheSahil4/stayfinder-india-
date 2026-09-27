import { Heart, Star, Wifi, Coffee, Waves, Dumbbell, Mountain, Flame, Car, MapPin } from 'lucide-react'
import { formatINR } from '../utils/helpers'

const perkIcon = (perk) => perk.includes('Wi-Fi') ? Wifi : perk.includes('Breakfast') ? Coffee : perk.includes('Pool') ? Waves : perk.includes('Gym') ? Dumbbell : perk.includes('Mountain') ? Mountain : perk.includes('Bonfire') ? Flame : Car

export function DestinationCard({ item, onClick }) {
  return <button className={`destination-card ${item.className}`} onClick={onClick}><div className="scene-overlay"/><div className="destination-copy"><b>{item.name}</b><span>{item.hotels} Hotels</span></div><strong>From {formatINR(item.from)}</strong></button>
}

export function HotelCard({ hotel, wished, onWishlist, onDetails }) {
  return <article className="hotel-card">
    <div className={`hotel-image ${hotel.scene}`}><span className="discount">-{hotel.discount}%</span><button className={wished ? 'heart active' : 'heart'} onClick={() => onWishlist(hotel.id)} aria-label="Add to wishlist"><Heart size={17} fill={wished ? 'currentColor' : 'none'}/></button><div className="image-shine"/></div>
    <div className="hotel-info"><div className="hotel-title-row"><div><h3>{hotel.name}</h3><span className="city"><MapPin size={12}/> {hotel.city}</span></div><span className="rating"><Star size={12} fill="currentColor"/> {hotel.rating}</span></div><small className="reviews">({hotel.reviews.toLocaleString('en-IN')} Reviews)</small><div className="perks">{hotel.perks.map((p) => { const Icon = perkIcon(p); return <span key={p}><Icon size={12}/>{p}</span> })}</div><div className="price-row"><div><b>{formatINR(hotel.price)}</b> <del>{formatINR(hotel.oldPrice)}</del></div><button onClick={() => onDetails(hotel)}>View Details</button></div></div>
  </article>
}
