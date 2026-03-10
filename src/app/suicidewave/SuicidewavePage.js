"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import "../../styles/gallery.css";
import "../../styles/text-background.scss";
import "../../styles/links-block.css";
import '../../styles/WitchHousePage.css';
import '../../styles/photos.css';
import "../../styles/crt-lines.css"
import VKPlaylist from "@/components/VKPlaylist";

import { GalleryWithMusic, shuffle } from "../../components/PhotoMusicGallery";
import { photos } from "./photos";

const flowers = "/resources/images/8_.gif";
const anna = "/resources/images/19_.gif";

import GlitchSquiggly from "../../components/GlitchSquiggly";

export default function SuicidewavePage() {

    const [photosSuicide, setPhotosSuicide] = useState([]);
    useEffect(() => {
        const musics = [
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/480187986' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/480187308' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/480187251' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/480187281' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/480187317' },

        ];

        if (photosSuicide.length === 0) {
            const photosS = photos.map((obj) => ({ ...obj, type: "photo" }));
            const array = photosS.concat(musics);
            const shuffledArray = [...array];
            setPhotosSuicide(shuffle(shuffledArray));
        }
    }, [photosSuicide.length]);

    useEffect(() => {
        document.documentElement.style.setProperty('--witch-main-background', `url(${flowers})`);
    }, []);
    useEffect(() => {
        const handleScroll = () => {
            const section1 = document.getElementById("section1");

            if (window.scrollY <= section1.offsetHeight) {
                document.documentElement.style.setProperty('--witch-main-background', `url(${flowers})`);
            } else {
                document.documentElement.style.setProperty('--witch-main-background', `url(${anna})`);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="witch-page"
            style={{
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                minHeight: '100vh'
            }}>
            <div className="crt"></div>
            <br />
            <section id='section1' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
                <GlitchSquiggly>
                    <div className="header-with-bg" style={{
                        height: '183px',
                        objectFit: 'contain',
                        background: `linear-gradient(
        rgba(0, 0, 0, 0.5), 
        rgba(0, 0, 0, 0.5)
    ),url(${anna})`,
                        backgroundSize: 'auto 183px',
                        padding: '0 20px',
                        lineHeight: '183px'
                    }}>
                        <div style={{ fontFamily: 'Abbadon', letterSpacing: '25px', color: 'white' }}>
                            <p>
                                SUICIDEW<span className='text-rotated' style={{ fontFamily: 'Abbadon', margin: '0 10px 0 -25px' }}>V</span>VЕ
                            </p>
                        </div>
                    </div>
                </GlitchSquiggly>
                <br />
                <Link className='link-back' href="/">
                    <img src="/resources/pixels/cj2PLXc.gif" style={{ height: '15px' }} alt='' />
                    <span>&nbsp;back to witch page&nbsp;</span>
                    <img src="/resources/pixels/cj2PLXc.gif" style={{ width: '15px' }} alt='' />
                </Link>
                <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'row', margin: '0 auto' }}>
                    <img src="/resources/images/angel3_l.png" className='playlist-image' style={{ height: '450px', width: 'auto' }} alt='' />
                    <div style={{ width: '400px', margin: '20px' }}>
                        <VKPlaylist
                            playlistId={67}
                            ownerId={283385573}
                            width={400}
                        />
                    </div>
                    <img src="/resources/images/angel3.png" className='playlist-image' style={{ height: '450px', width: 'auto' }} alt='' />
                </div>
            </section>
            <section id='section2' style={{ textAlign: 'center' }} >
                <div className='links-block'>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://www.last.fm/ru/music/SUICIDEW%CE%9BV%D0%95" target="_blank" rel="noreferrer">last.fm</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://soundcloud.com/suicidewaveunofficial" target="_blank" rel="noreferrer">soundcloud</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://www.dropbox.com/sh/0hrark555q0u9xq/AAAtgxPk1mqB4YZ9gjejp4wYa?e=1&dl=0" target="_blank" rel="noreferrer">full discography</a>
                    <hr />
                </div>
                <br />
                <div className='photo-gallery' style={{ margin: '0 auto', maxWidth: '850px' }}>
                    <GalleryWithMusic items={photosSuicide} className='photo-gallery'></GalleryWithMusic>
                    <div style={{ width: '500px', margin: '0 auto' }}>
                        <br />
                        <VKPlaylist
                            playlistId={196}
                            ownerId={-150736684}
                            width={400}
                        />
                    </div>
                </div>
                <br />
            </section>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', fontFamily: 'dot', fontSize: '15px' }}>
                    <span style={{ background: 'white', color: 'black' }}>Last upd: 13.05.2024</span>
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0 0 0', cursor: 'pointer' }}>
                        <img src='/resources/my-button/floralunit-button.gif'
                            style={{ width: '82px', height: '32px', margin: '0 auto' }} alt='' />
                    </div>

                    <a href='https://floralunit.vercel.app/' target="_blank" rel="noreferrer"><div className='witch-link-small' style={{ fontSize: '13px', fontFamily: 'dot', textDecoration: 'none' }}>𓆩♡𓆪 floralunit world 𓆩♡𓆪</div></a>
                </div>
            </div>
            <br />
        </div>
    );
}