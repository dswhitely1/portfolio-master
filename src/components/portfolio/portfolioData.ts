import FounderGrants from '../../assets/Founder Grants.png'
import FounderGrants1 from '../../assets/Founder Grants 1.png';
import FounderGrants2 from '../../assets/Founder Grants 2.png';
import EmergencyElectric from '../../assets/Emergency Electric.png';
import EmergencyElectric1 from '../../assets/Emergency Electric 1.png';
import EmergencyElectric2 from '../../assets/Emergency Electric 2.png';
import CreateReactProject from '../../assets/CreateReactProject.png'
import CreateReactProject2 from '../../assets/CreateReactProject 2.png'
import CreateReactProject1 from '../../assets/CreateReactProject 1.png'

interface IGithub {
    title: string
    link: string
}

export interface IPortfolioData {
    title: string
    description: string
    background: string
    techStack: string
    techUsed: string[]
    responsibilities: string[]
    link: string
    url: string
    image: string
    github: IGithub[]
    image1: string
    image2: string
}

export const portfolioData: IPortfolioData[] = [
    {
        title: 'Founder Grants',
        description: 'Founder Grants is a searchable website attached to a database that can feed users grants based on requirements they enter like the amount of the grant, the founder demographics, the geography of the grant, and the steps involved in getting the grant.',
        background: 'Founder Grants was a labs project from Lambda School.  Lambda School Labs is an 8 week apprentice ship that simulates working in a software development career.  Our team inherited a project on it\'s 3rd iteration.  The most challenging thing about this project was looking at the codebase and trying to decipher the data flow in the React application.  After careful consideration, the team agreed that we should refactor the front end to fix the data flow.  I introduced TypeScript into the redux store and after the refactor, we were able to increase performance in production by 5% and have 2000 lines less of code.  I wrote a blog entry on how to setup Redux with TypeScript, which I highly recommend reading.',
        techStack: 'Built using React and Node Express.',
        techUsed: ['React', 'Redux', 'Node', 'Express', 'TypeScript', 'Auth0', 'PostgreSQL', 'Material-UI'],
        responsibilities: ['Increased performance of production site by 5%.', 'Refactored Code Base trimming 2000 lines of code.', 'Introduced TypeScript to help other developers understand how the data is flowing through the application.'],
        link: 'https://www.foundergrants.com',
        url: '/portfolio/founder-grants',
        github: [
            {
                title: 'React Repository',
                link: 'https://github.com/dswhitely1/startup-grant-database-fe'
            },
            {
                title: 'Node Repository',
                link: 'https://github.com/dswhitely1/startup-grant-database-be'
            },
            {
                title: 'Blog Entry',
                link: 'https://medium.com/javascript-in-plain-english/opinionated-redux-setup-with-typescript-eb71eb619716'
            }
        ],
        image: FounderGrants,
        image1: FounderGrants1,
        image2: FounderGrants2
    },
    {
        title: 'Emergency Electric Inc',
        description: 'This project is a simple landing page with built in React and Material UI.  The website also has a way to send messages to the company and for prospective electricians to fill out an application for Employment.',
        background: 'Emergency Electric INC is a family owned business based out of Lanesville, IN.  They service the Louisville Metropolitan Area and surrounding counties.  After a passing conversation with one of the owners, they desired to have a website that could be searchable on Google and where prospective electricians could apply for a job.',
        techStack: 'Built using React and Node Express',
        techUsed: ['React', 'Redux', 'Node', 'Express', 'PostgreSQL', 'Material-UI'],
        responsibilities: [
            'Designed UI using Material UI framework coupled with Styled Components',
            'Persisted user information in PostgreSQL Database, protected with a JWT Token',
            'Developed Admin site that lets Emergency Electric INC view Applications Submitted'
        ],
        link: 'https://www.emergencyelectricinc.com',
        url: '/portfolio/emergency-electric-inc',
        github: [
            {
                title: 'React Repository',
                link: 'https://github.com/dswhitely1/emergency-client'
            },
            {
                title: 'Node Repository',
                link: 'https://github.com/dswhitely1/electric-server'
            }
        ],
        image: EmergencyElectric,
        image1: EmergencyElectric1,
        image2: EmergencyElectric2
    },
    {
        title: 'Create React Project',
        description: 'This project was a way for developers to create a react app and install the latest dependencies.  It\'s intention is to save developers time.',
        background: 'As I ponder what my next side project is, it occurred to me that I have created a lot of React apps in the past year.  Every application had certain dependencies that were needed to be added after I did the initial create-react-app.  After some research, I decided to write my own CLI (command line interface) that would install all the dependencies that I used in my projects.  The result is that in the first 2 weeks of being published, there have been over 800 downloads of the package.',
        techStack: 'Built using React and Node Express',
        techUsed: ['Node.JS', 'JavaScript'],
        responsibilities: ['Created CLI to help bootstrap React Applications'],
        link: 'https://www.npmjs.com/package/@dswhitely1/create-react-project',
        url: '/portfolio/create-react-project',
        github: [
            {
                title: 'Source Code',
                link: 'https://github.com/dswhitely1/create-react-project'
            },
            {
                title: 'Blog Entry',
                link: 'https://medium.com/javascript-in-plain-english/creating-boilerplate-templates-for-your-projects-215bd9365053'
            }
        ],
        image: CreateReactProject,
        image1: CreateReactProject1,
        image2: CreateReactProject2
    }
]