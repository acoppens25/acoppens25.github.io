// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'acoppens25', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 2, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['acoppens25/microbiomeanalysistut', 'acoppens25/microbiomeanalysisproject'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Coastlines Presentation',
          description:
            'Describes coastlines and how humans have an effect on them',
          imageUrl:
            'https://github.com/acoppens25/acoppens25.github.io/raw/main/coasts.png',
          link: 'https://github.com/acoppens25/acoppens25.github.io/raw/main/coasts.pdf',
        },
        {
          title: 'Snail Presentation',
          description:
            'Describes how snails have an impact on the climate',
          imageUrl:
            'https://github.com/acoppens25/acoppens25.github.io/raw/main/snails.png',
          link: 'https://github.com/acoppens25/acoppens25.github.io/raw/main/snails.png',
        },
      ],
    },
  },
  seo: {
    title: 'Coppens Website',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: '',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://acoppens25.github.io',
    phone: '',
    email: 'analisa.nicole25@gmail.com',
  },
  resume: {
    fileUrl:
      'https://github.com/acoppens25/acoppens25.github.io/raw/main/document.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PCR',
    'Agarose Gel',
    'Bioinformatics',
    'DNA Extraction',
    'Data Analysis',
  ],
  experiences: [
    {
      company: 'Safeway',
      position: 'Courtesy Clerk',
      from: 'August 2019',
      to: '2021',
      companyLink: '',
    },
    {
      company: 'Target',
      position: 'General Merchandise Expert',
      from: 'October 2021',
      to: 'Present',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'California State University Stanislaus',
      degree: 'BS in Biological Sciences ',
      from: '2022',
      to: '2026',
    },
  ],
  publications: [
    {
      title: 'Draft genome sequence Chryseobacterium treverense isolated from human clinical sources',
      conferenceName: '',
      journalName: 'Microbiology Resource Announcement',
      authors: 'Analisa Coppens, Isabella Fregoso, Rachel Haakma, Kimberly Habon, Grace Rodrigues, Tricia A. Van Laar',
      link: 'https://example.com',
      description: 'We report the draft genome sequence of Chryseobacterium treverense is isolated from human clinical
sources. The genome is 2,379,279 base pairs and contains genes enhancing bacterium survival and
evasion of the host’s immune system, therefore amplifying broad antibiotic resistance.' ,
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
