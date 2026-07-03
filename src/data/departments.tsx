import React, { useState } from 'react';
import { Department } from '../types';

// Import official high-resolution logos downloaded locally
import lapdLogo from '../assets/images/lapd.png';
import chpLogo from '../assets/images/chp.svg';
import fbiLogo from '../assets/images/fbi.svg';
import lafdLogo from '../assets/images/lafd.png';
import caltransLogo from '../assets/images/caltrans.svg';
import dojLogo from '../assets/images/doj.svg';
import lasdLogo from '../assets/images/lasd.png';
import eccLogo from '../assets/images/ecc.png';
import civilianLogo from '../assets/images/civilian.png';

// High-Resolution Official Seals & Logos
export const LAPD_Logo = () => (
  <img 
    src={lapdLogo} 
    alt="LAPD Logo" 
    className="w-20 h-20 object-contain filter drop-shadow-lg"
  />
);

export const CHP_Logo = () => (
  <img 
    src={chpLogo} 
    alt="CHP Logo" 
    className="w-20 h-20 object-contain filter drop-shadow-lg"
  />
);

export const FBI_Logo = () => (
  <img 
    src={fbiLogo} 
    alt="FBI Logo" 
    className="w-20 h-20 object-contain filter drop-shadow-lg"
  />
);

export const LAFD_Logo = () => (
  <img 
    src={lafdLogo} 
    alt="LAFD Logo" 
    className="w-20 h-20 object-contain filter drop-shadow-lg"
  />
);

export const Caltrans_Logo = () => (
  <img 
    src={caltransLogo} 
    alt="Caltrans Logo" 
    className="w-20 h-20 object-contain filter drop-shadow-lg"
  />
);

export const DOJ_Logo = () => (
  <img 
    src={dojLogo} 
    alt="DOJ Logo" 
    className="w-20 h-20 object-contain filter drop-shadow-lg"
  />
);

export const LASD_Logo = () => (
  <img 
    src={lasdLogo} 
    alt="LASD Logo" 
    className="w-20 h-20 object-contain filter drop-shadow-lg"
  />
);

export const ECC_Logo = () => (
  <img 
    src={eccLogo} 
    alt="ECC Logo" 
    className="w-20 h-20 object-contain filter drop-shadow-lg"
  />
);

export const Civilian_Logo = () => (
  <img 
    src={civilianLogo} 
    alt="Civilian Operations Logo" 
    className="w-20 h-20 object-contain filter drop-shadow-lg"
  />
);

export const DEPARTMENTS_DATA: Department[] = [
  {
    id: 'lapd',
    name: 'LAPD',
    fullName: 'LOS ANGELES POLICE DEPARTMENT',
    logo: <LAPD_Logo />,
    tagline: 'To Protect and to Serve',
    shortDesc: 'Maintain law and order, respond to active calls and incidents, and conduct traffic enforcement across the city.',
    longDesc: 'Maintain law and order across the city. Respond to active calls and incidents. Conduct traffic enforcement and investigations.',
    descriptionPoints: [
      'Maintain law and order across the city',
      'Respond to active calls and incidents',
      'Conduct traffic enforcement and investigations'
    ],
    discordLink: 'https://discord.gg/Cpj7NkxC6Q',
    divisions: [],
    ranks: [],
    fleet: [],
    requirements: [],
    color: 'blue'
  },
  {
    id: 'chp',
    name: 'CHP',
    fullName: 'CALIFORNIA HIGHWAY PATROL',
    logo: <CHP_Logo />,
    tagline: 'Safety, Service, and Security',
    shortDesc: 'Enforce traffic laws across highways, manage pursuits and road safety, and assist with large-scale incidents.',
    longDesc: 'Enforce traffic laws across highways. Manage pursuits and road safety. Assist with large-scale incidents.',
    descriptionPoints: [
      'Enforce traffic laws across highways',
      'Manage pursuits and road safety',
      'Assist with large-scale incidents'
    ],
    discordLink: 'https://discord.gg/Uf5MhJAg2C',
    divisions: [],
    ranks: [],
    fleet: [],
    requirements: [],
    color: 'yellow'
  },
  {
    id: 'fbi',
    name: 'FBI',
    fullName: 'FEDERAL BUREAU OF INVESTIGATION',
    logo: <FBI_Logo />,
    tagline: 'Fidelity, Bravery, Integrity',
    shortDesc: 'Handle major investigations, target organized crime and high-level threats, and conduct specialized operations.',
    longDesc: 'Handle major investigations. Target organized crime and high-level threats. Conduct specialized operations.',
    descriptionPoints: [
      'Handle major investigations',
      'Target organized crime and high-level threats',
      'Conduct specialized operations'
    ],
    discordLink: 'https://discord.gg/MgtFSNP36w',
    divisions: [],
    ranks: [],
    fleet: [],
    requirements: [],
    color: 'blue'
  },
  {
    id: 'lafd',
    name: 'LAFD',
    fullName: 'LOS ANGELES FIRE DEPARTMENT',
    logo: <LAFD_Logo />,
    tagline: 'Serving with Courage, Integrity, and Pride',
    shortDesc: 'Respond to fires and emergencies, provide medical assistance, and perform rescue operations.',
    longDesc: 'Respond to fires and emergencies. Provide medical assistance. Perform rescue operations.',
    descriptionPoints: [
      'Respond to fires and emergencies',
      'Provide medical assistance',
      'Perform rescue operations'
    ],
    discordLink: 'https://discord.gg/7zW49wa9UZ',
    divisions: [],
    ranks: [],
    fleet: [],
    requirements: [],
    color: 'red'
  },
  {
    id: 'caltrans',
    name: 'CALTRANS',
    fullName: 'CALIFORNIA DEPARTMENT OF TRANSPORTATION',
    logo: <Caltrans_Logo />,
    tagline: 'Provide a Safe and Reliable Transportation Network',
    shortDesc: 'Manage roadways and infrastructure, control traffic during incidents, and support city operations.',
    longDesc: 'Manage roadways and infrastructure. Control traffic during incidents. Support city operations.',
    descriptionPoints: [
      'Manage roadways and infrastructure',
      'Control traffic during incidents',
      'Support city operations'
    ],
    discordLink: 'https://discord.gg/TBmfEZTpfY',
    divisions: [],
    ranks: [],
    fleet: [],
    requirements: [],
    color: 'blue'
  },
  {
    id: 'doj',
    name: 'DOJ',
    fullName: 'DEPARTMENT OF JUSTICE',
    logo: <DOJ_Logo />,
    tagline: 'Justice under the Law',
    shortDesc: 'Handle court proceedings and legal matters, conduct prosecutions and judicial operations, and maintain lawful processes.',
    longDesc: 'Handle court proceedings and legal matters. Conduct prosecutions and judicial operations. Maintain lawful and fair legal processes.',
    descriptionPoints: [
      'Handle court proceedings and legal matters',
      'Conduct prosecutions and judicial operations',
      'Maintain lawful and fair legal processes'
    ],
    discordLink: 'https://discord.gg/8vaRdqpknU',
    divisions: [],
    ranks: [],
    fleet: [],
    requirements: [],
    color: 'green'
  },
  {
    id: 'lasd',
    name: 'LASD',
    fullName: 'LOS ANGELES COUNTY SHERIFF\'S DEPARTMENT',
    logo: <LASD_Logo />,
    tagline: 'A Tradition of Service',
    shortDesc: 'Provide county-wide law enforcement, patrol unincorporated areas, and handle custody and court security.',
    longDesc: 'Provide county-wide law enforcement. Patrol unincorporated areas and contract cities. Handle custody and court security services.',
    descriptionPoints: [
      'Provide county-wide law enforcement',
      'Patrol unincorporated areas and contract cities',
      'Handle custody and court security services'
    ],
    discordLink: '',
    divisions: [],
    ranks: [],
    fleet: [],
    requirements: [],
    color: 'yellow'
  },
  {
    id: 'ecc',
    name: 'ECC',
    fullName: 'EMERGENCY COMMUNICATIONS CENTER',
    logo: <ECC_Logo />,
    tagline: 'The Vital Link between Public and First Responders',
    shortDesc: 'Manage emergency communications and 911 dispatch, coordinate responses, and provide a vital link to responders.',
    longDesc: 'Manage emergency communications and 911 dispatch. Coordinate responses for law enforcement and fire units. Provide vital link between public and responders.',
    descriptionPoints: [
      'Manage emergency communications and 911 dispatch',
      'Coordinate responses for law enforcement and fire units',
      'Provide vital link between public and responders'
    ],
    discordLink: '',
    divisions: [],
    ranks: [],
    fleet: [],
    requirements: [],
    color: 'blue'
  },
  {
    id: 'civilian',
    name: 'CIVILIAN',
    fullName: 'CIVILIAN OPERATIONS',
    logo: <Civilian_Logo />,
    tagline: 'Building the Foundation of the Community',
    shortDesc: 'Create immersive community roleplay scenarios, operate private businesses, and represent diverse civilian roles.',
    longDesc: 'Create immersive community roleplay scenarios. Operate private businesses and commercial services. Represent diverse civilian roles across the city.',
    descriptionPoints: [
      'Create immersive community roleplay scenarios',
      'Operate private businesses and commercial services',
      'Represent diverse civilian roles across the city'
    ],
    discordLink: '',
    divisions: [],
    ranks: [],
    fleet: [],
    requirements: [],
    color: 'green'
  }
];
