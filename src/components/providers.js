import toshibaLogo from '@/assets/toshiba.svg';
import carrier from '@/assets/carrier.svg';
// Import your images
import split1 from '@/assets/split1.png'; // Assuming you have these images
import split2 from '@/assets/split2.png';
import split3 from '@/assets/split3.png';
import split4 from '@/assets/split4.png';
import split5 from '@/assets/split5.png';
import split6 from '@/assets/split6.png';
import split7 from '@/assets/split7.png';
import split8 from '@/assets/split8.png';
import cassette1 from '@/assets/cassette1.png';
import ducted1 from '@/assets/ducted1.png';
import vrf1 from '@/assets/vrf1.png';
import vrf2 from '@/assets/vrf2.jpg';
import vrf3 from '@/assets/vrf3.jpg';
import vrf4 from '@/assets/vrf4.jpg';
import vrf5 from '@/assets/vrf5.png';
import vrf6 from '@/assets/vrf6.png';
import vrf7 from '@/assets/vrf7.jpg';
import vrf8 from '@/assets/vrf8.jpg';
import vrf9 from '@/assets/vrf9.jpg';
import vrf10 from '@/assets/vrf10.jpg';
import vrf11 from '@/assets/vrf11.jpg';
import vrf12 from '@/assets/vrf12.jpg';
import vrf13 from '@/assets/vrf13.jpg';
import vrf14 from '@/assets/vrf14.png';
import vrf15 from '@/assets/vrf15.png';
import vrf16 from '@/assets/vrf16.png';

export const providers = [
  {
    id: 'toshiba',
    name: 'Toshiba',
    logo: toshibaLogo,
    productTypes: [
      {
        id: 'split',
        name: 'Split',
        subTypes: [
          {
            id: 'hi-wall-inverter',
            type: 'Hi Wall Inverter',
            name: 'Toshiba G3KCV 5 Star series',
            link: 'https://www.toshibaac.in/split/hi-wall-inverter/G3KCV-5star.aspx',
            rating: 5,
            image: split1
          },
          {
            id: 'hi-wall-inverter',
            type: 'Hi Wall Inverter',
            name: 'Toshiba G3KCV 3 Star series',
            link: 'https://www.toshibaac.in/split/hi-wall-inverter/G3KCV-3star.aspx',
            rating: 3.0,
            image: split2
          },
          {
            id: 'hi-wall-inverter',
            type: 'Hi Wall Inverter',
            name: 'Toshiba SKCV3SG 3 Star series',
            link: 'https://www.toshibaac.in/split/hi-wall-inverter/SKCV3SG-3star.aspx',
            rating: 3.0,
            image: split3
          },
          {
            id: 'hi-wall-inverter',
            type: 'Hi Wall Inverter',
            name: 'Toshiba 3 Star R32 Split AC',
            link: 'https://www.toshibaac.in/split/hi-wall-inverter/r-32-3-star-ac.aspx',
            rating: 3.0,
            image: split4
          },
          {
            id: 'hi-wall-inverter',
            type: 'Hi Wall Inverter',
            name: '4 Star R32 Split AC',
            link: 'https://www.toshibaac.in/split/hi-wall-inverter/r-32-5-star-ac.aspx',
            rating: 4.0,
            image: split5
          },
          {
            id: 'hi-wall-inverter',
            type: 'Hi Wall Inverter',
            name: 'Heating And Cooling Inverter',
            link: 'https://www.toshibaac.in/split/hi-wall-inverter/heating-cooling-4star.aspx',
            rating: 3.0,
            image: split6
          },
          {
            id: 'hi-wall-inverter',
            type: 'Hi Wall Inverter',
            name: 'Heating & Cooling Inverter 4 Star Split AC',
            link: 'https://www.toshibaac.in/split/hi-wall-inverter/heating-cooling.aspx',
            rating: 4.0,
            image: split7
          },
          {
            id: 'hi-wall-fixed-speed',
            type: 'Hi Wall Fixed Speed',
            name: 'Hi Wall Fixed Speed AC 2 & 3 STAR R32',
            link: 'https://www.toshibaac.in/split/hi-wall-fixed-speed/r32-3-star-ac.aspx',
            rating: 3.0,
            image: split8
          }
        ]
      },
      {
        id: 'cassette',
        name: 'Cassette',
        subTypes: [
          {
            id: 'spi-premier',
            type: 'SPI Premier',
            name: 'Toshiba Stable Power Premier Inverter 2HP',
            link: 'https://www.toshibaac.in/cassette/spi-premier/RAV-GE1801UP-IN.aspx',
            rating: 5,
            image: cassette1
          },
          {
            id: 'spi-premier',
            type: 'SPI Premier',
            name: 'Toshiba Stable Power Premier Inverter 3HP',
            link: 'https://www.toshibaac.in/cassette/spi-premier/RAV-GE2401UP-IN.aspx',
            rating: 5,
            image: cassette1
          },
          {
            id: 'spi-premier',
            type: 'SPI Premier',
            name: 'Toshiba Stable Power Premier Inverter 4HP',
            link: 'https://www.toshibaac.in/cassette/spi-premier/RAV-GE3601UP-IN.aspx',
            rating: 5,
            image: cassette1
          },
          {
            id: 'spi-premier',
            type: 'SPI Premier',
            name: 'Toshiba Stable Power Premier Inverter 5HP',
            link: 'https://www.toshibaac.in/cassette/spi-premier/RAV-GE4201UP-IN.aspx',
            rating: 5,
            image: cassette1
          },
          {
            id: 'spi-premier',
            type: 'SPI Premier',
            name: 'Toshiba Stable Power Premier Inverter 6HP',
            link: 'https://www.toshibaac.in/cassette/spi-premier/RAV-GE4801UP-IN.aspx',
            rating: 5,
            image: cassette1
          },
          {
            id: 'spi-classic',
            type: 'SPI Classic',
            name: 'Toshiba Stable Power Inverter 2HP',
            link: 'https://www.toshibaac.in/cassette/spi-classic/RAV-GV4801UP-IN-RAV-GV4801A8P.aspx',
            rating: 4,
            image: cassette1
          },
          {
            id: 'spi-classic',
            type: 'SPI Classic',
            name: 'Toshiba Stable Power Inverter 3HP',
            link: 'https://www.toshibaac.in/cassette/spi-classic/RAV-GV1801UP-IN-RAV-GV1801AP.aspx',
            rating: 4,
            image: cassette1
          },
          {
            id: 'spi-classic',
            type: 'SPI Classic',
            name: 'Toshiba Stable Power Inverter 4HP',
            link: 'https://www.toshibaac.in/cassette/spi-classic/RAV-GV2401UP-IN-RAV-GV2401AP.aspx',
            rating: 0,
            image: cassette1
          },
          {
            id: 'spi-classic',
            type: 'SPI Classic',
            name: 'Toshiba Stable Power Inverter 5HP',
            link: 'https://www.toshibaac.in/cassette/spi-classic/RAV-GV3601UP-IN-RAV-GV3601A8P.aspx',
            rating: 0,
            image: cassette1
          },
          {
            id: 'spi-classic',
            type: 'SPI Classic',
            name: 'Toshiba Stable Power Premier Inverter 6HP',
            link: 'https://www.toshibaac.in/cassette/spi-premier/RAV-GE4801UP-IN.aspx',
            rating: 0,
            image: cassette1
          }
        ]
      },
      {
        id: 'ducted',
        name: 'Ducted',
        subTypes: [
          {
            id: 'stable-power-inverter',
            type: 'Stable Power Inverter',
            name: 'Stable Power Inverter Ducted AC 1.5 TR',
            link: 'https://www.toshibaac.in/ducted/stable-power-inverter/RAV-SE561BP-RAV-TE561AP.aspx',
            rating: 0,
            image: ducted1
          },
          {
            id: 'stable-power-inverter',
            type: 'Stable Power Inverter',
            name: 'Stable Power Inverter Ducted AC 1.79 TR',
            link: 'https://www.toshibaac.in/ducted/stable-power-inverter/RAV-SE801BP-RAV-TE801AP.aspx',
            rating: 0,
            image: ducted1
          },
          {
            id: 'stable-power-inverter',
            type: 'Stable Power Inverter',
            name: 'Stable Power Inverter Ducted AC 3 TR',
            link: 'https://www.toshibaac.in/ducted/stable-power-inverter/RAV-SE1001BP-RAV-TE1001AP.aspx',
            rating: 0,
            image: ducted1
          },
          {
            id: 'stable-power-inverter',
            type: 'Stable Power Inverter',
            name: 'Stable Power Inverter Ducted AC 3.5 TR',
            link: 'https://www.toshibaac.in/ducted/stable-power-inverter/RAV-SE1251BP-RAV-TE1251AP.aspx',
            rating: 0,
            image: ducted1
          }
        ]
      },
      {
        id: 'vrf',
        name: 'VRF',
        subTypes: [
          {
            id: 'indoor-unit',
            type: 'Indoor Unit',
            name: 'HI WALL',
            link: 'https://www.toshibaac.in/vrf/hi-wall.aspx',
            rating: 0,
            image: vrf1
          },
          {
            id: 'indoor-unit',
            type: 'Indoor Unit',
            name: '4 WAY COMPACT CASSETTE',
            link: 'https://www.toshibaac.in/vrf/compact-4way-cassette.aspx',
            rating: 0,
            image: vrf2
          },
          {
            id: 'indoor-unit',
            type: 'Indoor Unit',
            name: '4-WAY CASSETTE',
            link: 'https://www.toshibaac.in/vrf/4way-cassette.aspx',
            rating: 0,
            image: vrf3
          },
          {
            id: 'indoor-unit',
            type: 'Indoor Unit',
            name: '2 WAY CASSETTE',
            link: 'https://www.toshibaac.in/vrf/2way.aspx',
            rating: 0,
            image: vrf4
          },
          {
            id: 'indoor-unit',
            type: 'Indoor Unit',
            name: '1 WAY CASSETTE',
            link: 'https://www.toshibaac.in/vrf/1way.aspx',
            rating: 0,
            image: vrf5
          },
          {
            id: 'indoor-unit',
            type: 'Indoor Unit',
            name: 'SLIM DUCT',
            link: 'https://www.toshibaac.in/vrf/slim-duct.aspx',
            rating: 0,
            image: vrf6
          },
          {
            id: 'indoor-unit',
            type: 'Indoor Unit',
            name: 'MSP CONCEALED DUCT',
            link: 'https://www.toshibaac.in/vrf/msp.aspx',
            rating: 0,
            image: vrf7
          },
          {
            id: 'indoor-unit',
            type: 'Indoor Unit',
            name: 'HIGH STATIC PRESSURE DUCT (HSP)',
            link: 'https://www.toshibaac.in/vrf/hspd.aspx',
            rating: 0,
            image: vrf8
          },
          {
            id: 'indoor-unit',
            type: 'Indoor Unit',
            name: 'UNDER CEILING',
            link: 'https://www.toshibaac.in/vrf/under-ceiling.aspx',
            rating: 0,
            image: vrf9
          },
          {
            id: 'indoor-unit',
            type: 'Indoor Unit',
            name: 'BI-FLOW CONSOLEe',
            link: 'https://www.toshibaac.in/vrf/bi-flowing.aspx',
            rating: 0,
            image: vrf10
          },
          {
            id: 'indoor-unit',
            type: 'Indoor Unit',
            name: 'FLOOR STANDING',
            link: 'https://www.toshibaac.in/vrf/floor-standing.aspx',
            rating: 0,
            image: vrf11
          },
          {
            id: 'indoor-unit',
            type: 'Indoor Unit',
            name: ' FRESH AIR INTAKE DUCT',
            link: 'https://www.toshibaac.in/vrf/faid.aspx',
            rating: 0,
            image: vrf12
          },
          {
            id: 'indoor-unit',
            type: 'Indoor Unit',
            name: 'AIR TO AIR HEAT EXCHANGER',
            link: 'https://www.toshibaac.in/vrf/air-to-air-heat-exchanger.aspx',
            rating: 4.9,
            image: vrf13
          },
          {
            id: 'indoor-unit',
            type: 'Indoor Unit',
            name: 'AIR TO AIR HEAT EXCHANGER WITH DX COIL',
            link: 'https://www.toshibaac.in/vrf/air-to-air-heat-exchanger-with-dx-coil.aspx',
            rating: 0,
            image: vrf14
          },
          {
            id: 'top-discharge',
            type: 'Top Discharge',

            name: 'VRF Top Discharge AC SMMS-7',
            link: 'https://www.toshibaac.in/vrf/vrf-top-discharge/smms-7.aspx',
            rating: 0,
            image: vrf15
          },
          {
            id: 'top-discharge',
            type: 'Top Discharge',

            name: 'SMMS -E',
            link: 'https://www.toshibaac.in/vrf/vrf-top-discharge/smms-e-new.aspx',
            rating: 0,
            image: vrf16
          }
        ]
      }
    ]
  },
  {
    id: 'carrier',
    name: 'Carrier',
    logo: carrier,
    productTypes: [
      {
        id: 'split',
        name: 'Split',
        subTypes: [
          {
            id: 'hi-wall-inverter',
            type: 'hi-wall-inverter',
            name: 'Carrier Emperia NXi Inverter',
            link: 'https://www.carrier.com/residential/en/products/emperia-nxi.aspx',
            rating: 4.7,
            image: split1
          },
          {
            id: 'hi-wall-fixed-speed',
            type: 'hi-wall-fixed-speed',
            name: 'Carrier Durafresh Fixed Speed',
            link: 'https://www.carrier.com/residential/en/products/durafresh.aspx',
            rating: 4.1,
            image: split2
          }
        ]
      },
      {
        id: 'cassette',
        name: 'Cassette',
        subTypes: [
          {
            id: 'compact-cassette',
            type: 'compact-cassette',
            name: 'Carrier Compact Cassette 40KMC',
            link: 'https://www.carrier.com/commercial/en/products/cassette/40KMC.aspx',
            rating: 4.4,
            image: cassette1
          },
          {
            id: 'standard-cassette',
            type: 'standard-cassette',
            name: 'Carrier Standard Cassette 40KMV',
            link: 'https://www.carrier.com/commercial/en/products/cassette/40KMV.aspx',
            rating: 4.6,
            image: cassette1
          }
        ]
      },
      {
        id: 'ducted',
        name: 'Ducted',
        subTypes: [
          {
            id: 'slim-ducted',
            type: 'slim-ducted',
            name: 'Carrier Slim Ducted 42KHL',
            link: 'https://www.carrier.com/commercial/en/products/ducted/42KHL.aspx',
            rating: 4.3,
            image: ducted1
          },
          {
            id: 'high-static-ducted',
            type: 'high-static-ducted',
            name: 'Carrier High Static Ducted 42KHV',
            link: 'https://www.carrier.com/commercial/en/products/ducted/42KHV.aspx',
            rating: 4.7,
            image: ducted1
          }
        ]
      },
      {
        id: 'vrf',
        name: 'VRF',
        subTypes: [
          {
            id: 'mini-vrf',
            type: 'mini-vrf',
            name: 'Carrier Mini VRF XV',
            link: 'https://www.carrier.com/commercial/en/products/vrf/xv-mini.aspx',
            rating: 4.8,
            image: vrf1
          },
          {
            id: 'full-vrf',
            type: 'full-vrf',
            name: 'Carrier Full VRF XVi',
            link: 'https://www.carrier.com/commercial/en/products/vrf/xvi.aspx',
            rating: 5.0,
            image: vrf2
          }
        ]
      }
    ]
  }
];
