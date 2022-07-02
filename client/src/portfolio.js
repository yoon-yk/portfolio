const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://yoon-yk.github.io/cleanfolio',
  title: 'Yoon',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Yeokyeong [여경] Yoon',
  role: 'passionate undergraduate student studying BA and CSE',
  description:
    'Currently studying Business Administration and Computer Science/Engineering in Sogang Univeristy, Seoul, Korea. Expected to graduate in early Feburary, 2023. Interested in technology, food, photography, travelling and exercise.',
  resume: 'https://drive.google.com/file/d/1iy4J-frEyTXxoggpghdMixhn6GwLI7EJ/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/yeokyeongyoon/',
    github: 'https://github.com/yoon-yk',
    vsco: 'https://vsco.co/ltsmejojo/gallery'
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'STEP Intern',
    team: 'Desktop Search Team, Google Korea LLC',
    startingYear : 2021,
    startingMonth : 6,
    endingYear : 2021,
    endingMonth : 9,
    description:
      ['Responsible for maintenance and support of Top Content Panel Web Answer Project, one of the new Desktop optimized Search features launched in December 2021.',
      'Diagnosed and documented issues causing a search result loss, and framed the possible solutions discussing with senior engineers, UX engineers, and project managers.',
      'Designed, developed, and tested the newly optimized image layout algorithm.',
      'Reduced image triggering error by greater than 99%, recovering 10% of overall image layout coverage losses'
    ],
    stack: ['C++', 'Java', 'Linux'],
  },
  {
    name: 'World PPP Infrastructure Failure Map',
    team: 'Sustainable Development Global Program for Young Global Leaders',
    startingYear : 2021,
    startingMonth : 1,
    endingYear : 2021,
    endingMonth : 7,
    description:
      ['Worked mainly as a Frontend developer for creating and an interactive map to visualize delayed or canceled PPP infrastructure deals.',
      'Developed and designed user-interactive web map, adding dynamic filters using jQuery and Leaflet Library.',
      'Experienced in handling GeoJSON format data and migration of data among multiple databases using MongoDB.',
      'Collaborated closely with Research Team by and Backend developer to deliver up-to-date PPP deals and contents on the webpage.'
      ],
    stack: ['PUG', 'SASS', 'JavaScript', 'React', 'MongoDB', 'Git'],
    sourceCode: 'https://github.com/sdp-tech/Visualization',
  },
  {
    name: 'Blog Posts Crawler',
    team: '2020 AI-JAM KOREA Hackathon',
    startingYear : 2020,
    startingMonth : 7,
    endingYear : 2020,
    endingMonth : 7,
    description:
      ['Developed a web crawler to collect reviewing posts on the blogs as training data',
      'Designed the crawler to automatically search target words in the search engine and open resulted URLs in queue order to crawl HTML/XML contents, then store crawled data into CSV format'
    ],
    stack: ['Python'],
    sourceCode: 'https://github.com/yoon-yk/ai-jam_naverblogCrawl',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'C/C++',
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'SASS',
  'Git',
  'English',
  'Korean'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'yeokyeongy@gmail.com',
}

export { header, about, projects, skills, contact }
