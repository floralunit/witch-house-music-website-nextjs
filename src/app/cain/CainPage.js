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
import { CainPhotos } from "./photos";
const main_background = "/resources/images/bbcc.gif";
const second_background = "/resources/images/bada.gif";

import GlitchSquiggly from "../../components/GlitchSquiggly";

import { Cvltcain } from './cvltcain.js';

export default function CainPage() {

    const [photosCain, setPhotosCain] = useState([]);
    useEffect(() => {
        const musics = [
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/228061492' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/217579506' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/217579501' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/217579495' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/208423346' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/212120482' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/228061501' },
        ];

        if (photosCain.length === 0) {
            const photos = CainPhotos.map(photo => ({
                src: photo.src,
                width: 4,
                height: 3,
                type: "photo"
            }));
            const array = photos.concat(musics);
            const shuffledArray = [...array];
            setPhotosCain(shuffle(shuffledArray));
        }
    }, [photosCain.length]);

    useEffect(() => {
        document.documentElement.style.setProperty('--witch-main-background', `url(${main_background})`);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const section1 = document.getElementById("section1");
            const section2 = document.getElementById("section2");

            if (window.scrollY <= section1.offsetHeight + section2.offsetHeight / 2) {
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
            <section id='section1' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
                <hr />
                <Cvltcain />
                <hr />
                <div className='text-background'>
                    <div style={{ fontFamily: 'Arial', color: 'white' }}>
                        <p className='text-background-cain'>
                            † CΛIN <p className='text-rotated text-background-cain' style={{ fontFamily: 'Arial' }}>†</p>
                        </p>
                    </div>
                </div>
                <GlitchSquiggly>
                    <h1 style={{ fontFamily: 'Arial', color: 'white', letterSpacing: '30px', fontSize: '30px', margin: '-20px 0 0 0' }}>
                        汚いハスラム
                    </h1>
                </GlitchSquiggly>
                <Link className='link-back' href="/">
                    <img src="/resources/pixels/cj2PLXc.gif" style={{ height: '15px' }} alt='' />
                    <span>&nbsp;back to witch page&nbsp;</span>
                    <img src="/resources/pixels/cj2PLXc.gif" style={{ width: '15px' }} alt='' />
                </Link>
                <br />
            </section>
            <section id='section2' style={{ margin: '0 100px' }}>
                <div className='photo-gallery'>
                    <GalleryWithMusic items={photosCain} className='photo-gallery'></GalleryWithMusic>
                </div>
            </section>
            <br />
            <section id='section3' style={{ margin: '0 50px', textAlign: 'center' }} >
                <div className='links-block-background'>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://vk.com/cult_of_cain" target="_blank" rel="noreferrer">Вконтакте</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://soundcloud.com/cain667" target="_blank" rel="noreferrer">soundcloud</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://cvltcain.bandcamp.com/music" target="_blank" rel="noreferrer">bandcamp</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://www.instagram.com/kay_aides/" target="_blank" rel="noreferrer">instagram</a>
                    <hr />
                </div>
                <br />
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <div style={{ width: '400px', margin: '10px' }}>
                        <VKPlaylist
                            playlistId={70}
                            ownerId={283385573}
                            width={400}
                        />
                    </div>
                </div>
                <br />
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <iframe width="500" height="300" style={{ margin: '10px' }} src="https://www.youtube.com/embed/YslHSXm3MDI?si=WjtkT5izdwQ9Ljv0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <iframe width="500" height="300" style={{ margin: '10px' }} src="https://www.youtube.com/embed/fK1BDrUFvQ8?si=AXlliO7auk1c1mKn" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <iframe width="500" height="300" style={{ margin: '10px' }} src="https://www.youtube.com/embed/4yFDuJp9Sm4?si=okVwI3lJA6k6j67P" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </section>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', fontFamily: 'dot', fontSize: '15px' }}>
                    <span style={{ background: 'white', color: 'black' }}>Last upd: 25.06.2024</span>
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
