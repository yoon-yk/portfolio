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
    'Currently studying Business Administration and Computer Science/Engineering in Sogang Univeristy, Seoul, Korea. Expected to graduate in early Feburary, 2023. Interested in technology, food, photography and travelling.',
  resume: 'https://drive.google.com/file/d/1Hf5c7mHOvdFcNUmvjqoTEo12-qV3qL3N/view?usp=sharing',
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
      [
        'Assigned to maintenance and support of Top Content Panel Web Answer Project, one of Google\'s new Desktop optimized Search features launched in December 2021',
        'Diagnosed and documented issues causing a search result loss, and framed the possible solutions in constant discussion with senior engineers, UX engineers, and project managers',
        'Designed, developed, and tested the newly optimized image layout algorithm',
        'Reduced image triggering error by greater than 99%, recovering 10% of overall image layout coverage losses'
    ],
    stack: ['C++', 'Java', 'Linux'],
    livePreview : 'https://drive.google.com/drive/folders/1mRh7A1UvLBOKUvP6B0oFa0yZZfYhdocN?usp=sharing'
  },
  {
    name: 'World PPP Infrastructure Failure Map',
    team: 'Sustainable Development Global Program for Young Global Leaders',
    startingYear : 2021,
    startingMonth : 1,
    endingYear : 2021,
    endingMonth : 7,
    description:
      [
        'Worked mainly as a Frontend developer for creating and an interactive map to visualize delayed or canceled PPP infrastructure deals',
        'Developed and designed user-interactive web map and data dashboard, adding dynamic filtering function using React and Leaflet Library',
        'Experienced in handling with GeoJSON format data using MongoDB CRUD Operations',
        'Collaborated closely with Research Team and Backend developer to keep PPP deals and contents on the website up-to-date'
      ],
    stack: ['PUG', 'SASS', 'JavaScript', 'React', 'MongoDB', 'Git'],
    sourceCode: 'https://github.com/sdp-tech/Visualization',
    livePreview : 'https://drive.google.com/drive/folders/19mxj4iGhi74ydYPU3glHw7Y44YpMRciW?usp=sharing'
  },
  {
    name: 'Blog Posts Crawler',
    team: '2020 AI-JAM KOREA Hackathon',
    startingYear : 2020,
    startingMonth : 7,
    endingYear : 2020,
    endingMonth : 7,
    description:
      ['Developed a web crawler to collect blog review posts as training data',
      'Designed a crawler to automatically search target words in the search engine and open resulted URLs in queue order to crawl HTML/XML contents, then store crawled data into CSV format'
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
