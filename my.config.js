// Upload files in static/ So any file static/file.pdf -> /file.pdf is accessible at root

export default {
  name: 'rushabh wadkar',
  domain: 'rushabhwadkar.com', // add without https:// , used in meta tags and share urls
  image: 'https://lh3.googleusercontent.com/a-/ACNPEu_VYzyidfMlqLFWlaCORfP_wqPR4wFvZ79DBiKGCaM=s192-c-mo',
  email: 'rushabh6792@gmail.com',
  googleAnalyticsV4: {
    enabled: false,
    id: ''
  },
  plausibleAnalytics: {
    enabled: false,
    domain: 'template.rushabhwadkar.com',
    trackLocalhost: false,
    // leave it empty if plausible is not self hosted
    apiHost: 'https://analytics.lookatx.dev' // default: https://plausible.io
  },
  // enable if you want comments and likes on posts
  // see how it looks on rushabhwadkar.com
  firebase: {
    enabled: false
  },
  social: {
    github: 'rushabh-wadkar',
    linkedin: 'rushabh-wadkar',
    instagram: 'rushabh.wadkar',
    codestats: 'rushabhwadkar' // https://codestats.net make a profile if you dont already have one.
  },
  buyMeACoffee: {
    enabled: false,
    url: 'https://www.buymeacoffee.com/rushabh_wadkar'
  },
  projects: {
    enabled: false,
  },
  blog: {
    enabled: false,
  },
  resume: {
    enabled: true,
    pdfUrl: '/RushabhWadkar_CV.pdf' // add files in static folder
  },
  uses: {
    enabled: true,
    meta: [
      {title: 'OS', value: 'macOS Catalina'},
      {title: 'Memory', value: '16 GB 2667 MHz DDR4'},
      {title: 'Keyboard', value: 'Keychron K2 - Gateron Brown Keys'},
      {title: 'Mouse', value: 'Logitech Silent Pebble'},
      {title: 'Monitor', value: 'LG QHD (2560 x 1440) 27 Inch IPS Display'},
      {title: 'Laptop • Processor • Graphics', value: 'MacBook Pro M1(14-inch, 2022)'}
    ]
  },
  workedAt: {
    // add logos in static and at max add 3/4
    enabled: true,
    meta: [
      { name: 'Mastercard',  src: '/images/mastercard.png', url: 'https://mastercard.com'},
      { name: 'Flextrade',  src: '/images/flextrade.png', url: 'https://flextrade.com'},
      { name: 'Vistaar',  src: '/images/vistaar.png', url: 'https://vistaar.com'},
    ]
  },
  recommendations: {
    enabled: true,
    meta: [
      { name: 'Ryan Krumins', designation: 'Lead at Flextrade Systems', image: '/images/ryan.png', linkedin: 'https://www.linkedin.com/in/ryan-krumins-08498154', content: 'Good work attitude, technical expertise, and determination are qualities I look for in team members, and Rushabh has all all three. Having Rushabh on my team for two years, I\'ve had the opportunity to see his full stack capabilities over a broad collection of technologies, and his willingness to take on the hard/large issues and see them through to completion. I would not hesitate to work with Rushabh again in future.' },
      { name: 'Chirag Ameesar', designation: 'Associate VP at JP Morgan', image: '/images/chirag.png', linkedin: 'https://www.linkedin.com/in/chirag-amessar-53959075', content: 'Rushabh is a great team player. He understands the requirements very well and clears his doubts at very earlier stage of development cycle. He is also a good communicator. He is a good person to be around who can make the team environment very much positive. Besides completing his task on time, he also helps other team members to get them going whenever they are stuck. It was really good to mentor such passionate, self believing person like Rushabh!' },
      { name: 'Pritam Kadam', designation: 'Software Engineer at Flextrade', image: '/images/pritam.png', linkedin: 'https://www.linkedin.com/in/pritam-kadam', content: 'Rushabh is hard-working professional that always takes the time to help his peers.I had the privilege of working with Rushabh in number of successful Web Development projects. He is solutions oriented, responsible and technically sound, also extremely skilled in JavaScript, MongoDB & Python. He has impressive and strong research background in Full Stack Development and definitely can get my full recommendation.' },
      { name: 'Sharvil Turbadkar', designation: 'Data Analyst at Tesla', image: '/images/sharvil.png', linkedin: 'https://www.linkedin.com/in/sharvil-turbadkar', content: 'A very talented individual who constantly strives for excellence and settles for nothing less than perfection. He is a proper embodiment of what an elite candidate should be.Highly skilled and adept in many languages.Very Meticulous and scrupulous in his work which can be seen in his publications and projects.Very modest and helpful he is a candidate worth of all the success and more!' },
    ]
  },
  loadingIndicator: {
    name: 'pulse'
    // https://tobiasahlin.com/spinkit/
    // circle
    // cube-grid
    // fading-circle
    // folding-cube
    // chasing-dots
    // nuxt
    // pulse
    // rectangle-bounce
    // rotating-plane
    // three-bounce
    // wandering-cubes
  },
  laguageSwitcher: {
    enabled: true,
  },
  strings: {
    en_US: {
      download: 'download',
      nav: {
        home: 'home',
        blog: 'blog',
        projects: 'projects',
        uses: 'uses',
        resume: 'résumé',
        buyMeACoffee: 'buy me a beer',
        signIn: 'sign in',
        signOut: 'sign out'
      },
      hero: {
        iBlogTech: 'i blog tech',
        haveALook: 'have a look',
        friendlyNeighborhood: 'your friendly neighbourhood',
        description: 'i am a software engineer. i blog tech, write a weekend newsletter called software shots, and tinker with side projects every now n then.',
        words: ['developer', 'engineer', 'programmer', 'encoder', 'performance enthusiast'],
      },
      githubCalendar: {
        header: 'contributions',
        subtext: 'github calendar heatmap'
      },
      blog: {
        header: 'blog',
        subtext: 'i try to write once in a while. let me know your thoughts in comments or rushabh6792@gmail.com'
      },
      recentBlog: {
        header: 'recent blogs',
        subtext: 'it takes a lot of time to write man'
      },
      uses: {
        header: 'uses',
        subtext: 'a quick summary of what I use on a daily basis to code and some codestats.net flex'
      },
      projects: {
        header: 'projects',
        subtext: 'this page lists some of my personal and work projects. every project has some story, click on the title to read'
      },
      recommendations: {
        header: 'recommendations',
        subtext: 'what do my mentors/colleagues say'
      }
    }
  }
}
