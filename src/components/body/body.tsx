import { CSSProperties, useState, useEffect } from 'react';
import body from '../../styles/body.module.scss'

export function Body() {
    const [numBubbles, setNumBubbles] = useState(0);

    useEffect(() => {
        function handleResize() {
            const num = Math.floor(window.innerWidth / 35);
            setNumBubbles(num);
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const bubbles = Array.from({ length: numBubbles }, (_, i) => {
        const randNum = Math.floor(Math.random() * 41) + 10;
        return { "--i": randNum } as CSSProperties;
    });

    return (
        <div className={body.body}>
            <div className={body.container}>
                <div className={body.bubbles}>
                    {bubbles.map((style, index) => (
                        <span key={index} style={style} />
                    ))}
                </div>
            </div>
        </div>
    );
}
