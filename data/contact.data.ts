import { Lang, MetaDataProps } from '@/types/components/global';
import { BasicHeaderProps } from '@/types/components/headers';

export const META_CONTACT: Lang<MetaDataProps> = {
    en: {
        title: `Contact | ${process.env.NEXT_PUBLIC_SITE_NAME}`
    },
    es: {
        title: `Contacto | ${process.env.NEXT_PUBLIC_SITE_NAME}`
    }
};

export const CONTACT_HEADER: Lang<BasicHeaderProps> = {
    en: {
        title: 'Contact',
        content: 'Is there something on your mind you\'d like to talk about? Whether it\'s related to work, just a casual conversation or need help with some code. Feel free to contact me at anytime.'
    },
    es: {
        title: 'Contacto',
        content: '¿Hay algo en tu mente de lo que te gustaría hablar? Ya sea relacionado con el trabajo, una conversación casual o necesitas ayuda con algún código. No dudes en contactarme en cualquier momento.'
    }
};