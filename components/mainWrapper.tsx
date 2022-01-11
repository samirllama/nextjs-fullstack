import * as React from 'react';

const styles = {
    wrapperClass: 'transition-property: all duration-500 mx-0 mt-10 block'
};

export default function MainWrapper({ children }) {
    const ref = React.useRef(null);
    const [margin, setMargin] = React.useState(true);

    React.useEffect(() => {
        const scroll = () => {
            const topPosition = ref.current.getBoundingClientRect().top;
            const bottomPosition = ref.current.getBoundingClientRect().bottom;
            //    if(topPosition < 0) setStyle('mx-0 mt-0 block')
        };

        window.addEventListener('scroll', scroll);
        return () => window.removeEventListener('scroll', scroll);
    }, []);

    return (
        <div id="main" ref={ref} className={styles.wrapperClass}>
            {children}
        </div>
    );
}
