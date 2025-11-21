import { Lang } from '@/types/components/global';
import { Models } from '@/types/hobbies/models';
import { HobbiesTabsContent } from '@/types/hobbies/tabs';
import Controller from '@/components/models/Controller';
import Headphone from '@/components/models/Headphone';
import Helmet from '@/components/models/Helmet';
import Chess from '@/components/models/Chess';

export const MODELS: Models = [Controller, Headphone, Helmet, Chess];

export const HOBBIES_TABS: Lang<HobbiesTabsContent> = {
    en: {
        title: 'Personal interests',
        tabs: [
            {
                id: 0,
                title: 'Gaming',
                description: 'I play a lot of video games, but I mostly enjoy first-person shooters, survival games, and action role-playing games. Recently, I have played games like Call of Duty, DayZ, Dark Souls series, and Elden Ring.'
            },
            {
                id: 1,
                title: 'Music',
                description: 'I listen to a broad range of genres, but my favorites would be lo-fi, alternative/indie, and pop music. I particularly enjoy listening to music while coding or during road trips.'
            },
            {
                id: 2,
                title: 'Cinema',
                description: 'I have a fondness for watching movies and TV shows. They have a positive emotional impact on me, provide a wonderful shared experience, and sometimes offer opportunities to learn something new. I consider myself a cinephile.'
            },
            {
                id: 3,
                title: 'Chess',
                description: 'I enjoy playing and studying chess in my free time. I appreciate the strategic depth of the game, the problem-solving it demands, and the satisfaction of improving through practice. Whether analyzing positions or playing online matches, chess always keeps me mentally engaged.'
            }
        ]
    },
    es: {
        title: 'Intereses personales',
        tabs: [
            {
                id: 0,
                title: 'Juegos',
                description: 'Juego a muchos videojuegos, pero principalmente disfruto de los shooters en primera persona, juegos de supervivencia y juegos de rol de acción. Recientemente, he jugado a juegos como Call of Duty, DayZ, la serie Dark Souls y Elden Ring.'
            },
            {
                id: 1,
                title: 'Música',
                description: 'Escucho una amplia variedad de géneros, pero mis favoritos son lo-fi, alternativa/indie y música pop. Me gusta especialmente escuchar música mientras programo o durante los viajes en coche.'
            },
            {
                id: 2,
                title: 'Cine',
                description: 'Me gusta mucho ver películas y programas de televisión. Tienen un impacto emocional positivo en mí, proporcionan una experiencia compartida maravillosa y a veces ofrecen oportunidades para aprender algo nuevo. Me considero un cinéfilo.'
            },
            {
                id: 3,
                title: 'Ajedrez',
                description: 'Disfruto jugar y estudiar ajedrez en mi tiempo libre. Aprecio la profundidad estratégica del juego, la resolución de problemas que exige y la satisfacción de mejorar con la práctica. Ya sea analizando posiciones o jugando partidas en línea, el ajedrez siempre me mantiene mentalmente comprometido.'
            }
        ]
    }
};