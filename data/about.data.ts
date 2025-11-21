import { Lang, MetaDataProps } from '@/types/components/global';
import { AboutHeaderProps } from '@/types/components/headers';
import { AboutIntroductionContent } from '@/types/components/introductions';

export const META_ABOUT: Lang<MetaDataProps> = {
    en: {
        title: `About | ${process.env.NEXT_PUBLIC_SITE_NAME}`
    },
    es: {
        title: `Sobre | ${process.env.NEXT_PUBLIC_SITE_NAME}`
    }
};

export const ABOUT_HEADER: Lang<AboutHeaderProps> = {
    en: {
        titles: ['Passionate', 'Front-end', 'Developer'],
        image: '/static/images/about-header.jpg'
    },
    es: {
        titles: ['Apasionado', 'Front-end', 'Desarrollador'],
        image: '/static/images/about-header.jpg'
    }
};

export const ABOUT_INTRODUCTION: Lang<AboutIntroductionContent> = {
    en: {
        content: [
            'I\'m a front-end developer with years of experience in building performant, accessible, and responsive applications/websites. I enjoy coding things from scratch and bringing ideas to life in the browser. The life of a developer requires one to learn new things every day because technology changes at a rapid pace. Therefore, I have embraced the concept of being a lifelong learner and continue to explore new concepts and technologies in my free time.',
            'The things we create and the quality of our work reflect our true selves, so I always strive to give my best effort.'
        ],
        image: '/static/images/about-portrait.jpg'
    },
    es: {
        content: [
            'Soy un desarrollador front-end con años de experiencia en la creación de aplicaciones/sitios web performantes, accesibles y responsivos. Me gusta programar desde cero y dar vida a mis ideas en el navegador. La vida de un desarrollador requiere aprender cosas nuevas todos los días porque la tecnología cambia rápidamente. Por lo tanto, he adoptado el concepto de ser un aprendiz de por vida y continúo explorando nuevos conceptos y tecnologías en mi tiempo libre.',
            'Las cosas que creamos y la calidad de nuestro trabajo reflejan nuestro verdadero yo, por lo que siempre me esfuerzo por dar lo mejor de mí.'
        ],
        image: '/static/images/about-portrait.jpg'
    }
};