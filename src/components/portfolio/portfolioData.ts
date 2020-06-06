import FounderGrants from '../../assets/Founder Grants.png'
import FounderGrants1 from '../../assets/Founder Grants 1.png';
import FounderGrants2 from '../../assets/Founder Grants 2.png';
import EmergencyElectric from '../../assets/Emergency Electric.png';
import EmergencyElectric1 from '../../assets/Emergency Electric 1.png';
import EmergencyElectric2 from '../../assets/Emergency Electric 2.png';
import CreateReactProject from '../../assets/CreateReactProject.png'
import CreateReactProject2 from '../../assets/CreateReactProject 2.png'
import CreateReactProject1 from '../../assets/CreateReactProject 1.png'

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
    githubFe: string | null
    githubBe: string | null
    image1: string
    image2: string
}

export const portfolioData: IPortfolioData[] = [
    {
        title: 'Founder Grants',
        description: 'Founder Grants is a searchable website attached to a database that can feed users grants based on requirements they enter like the amount of the grant, the founder demographics, the geography of the grant, and the steps involved in getting the grant.',
        background: 'lorem',
        techStack: 'Built using React and Node Express.',
        techUsed: ['React', 'Redux', 'Node', 'Express', 'TypeScript', 'Auth0', 'PostgreSQL', 'Material-UI'],
        responsibilities: ['Increased performance of production site by 5%.', 'Refactored Code Base trimming 2000 lines of code.', 'Introduced TypeScript to help other developers understand how the data is flowing through the application.'],
        link: 'https://www.foundergrants.com',
        url: '/portfolio/founder-grants',
        githubFe: 'https://github.com/dswhitely1/startup-grant-database-fe',
        githubBe: 'https://github.com/dswhitely1/startup-grant-database-be',
        image: FounderGrants,
        image1: FounderGrants1,
        image2: FounderGrants2
    },
    {
        title: 'Emergency Electric Inc',
        description: 'This project is a simple landing page with built in React and Material UI.  The website also has a way to send messages to the company and for prospective electricians to fill out an application for Employment.',
        background: 'lorem',
        techStack: 'Built using React and Node Express',
        techUsed: ['React', 'Redux', 'Node', 'Express', 'PostgreSQL', 'Material-UI'],
        responsibilities: ['Built website to specification of Emergency Electric Owners', 'Created a way for future applicants to apply online.'],
        link: 'https://www.emergencyelectricinc.com',
        url: '/portfolio/emergency-electric-inc',
        githubFe: 'https://github.com/dswhitely1/emergency-client',
        githubBe: 'https://github.com/dswhitely1/electric-server',
        image: EmergencyElectric,
        image1: EmergencyElectric1,
        image2: EmergencyElectric2
    },
    {
        title: 'Create React Project',
        description: 'This project was a way for developers to create a react app and install the latest dependencies.  It\'s intention is to save developers time.',
        background: 'lorem',
        techStack: 'Built using React and Node Express',
        techUsed: ['JavaScript'],
        responsibilities: ['lorem ipsum', "lorem ipsum", 'lorem ipsum'],
        link: 'https://www.npmjs.com/package/@dswhitely1/create-react-project',
        url: '/portfolio/create-react-project',
        githubFe: null,
        githubBe: 'https://github.com/dswhitely1/create-react-project',
        image: CreateReactProject,
        image1: CreateReactProject1,
        image2: CreateReactProject2
    }
]