import { FEATURED_PROJECT, LATEST_PERSONAL_PROJECT } from './projects.data';
import { Lang } from '@/types/components/global';
import { HomeHeaderProps } from '@/types/components/headers';
import { HomeIntroductionContent } from '@/types/components/introductions';
import { HomeFeaturedProjectContent } from '@/types/components/sections';
import { escape } from 'querystring';

export const HOME_HEADER: Lang<HomeHeaderProps> = {
    en: {
        titles: ['Front-end', 'Developer'],
        subfield: 'Full stack capable',
        image: '/static/images/home-portrait.png',
        content: 'Maker of things with passion and excellence',
        name: ['Samir', 'Rijal']
    },
    es: {
        titles: ['Desarrollador', 'Front-end'],
        subfield: 'Capacidades Full stack',
        image: '/static/images/home-portrait.png',
        content: 'Creador de cosas con pasión y excelencia',
        name: ['Samir', 'Rijal']
    }
};

export const HOME_INTRODUCTION: Lang<HomeIntroductionContent> = {
    en: {
        titles: [
            'Passionate about web technologies, I have always been excited about the entire development spectrum. Front-end addicted and frequently engage in backend.',
            'When I\'m not coding or exploring new web technologies, I am playing video games or watching the latest movies and tv shows released.'
        ],
        content: [
            'Over the years I have spent time converting designs into pixel-perfect, performant, accessible and responsive applications/websites. Each project is an opportunity to learn new concepts across multiple domains.',
            'I simply love working on ambitious projects on my own or with positive people.'
        ],
        button: {
            label: 'More about me',
            href: '/about'
        }
    },
    es: {
        titles: [
            'Apasionado por las tecnologías web, siempre me ha entusiasmado todo el espectro del desarrollo. Adicto al front-end y frecuentemente involucrado en backend.',
            'Cuando no estoy programando o explorando nuevas tecnologías web, estoy jugando videojuegos o viendo las últimas películas y programas de televisión estrenados.'
        ],
        content: [
            'A lo largo de los años, he dedicado tiempo a convertir diseños en aplicaciones/sitios web precisos, eficientes, accesibles y responsivos. Cada proyecto es una oportunidad para aprender nuevos conceptos en múltiples dominios.',
            'Simplemente me encanta trabajar en proyectos ambiciosos por mi cuenta o con personas positivas.'
        ],
        button: {
            label: 'Más sobre mí',
            href: '/about'
        }
    }
};

export const HOME_FEATURED_PROJECT_CONTENT: Lang<HomeFeaturedProjectContent> = {
    en: {
        title: 'Featured work',
        button: {
            label: 'See all projects',
            href: {
                pathname: '/projects',
                query: {
                    type: FEATURED_PROJECT['en'].type
                }
            }
        }
    },
    es: {
        title: 'Proyecto en destaque',
        button: {
            label: 'Ver todos los proyectos',
            href: {
                pathname: '/projects',
                query: {
                    type: FEATURED_PROJECT['es'].type
                }
            }
        }
    }
};

export const HOME_LATEST_PROJECT_CONTENT: Lang<HomeFeaturedProjectContent> = {
    en: {
        title: 'Latest personal project',
        button: {
            label: 'See all personal projects',
            href: {
                pathname: '/projects',
                query: {
                    type: LATEST_PERSONAL_PROJECT['en'].type
                }
            }
        }
    },
    es: {
        title: 'Último proyecto personal',
        button: {
            label: 'Ver todos los proyectos personales',
            href: {
                pathname: '/projects',
                query: {
                    type: LATEST_PERSONAL_PROJECT['es'].type
                }
            }
        }
    }
};