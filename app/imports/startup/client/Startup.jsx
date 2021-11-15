import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import App from '../../ui/layouts/App.jsx';
import { Locations } from '../../api/Locations';

/* global document */

// Startup the application by rendering the App layout component.
Meteor.startup(() => {
  render(<App />, document.getElementById('root'));
  if (Locations.find().count() === 0) {
    Locations.insert({
      _id: '1',
      path: 'path1',
      location: 'Kualoa Beach',
      latitude: 21.53562329,
      longitude: -157.8394155,
    });
    Locations.insert({
      _id: '2',
      path: 'path2',
      location: 'Kanenelu Beach',
      latitude: 21.53899558,
      longitude: -157.8422418,
    });
    Locations.insert({
      _id: '3',
      path: 'path3',
      location: 'Kalaeoio Beach Park',
      latitude: 21.54524653,
      longitude: -157.8456663,
    });
    Locations.insert({
      _id: '4',
      path: 'path4',
      location: 'Kaawa Beach',
      latitude: 21.54896943,
      longitude: -157.8463083,
    });
    Locations.insert({
      _id: '5',
      path: 'path5',
      location: 'Swanzy Beach',
      latitude: 21.55750757,
      longitude: -157.8538549,
    });
    Locations.insert({
      _id: '6',
      path: 'path6',
      location: 'Kahana Bay Beach Park',
      latitude: 21.55620941,
      longitude: -157.874384,
    });
    Locations.insert({
      _id: '7',
      path: 'path7',
      location: 'Punalu&apos;u Beach Park',
      latitude: 21.57675513,
      longitude: -157.8816977,
    });
    Locations.insert({
      _id: '8',
      path: 'path8',
      location: 'Hau&apos;ula Beach',
      latitude: 21.60718287,
      longitude: -157.9051358,
    });
    Locations.insert({
      _id: '9',
      path: 'path9',
      location: 'Hau&apos;ula Beach Park',
      latitude: 21.61214574,
      longitude: -157.9112922,
    });
    Locations.insert({
      _id: '10',
      path: 'path10',
      location: 'Kaipapa&apos;u Beach',
      latitude: 21.6244874,
      longitude: -157.9179965,
    });
    Locations.insert({
      _id: '11',
      path: 'path11',
      location: 'Pounder&apos;s Beach',
      latitude: 21.63274935,
      longitude: -157.9203893,
    });
    Locations.insert({
      _id: '12',
      path: 'path12',
      location: 'Malaekahana State Recreation Area',
      latitude: 21.65983505,
      longitude: -157.9299961,
    });
    Locations.insert({
      _id: '13',
      path: 'path13',
      location: 'Laniloa Beach',
      latitude: 21.64343099,
      longitude: -157.9189677,
    });
    Locations.insert({
      _id: '14',
      path: 'path14',
      location: 'Temple Beach Park',
      latitude: 21.64900685,
      longitude: -157.9232043,
    });
    Locations.insert({
      _id: '15',
      path: 'path15',
      location: 'Moku&apos;auia Beach',
      latitude: 21.66919462,
      longitude: -157.9369048,
    });
    Locations.insert({
      _id: '16',
      path: 'path16',
      location: 'Kahuku Beach',
      latitude: 21.67994522,
      longitude: -157.9418987,
    });
    Locations.insert({
      _id: '17',
      path: 'path17',
      location: 'Hanaka&apos;ilio Beach',
      latitude: 21.70944943,
      longitude: -157.9804948,
    });
    Locations.insert({
      _id: '18',
      path: 'path18',
      location: 'Hukilau Beach Park',
      latitude: 21.65261022,
      longitude: -157.928655,
    });
    Locations.insert({
      _id: '19',
      path: 'path19',
      location: 'Kaiaka Bay Beach',
      latitude: 21.58610349,
      longitude: -158.1176929,
    });
    Locations.insert({
      _id: '20',
      path: 'path20',
      location: 'Aweoweo Beach Park',
      latitude: 21.5834699,
      longitude: -158.1401418,
    });
    Locations.insert({
      _id: '21',
      path: 'path21',
      location: 'Mokuleia Beach',
      latitude: 21.58053366,
      longitude: -158.1529791,
    });
    Locations.insert({
      _id: '22',
      path: 'path22',
      location: 'Polo Beach',
      latitude: 21.57957637,
      longitude: -158.1601883,
    });
    Locations.insert({
      _id: '23',
      path: 'path23',
      location: 'Kaena Point Bird Sanctuary',
      latitude: 21.57540067,
      longitude: -158.2749109,
    });
    Locations.insert({
      _id: '24',
      path: 'path24',
      location: 'Kaena Point Keawaula Section',
      latitude: 21.56304999,
      longitude: -158.2552666,
    });
    Locations.insert({
      _id: '25',
      path: 'path25',
      location: 'Kaena Point Mokuleia Section',
      latitude: 21.5789659,
      longitude: -158.2377981,
    });
    Locations.insert({
      _id: '26',
      path: 'path26',
      location: 'Kahala Beach',
      latitude: 21.26920588,
      longitude: -157.7769723,
    });
    Locations.insert({
      _id: '27',
      path: 'path27',
      location: 'Hunakai Beach',
      latitude: 21.26280094,
      longitude: -157.7839177,
    });
    Locations.insert({
      _id: '28',
      path: 'path28',
      location: 'Fort De Russy Beach',
      latitude: 21.28055123,
      longitude: -157.8366774,
    });
    Locations.insert({
      _id: '29',
      path: 'path29',
      location: 'Magic Island',
      latitude: 21.28441618,
      longitude: -157.846503,
    });
    Locations.insert({
      _id: '30',
      path: 'path30',
      location: 'Kahanamoku Beach',
      latitude: 21.28141427,
      longitude: -157.8377921,
    });
    Locations.insert({
      _id: '31',
      path: 'path31',
      location: 'Ala Moana Beach',
      latitude: 21.2900924,
      longitude: -157.8526183,
    });
    Locations.insert({
      _id: '32',
      path: 'path32',
      location: 'Sand Island Beach',
      latitude: 21.29973519,
      longitude: -157.8726477,
    });
    Locations.insert({
      _id: '33',
      path: 'path33',
      location: 'Hickham Beach',
      latitude: 21.31712502,
      longitude: -157.9509964,
    });
    Locations.insert({
      _id: '34',
      path: 'path34',
      location: 'Kamehameha Beach',
      latitude: 21.31985174,
      longitude: -157.9607601,
    });
    Locations.insert({
      _id: '35',
      path: 'path35',
      location: 'Iroquois Lagoon Beach 2',
      latitude: 21.32026221,
      longitude: -157.9737095,
    });
    Locations.insert({
      _id: '36',
      path: 'path36',
      location: 'Iroquois Point Beach',
      latitude: 21.31842421,
      longitude: -157.9764017,
    });
    Locations.insert({
      _id: '37',
      path: 'path37',
      location: 'Pu&apos;uloa Beach Park',
      latitude: 21.31381354,
      longitude: -157.9917083,
    });
    Locations.insert({
      _id: '38',
      path: 'path38',
      location: 'One&apos;ula Beach Park',
      latitude: 21.30664122,
      longitude: -158.0253328,
    });
    Locations.insert({
      _id: '39',
      path: 'path39',
      location: 'White Plains Beach',
      latitude: 21.30357332,
      longitude: -158.0452274,
    });
    Locations.insert({
      _id: '40',
      path: 'path40',
      location: 'Kalaeloa Beach Park',
      latitude: 21.30151839,
      longitude: -158.0564777,
    });
    Locations.insert({
      _id: '41',
      path: 'path41',
      location: 'Nimitz Beach',
      latitude: 21.29978488,
      longitude: -158.0666597,
    });
    Locations.insert({
      _id: '42',
      path: 'path42',
      location: 'Barbers Point Beach Park',
      latitude: 21.29676183,
      longitude: -158.1040499,
    });
    Locations.insert({
      _id: '43',
      path: 'path43',
      location: 'Ko Olina Lagoon 4',
      latitude: 21.32835153,
      longitude: -158.1220136,
    });
    Locations.insert({
      _id: '44',
      path: 'path44',
      location: 'Ko Olina Lagoon 3',
      latitude: 21.33199444,
      longitude: -158.1223878,
    });
    Locations.insert({
      _id: '45',
      path: 'path45',
      location: 'Honu Lagoon',
      latitude: 21.33501993,
      longitude: -158.1234768,
    });
    Locations.insert({
      _id: '46',
      path: 'path46',
      location: 'Ko Olina Lagoon 1',
      latitude: 21.33799106,
      longitude: -158.1247216,
    });
    Locations.insert({
      _id: '47',
      path: 'path47',
      location: 'Keaau Beach',
      latitude: 21.49485036,
      longitude: -158.2297626,
    });
    Locations.insert({
      _id: '48',
      path: 'path48',
      location: 'Makaha Beach Park',
      latitude: 21.47641328,
      longitude: -158.2203816,
    });
    Locations.insert({
      _id: '49',
      path: 'path49',
      location: 'Aki&apos;s Beach',
      latitude: 21.46861811,
      longitude: -158.2176129,
    });
    Locations.insert({
      _id: '50',
      path: 'path50',
      location: 'Papaoneone',
      latitude: 21.46258132,
      longitude: -158.2130099,
    });
    Locations.insert({
      _id: '51',
      path: 'path51',
      location: 'Pokai Beach',
      latitude: 21.44379622,
      longitude: -158.1891588,
    });
    Locations.insert({
      _id: '52',
      path: 'path52',
      location: 'Pokai Bay Beach',
      latitude: 21.43935751,
      longitude: -158.1883229,
    });
    Locations.insert({
      _id: '53',
      path: 'path53',
      location: 'Ma&apos;ili Beach Park',
      latitude: 21.41920014,
      longitude: -158.1778479,
    });
    Locations.insert({
      _id: '54',
      path: 'path54',
      location: 'Ma&apos;ili Point Beach Park',
      latitude: 21.40522257,
      longitude: -158.1774075,
    });
    Locations.insert({
      _id: '55',
      path: 'path55',
      location: 'Zablan Beach',
      latitude: 21.37949886,
      longitude: -158.1450099,
    });
    Locations.insert({
      _id: '56',
      path: 'path56',
      location: 'Ulehawa Beach Park',
      latitude: 21.39384021,
      longitude: -158.1593499,
    });
    Locations.insert({
      _id: '57',
      path: 'path57',
      location: 'Mauna Lahilahi Beach Park',
      latitude: 21.45999927,
      longitude: -158.2070461,
    });
    Locations.insert({
      _id: '58',
      path: 'path58',
      location: 'Kualoa Regional Park',
      latitude: 21.51246626,
      longitude: -157.8370681,
    });
    Locations.insert({
      _id: '59',
      path: 'path59',
      location: 'Waiahole Beach Park',
      latitude: 21.48495048,
      longitude: -157.8475088,
    });
    Locations.insert({
      _id: '60',
      path: 'path60',
      location: 'Kahaluu Beach',
      latitude: 21.46004249,
      longitude: -157.8403419,
    });
    Locations.insert({
      _id: '61',
      path: 'path61',
      location: 'He&apos;eia State Park',
      latitude: 21.44078018,
      longitude: -157.8099435,
    });
    Locations.insert({
      _id: '62',
      path: 'path62',
      location: 'Secret Beach',
      latitude: 21.45618273,
      longitude: -157.7688109,
    });
    Locations.insert({
      _id: '63',
      path: 'path63',
      location: 'Fort Hase Beach',
      latitude: 21.44510443,
      longitude: -157.7359309,
    });
    Locations.insert({
      _id: '64',
      path: 'path64',
      location: 'Kaneohe Sandbar',
      latitude: 21.46364,
      longitude: -157.808334,
    });
    Locations.insert({
      _id: '65',
      path: 'path65',
      location: 'Pyramid Rock Beach',
      latitude: 21.46025965,
      longitude: -157.763509,
    });
    Locations.insert({
      _id: '66',
      path: 'path66',
      location: 'North Beach',
      latitude: 21.45350577,
      longitude: -157.7428572,
    });
    Locations.insert({
      _id: '67',
      path: 'path67',
      location: 'Kailua Beach',
      latitude: 21.40539014,
      longitude: -157.7389485,
    });
    Locations.insert({
      _id: '68',
      path: 'path68',
      location: 'Kailua Beach Park',
      latitude: 21.39740673,
      longitude: -157.7272185,
    });
    Locations.insert({
      _id: '69',
      path: 'path69',
      location: 'Lanikai Beach',
      latitude: 21.39255009,
      longitude: -157.715121,
    });
    Locations.insert({
      _id: '70',
      path: 'path70',
      location: 'Bellows Field Beach park',
      latitude: 21.35751696,
      longitude: -157.7089538,
    });
    Locations.insert({
      _id: '71',
      path: 'path71',
      location: 'Waimanalo Beach Park',
      latitude: 21.33222623,
      longitude: -157.6956513,
    });
    Locations.insert({
      _id: '72',
      path: 'path72',
      location: 'Kaiona Beach Park',
      latitude: 21.32596224,
      longitude: -157.6828255,
    });
    Locations.insert({
      _id: '73',
      path: 'path73',
      location: 'Kaupo Beach Park',
      latitude: 21.3216815,
      longitude: -157.6734899,
    });
    Locations.insert({
      _id: '74',
      path: 'path74',
      location: 'Makapu&apos;u Beach',
      latitude: 21.3161047,
      longitude: -157.6655427,
    });
    Locations.insert({
      _id: '75',
      path: 'path75',
      location: 'Makapu&apos;u Beach Park',
      latitude: 21.31312536,
      longitude: -157.6606977,
    });
    Locations.insert({
      _id: '76',
      path: 'path76',
      location: 'Makapuu Tidepools',
      latitude: 21.30409513,
      longitude: -157.6490723,
    });
    Locations.insert({
      _id: '77',
      path: 'path77',
      location: 'Sandy Beach',
      latitude: 21.28566607,
      longitude: -157.672744,
    });
    Locations.insert({
      _id: '78',
      path: 'path78',
      location: 'Halona Beach Cove',
      latitude: 21.28171444,
      longitude: -157.6775384,
    });
    Locations.insert({
      _id: '79',
      path: 'path79',
      location: 'Hanauma Bay',
      latitude: 21.27115759,
      longitude: -157.6968756,
    });
    Locations.insert({
      _id: '80',
      path: 'path80',
      location: 'Spitting Cave',
      latitude: 21.25952117,
      longitude: -157.7076766,
    });
    Locations.insert({
      _id: '81',
      path: 'path81',
      location: 'Maunalua Bay Beach Park',
      latitude: 21.28375844,
      longitude: -157.7172917,
    });
    Locations.insert({
      _id: '82',
      path: 'path82',
      location: 'Kawaikui Beach Park',
      latitude: 21.27927432,
      longitude: -157.744791,
    });
    Locations.insert({
      _id: '83',
      path: 'path83',
      location: 'Kaalawai Beach',
      latitude: 21.25478859,
      longitude: -157.7929887,
    });
    Locations.insert({
      _id: '84',
      path: 'path84',
      location: 'Diamond Head Beach Park',
      latitude: 21.2549614,
      longitude: -157.8071033,
    });
    Locations.insert({
      _id: '85',
      path: 'path85',
      location: 'Kaimana Beach',
      latitude: 21.26338973,
      longitude: -157.8216755,
    });
    Locations.insert({
      _id: '86',
      path: 'path86',
      location: 'Waikiki Beach',
      latitude: 21.27622811,
      longitude: -157.8270915,
    });
    Locations.insert({
      _id: '87',
      path: 'path87',
      location: 'Laie Point State Wayside',
      latitude: 21.64848867,
      longitude: -157.9144366,
    });
    Locations.insert({
      _id: '88',
      path: 'path88',
      location: 'Kahuku Point',
      latitude: 21.71107151,
      longitude: -157.9841949,
    });
    Locations.insert({
      _id: '89',
      path: 'path89',
      location: 'Kawela Bay Beach Park',
      latitude: 21.6973661,
      longitude: -158.006775,
    });
    Locations.insert({
      _id: '90',
      path: 'path90',
      location: 'Sunset Beach Park',
      latitude: 21.67419014,
      longitude: -158.0402159,
    });
    Locations.insert({
      _id: '91',
      path: 'path91',
      location: 'Ehukai Beach Park',
      latitude: 21.66503399,
      longitude: -158.0508037,
    });
    Locations.insert({
      _id: '92',
      path: 'path92',
      location: 'Sharks Cove',
      latitude: 21.65432752,
      longitude: -158.0631693,
    });
    Locations.insert({
      _id: '93',
      path: 'path93',
      location: 'Waimea Bay Beach',
      latitude: 21.64014357,
      longitude: -158.0635858,
    });
    Locations.insert({
      _id: '94',
      path: 'path94',
      location: 'Kawailoa Beach',
      latitude: 21.62372819,
      longitude: -158.0808207,
    });
    Locations.insert({
      _id: '95',
      path: 'path95',
      location: 'Laniakea Beach',
      latitude: 21.61721526,
      longitude: -158.0873425,
    });
    Locations.insert({
      _id: '96',
      path: 'path96',
      location: 'Papa&apos;iloa Beach',
      latitude: 21.60975328,
      longitude: -158.097215,
    });
    Locations.insert({
      _id: '97',
      path: 'path97',
      location: 'Kawailoa Beach',
      latitude: 21.60555441,
      longitude: -158.1026178,
    });
    Locations.insert({
      _id: '98',
      path: 'path98',
      location: 'Haleiwa Alii Beach',
      latitude: 21.59457805,
      longitude: -158.1074641,
    });
    Locations.insert({
      _id: '99',
      path: 'path99',
      location: 'Haleiwa Beach',
      latitude: 21.58936457,
      longitude: -158.1122616,
    });
    Locations.insert({
      _id: '100',
      path: 'path100',
      location: 'Haleiwa Beach Park',
      latitude: 21.59861404,
      longitude: -158.1031821,
    });
    Locations.insert({
      _id: '101',
      path: 'path101',
      location: 'Mokuleia Beach Park',
      latitude: 21.58141302,
      longitude: -158.1923707,
    });
    Locations.insert({
      _id: '102',
      path: 'path102',
      location: 'Halona Beach Cove',
      latitude: 21.28171597,
      longitude: -157.6775395,
    });
    Locations.insert({
      _id: '103',
      path: 'path103',
      location: 'Keawaula Beach',
      latitude: 21.54878773,
      longitude: -158.242038,
    });
    Locations.insert({
      _id: '104',
      path: 'path104',
      location: 'Makua Cave',
      latitude: 21.51979967,
      longitude: -158.2275639,
    });
    Locations.insert({
      _id: '105',
      path: 'path105',
      location: 'Makua Beach',
      latitude: 21.53191575,
      longitude: -158.2294041,
    });
    Locations.insert({
      _id: '106',
      path: 'path106',
      location: 'Hawaiian Electric Beach Park',
      latitude: 21.35722515,
      longitude: -158.1308238,
    });
    Locations.insert({
      _id: '107',
      path: 'path107',
      location: 'Nanakuli Beach Park',
      latitude: 21.37617703,
      longitude: -158.1417442,
    });
  }
});
