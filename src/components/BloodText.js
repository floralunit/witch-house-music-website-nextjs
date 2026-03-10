'use client';

import React, { useEffect, useState } from 'react';
import './BloodText.css';

export function BloodText() {

    const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
        document.fonts.load('1em evil-sound-font').then(() => {
            setFontLoaded(true);
        });
    }, []);

    if (!fontLoaded) return null;

    return (
        <div className="bloodText">
            <svg version="1.1" viewBox="0 0 0 0" width="0" height="0"
                style={{ display: 'none' }}>
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
                        <feColorMatrix in="blur" mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                            result="goo" />
                    </filter>
                </defs>
            </svg>

            <div className="goo">
                <div className="witchHeader">Witch House</div>

                <div className="drop"></div>
                <div className="drop"></div>
                <div className="drop"></div>
                <div className="drop"></div>
                <div className="drop"></div>
                <div className="drop"></div>
                <div className="drop"></div>
            </div>
        </div>
    );
}