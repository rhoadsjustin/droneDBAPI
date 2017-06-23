var db = require ('./model');



var Parts = [

  {
      name: 'Zippy 220',
      price: 60,
      link: 'http://www.zippymultirotors.com/purchase/y7ml9rranjhtakrx9wq7pacomfzjje',
      category: 'frame'
  },

  {
      name: 'QAV-SKITZO Dark Matter FPV Freestyle Quadcopter',
      price: 90,
      link: 'http://www.getfpv.com/multi-rotor-frames/qav-skitzo/qav-skitzo-dark-matter-fpv-freestyle-quadcopter.html',
      category: 'frame'
  },

  {
      name: 'Sköll',
      price: 98,
      link: 'https://theflynoshop.com/product/skoll/',
      category: 'frame'
  },

  {
      name: 'EMAX EMX-SC-1775 Bullet Series 35A ESC(BLHELI_S)',
      price: 60,
      link: 'http://www.getfpv.com/electronics/electronic-speed-controllers-esc/emax-emx-sc-1775-bullet-series-35a-esc-blheli-s.html',
      category: 'electronicSpeedController'
  },

  {
      name: 'DYS XSD 30A V2 3-5S ESC BLHeli_S',
      price: 68,
      link: 'http://www.getfpv.com/electronics/electronic-speed-controllers-esc/dys-xsd-30a-v2-3-6s-esc-blheli-s.html',
      category: 'electronicSpeedController'
  },

  {
      name: 'Aikon SEFM 30A 4-in-1',
      price: 68,
      link: 'http://www.getfpv.com/electronics/electronic-speed-controllers-esc/aikon-sefm-30a-4-in-1.html',
      category: 'electronicSpeedController'
  },

  {
      name: 'EMAX RS2205/ 2300Kv RaceSpec Motor (CCW)',
      price: 68,
      link: 'http://www.getfpv.com/motors/emax-rs2205-2300kv-racespec-motor-ccw.html',
      category: 'motor'
  },

  {
      name: 'Lumenier MB2206-9 2450KV Freybott Motor',
      price: 116,
      link: 'http://www.getfpv.com/motors/mini-quad-motors/lumenier-mb2206-9-2450kv-freybott-motor.html',
      category: 'motor'
  },

  {
      name: 'Lumenier RB2205C-12 2400KV SKITZO Ceramic Bearing Motor',
      price: 68,
      link: 'http://www.getfpv.com/motors/mini-quad-motors/lumenier-rb2205c-12-2400kv-skitzo-ceramic-bearing-motor.html',
      category: 'motor'
  },

  {
      name: 'SP Racing F4 EVO Flight Controller',
      price: 40,
      link: 'http://www.getfpv.com/electronics/electronic-flight-controllers/sp-racing-f4-evo-flight-controller.html',
      category: 'flightController'
  },

  {
      name: 'Lumenier SKITZO Flight Controller Powered by RaceFlight',
      price: 45,
      link: 'http://www.getfpv.com/electronics/electronic-flight-controllers/lumenier-skitzo-flight-controller-powered-by-raceflight.html',
      category: 'flightController'
  },

  {
      name: 'Lumenier LUX V2 Flight Controller',
      price: 37,
      link: 'http://www.getfpv.com/electronics/electronic-flight-controllers/lumenier-lux-v2-flight-controller.html',
      category: 'flightController'
  },

  {
      name: 'Lumenier TX5G6R Mini 600mW 5.8GHz FPV Transmitter with Raceband',
      price: 50,
      link: 'http://www.getfpv.com/fpv/video-transmitters/lumenier-tx5g6r-mini-600mw-5-8ghz-fpv-transmitter-with-raceband.html',
      category: 'videoTransmitter'
  },

  {
      name: 'ImmersionRC Tramp HV 5.8GHz Video Tx',
      price: 40,
      link: 'http://www.getfpv.com/fpv/video-transmitters/immersionrc-tramp-hv-5-8ghz-video-tx.html',
      category: 'videoTransmitter'
  },

  {
      name: 'Lumenier TX5G25 Mini 25mW 5.8GHz FPV Transmitter with Raceband',
      price: 29,
      link: 'http://www.getfpv.com/fpv/video-transmitters/lumenier-tx5g25-mini-25mw-5-8ghz-fpv-racing-transmitter.html',
      category: 'videoTransmitter'
  },

  {
      name: 'Lumenier 5x5x3 - Butter Cutter Propeller (Set of 4 - WILDWILLY Pink)',
      price: 4,
      link: 'http://www.getfpv.com/propellers/lumenier-5x5x3-butter-cutter-propeller-set-of-4-wildwilly-pink.html',
      category: 'propeller'
  },

  {
      name: 'RaceKraft 5051 Tri-Blade (Set of 4 - Clear Blue)',
      price: 4,
      link: 'http://www.getfpv.com/propellers/racekraft-5051-tri-blade-set-of-4-clear-blue.html',
      category: 'propeller'
  },

  {
      name: 'RaceKraft 5038 2 Blade (Set of 4 - Emerald)',
      price: 4,
      link: 'http://www.getfpv.com/propellers/racekraft-5038-2-blade-set-of-4-emerald.html',
      category: 'propeller'
  },

  {
      name: 'RunCam Swift - 600TVL Camera 26mmx26mm (2.8mm lens)',
      price: 33,
      link: 'http://www.getfpv.com/fpv/cameras/runcam-swift-600tvl-camera-26mmx26mm-2-8mm-lens.html',
      category: 'camera'
  },

  {
      name: 'RunCam Swift Rotor Riot Special Edition IR Block - Black',
      price: 45,
      link: 'http://www.getfpv.com/fpv/cameras/runcam-swift-rotor-riot-special-edition-ir-block-black.html',
      category: 'camera'
  },

  {
      name: 'RunCam Owl Plus - Low Light Mini FPV Camera',
      price: 45,
      link: 'http://www.getfpv.com/fpv/cameras/runcam-owl-plus-low-light-mini-fpv-camera.html',
      category: 'camera'
  },

  {
      name: 'FrSky Taranis Q X7 2.4GHz 16CH Transmitter (White)',
      price: 105,
      link: 'http://www.getfpv.com/radios/radio-controllers/frsky-taranis-q-x7-2-4ghz-16ch-transmitter-white.html',
      category: 'transmitter'
  },

  {
      name: 'FrSky Taranis X9D Plus 2.4GHz ACCST Radio & X8R Combo w/ case (Mode 2)',
      price: 240,
      link: 'http://www.getfpv.com/radios/radio-controllers/frsky-taranis-x9d-plus-2-4ghz-accst-radio-x8r-combo-w-case-mode-2.html',
      category: 'transmitter'
  },

  {
      name: 'TBS Tango FPV RC Radio Controller',
      price: 250,
      link: 'http://www.getfpv.com/radios/radio-controllers/tbs-tango.html',
      category: 'transmitter'
  },

  {
      name: 'Fat Shark Dominator SE FPV Goggles',
      price: 350,
      link: 'http://www.getfpv.com/fpv/video-goggles/fat-shark-dominator-se-fpv-goggles.html',
      category: 'goggle'
  },

  {
      name: 'Avegant Glyph HD A/V Headset',
      price: 400,
      link: 'http://www.getfpv.com/fpv/video-goggles/avegant-glyph-hd-a-v-headset-founders-edition.html',
      category: 'goggle'
  },

  {
      name: 'Fat Shark Dominator V3 FPV Goggles',
      price: 350,
      link: 'http://www.getfpv.com/fpv/video-goggles/fatshark-dominator-v3-fpv-goggles.html',
      category: 'goggle'
  }
];

db.Drone.remove({}, function(err, drones){
  console.log('removed all drones')
db.Part.remove({}, function(err, parts) {
  console.log('removed all parts');
  db.Part.create(Parts, function(err, parts){
    if (err) {
      console.log(err);
      return;
    }
    console.log('seeded all parts');
    console.log('created', parts.length, 'parts');
  });
});
});
