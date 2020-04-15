import FG from '../../assets/Founder Grants.png';
import EE from '../../assets/Emergency Electric.png'

export interface ProjectLink {
    link: string
    header: string
    description: string
    src: typeof FG | typeof EE
    githubFe: string
    githubBe: string
}

export default [
    {
        link: 'https://www.foundergrants.com',
        header: 'Founder Grants',
        description: 'Founder Grants was founded on by the 1517 fund.',
        src: FG,
        githubFe: 'https://github.com/dswhitely1/startup-grant-database-fe',
        githubBe: 'https://github.com/dswhitely1/startup-grant-database-be'
    },
    {
        link: 'https://www.emergencyelectricinc.com',
        header: 'Emergency Electric INC',
        description: 'Fully licensed electricians are on call 24 hours a day to help you with any electrical emergency you have. Call Emergency Electric for emergency electrical service.',
        src: EE,
        githubFe: 'https://github.com/dswhitely1/emergency-client',
        githubBe: 'https://github.com/dswhitely1/electric-server'
    }
]
