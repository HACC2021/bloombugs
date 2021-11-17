import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import App from '../../ui/layouts/App.jsx';
import { Locations } from '../../api/Locations';

/* global document */

// Startup the application by rendering the App layout component.
Meteor.startup(() => {
  render(<App />, document.getElementById('root'));
  if (Locations.collection.find().count() === 0) {
    console.log('Loading locations');
    Locations.collection.insert({
      path: 'path1',
      location: 'Kualoa Beach',
      latitude: 21.53562329,
      longitude: -157.8394155,
    });
    Locations.collection.insert({
      path: 'path2',
      location: 'Kanenelu Beach',
      latitude: 21.53899558,
      longitude: -157.8422418,
    });
    Locations.collection.insert({
      path: 'path3',
      location: 'Kalaeoio Beach Park',
      latitude: 21.54524653,
      longitude: -157.8456663,
    });
    Locations.collection.insert({
      path: 'path4',
      location: 'Kaawa Beach',
      latitude: 21.54896943,
      longitude: -157.8463083,
    });
    Locations.collection.insert({
      path: 'path5',
      location: 'Swanzy Beach',
      latitude: 21.55750757,
      longitude: -157.8538549,
    });
    Locations.collection.insert({
      path: 'path6',
      location: 'Kahana Bay Beach Park',
      latitude: 21.55620941,
      longitude: -157.874384,
    });
    Locations.collection.insert({
      path: 'path7',
      location: "Punalu'u Beach Park",
      latitude: 21.57675513,
      longitude: -157.8816977,
    });
    Locations.collection.insert({
      path: 'path8',
      location: "Hau'ula Beach",
      latitude: 21.60718287,
      longitude: -157.9051358,
    });
    Locations.collection.insert({
      path: 'path9',
      location: "Hau'ula Beach Park",
      latitude: 21.61214574,
      longitude: -157.9112922,
    });
    Locations.collection.insert({
      path: 'path10',
      location: "Kaipapa'u Beach",
      latitude: 21.6244874,
      longitude: -157.9179965,
    });
    Locations.collection.insert({
      path: 'path11',
      location: "Pounder's Beach",
      latitude: 21.63274935,
      longitude: -157.9203893,
    });
    Locations.collection.insert({
      path: 'path12',
      location: 'Malaekahana State Recreation Area',
      latitude: 21.65983505,
      longitude: -157.9299961,
    });
    Locations.collection.insert({
      path: 'path13',
      location: 'Laniloa Beach',
      latitude: 21.64343099,
      longitude: -157.9189677,
    });
    Locations.collection.insert({
      path: 'path14',
      location: 'Temple Beach Park',
      latitude: 21.64900685,
      longitude: -157.9232043,
    });
    Locations.collection.insert({
      path: 'path15',
      location: "Moku'auia Beach",
      latitude: 21.66919462,
      longitude: -157.9369048,
    });
    Locations.collection.insert({
      path: 'path16',
      location: 'Kahuku Beach',
      latitude: 21.67994522,
      longitude: -157.9418987,
    });
    Locations.collection.insert({
      path: 'path17',
      location: "Hanaka'ilio Beach",
      latitude: 21.70944943,
      longitude: -157.9804948,
    });
    Locations.collection.insert({
      path: 'path18',
      location: 'Hukilau Beach Park',
      latitude: 21.65261022,
      longitude: -157.928655,
    });
    Locations.collection.insert({
      path: 'path19',
      location: 'Kaiaka Bay Beach',
      latitude: 21.58610349,
      longitude: -158.1176929,
    });
    Locations.collection.insert({
      path: 'path20',
      location: 'Aweoweo Beach Park',
      latitude: 21.5834699,
      longitude: -158.1401418,
    });
    Locations.collection.insert({
      path: 'path21',
      location: 'Mokuleia Beach',
      latitude: 21.58053366,
      longitude: -158.1529791,
    });
    Locations.collection.insert({
      path: 'path22',
      location: 'Polo Beach',
      latitude: 21.57957637,
      longitude: -158.1601883,
    });
    Locations.collection.insert({
      path: 'path23',
      location: 'Kaena Point Bird Sanctuary',
      latitude: 21.57540067,
      longitude: -158.2749109,
    });
    Locations.collection.insert({
      path: 'path24',
      location: 'Kaena Point Keawaula Section',
      latitude: 21.56304999,
      longitude: -158.2552666,
    });
    Locations.collection.insert({
      path: 'path25',
      location: 'Kaena Point Mokuleia Section',
      latitude: 21.5789659,
      longitude: -158.2377981,
    });
    Locations.collection.insert({
      path: 'path26',
      location: 'Kahala Beach',
      latitude: 21.26920588,
      longitude: -157.7769723,
    });
    Locations.collection.insert({
      path: 'path27',
      location: 'Hunakai Beach',
      latitude: 21.26280094,
      longitude: -157.7839177,
    });
    Locations.collection.insert({
      path: 'path28',
      location: 'Fort De Russy Beach',
      latitude: 21.28055123,
      longitude: -157.8366774,
    });
    Locations.collection.insert({
      path: 'path29',
      location: 'Magic Island',
      latitude: 21.28441618,
      longitude: -157.846503,
    });
    Locations.collection.insert({
      path: 'path30',
      location: 'Kahanamoku Beach',
      latitude: 21.28141427,
      longitude: -157.8377921,
    });
    Locations.collection.insert({
      path: 'path31',
      location: 'Ala Moana Beach',
      latitude: 21.2900924,
      longitude: -157.8526183,
    });
    Locations.collection.insert({
      path: 'path32',
      location: 'Sand Island Beach',
      latitude: 21.29973519,
      longitude: -157.8726477,
    });
    Locations.collection.insert({
      path: 'path33',
      location: 'Hickham Beach',
      latitude: 21.31712502,
      longitude: -157.9509964,
    });
    Locations.collection.insert({
      path: 'path34',
      location: 'Kamehameha Beach',
      latitude: 21.31985174,
      longitude: -157.9607601,
    });
    Locations.collection.insert({
      path: 'path35',
      location: 'Iroquois Lagoon Beach 2',
      latitude: 21.32026221,
      longitude: -157.9737095,
    });
    Locations.collection.insert({
      path: 'path36',
      location: 'Iroquois Point Beach',
      latitude: 21.31842421,
      longitude: -157.9764017,
    });
    Locations.collection.insert({
      path: 'path37',
      location: "Pu'uloa Beach Park",
      latitude: 21.31381354,
      longitude: -157.9917083,
    });
    Locations.collection.insert({
      path: 'path38',
      location: "One'ula Beach Park",
      latitude: 21.30664122,
      longitude: -158.0253328,
    });
    Locations.collection.insert({
      path: 'path39',
      location: 'White Plains Beach',
      latitude: 21.30357332,
      longitude: -158.0452274,
    });
    Locations.collection.insert({
      path: 'path40',
      location: 'Kalaeloa Beach Park',
      latitude: 21.30151839,
      longitude: -158.0564777,
    });
    Locations.collection.insert({
      path: 'path41',
      location: 'Nimitz Beach',
      latitude: 21.29978488,
      longitude: -158.0666597,
    });
    Locations.collection.insert({
      path: 'path42',
      location: 'Barbers Point Beach Park',
      latitude: 21.29676183,
      longitude: -158.1040499,
    });
    Locations.collection.insert({
      path: 'path43',
      location: 'Ko Olina Lagoon 4',
      latitude: 21.32835153,
      longitude: -158.1220136,
    });
    Locations.collection.insert({
      path: 'path44',
      location: 'Ko Olina Lagoon 3',
      latitude: 21.33199444,
      longitude: -158.1223878,
    });
    Locations.collection.insert({
      path: 'path45',
      location: 'Honu Lagoon',
      latitude: 21.33501993,
      longitude: -158.1234768,
    });
    Locations.collection.insert({
      path: 'path46',
      location: 'Ko Olina Lagoon 1',
      latitude: 21.33799106,
      longitude: -158.1247216,
    });
    Locations.collection.insert({
      path: 'path47',
      location: 'Keaau Beach',
      latitude: 21.49485036,
      longitude: -158.2297626,
    });
    Locations.collection.insert({
      path: 'path48',
      location: 'Makaha Beach Park',
      latitude: 21.47641328,
      longitude: -158.2203816,
    });
    Locations.collection.insert({
      path: 'path49',
      location: "Aki's Beach",
      latitude: 21.46861811,
      longitude: -158.2176129,
    });
    Locations.collection.insert({
      path: 'path50',
      location: 'Papaoneone',
      latitude: 21.46258132,
      longitude: -158.2130099,
    });
    Locations.collection.insert({
      path: 'path51',
      location: 'Pokai Beach',
      latitude: 21.44379622,
      longitude: -158.1891588,
    });
    Locations.collection.insert({
      path: 'path52',
      location: 'Pokai Bay Beach',
      latitude: 21.43935751,
      longitude: -158.1883229,
    });
    Locations.collection.insert({
      path: 'path53',
      location: "Ma'ili Beach Park",
      latitude: 21.41920014,
      longitude: -158.1778479,
    });
    Locations.collection.insert({
      path: 'path54',
      location: "Ma'ili Point Beach Park",
      latitude: 21.40522257,
      longitude: -158.1774075,
    });
    Locations.collection.insert({
      path: 'path55',
      location: 'Zablan Beach',
      latitude: 21.37949886,
      longitude: -158.1450099,
    });
    Locations.collection.insert({
      path: 'path56',
      location: 'Ulehawa Beach Park',
      latitude: 21.39384021,
      longitude: -158.1593499,
    });
    Locations.collection.insert({
      path: 'path57',
      location: 'Mauna Lahilahi Beach Park',
      latitude: 21.45999927,
      longitude: -158.2070461,
    });
    Locations.collection.insert({
      path: 'path58',
      location: 'Kualoa Regional Park',
      latitude: 21.51246626,
      longitude: -157.8370681,
    });
    Locations.collection.insert({
      path: 'path59',
      location: 'Waiahole Beach Park',
      latitude: 21.48495048,
      longitude: -157.8475088,
    });
    Locations.collection.insert({
      path: 'path60',
      location: 'Kahaluu Beach',
      latitude: 21.46004249,
      longitude: -157.8403419,
    });
    Locations.collection.insert({
      path: 'path61',
      location: "He'eia State Park",
      latitude: 21.44078018,
      longitude: -157.8099435,
    });
    Locations.collection.insert({
      path: 'path62',
      location: 'Secret Beach',
      latitude: 21.45618273,
      longitude: -157.7688109,
    });
    Locations.collection.insert({
      path: 'path63',
      location: 'Fort Hase Beach',
      latitude: 21.44510443,
      longitude: -157.7359309,
    });
    Locations.collection.insert({
      path: 'path64',
      location: 'Kaneohe Sandbar',
      latitude: 21.46364,
      longitude: -157.808334,
    });
    Locations.collection.insert({
      path: 'path65',
      location: 'Pyramid Rock Beach',
      latitude: 21.46025965,
      longitude: -157.763509,
    });
    Locations.collection.insert({
      path: 'path66',
      location: 'North Beach',
      latitude: 21.45350577,
      longitude: -157.7428572,
    });
    Locations.collection.insert({
      path: 'path67',
      location: 'Kailua Beach',
      latitude: 21.40539014,
      longitude: -157.7389485,
    });
    Locations.collection.insert({
      path: 'path68',
      location: 'Kailua Beach Park',
      latitude: 21.39740673,
      longitude: -157.7272185,
    });
    Locations.collection.insert({
      path: 'path69',
      location: 'Lanikai Beach',
      latitude: 21.39255009,
      longitude: -157.715121,
    });
    Locations.collection.insert({
      path: 'path70',
      location: 'Bellows Field Beach park',
      latitude: 21.35751696,
      longitude: -157.7089538,
    });
    Locations.collection.insert({
      path: 'path71',
      location: 'Waimanalo Beach Park',
      latitude: 21.33222623,
      longitude: -157.6956513,
    });
    Locations.collection.insert({
      path: 'path72',
      location: 'Kaiona Beach Park',
      latitude: 21.32596224,
      longitude: -157.6828255,
    });
    Locations.collection.insert({
      path: 'path73',
      location: 'Kaupo Beach Park',
      latitude: 21.3216815,
      longitude: -157.6734899,
    });
    Locations.collection.insert({
      path: 'path74',
      location: "Makapu'u Beach",
      latitude: 21.3161047,
      longitude: -157.6655427,
    });
    Locations.collection.insert({
      path: 'path75',
      location: "Makapu'u Beach Park",
      latitude: 21.31312536,
      longitude: -157.6606977,
    });
    Locations.collection.insert({
      path: 'path76',
      location: 'Makapuu Tidepools',
      latitude: 21.30409513,
      longitude: -157.6490723,
    });
    Locations.collection.insert({
      path: 'path77',
      location: 'Sandy Beach',
      latitude: 21.28566607,
      longitude: -157.672744,
    });
    Locations.collection.insert({
      path: 'path78',
      location: 'Halona Beach Cove',
      latitude: 21.28171444,
      longitude: -157.6775384,
    });
    Locations.collection.insert({
      path: 'path79',
      location: 'Hanauma Bay',
      latitude: 21.27115759,
      longitude: -157.6968756,
    });
    Locations.collection.insert({
      path: 'path80',
      location: 'Spitting Cave',
      latitude: 21.25952117,
      longitude: -157.7076766,
    });
    Locations.collection.insert({
      path: 'path81',
      location: 'Maunalua Bay Beach Park',
      latitude: 21.28375844,
      longitude: -157.7172917,
    });
    Locations.collection.insert({
      path: 'path82',
      location: 'Kawaikui Beach Park',
      latitude: 21.27927432,
      longitude: -157.744791,
    });
    Locations.collection.insert({
      path: 'path83',
      location: 'Kaalawai Beach',
      latitude: 21.25478859,
      longitude: -157.7929887,
    });
    Locations.collection.insert({
      path: 'path84',
      location: 'Diamond Head Beach Park',
      latitude: 21.2549614,
      longitude: -157.8071033,
    });
    Locations.collection.insert({
      path: 'path85',
      location: 'Kaimana Beach',
      latitude: 21.26338973,
      longitude: -157.8216755,
    });
    Locations.collection.insert({
      path: 'path86',
      location: 'Waikiki Beach',
      latitude: 21.27622811,
      longitude: -157.8270915,
    });
    Locations.collection.insert({
      path: 'path87',
      location: 'Laie Point State Wayside',
      latitude: 21.64848867,
      longitude: -157.9144366,
    });
    Locations.collection.insert({
      path: 'path88',
      location: 'Kahuku Point',
      latitude: 21.71107151,
      longitude: -157.9841949,
    });
    Locations.collection.insert({
      path: 'path89',
      location: 'Kawela Bay Beach Park',
      latitude: 21.6973661,
      longitude: -158.006775,
    });
    Locations.collection.insert({
      path: 'path90',
      location: 'Sunset Beach Park',
      latitude: 21.67419014,
      longitude: -158.0402159,
    });
    Locations.collection.insert({
      path: 'path91',
      location: 'Ehukai Beach Park',
      latitude: 21.66503399,
      longitude: -158.0508037,
    });
    Locations.collection.insert({
      path: 'path92',
      location: 'Sharks Cove',
      latitude: 21.65432752,
      longitude: -158.0631693,
    });
    Locations.collection.insert({
      path: 'path93',
      location: 'Waimea Bay Beach',
      latitude: 21.64014357,
      longitude: -158.0635858,
    });
    Locations.collection.insert({
      path: 'path94',
      location: 'Kawailoa Beach',
      latitude: 21.62372819,
      longitude: -158.0808207,
    });
    Locations.collection.insert({
      path: 'path95',
      location: 'Laniakea Beach',
      latitude: 21.61721526,
      longitude: -158.0873425,
    });
    Locations.collection.insert({
      path: 'path96',
      location: "Papa'iloa Beach",
      latitude: 21.60975328,
      longitude: -158.097215,
    });
    Locations.collection.insert({
      path: 'path97',
      location: 'Kawailoa Beach',
      latitude: 21.60555441,
      longitude: -158.1026178,
    });
    Locations.collection.insert({
      path: 'path98',
      location: 'Haleiwa Alii Beach',
      latitude: 21.59457805,
      longitude: -158.1074641,
    });
    Locations.collection.insert({
      path: 'path99',
      location: 'Haleiwa Beach',
      latitude: 21.58936457,
      longitude: -158.1122616,
    });
    Locations.collection.insert({
      path: 'path100',
      location: 'Haleiwa Beach Park',
      latitude: 21.59861404,
      longitude: -158.1031821,
    });
    Locations.collection.insert({
      path: 'path101',
      location: 'Mokuleia Beach Park',
      latitude: 21.58141302,
      longitude: -158.1923707,
    });
    Locations.collection.insert({
      path: 'path102',
      location: 'Halona Beach Cove',
      latitude: 21.28171597,
      longitude: -157.6775395,
    });
    Locations.collection.insert({
      path: 'path103',
      location: 'Keawaula Beach',
      latitude: 21.54878773,
      longitude: -158.242038,
    });
    Locations.collection.insert({
      path: 'path104',
      location: 'Makua Cave',
      latitude: 21.51979967,
      longitude: -158.2275639,
    });
    Locations.collection.insert({
      path: 'path105',
      location: 'Makua Beach',
      latitude: 21.53191575,
      longitude: -158.2294041,
    });
    Locations.collection.insert({
      path: 'path106',
      location: 'Hawaiian Electric Beach Park',
      latitude: 21.35722515,
      longitude: -158.1308238,
    });
    Locations.collection.insert({
      path: 'path107',
      location: 'Nanakuli Beach Park',
      latitude: 21.37617703,
      longitude: -158.1417442,
    });
  }
});
