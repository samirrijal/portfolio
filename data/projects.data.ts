import { Lang, MetaDataProps } from '@/types/components/global';
import { ProjectsTabsType } from '@/types/projects/tabs';
import { ProjectProps, Projects, ProjectsList, ProjectsType } from '@/types/projects';
import { toTwoDigits } from '@/utils/number';

export const META_PROJECTS: Lang<MetaDataProps> = {
    en: {
        title: `Projects | ${process.env.NEXT_PUBLIC_SITE_NAME}`
    },
    es: {
        title: `Proyectos | ${process.env.NEXT_PUBLIC_SITE_NAME}`
    }
};

export const PROJECTS: Lang<Projects> = {
    en: [
        {
            title: 'Yüit',
            description: 'Smart-food company offering complete, plant-based meals in powders and bars — nutritious, fast, and designed for your lifestyle',
            image: '/static/images/projects/yuit.jpg',
            url: 'https://yuit.eu/'
        }
    ],
    es: [
        {
            title: 'Yüit',
            description: 'Empresa de alimentos inteligentes que ofrece comidas completas a base de plantas en polvos y barras — nutritivas, rápidas y diseñadas para tu estilo de vida',
            image: '/static/images/projects/yuit.jpg',
            url: 'https://yuit.eu/'
        }
    ]
};

export const PERSONAL_PROJECTS: Lang<Projects> = {
    en: [
        {
            title: 'Portfolio',
            description: 'Portfolio built with Next.js, Typescript and GSAP',
            image: '/static/images/projects/portfolio-en.jpg',
            githubUrl: 'https://github.com/samirrijal/portfolio'
        },
        {
            title: 'CI/CD Pipeline',
            description: 'Vite website with automated deployment to AWS S3 using CI/CD',
            image: '/static/images/projects/cicd.jpg',
            url: 'http://hello-world-ci-cd.s3-website.eu-north-1.amazonaws.com/',
            githubUrl: 'https://github.com/samirrijal/cicd-project'
        },
    ],
    es: [
        {
            title: 'Portfolio',
            description: 'Portfolio creado con Next.js, Typescript y GSAP',
            image: '/static/images/projects/portfolio-en.jpg',
            githubUrl: 'https://github.com/gcolombi/personal-website'
        },
        {
            title: 'CI/CD Pipeline',
            description: 'Sitio web Vite con despliegue automatizado en AWS S3 usando CI/CD',
            image: '/static/images/projects/cicd.jpg',
            url: 'http://hello-world-ci-cd.s3-website.eu-north-1.amazonaws.com/',
            githubUrl: 'https://github.com/samirrijal/cicd-project'
        },
    ]
};

export const FEATURED_PROJECT: Lang<ProjectProps> = {
    en: {
        title: 'CI/CD Pipeline',
        description: 'Vite website with automated deployment to AWS S3 using CI/CD',
        image: '/static/images/projects/cicd.jpg',
        url: 'http://hello-world-ci-cd.s3-website.eu-north-1.amazonaws.com/',
        type: ProjectsType.PROJECTS
    },
    es: {
        title: 'CI/CD Pipeline',
        description: 'Sitio web Vite con despliegue automatizado en AWS S3 usando CI/CD',
        image: '/static/images/projects/cicd.jpg',
        url: 'http://hello-world-ci-cd.s3-website.eu-north-1.amazonaws.com/',
        type: ProjectsType.PROJECTS
    }
};

export const LATEST_PERSONAL_PROJECT: Lang<ProjectProps> = {
    en: {
        title: 'BilboGo',
        description: 'A clean and simple app I built for real-time metro info and easy navigation in Bilbao.',
        image: '/static/images/projects/bilbogo.jpg',
        url: 'Coming Soon...',
        githubUrl: 'https://github.com/samirrijal/bilbogo',
        type: ProjectsType.PERSONAL_PROJECTS
    },
    es: {
        title: 'BilboGo',
        description: 'Una aplicación limpia y simple que construí para información en tiempo real del metro y navegación fácil en Bilbao.',
        image: '/static/images/projects/bilbogo.jpg',
        url: 'Próximamente...',
        githubUrl: 'https://github.com/samirrijal/bilbogo',
        type: ProjectsType.PERSONAL_PROJECTS
    }
};

export const TOTAL_PROJECTS = {
    en: PROJECTS['en'].length,
    es: PROJECTS['es'].length
};

export const TOTAL_PERSONAL_PROJECTS = {
    en: PERSONAL_PROJECTS['en'].length,
    es: PERSONAL_PROJECTS['es'].length
};

export const PROJECTS_TABS: Lang<ProjectsTabsType> = {
    en: [
        {
            title: 'Work',
            description: 'A selected set of projects I\'ve built on my own or in teams in the last few years.',
            type: ProjectsType.PROJECTS,
            total: toTwoDigits(TOTAL_PROJECTS['en'])
        },
        {
            title: 'Personal',
            description: 'A selected set of personal projects I\'m building as I navigate through ideas and technologies.',
            type: ProjectsType.PERSONAL_PROJECTS,
            total: toTwoDigits(TOTAL_PERSONAL_PROJECTS['en'])
        }
    ],
    es: [
        {
            title: 'Trabajo',
            description: 'Una selección de proyectos que he realizado solo o en equipo en los últimos años.',
            type: ProjectsType.PROJECTS,
            total: toTwoDigits(TOTAL_PROJECTS['es'])
        },
        {
            title: 'Personal',
            description: 'Una selección de proyectos personales que estoy creando tan pronto como tengo una idea o descubro una tecnología para probarla y aprenderla.',
            type: ProjectsType.PERSONAL_PROJECTS,
            total: toTwoDigits(TOTAL_PERSONAL_PROJECTS['es'])
        }
    ]
};

export const PROJECTS_LIST: Lang<ProjectsList> = {
    en: {
        [ProjectsType.PROJECTS]: PROJECTS['en'],
        [ProjectsType.PERSONAL_PROJECTS]: PERSONAL_PROJECTS['en']
    },
    es: {
        [ProjectsType.PROJECTS]: PROJECTS['es'],
        [ProjectsType.PERSONAL_PROJECTS]: PERSONAL_PROJECTS['es']
    }
};