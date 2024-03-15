
import styles from './styles.module.scss';
// import original from '../../../../public/images/original.png';
// import lucy from '../../../../public/images/lucy.png';
// import moonback from '../../../../public/images/moonback.png';
// import rocks from '../../../../public/images/rocks.png'
// import spaceback from '../../../../public/images/spaceback.png'
// import david from '../../../../public/images/david.png'

import original1 from '../../../../public/images/original1.png';
import pants from '../../../../public/images/pants.png';
import arm from '../../../../public/images/arm.png';
import sword from '../../../../public/images/sword.png';
import mist from '../../../../public/images/mist.png';
import crown from '../../../../public/images/crown.png';
import hair from '../../../../public/images/hair.png';
import eyes from '../../../../public/images/eyes.png';



import Image from 'next/image';
import { useScroll, useTransform, motion} from 'framer-motion';
import { useRef } from 'react';

export default function Index() {
    
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const pictures = [
        {
            src: original1,
            scale: scale4
        },
        {
            src: pants,
            scale: scale6
        },
        {
            src: arm,
            scale: scale6
        },
        {
            src: sword,
            scale: scale6
        },
        {
            src: mist,
            scale: scale6
        },
        {
            src: crown,
            scale: scale6
        },
        {
            src: hair,
            scale: scale6
        },
        {
            src: eyes,
            scale: scale6
        }


       
    ]

    return (
        <div ref={container} className={styles.container}>
            <div className={styles.sticky}>
                {
                    pictures.map( ({src, scale}, index) => {
                        return <motion.div key={index} style={{scale}} className={styles.el}>
                            <div className={styles.imageContainer}>
                                <Image
                                    src={src}
                                    fill
                                    alt="image"
                                    placeholder='blur'
                                />
                            </div>
                        </motion.div>
                    })
                }
            </div>
        </div>
    )
}