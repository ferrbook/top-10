import { ContentItem, ContentType } from '../types';

export const ALL_CONTENT: ContentItem[] = [
  // FILMS
  {
    id: 'f1',
    title: 'Planet Earth II',
    description: 'An immersive exploration of the islands, mountains, jungles, deserts, grasslands, and cities of the world.',
    source: 'BBC Earth',
    year: 2016,
    duration: '60m per ep',
    type: ContentType.FILM,
    tags: ['Nature', 'Wildlife', 'Geography']
  },
  {
    id: 'f2',
    title: 'Apollo 11',
    description: 'A look at the Apollo 11 mission to land on the moon led by commander Neil Armstrong and pilots Buzz Aldrin and Michael Collins.',
    source: 'CNN Films',
    year: 2019,
    duration: '1h 33m',
    type: ContentType.FILM,
    tags: ['Space', 'History', 'Technology']
  },
  {
    id: 'f3',
    title: 'My Octopus Teacher',
    description: 'A filmmaker forges an unusual friendship with an octopus living in a South African kelp forest, learning as the animal shares the mysteries of her world.',
    source: 'Netflix',
    year: 2020,
    duration: '1h 25m',
    type: ContentType.FILM,
    tags: ['Marine Biology', 'Nature', 'Emotional']
  },
  {
    id: 'f4',
    title: 'Cosmos: A Spacetime Odyssey',
    description: 'An exploration of our discovery of the laws of nature and coordinates in space and time.',
    source: 'National Geographic',
    year: 2014,
    duration: '45m per ep',
    type: ContentType.FILM,
    tags: ['Astronomy', 'Physics', 'Science']
  },
  {
    id: 'f5',
    title: 'March of the Penguins',
    description: 'In the Antarctic, every March since the beginning of time, the quest begins to find the perfect mate and start a family.',
    source: 'Warner Independent',
    year: 2005,
    duration: '1h 20m',
    type: ContentType.FILM,
    tags: ['Wildlife', 'Antarctica', 'Family']
  },
  {
    id: 'f6',
    title: 'Fantastic Fungi',
    description: 'A descriptive time-lapse journey about the magical, mysterious and medicinal world of fungi and their power to heal, sustain and contribute to the regeneration of life on Earth.',
    source: 'Moving Art',
    year: 2019,
    duration: '1h 21m',
    type: ContentType.FILM,
    tags: ['Biology', 'Nature', 'Health']
  },
  {
    id: 'f7',
    title: 'A Beautiful Planet',
    description: 'An exploration of Earth and beyond as seen from the International Space Station.',
    source: 'IMAX',
    year: 2016,
    duration: '46m',
    type: ContentType.FILM,
    tags: ['Space', 'Earth', 'Environment']
  },
  {
    id: 'f8',
    title: 'Blue Planet II',
    description: 'David Attenborough returns to the world\'s oceans, revealing new discoveries and intimate stories from the deep.',
    source: 'BBC Earth',
    year: 2017,
    duration: '60m per ep',
    type: ContentType.FILM,
    tags: ['Ocean', 'Marine Life', 'Nature']
  },
  {
    id: 'f9',
    title: 'The Ivory Game',
    description: 'Wildlife activists take on poachers in an effort to end the illegal ivory trade in Africa.',
    source: 'Netflix',
    year: 2016,
    duration: '1h 52m',
    type: ContentType.FILM,
    tags: ['Conservation', 'Wildlife', 'Activism']
  },
  {
    id: 'f10',
    title: 'Chasing Coral',
    description: 'Coral reefs around the world are vanishing at an unprecedented rate. A team of divers, photographers and scientists set out on a thrilling ocean adventure to discover why.',
    source: 'Netflix',
    year: 2017,
    duration: '1h 33m',
    type: ContentType.FILM,
    tags: ['Environment', 'Ocean', 'Climate Change']
  },
  {
    id: 'f11',
    title: 'Hidden Figures',
    description: 'The story of a team of female African-American mathematicians who served a vital role in NASA during the early years of the U.S. space program.',
    source: '20th Century Fox',
    year: 2016,
    duration: '2h 7m',
    type: ContentType.FILM,
    tags: ['History', 'Math', 'Space']
  },
  {
    id: 'f12',
    title: 'Particle Fever',
    description: 'As the Large Hadron Collider is about to be launched for the first time, physicists are on the cusp of the greatest scientific discovery of all time.',
    source: 'Bond/360',
    year: 2013,
    duration: '1h 39m',
    type: ContentType.FILM,
    tags: ['Physics', 'CERN', 'Discovery']
  },
  {
    id: 'f13',
    title: 'Jane',
    description: 'Using a trove of unseen footage, this film tells the story of Jane Goodall\'s early explorations, focusing on her groundbreaking field work.',
    source: 'National Geographic',
    year: 2017,
    duration: '1h 30m',
    type: ContentType.FILM,
    tags: ['Biography', 'Primates', 'Nature']
  },
  {
    id: 'f14',
    title: 'Inside the Human Body',
    description: 'A spectacular journey through the human body, revealing how it works in microscopic detail.',
    source: 'BBC',
    year: 2011,
    duration: '50m per ep',
    type: ContentType.FILM,
    tags: ['Biology', 'Anatomy', 'Health']
  },
  {
    id: 'f15',
    title: 'Hubble',
    description: 'An IMAX 3D camera chronicles the effort of 7 astronauts aboard the Space Shuttle Atlantis to repair the Hubble Space Telescope.',
    source: 'IMAX',
    year: 2010,
    duration: '44m',
    type: ContentType.FILM,
    tags: ['Space', 'Technology', 'Astronomy']
  },
  {
    id: 'f16',
    title: 'Microcosmos',
    description: 'A documentary of insect life in meadows and ponds, using incredible close-up, slow-motion, and time-lapse photography.',
    source: 'Galatée Films',
    year: 1996,
    duration: '1h 20m',
    type: ContentType.FILM,
    tags: ['Insects', 'Nature', 'Photography']
  },
  {
    id: 'f17',
    title: 'Prehistoric Planet',
    description: 'Travel back 66 million years to when majestic dinosaurs and extraordinary creatures roamed the lands, seas, and skies.',
    source: 'Apple TV+',
    year: 2022,
    duration: '40m per ep',
    type: ContentType.FILM,
    tags: ['Dinosaurs', 'Paleontology', 'History']
  },
  {
    id: 'f18',
    title: 'The Farthest',
    description: 'The story of the Voyager spacecrafts, the grandest journey in human history.',
    source: 'PBS',
    year: 2017,
    duration: '2h 1m',
    type: ContentType.FILM,
    tags: ['Space', 'Voyager', 'History']
  },
  {
    id: 'f19',
    title: 'Blackfish',
    description: 'A documentary concerning the captivity of killer whales, and its dangers for both humans and whales.',
    source: 'Magnolia Pictures',
    year: 2013,
    duration: '1h 23m',
    type: ContentType.FILM,
    tags: ['Wildlife', 'Ethics', 'Marine Biology']
  },
  {
    id: 'f20',
    title: 'Breaking Boundaries: The Science of Our Planet',
    description: 'David Attenborough and scientist Johan Rockström examine Earth\'s biodiversity collapse and how this crisis can still be averted.',
    source: 'Netflix',
    year: 2021,
    duration: '1h 13m',
    type: ContentType.FILM,
    tags: ['Climate', 'Science', 'Future']
  },

  // ARTICLES
  {
    id: 'a1',
    title: 'The James Webb Space Telescope\'s First Deep Field',
    description: 'Understanding the sharpest infrared image of the distant universe to date.',
    source: 'NASA',
    readTime: '5 min',
    type: ContentType.ARTICLE,
    tags: ['Space', 'Astronomy', 'Technology']
  },
  {
    id: 'a2',
    title: 'How Trees Talk to Each Other',
    description: 'An exploration of the "Wood Wide Web" and how fungi help trees communicate.',
    source: 'Smithsonian Magazine',
    readTime: '8 min',
    type: ContentType.ARTICLE,
    tags: ['Botany', 'Nature', 'Fungi']
  },
  {
    id: 'a3',
    title: 'The Science of Sleep: Why We Need It',
    description: 'New research uncovers the critical biological functions that happen only while we sleep.',
    source: 'Scientific American',
    readTime: '6 min',
    type: ContentType.ARTICLE,
    tags: ['Health', 'Neuroscience', 'Biology']
  },
  {
    id: 'a4',
    title: 'Why Do Cats Purr?',
    description: 'It is not just about happiness; purring plays a role in healing and communication.',
    source: 'National Geographic',
    readTime: '4 min',
    type: ContentType.ARTICLE,
    tags: ['Animals', 'Behavior', 'Biology']
  },
  {
    id: 'a5',
    title: 'Quantum Computing Explained for Everyone',
    description: 'A simple guide to the complex world of qubits and superposition.',
    source: 'MIT Technology Review',
    readTime: '10 min',
    type: ContentType.ARTICLE,
    tags: ['Technology', 'Physics', 'Computing']
  },
  {
    id: 'a6',
    title: 'The History of the Periodic Table',
    description: 'How Mendeleev predicted elements that hadn\'t even been discovered yet.',
    source: 'Royal Society of Chemistry',
    readTime: '7 min',
    type: ContentType.ARTICLE,
    tags: ['Chemistry', 'History', 'Science']
  },
  {
    id: 'a7',
    title: 'Ocean Acidification: The Other Carbon Problem',
    description: 'How excess CO2 is changing the chemistry of the world\'s oceans.',
    source: 'NOAA',
    readTime: '6 min',
    type: ContentType.ARTICLE,
    tags: ['Environment', 'Ocean', 'Chemistry']
  },
  {
    id: 'a8',
    title: 'The Mystery of Dark Matter',
    description: 'We can\'t see it, but we know it\'s there. What is holding the universe together?',
    source: 'CERN',
    readTime: '9 min',
    type: ContentType.ARTICLE,
    tags: ['Physics', 'Space', 'Mystery']
  },
  {
    id: 'a9',
    title: 'CRISPR and the Future of Gene Editing',
    description: 'The potential benefits and ethical questions surrounding genetic modification.',
    source: 'Nature',
    readTime: '12 min',
    type: ContentType.ARTICLE,
    tags: ['Genetics', 'Ethics', 'Biotech']
  },
  {
    id: 'a10',
    title: 'The Intelligence of Crows',
    description: 'Studies show these birds are capable of tool use and complex problem solving.',
    source: 'Audubon',
    readTime: '5 min',
    type: ContentType.ARTICLE,
    tags: ['Birds', 'Intelligence', 'Zoology']
  },
  {
    id: 'a11',
    title: 'What is the Goldilocks Zone?',
    description: 'Searching for habitable planets that are just right for liquid water.',
    source: 'NASA Exoplanets',
    readTime: '4 min',
    type: ContentType.ARTICLE,
    tags: ['Space', 'Astronomy', 'Planets']
  },
  {
    id: 'a12',
    title: 'The Microscopic World of Tardigrades',
    description: 'Meet the water bear, the toughest animal on Earth that can survive space vacuums.',
    source: 'Live Science',
    readTime: '5 min',
    type: ContentType.ARTICLE,
    tags: ['Microbiology', 'Animals', 'Resilience']
  },
  {
    id: 'a13',
    title: 'Fusion Energy: A Clean Power Future?',
    description: 'Scientists make a breakthrough in replicating the power of the sun.',
    source: 'Department of Energy',
    readTime: '7 min',
    type: ContentType.ARTICLE,
    tags: ['Energy', 'Physics', 'Future']
  },
  {
    id: 'a14',
    title: 'How Vaccines Work',
    description: 'A step-by-step look at how vaccines train the immune system.',
    source: 'WHO',
    readTime: '6 min',
    type: ContentType.ARTICLE,
    tags: ['Health', 'Medicine', 'Immunology']
  },
  {
    id: 'a15',
    title: 'The Great Barrier Reef Recovery',
    description: 'New efforts to plant heat-resistant coral are showing promise.',
    source: 'Australian Government',
    readTime: '8 min',
    type: ContentType.ARTICLE,
    tags: ['Conservation', 'Ocean', 'Environment']
  },
  {
    id: 'a16',
    title: 'Understanding Plate Tectonics',
    description: 'How the movement of Earth\'s crust shapes continents and causes earthquakes.',
    source: 'USGS',
    readTime: '6 min',
    type: ContentType.ARTICLE,
    tags: ['Geology', 'Earth', 'Science']
  },
  {
    id: 'a17',
    title: 'The Psychology of Color',
    description: 'How different colors affect human mood and behavior.',
    source: 'Psychology Today',
    readTime: '5 min',
    type: ContentType.ARTICLE,
    tags: ['Psychology', 'Behavior', 'Design']
  },
  {
    id: 'a18',
    title: 'Math in Nature: The Fibonacci Sequence',
    description: 'From pinecones to sunflowers, the golden ratio is everywhere.',
    source: 'Plus Magazine',
    readTime: '6 min',
    type: ContentType.ARTICLE,
    tags: ['Math', 'Nature', 'Patterns']
  },
  {
    id: 'a19',
    title: 'The Voyager Golden Record',
    description: 'What humanity sent into the cosmos to say "Hello" to extraterrestrials.',
    source: 'JPL',
    readTime: '10 min',
    type: ContentType.ARTICLE,
    tags: ['Space', 'Culture', 'History']
  },
  {
    id: 'a20',
    title: 'Bioluminescence: Living Light',
    description: 'Why do some animals glow in the dark?',
    source: 'Ocean Portal',
    readTime: '5 min',
    type: ContentType.ARTICLE,
    tags: ['Biology', 'Ocean', 'Light']
  }
];