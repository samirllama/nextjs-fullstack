import * as React from 'react';

const styles = {
    wrapperClass: 'transition-property: all duration-500 mx-3 mt-10 block'
};

export default function MainWrapper({ children }) {
    const ref = React.useRef(null);
    const [margin, setMargin] = React.useState(true);

    return (
        <div id="main" ref={ref} className={styles.wrapperClass}>
            {children}
        </div>
    );
}
