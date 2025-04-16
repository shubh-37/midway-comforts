import clientRus from '@/assets/client-rus.png';
import clientAbhinandan from '@/assets/client-abhinandan.png';
import clientAdfactor from '@/assets/client-adfactor.png';
import clientAero from '@/assets/client-aero.png';
import clientAndheri from '@/assets/client-andheri.png';
import clientApollo from '@/assets/client-apollo.png';
import clientBella from '@/assets/client-bella.png';
import clientBliss from '@/assets/client-bliss.png';
import clientChandiwali from '@/assets/client-chandiwali.png';
import clientCountry from '@/assets/client-country.png';
import clientDior from '@/assets/client-dior.png';
import clientDorf from '@/assets/client-dorf.png';
import clientDy from '@/assets/client-dy.png';
import clientElitus from '@/assets/client-elitus.png';
import clientFerra from '@/assets/client-ferragamo.png';
import clientGlitz from '@/assets/client-glitz.png';
import clientGranduer from '@/assets/client-granduer.png';
import clienthdfcChandiwali from '@/assets/client-hdfc-chandiwali.png';
import clienthdfcPeninsula from '@/assets/client-hdfc-peninsula.png';
import clienthdfcTalao from '@/assets/client-hdfc-talao.png';
import clientSandoz from '@/assets/client-sandoz.png';
import clientHealth from '@/assets/client-health.png';
import clientIndia from '@/assets/client-india.png';
import clientKamala from '@/assets/client-kamala.png';
import clientKj from '@/assets/client-kj.png';
import clientLokhandwala from '@/assets/client-lokhandwala.png';
import clientLotus from '@/assets/client-lotus-hdfc.png';
import clientLv from '@/assets/client-lv.png';
import clientMarks from '@/assets/client-marks.png';
import clientNarayana from '@/assets/client-narayana.png';
import clientNehru from '@/assets/client-nehru.png';
import clientNovotel from '@/assets/client-novotel.png';
import clientNse from '@/assets/client-nse.png';
import clientOtters from '@/assets/client-otters.png';
import clientRaddison from '@/assets/client-raddison.png';
import clientResidency from '@/assets/client-residency.png';
import clientRustom from '@/assets/client-rustom.png';
import clientSher from '@/assets/client-sherraton.png';
import clientSmaash from '@/assets/client-smaash.png';
import clientTiffany from '@/assets/client-tiffany.png';
import clientUrbania from '@/assets/client-urbania.png';
import clientYazarina from '@/assets/client-yazarina.png';
import clientJio from '@/assets/jio.png';
import placeholder from '@/assets/placeholder.png';
const clients = [
  // DEVELOPERS
  {
    clientName: 'Jio World Center - BKC',
    hp: '1325',
    sqft: '1,50,000',
    img: clientJio,
    category: 'DEVELOPERS'
  },
  {
    clientName: 'Rustomjee Elements- Andheri',
    hp: '4700',
    sqft: '5,25,000',
    img: clientRus,
    category: 'DEVELOPERS'
  },
  {
    clientName: 'Rustomjee – Season',
    hp: '1360',
    sqft: '1,98,000',
    img: clientRustom,
    category: 'DEVELOPERS'
  },
  {
    clientName: 'Rustomjee Yazarina Dadar',
    hp: '900',
    sqft: '98,000',
    img: clientYazarina,
    category: 'DEVELOPERS'
  },
  {
    clientName: 'The House of Abhinandan Lodha',
    hp: '125',
    sqft: '20,000',
    img: clientAbhinandan,
    category: 'DEVELOPERS'
  },

  // VENTILATION PROJECTS - KALPATARU
  {
    clientName: 'Kalpataru Bliss ( Manipada ) –Santacruz',
    hp: '',
    sqft: '35,000',
    img: clientBliss,
    category: 'VENTILATION PROJECTS'
  },
  {
    clientName: 'Kalpataru Grandeur - Indore',
    hp: '',
    sqft: '50,000',
    img: clientGranduer,
    category: 'VENTILATION PROJECTS'
  },
  {
    clientName: 'Kalpataru Elitus – Mulund',
    hp: '',
    sqft: '40,000',
    img: clientElitus,
    category: 'VENTILATION PROJECTS'
  },

  // VENTILATION PROJECTS - RUSTOMJEE
  {
    clientName: 'Rustomjee Bella – Bhandup',
    hp: '',
    sqft: '18,000',
    img: clientBella,
    category: 'VENTILATION PROJECTS'
  },
  {
    clientName: 'Rustomjee Urbania – Thane',
    hp: '',
    sqft: '24,000',
    img: clientUrbania,
    category: 'VENTILATION PROJECTS'
  },

  // VENTILATION PROJECTS - PEBBLES
  {
    clientName: 'Aerro Mall – Pune',
    hp: '',
    sqft: '80,000',
    img: clientAero,
    category: 'VENTILATION PROJECTS'
  },

  // VENTILATION PROJECTS - RADDISON HOTELS GROUP
  {
    clientName: 'Hotel Radisson - Andheri',
    hp: '',
    sqft: '20,000',
    img: clientRaddison,
    category: 'VENTILATION PROJECTS'
  },

  // VENTILATION PROJECTS - HOTEL SHERATON
  {
    clientName: 'Hotel Sheraton - Colombo, Srilanka',
    hp: '',
    sqft: '80,000',
    img: clientSher,
    category: 'VENTILATION PROJECTS'
  },

  // VENTILATION PROJECTS - HOTEL NOVOTEL
  {
    clientName: 'Novatel Hotel – Lucknow',
    hp: '',
    sqft: '30,000',
    img: clientNovotel,
    category: 'VENTILATION PROJECTS'
  },

  // VENTILATION PROJECTS - INDIA HOTEL
  {
    clientName: 'India Hotel – Varanasi',
    hp: '',
    sqft: '25,000',
    img: clientIndia,
    category: 'VENTILATION PROJECTS'
  },

  // RESTAURANTS & HOTELS
  {
    clientName: 'Aman Group',
    hp: '250 TR Chiller',
    sqft: '50,000',
    img: placeholder,
    category: 'RESTAURANTS & HOTELS'
  },
  {
    clientName: 'Hotel Sheraton – Colombo',
    hp: '1200 TR Chiller',
    sqft: '1,00,000',
    img: clientSher,
    category: 'RESTAURANTS & HOTELS'
  },
  {
    clientName: 'Novotel Hotel – Lucknow',
    hp: '550 HP',
    sqft: '65,000',
    img: placeholder,
    category: 'RESTAURANTS & HOTELS'
  },
  {
    clientName: 'India Hotel – Varanasi',
    hp: '200 HP',
    sqft: '25,000',
    img: clientIndia,
    category: 'RESTAURANTS & HOTELS'
  },
  {
    clientName: 'Hotel Radisson - Andheri',
    hp: '620 HP',
    sqft: '60,000',
    img: clientAndheri,
    category: 'RESTAURANTS & HOTELS'
  },
  {
    clientName: 'Residency Hotel – Powai',
    hp: '320 TR',
    sqft: '49,000',
    img: clientResidency,
    category: 'RESTAURANTS & HOTELS'
  },
  {
    clientName: 'Hotel Chandiwala – Malad',
    hp: '235 TR',
    sqft: '40,000',
    img: clientChandiwali,
    category: 'RESTAURANTS & HOTELS'
  },
  {
    clientName: 'Health View Resort – Mahabaleshwar',
    hp: '110 HP',
    sqft: '25,000',
    img: clientHealth,
    category: 'RESTAURANTS & HOTELS'
  },

  // OUR VALUED TOSHIBA & VRF CUSTOMERS
  {
    clientName: 'Rustomjee – Crown-Prabhadevi',
    hp: '66 HP',
    sqft: '8000',
    img: placeholder,
    category: 'OUR VALUED TOSHIBA & VRF CUSTOMERS'
  },
  {
    clientName: 'Kamala Mill Office, Lower Parel',
    hp: '280 HP',
    sqft: '35,000',
    img: clientKamala,
    category: 'OUR VALUED TOSHIBA & VRF CUSTOMERS'
  },

  // CORPORATE & I. T. PARKS & COMPANIES
  {
    clientName: 'Adfactors – Kamala Mill Comp.',
    hp: '500 TR',
    sqft: '55,000',
    img: clientAdfactor,
    category: 'CORPORATE & I. T. PARKS & COMPANIES'
  },
  {
    clientName: 'NSEIT - Andheri (E)',
    hp: '150 TR',
    sqft: '20,000',
    img: clientNse,
    category: 'CORPORATE & I. T. PARKS & COMPANIES'
  },
  {
    clientName: 'Dorf Ketal – Malad',
    hp: '140 TR',
    sqft: '25,000',
    img: clientDorf,
    category: 'CORPORATE & I. T. PARKS & COMPANIES'
  },
  {
    clientName: 'Marks & Spencer – Globus Mall, Bandra',
    hp: '317 HP',
    sqft: '40,000',
    img: clientMarks,
    category: 'CORPORATE & I. T. PARKS & COMPANIES'
  },
  {
    clientName: 'Marks & Spencer – Lokhandwala, Andheri',
    hp: '78 HP',
    sqft: '8,000',
    img: clientLokhandwala,
    category: 'CORPORATE & I. T. PARKS & COMPANIES'
  },

  // BANKING & FINANCE COMPANIES
  {
    clientName: 'HDFC –Sandoz House, Worli',
    hp: '335 HP',
    sqft: '40,000',
    img: clientSandoz,
    category: 'BANKING & FINANCE COMPANIES'
  },
  {
    clientName: 'HDFC Chandivali',
    hp: '330 TR Chiller',
    sqft: '45,000',
    img: clienthdfcChandiwali,
    category: 'BANKING & FINANCE COMPANIES'
  },
  {
    clientName: 'HBL – Kamala Mill & Andheri (E)',
    hp: '680 TR',
    sqft: '95,000',
    img: placeholder,
    category: 'BANKING & FINANCE COMPANIES'
  },
  {
    clientName: 'GE Country Wide ( All Bombay)',
    hp: '200 TR',
    sqft: '30,000',
    img: placeholder,
    category: 'BANKING & FINANCE COMPANIES'
  },
  {
    clientName: 'HDFC Branch – Taloa Pali, Thane',
    hp: '98 TR',
    sqft: '15,000',
    img: clienthdfcTalao,
    category: 'BANKING & FINANCE COMPANIES'
  },
  {
    clientName: 'HDFC Bank – Peninsula Park, Tower-B',
    hp: '270 HP',
    sqft: '30,000',
    img: clienthdfcPeninsula,
    category: 'BANKING & FINANCE COMPANIES'
  },
  {
    clientName: 'HDFC Bank – Peninsula Park, Tower-A',
    hp: '245 HP',
    sqft: '26,000',
    img: clienthdfcPeninsula,
    category: 'BANKING & FINANCE COMPANIES'
  },
  {
    clientName: 'HDFC Bank – 5th Floor Lotus Park, Thane',
    hp: '176 HP',
    sqft: '20,000',
    img: clientLotus,
    category: 'BANKING & FINANCE COMPANIES'
  },
  {
    clientName: 'HDFC Bank – 6th Floor, Lotus Park, Thane',
    hp: '146 HP',
    sqft: '16,000',
    img: clientLotus,
    category: 'BANKING & FINANCE COMPANIES'
  },

  // STUDIOS / ENTERTAINMENT / MASS MEDIA
  {
    clientName: 'Smaaash Entertainment-Kamala Mill',
    hp: '151 TR',
    sqft: '22,000',
    img: clientSmaash,
    category: 'STUDIOS / ENTERTAINMENT / MASS MEDIA'
  },

  // EDUCATIONAL INSTITUTE
  {
    clientName: 'K.J. Somaiya Institute of Management',
    hp: '550 TR',
    sqft: '80,000',
    img: clientKj,
    category: 'EDUCATIONAL INSTITUTE'
  },
  {
    clientName: 'Dr. D.Y. Patil College – Belapur',
    hp: '250 TR',
    sqft: '40,000',
    img: clientDy,
    category: 'EDUCATIONAL INSTITUTE'
  },
  {
    clientName: 'Dr. D.Y. Patil College – Nerul',
    hp: '160 TR',
    sqft: '22,500',
    img: placeholder,
    category: 'EDUCATIONAL INSTITUTE'
  },
  {
    clientName: 'Dr. D.Y. Patil International School – Worli',
    hp: '80 TR',
    sqft: '12,000',
    img: placeholder,
    category: 'EDUCATIONAL INSTITUTE'
  },
  {
    clientName: 'Nehru Science Centre - Worli',
    hp: '34 TR',
    sqft: '5,000',
    img: clientNehru,
    category: 'EDUCATIONAL INSTITUTE'
  },
  {
    clientName: 'Narayana School - Dombivali',
    hp: '150 TR',
    sqft: '22,000',
    img: clientNarayana,
    category: 'EDUCATIONAL INSTITUTE'
  },

  // HOSPITALS / CLINICS / PHARMACEUTICALS
  {
    clientName: 'Apollo Hospital– Tardeo',
    hp: '55 TR',
    sqft: '8000',
    img: clientApollo,
    category: 'HOSPITALS / CLINICS / PHARMACEUTICALS'
  },

  // FITNESS CENTRES & CLUBS
  {
    clientName: 'Andheri Recreation – Andheri',
    hp: '325 TR',
    sqft: '50,000',
    img: clientAndheri,
    category: 'FITNESS CENTRES & CLUBS'
  },
  {
    clientName: 'Country Club – Andheri (W)',
    hp: '100 TR',
    sqft: '15,000',
    img: clientCountry,
    category: 'FITNESS CENTRES & CLUBS'
  },
  {
    clientName: 'Otters Club – Bandra (W)',
    hp: '65 TR',
    sqft: '10,000',
    img: clientOtters,
    category: 'FITNESS CENTRES & CLUBS'
  },

  // PREMIUM STORES
  {
    clientName: 'Glitz Mall',
    hp: '375 TR',
    sqft: '60,000',
    img: clientGlitz,
    category: 'PREMIUM STORES'
  },
  {
    clientName: 'L.V Store ( Jio World Centre )',
    hp: '45 TR',
    sqft: '5,500',
    img: clientLv,
    category: 'PREMIUM STORES'
  },
  {
    clientName: 'Ferragamo Store ( Jio World Centre )',
    hp: '22 TR',
    sqft: '3,000',
    img: clientFerra,
    category: 'PREMIUM STORES'
  },
  {
    clientName: 'Dior Store ( Jio World Centre )',
    hp: '24 TR',
    sqft: '3,500',
    img: clientDior,
    category: 'PREMIUM STORES'
  },
  {
    clientName: 'Tiffany Store ( Jio World Centre )',
    hp: '18 TR',
    sqft: '25,000',
    img: clientTiffany,
    category: 'PREMIUM STORES'
  },

  // VIP CUSTOMERS - Bunglows and Pent House
  {
    clientName: 'Mr. Subodh Menon-(Malad)',
    hp: '168 HP',
    sqft: '',
    img: placeholder,
    category: 'VIP CUSTOMERS - Bunglows and Pent House'
  },
  {
    clientName: 'Mr. Ramesh Gowani (Pedder Road)',
    hp: '200 HP',
    sqft: '',
    img: placeholder,
    category: 'VIP CUSTOMERS - Bunglows and Pent House'
  },
  {
    clientName: 'Mr. Ajeenkya Patil (Pune-Bunglow)',
    hp: '250 HP',
    sqft: '',
    img: placeholder,
    category: 'VIP CUSTOMERS - Bunglows and Pent House'
  },
  {
    clientName: 'Mr. Ravi Agarwal-(Nepeansea Road)',
    hp: '132 HP',
    sqft: '',
    img: placeholder,
    category: 'VIP CUSTOMERS - Bunglows and Pent House'
  },
  {
    clientName: 'Mr. Subramaniyam (Vashi)',
    hp: '72 HP',
    sqft: '',
    img: placeholder,
    category: 'VIP CUSTOMERS - Bunglows and Pent House'
  },
  {
    clientName: 'Mr. Vijay Patil (Kharghar)',
    hp: '58 HP',
    sqft: '',
    img: placeholder,
    category: 'VIP CUSTOMERS - Bunglows and Pent House'
  },
  {
    clientName: 'Adv. Raj Nagrani (Lonavala)',
    hp: '32 HP',
    sqft: '',
    img: placeholder,
    category: 'VIP CUSTOMERS - Bunglows and Pent House'
  },
  {
    clientName: 'Mr. Gautam Ahuja (Bandra)',
    hp: '120 HP',
    sqft: '',
    img: placeholder,
    category: 'VIP CUSTOMERS - Bunglows and Pent House'
  },
  {
    clientName: 'Mr. Vijay Thakker (JVPD-Juhu)',
    hp: '62 HP',
    sqft: '',
    img: placeholder,
    category: 'VIP CUSTOMERS - Bunglows and Pent House'
  },
  {
    clientName: 'Mrs. Chanda Kocchar (Worli)',
    hp: '36 HP',
    sqft: '',
    img: placeholder,
    category: 'VIP CUSTOMERS - Bunglows and Pent House'
  },
  {
    clientName: 'Arch. Vijay Punjabi (Bandra) – Mrs. Jayanti Punjabi',
    hp: '24 HP',
    sqft: '',
    img: placeholder,
    category: 'VIP CUSTOMERS - Bunglows and Pent House'
  },
  {
    clientName: 'Talati and Panthaky Associated Designers LLP (Worli)',
    hp: '340 HP',
    sqft: '',
    img: placeholder,
    category: 'VIP CUSTOMERS - Bunglows and Pent House'
  },
  {
    clientName: 'Rustomjee Realty Ltd. - Elements at D.N. Nagar, Juhu',
    hp: '2500 HP',
    sqft: '',
    img: placeholder,
    category: 'VIP CUSTOMERS - Bunglows and Pent House'
  },
  {
    clientName: 'Kalpataru Developers (Row Houses) - Amoda Project – Lonavala',
    hp: '154 HP',
    sqft: '',
    img: placeholder,
    category: 'VIP CUSTOMERS - Bunglows and Pent House'
  }
];

export default clients;
