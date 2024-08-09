import React, { useEffect, useState } from 'react';

const ProgressBar = ({ value }) => {
    const [percent, setPercent] = useState(value);

    useEffect(() => {
        setPercent(Math.min(100, Math.max(value, 0)))
    }, [value])
    return (
        <div className='progress-bar'>
            <span style={{color: percent>46? "white": "black"}}>{percent.toFixed()}%</span>
            <div style={{width: `${percent}%`}} />
        </div>
    );
}

export default ProgressBar;