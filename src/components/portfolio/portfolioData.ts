import FounderGrants from '../../assets/Founder Grants.png'
import EmergencyElectric from '../../assets/Emergency Electric.png';
import CreateReactProject from '../../assets/CreateReactProject.png'

export interface IPortfolioData {
    title: string
    description: string
    link: string
    url: string
    image: string
    githubFe: string | null
    githubBe: string | null
}

export const portfolioData: IPortfolioData[] = [
    {
        title: 'Founder Grants',
        description: 'This project was a collaboration of 4 developers and the third iteration of the Lambda Labs Team.',
        link: 'https://www.foundergrants.com',
        url: '/portfolio/foundergrants',
        githubFe: 'https://github.com/dswhitely1/startup-grant-database-fe',
        githubBe: 'https://github.com/dswhitely1/startup-grant-database-be',
        image: FounderGrants
    },
    {
        title: 'Emergency Electric Inc',
        description: 'This project is a simple landing page with built in React and Material UI.  The website also has a way to send messages to the company and for prospective electricians to fill out an application for Employment.',
        link: 'https://www.emergencyelectricinc.com',
        url: '/portfolio/emergencyelectricinc',
        githubFe: 'https://github.com/dswhitely1/emergency-client',
        githubBe: 'https://github.com/dswhitely1/electric-server',
        image: EmergencyElectric
    },
    {
        title: 'Create React Project',
        description: 'This project was a way for developers to create a react app and install the latest dependencies.  It\'s intention is to save developers time.',
        link: 'https://www.npmjs.com/package/@dswhitely1/create-react-project',
        url: '/portfolio/create-react-project',
        githubFe: null,
        githubBe: 'https://github.com/dswhitely1/create-react-project',
        image: CreateReactProject
    }
]