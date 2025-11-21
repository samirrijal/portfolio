import styles from '@/styles/modules/ComingSoon.module.scss';
import FadeInOut from './shared/gsap/FadeInOut';
import classNames from 'classnames';

export default function ComingSoon() {
    return (
        <section className={classNames(
            'u-spacing--responsive',
            styles['c-comingSoon']
        )}>
            <div className="o-container">
                <div className={styles['c-comingSoon__content']}>
                    <FadeInOut watch>
                        <p className={styles['c-comingSoon__text']}>
                            More projects coming soon...
                        </p>
                    </FadeInOut>
                </div>
            </div>
        </section>
    );
}
