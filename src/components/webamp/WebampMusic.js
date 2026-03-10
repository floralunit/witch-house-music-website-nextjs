// components/webamp/WebampMusic.js
'use client'

import { useEffect, useRef } from "react";

const salem = "/resources/music/Salem - Sick.mp3";
const suicidewave = "/resources/music/SUICIDEWΛVЕ - IN ʏour ΣYΣS.mp3";
const mater = "/resources/music/Mater Suspiria Vision - RETURN TO THE WITCH HOUSE.mp3";
const whatami = "/resources/music/†▼BF▼CK - WH▲T ▲M I.mp3";
const young = "/resources/music/BLVCK CEILING - Young.mp3";
const sadist = "/resources/music/Crystal Castles - Sadist[re_uploadマンモス].mp3";
const affection = "/resources/music/fraunhofer diffraction - affection.mp3";
const ether = "/resources/music/Ic3peak - Ether.mp3";
const depressed = "/resources/music/D E P R E S S E D 0 4 0 - ENSAM.mp3";
const crim3s = "/resources/music/Crim3s - Still Goin.mp3";

const krishna = "/resources/skins/hare_krishna.wsz";

export default function WebampMusic() {
    const webampRef = useRef(null);
    const webampInstance = useRef(null);

    useEffect(() => {
        // ПРОВЕРКА НА МОБИЛЬНОЕ УСТРОЙСТВО
        // Проверяем разными способами
        const isMobileDevice = () => {
            if (typeof window === 'undefined') return false;

            // Проверка по ширине экрана
            const isMobileWidth = window.innerWidth <= 768;

            // Проверка по userAgent
            const ua = navigator.userAgent.toLowerCase();
            const isMobileUA = /mobile|android|iphone|ipad|ipod|blackberry|iemobile|opera mini|opera mobi|kindle|silk/i.test(ua);

            // Проверка на touch устройство
            const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

            console.log('Mobile check:', { isMobileWidth, isMobileUA, isTouchDevice });

            // Если хоть одна проверка вернула true - это мобильное устройство
            return isMobileWidth || isMobileUA || (isTouchDevice && isMobileWidth);
        };

        // Если это мобильное устройство - выходим и ничего не инициализируем
        if (isMobileDevice()) {
            console.log('Mobile device detected, Webamp not initialized');
            return;
        }

        // Динамически импортируем Webamp только на клиенте
        const initWebamp = async () => {
            try {
                const Webamp = (await import('webamp')).default;

                if (!Webamp.browserIsSupported()) {
                    console.warn("Webamp not supported in this browser");
                    return;
                }

                if (webampInstance.current) return;

                const instance = new Webamp({
                    initialTracks: [
                        {
                            metaData: { artist: "†▼BF▼CK", title: "WH▲T ▲M I" },
                            url: whatami,
                        },
                        {
                            metaData: { artist: "BLVCK CEILING", title: "Young" },
                            url: young,
                        },
                        {
                            metaData: { artist: "Mater Suspiria Vision", title: "RETURN TO THE WITCH HOUSE" },
                            url: mater,
                        },
                        {
                            metaData: { artist: "Salem", title: "Sick" },
                            url: salem,
                        },
                        {
                            metaData: { artist: "D E P R E S S E D 0 4 0", title: "ENSAM" },
                            url: depressed,
                        },
                        {
                            metaData: { artist: "IC3PEAK", title: "Ether" },
                            url: ether,
                        },
                        {
                            metaData: { artist: "Crystal Castles", title: "Sadist" },
                            url: sadist,
                        },
                        {
                            metaData: { artist: "fraunhofer diffraction", title: "affection" },
                            url: affection,
                        },
                        {
                            metaData: { artist: "SUICIDEWΛVЕ", title: "IN ʏour ΣYΣS" },
                            url: suicidewave,
                        },
                        {
                            metaData: { artist: "Crim3s", title: "Still Goin" },
                            url: crim3s,
                        },
                    ],
                    availableSkins: [
                        { url: krishna, name: "krishna" },
                    ],
                    initialSkin: { url: krishna, name: "krishna" },
                });

                webampInstance.current = instance;

                setTimeout(() => {
                    if (webampRef.current) {
                        instance.renderWhenReady(webampRef.current);
                    }
                }, 100);

            } catch (error) {
                console.error("Failed to load Webamp:", error);
            }
        };

        initWebamp();

        return () => {
            if (webampInstance.current) {
                try {
                    webampInstance.current.close();
                } catch (e) {
                    console.log("Error closing Webamp:", e);
                }
                webampInstance.current = null;
            }
        };
    }, []);

    // Добавляем проверку и на уровне рендера
    if (typeof window !== 'undefined') {
        const isMobileWidth = window.innerWidth <= 768;
        const isMobileUA = /mobile|android|iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase());

        if (isMobileWidth || isMobileUA) {
            return null;
        }
    }

    return (
        <div
            ref={webampRef}
            className="webamp-witch"
            style={{
                position: "fixed",
                top: 0,
                right: "10%",
                zIndex: 1000
            }}
        />
    );
}