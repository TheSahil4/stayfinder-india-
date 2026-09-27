export const destinations = [
  { id: 'pune', name: 'Pune', hotels: 512, from: 799, className: 'scene-pune', description: 'Culture, cafés and weekend escapes.' },
  { id: 'goa', name: 'Goa', hotels: 345, from: 999, className: 'scene-goa', description: 'Beaches, sunsets and relaxed stays.' },
  { id: 'mumbai', name: 'Mumbai', hotels: 620, from: 899, className: 'scene-mumbai', description: 'City energy with iconic landmarks.' },
  { id: 'jaipur', name: 'Jaipur', hotels: 410, from: 899, className: 'scene-jaipur', description: 'Royal heritage and colourful markets.' },
  { id: 'manali', name: 'Manali', hotels: 280, from: 1199, className: 'scene-manali', description: 'Mountain air and scenic getaways.' },
  { id: 'udaipur', name: 'Udaipur', hotels: 312, from: 899, className: 'scene-udaipur', description: 'Lakeside luxury and old-city charm.' },
]

export const hotels = [
  { id: 1, name: 'The Leela Palace', city: 'New Delhi', rating: 4.6, reviews: 2345, price: 8999, oldPrice: 11299, discount: 20, perks: ['Free Breakfast', 'Free Wi-Fi', 'Swimming Pool'], scene: 'hotel-delhi' },
  { id: 2, name: 'Taj Exotica Resort & Spa', city: 'Goa', rating: 4.7, reviews: 1876, price: 7199, oldPrice: 8499, discount: 15, perks: ['Free Breakfast', 'Free Wi-Fi', 'Spa'], scene: 'hotel-goa' },
  { id: 3, name: 'Radisson Blu Plaza', city: 'Hyderabad', rating: 4.5, reviews: 1234, price: 6299, oldPrice: 6999, discount: 10, perks: ['Free Breakfast', 'Free Wi-Fi', 'Gym'], scene: 'hotel-city' },
  { id: 4, name: 'Lakeview Heritage Resort', city: 'Udaipur', rating: 4.8, reviews: 986, price: 5799, oldPrice: 6999, discount: 17, perks: ['Lake View', 'Breakfast', 'Pool'], scene: 'hotel-udaipur' },
  { id: 5, name: 'Snow Peak Retreat', city: 'Manali', rating: 4.7, reviews: 742, price: 4599, oldPrice: 5499, discount: 16, perks: ['Mountain View', 'Wi-Fi', 'Bonfire'], scene: 'hotel-manali' },
  { id: 6, name: 'Amber Courtyard', city: 'Jaipur', rating: 4.6, reviews: 654, price: 3899, oldPrice: 4699, discount: 17, perks: ['Breakfast', 'Wi-Fi', 'Parking'], scene: 'hotel-jaipur' },
]

export const offers = [
  { title: 'Weekend Escape', text: 'Save up to 25% on selected stays.', code: 'WEEKEND25' },
  { title: 'First Booking', text: 'Get 10% off your first StayFinder booking.', code: 'WELCOME10' },
  { title: 'Long Stay Bonus', text: 'Extra rewards on stays of 3 nights or more.', code: 'STAY3' },
]

export const popularSearches = ['Goa', 'Manali', 'Mumbai', 'Udaipur', 'Darjeeling', 'Jaipur', 'Kerala', 'Leh Ladakh']
