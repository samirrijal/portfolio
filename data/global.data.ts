import { CallToActionContent, FooterContent, Lang, MetaDataProps, NavigationRoutes, Translations } from '@/types/components/global';
import { BasicHeaderProps } from '@/types/components/headers';

export const NAVIGATION_ROUTES: Lang<NavigationRoutes> = {
    en: [
        {
            href: '/projects',
            title: 'Projects'
        },
        {
            href: '/about',
            title: 'About'
        },
        {
            href: '/contact',
            title: 'Contact'
        }
    ],
    es: [
        {
            href: '/projects',
            title: 'Proyectos'
        },
        {
            href: '/about',
            title: 'Sobre'
        },
        {
            href: '/contact',
            title: 'Contacto'
        }
    ]
};

export const FOOTER: Lang<FooterContent> = {
    en: {
        title: 'Front-end Developer'
    },
    es: {
        title: 'Desarrollador Front-end'
    }
};

export const CALL_TO_ACTION: Lang<CallToActionContent> = {
    en: {
        title: 'Get in touch',
        buttonLabel: 'Contact me',
        buttonHref: '/contact'

    },
    es: {
        title: 'Ponte en contacto',
        buttonLabel: 'Contáctame',
        buttonHref: '/contact'
    }
};

export const META_404: Lang<MetaDataProps> = {
    en: {
        title: `Error 404 | ${process.env.NEXT_PUBLIC_SITE_NAME}`
    },
    es: {
        title: `Error 404 | ${process.env.NEXT_PUBLIC_SITE_NAME}`
    }
};

export const PAGE_NOT_FOUND_HEADER: Lang<BasicHeaderProps> = {
    en: {
        title: 'Page not found',
        content: 'Cannot read properties of undefined. The page you are looking for could not be found.',
        button: {
            label: 'Please get me out of here'
        }
    },
    es: {
        title: 'Página no encontrada',
        content: 'No se pueden leer las propiedades de undefined. La página que buscas no pudo ser encontrada.',
        button: {
            label: 'Por favor, sáqueme de aquí'
        }
    }
};

export const TRANSLATIONS: Lang<Translations> = {
    en: [
        {
            key: 'Front-end Developer Full stack capable, passionate about building appealing and interactive web experiences.',
            value: 'Front-end Developer Full stack capable, passionate about building appealing and interactive web experiences.'
        },
        {
            key: 'Visit website',
            value: 'Visit website'
        },
        {
            key: 'All rights reserved',
            value: 'All rights reserved'
        },
        {
            key: 'First name',
            value: 'First name'
        },
        {
            key: 'Last name',
            value: 'Last name'
        },
        {
            key: 'Email',
            value: 'Email'
        },
        {
            key: 'Send',
            value: 'Send'
        },
        {
            key: 'Sending',
            value: 'Sending'
        },
        {
            key: 'This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" title="Privacy Policy">Privacy Policy</a> and <a href="https://policies.google.com/terms" title="Terms of Service">Terms of Service</a> apply.',
            value: 'This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" title="Privacy Policy">Privacy Policy</a> and <a href="https://policies.google.com/terms" title="Terms of Service">Terms of Service</a> apply.'
        },
        {
            key: 'Your message is on its way!',
            value: 'Your message is on its way!'
        },
        {
            key: 'Thank you, your message has been sent successfully.',
            value: 'Thank you, your message has been sent successfully.'
        },
        {
            key: 'Form has errors.',
            value: 'Form has errors.'
        },
        {
            key: 'This field is required.',
            value: 'This field is required.'
        },
        {
            key: 'The specified email address is invalid.',
            value: 'The specified email address is invalid.'
        },
        {
            key: 'An error occurred while sending the email.',
            value: 'An error occurred while sending the email.'
        },
        {
            key: 'Internal Server Error.',
            value: 'Internal Server Error.'
        },
        {
            key: 'ReCaptcha validation failed.',
            value: 'ReCaptcha validation failed.'
        },
        {
            key: 'Error validating captcha',
            value: 'Error validating captcha'
        },
        {
            key: 'Close',
            value: 'Close'
        }
    ],
    es: [
        {
            key: 'Front-end Developer Full stack capable, passionate about building appealing and interactive web experiences.',
            value: 'Desarrollador Front-end con habilidades Full stack, apasionado por crear experiencias web atractivas e interactivas.'
        },
        {
            key: 'Visit website',
            value: 'Visitar sitio web'
        },
        {
            key: 'All rights reserved',
            value: 'Todos los derechos reservados'
        },
        {
            key: 'First name',
            value: 'Nombre'
        },
        {
            key: 'Last name',
            value: 'Apellido'
        },
        {
            key: 'Email',
            value: 'Correo electrónico'
        },
        {
            key: 'Send',
            value: 'Enviar'
        },
        {
            key: 'Sending',
            value: 'Enviando'
        },
        {
            key: 'This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" title="Privacy Policy">Privacy Policy</a> and <a href="https://policies.google.com/terms" title="Terms of Service">Terms of Service</a> apply.',
            value: 'Este sitio está protegido por reCAPTCHA y la <a href="https://policies.google.com/privacy">Política de Privacidad</a> y los <a href="https://policies.google.com/terms">Términos de Servicio</a> de Google se aplican.'
        },
        {
            key: 'Your message is on its way!',
            value: '¡Tu mensaje está en camino!'
        },
        {
            key: 'Thank you, your message has been sent successfully.',
            value: 'Gracias, tu mensaje ha sido enviado con éxito.'
        },
        {
            key: 'Form has errors.',
            value: 'El formulario tiene errores.'
        },
        {
            key: 'This field is required.',
            value: 'Este campo es obligatorio.'
        },
        {
            key: 'The specified email address is invalid.',
            value: 'La dirección de correo electrónico especificada no es válida.'
        },
        {
            key: 'An error occurred while sending the email.',
            value: 'Ocurrió un error al enviar el correo electrónico.'
        },
        {
            key: 'Internal Server Error.',
            value: 'Error interno del servidor.'
        },
        {
            key: 'ReCaptcha validation failed.',
            value: 'La validación de ReCaptcha falló.'
        },
        {
            key: 'Error validating captcha',
            value: 'Error al validar el captcha'
        },
        {
            key: 'Close',
            value: 'Cerrar'
        }
    ]
};