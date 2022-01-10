import React from 'react';
import { useRouter } from 'next/router';

const MenuItem = () => {
    const router = useRouter();

    const { id } = router.query;

    return (
        <div
            className="menu-card"
            style={{
                padding: '20px',
                cursor: 'pointer',
                border: '1px solid #39495c',
                marginBottom: '18px'
            }}
        >
            <h4>item {id}</h4>
        </div>
    );
};

export default MenuItem;

// .menu-card:hover {
//     transform: scale(1.01);
//     box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
//     }
