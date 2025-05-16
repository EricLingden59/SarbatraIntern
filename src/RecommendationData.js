import hotel1 from '../src/assets/Destination/Hotel1.png'
import hotel2 from '../src/assets/Destination/hotel2.png'
import hotel3 from '../src/assets/Destination/Hotel3.png'
import hotel4 from '../src/assets/Destination/Hotel4.png'
import activity1 from '../src/assets/Destination/Activity1.png'
import activity2 from '../src/assets/Destination/Activity2.png'
import activity3 from '../src/assets/Destination/Activity3.png'
import activity4 from '../src/assets/Destination/Activity4.png'
import car from '../src/assets/Destination/Car.png'
import inspiration1 from '../src/assets/Destination/Inspiration1.png'
import inspiration2 from '../src/assets/Destination/Inspiration2.png'
import inspiration3 from '../src/assets/Destination/Inspiration3.png'
import rental1 from '../src/assets/Destination/Rental1.png'
import rental2 from '../src/assets/Destination/Rental2.png'
import rental3 from '../src/assets/Destination/Rental3.png'
import rental4 from '../src/assets/Destination/Rental4.png'
import topsight from '../src/assets/Destination/TopSights.png'
import tour1 from '../src/assets/Destination/Tour1.png'
import tour2 from '../src/assets/Destination/Tour2.png'
import tour3 from '../src/assets/Destination/Tour3.png'
import tour4 from '../src/assets/Destination/Tour4.png'
import customer from '../src/assets/Destination/Customer.png'
import neardestination1 from '../src/assets/Destination/neardestination1.png'
import neardestination2 from '../src/assets/Destination/neardestination2.png'
import neardestination3 from '../src/assets/Destination/neardestination3.png'
import neardestination4 from '../src/assets/Destination/neardestination4.png'
import neardestination5 from '../src/assets/Destination/neardestination5.png'
import neardestination6 from '../src/assets/Destination/neardestination6.png'

 export const hotels = [
    {
      image: hotel1,
      badge: 'BREAKFAST INCLUDED',
      title: 'The Montcalm At Brewery London City',
      location: 'Westminster Borough, London',
    },
    {
      image: hotel2,
      title: 'Staycity Aparthotels Deptford Bridge Station',
      location: 'Ciutat Vella, Barcelona',
    },
    {
      image: hotel3,
      badge: 'BEST SELLER',
      title: 'The Westin New York at Times Square',
      location: 'Manhattan, New York',
    },
    {
      image: hotel4,
      badge: 'TOP RATED',
      title: 'DoubleTree by Hilton Hotel New York Times Square West',
      location: 'Vaticano Prati, Rome',
    },
  ];

  export const activities = [
    {
      tag: 'LIKELY TO SELL OUT*',
      image: activity1,
      title: 'Golden Circle, Kerid Volcanic Crater, and Blue Lagoon Day Trip',
      location: 'Westminster Borough, London',
    },
    {
      image: activity2,
      title: 'Edinburgh Sky to Sea Bike Tour by Manual or E-Bike',
      location: 'Ciutat Vella, Barcelona',
    },
    {
      tag: 'BEST SELLER',
      image: activity3,
      title: 'Natural Crystal Blue Ice Cave Tour of Vatnajökull Glacier',
      location: 'Manhattan, New York',
    },
    {
      tag: 'TOP RATED',
      image:activity4,
      title: 'South Coast Full Day Tour by Minibus from Reykjavik',
      location: 'Vaticano Prati, Rome',
    },
  ];

  export const cars = [
    {
      id: 1,
      name: 'Mercedes-Benz E-Class',
      location: 'Heathrow Airport - LUXURY',
      price: 72,
      image: car,
      type: 'Automatic',
      rating: 4.9,
      reviews: 3104,
      badge: null,
    },
    {
      id: 2,
      name: 'Jaguar F-Pace',
      location: 'Heathrow Airport - SUV',
      price: 72,
      image: car,
      type: 'Automatic',
      rating: 4.9,
      reviews: 2014,
      badge: null,
    },
    {
      id: 3,
      name: 'Volvo XC90',
      location: 'Heathrow Airport - SUV',
      price: 72,
      image: car,
      type: 'Automatic',
      rating: 4.9,
      reviews: 2014,
      badge: 'Best Seller',
    },
    {
      id: 4,
      name: 'BMW 5 Series',
      location: 'Heathrow Airport - SUV',
      price: 72,
      image: car,
      type: 'Automatic',
      rating: 4.8,
      reviews: 3014,
      badge: null,
    },
  ];

  export const testimonial = {
    customer: {
      name: 'Annette Black',
      jobTitle: 'UX / UI Designer',
      image: customer,
      testimonial: 'The place is in a great location in Gumbet. The area is safe and beautiful. The apartment was comfortable and the host was kind and responsive to our requests.',
    },
    stats: {
      happyPeople: '13m+',
      rating: 4.88,
    },
  };

  export const blogs = [
    {
      id: 1,
      title: '10 European ski destinations you should visit this winter',
      date: 'April 06, 2022',
      image: inspiration1,
      link: '#',
    },
    {
      id: 2,
      title: 'Booking travel during Corona: good advice in an uncertain time',
      date: 'April 06, 2022',
      image: inspiration2,
      link: '#',
    },
    {
      id: 3,
      title: 'Where can I go? 5 amazing countries that are open right now',
      date: 'April 06, 2022',
      image: inspiration3,
      link: '#',
    },
  ];

  export const rentals = [
    {
      image: rental1,
      location: 'Westminster Borough, London',
      title: 'Luxury New Apartment With Private Garden',
    },
    {
      image:rental2,
      location: 'Ciutat Vella, Barcelona',
      title: 'Premium One Bedroom Luxury Living in the Heart of Mayfair',
    },
    {
      image: rental3,
      location: 'Manhattan, New York',
      title: 'Style, Charm & Comfort in Camberwell',
      badge: 'BEST SELLER',
    },
    {
      image: rental4,
      location: 'Vaticano Prati, Rome',
      title: 'Marylebone - Oxford Street 1 bed apt with WiFi',
      badge: 'TOP RATED',
    },
  ];

  export const sights = [
    {
      id: 1,
      title: 'The British Museum',
      description: 'Learn about British history at the Tower of London, a medieval castle that was first built in 1066 by William the Conqueror.',
      image: topsight,
      link: '#',
    },
    {
      id: 2,
      title: 'London Eye',
      description: 'Learn about British history at the Tower of London, a medieval castle that was first built in 1066 by William the Conqueror.',
      image: topsight,
      link: '#',
    },
    {
      id: 3,
      title: 'Tower of London',
      description: 'Learn about British history at the Tower of London, a medieval castle that was first built in 1066 by William the Conqueror.',
      image: topsight,
      link: '#',
    },
    {
      id: 4,
      title: 'Tower Bridge',
      description: 'Learn about British history at the Tower of London, a medieval castle that was first built in 1066 by William the Conqueror.',
      image: topsight,
      link: '#',
    },
  ];

  export const tours = [
    {
      image: tour1,
      badge: 'LIKELY TO SELL OUT*',
      title: 'Stonehenge, Windsor Castle and Bath with Pub Lunch in Lacock',
      duration: '16+ hours',
      type: 'Full-day Tours',
      location: 'Westminster Borough, London',
    },
    {
      image: tour2,
      title: 'Westminster Walking Tour & Westminster Abbey Entry',
      duration: '9+ hours',
      type: 'Attractions & Museums',
      location: 'Ciutat Vella, Barcelona',
    },
    {
      image: tour3,
      badge: 'BEST SELLER',
      title: 'High-Speed Thames River RIB Cruise in London',
      duration: '40–55 minutes',
      type: 'Private and Luxury',
      location: 'Manhattan, New York',
    },
    {
      image: tour4,
      badge: 'TOP RATED',
      title: 'Edinburgh Darkside Walking Tour: Mysteries, Murder and Legends',
      duration: '9+ days',
      type: 'Bus Tours',
      location: 'Vaticano Prati, Rome',
    },
  ];

  export const destinations = [
    { 
    name: "London, UK", 
    image: neardestination1 
    },
    { 
        name: "Edinburgh, UK", 
        image:neardestination2
     },
    { 
        name: "Manchester, UK",
        image:neardestination3
     },
    { 
        name: "Liverpool, UK",
        image:neardestination4
     },
    {
         name: "Birmingham, UK", 
         image: neardestination5
     },
    { name: "Glasgow, UK",
      image:neardestination6
    },
  ];







