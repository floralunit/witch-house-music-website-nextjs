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

const second_background = "/resources/images/dddb_2.gif";
const main_background = "/resources/images/baca.gif";
import { Vsn7Photos } from "./photos";
import GlitchSquiggly from "../../components/GlitchSquiggly";

import { Vesna } from './vesna.js';

export default function Vsn7Page() {

    const [photosVesna, setPhotosVesna] = useState([]);
    useEffect(() => {
        const musics = [
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/294311776' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/294314385' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/251419418' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1557526753' }
        ];

        if (photosVesna.length === 0) {
            const photos = Vsn7Photos.map(photo => ({
                src: photo.src,
                width: 4,
                height: 3,
                type: "photo"
            }));
            const array = photos.concat(musics);
            const shuffledArray = [...array];
            setPhotosVesna(shuffle(shuffledArray));
        }
    }, [photosVesna.length]);

    useEffect(() => {
        document.documentElement.style.setProperty('--witch-main-background', `url(${main_background})`);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const section1 = document.getElementById("section1");

            if (window.scrollY <= section1.offsetHeight) {
                document.documentElement.style.setProperty('--witch-main-background', `url(${main_background})`);
            } else {
                document.documentElement.style.setProperty('--witch-main-background', `url(${second_background})`);
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
            <hr color='white' />
            <Vesna />
            <hr color='white' />
            <br />
            <section id='section1' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
                <GlitchSquiggly>
                    <div className="header-with-bg" style={{
                        height: '183px',
                        objectFit: 'contain',
                        background: `linear-gradient(
        rgba(0, 0, 0, 0.5), 
        rgba(0, 0, 0, 0.5)
    ),url(${second_background})`,
                        backgroundSize: 'auto 183px',
                        padding: '0 20px',
                        lineHeight: '183px'
                    }}>
                        <div style={{ fontFamily: 'Arkhip', letterSpacing: '25px', color: 'white' }}>
                            <p>
                                VSN7
                            </p>
                        </div>
                    </div>
                </GlitchSquiggly>
                <h1 style={{ fontFamily: 'Arial', color: 'white', fontSize: '30px', margin: '-20px 0 0 0' }}>
                    NEDOSTUPNOSTЬ
                </h1>
                <br />
                <Link className='link-back' href="/">
                    <img src="/resources/pixels/cj2PLXc.gif" style={{ height: '15px' }} alt='' />
                    <span style={{ background: 'white', color: 'black' }}>&nbsp;back to witch page&nbsp;</span>
                    <img src="/resources/pixels/cj2PLXc.gif" style={{ width: '15px' }} alt='' />
                </Link>
                <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'row', margin: '0 auto' }}>
                    <img src="/resources/images/butterfly.png" className='playlist-image' style={{ margin: '80px 0' }} alt='' />
                    <div style={{ margin: '20px', width: '400px' }}>
                        <VKPlaylist
                            playlistId={92}
                            ownerId={283385573}
                            width={400}
                        />
                    </div>
                    <img src="/resources/images/butterfly.png" className='playlist-image' style={{ margin: '80px 0' }} alt='' />
                </div>
                <div className='links-block-background'>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://vk.com/vesna_vsn7" target="_blank" rel="noreferrer">vk</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://soundcloud.com/vsn7" target="_blank" rel="noreferrer">soundcloud</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://www.instagram.com/vsn7_vesna/" target="_blank" rel="noreferrer">instagram</a>
                    <hr />
                </div>
                <br />
            </section>
            <section id='section2' style={{ margin: '0 100px' }}>
                <div className='photo-gallery'>
                    <GalleryWithMusic items={photosVesna} className='photo-gallery'></GalleryWithMusic>
                    <br />
                    <div style={{ width: '500px', margin: '0 auto' }}>
                        <br />
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/E63P4pO20E4?si=5_p_CVNCzO0EQkem" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        <br />
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/wSrhoJK-kBc?si=ZuQJytN248CxWAcv" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                    </div>
                </div>
            </section>
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', fontFamily: 'dot', fontSize: '15px' }}>
                    <span style={{ background: 'white', color: 'black' }}>Last upd: 10.03.2025</span>
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