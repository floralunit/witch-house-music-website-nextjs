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

const men = "/resources/images/men.gif";
const women = "/resources/images/1_.gif";

export default function TenebraePage() {

    const [photosTenebrae, setPhotosTenebrae] = useState([]);
    useEffect(() => {
        const musics = [
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/182757750' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/177343010' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/89892279' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/88073326' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/177338941' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/70652443' },

        ];

        if (photosTenebrae.length === 0) {
            const photosS = photos.map((obj) => ({ ...obj, type: "photo" }));
            const array = photosS.concat(musics);
            const shuffledArray = [...array];
            setPhotosTenebrae(shuffle(shuffledArray));
        }
    }, [photosTenebrae.length]);

    useEffect(() => {
        document.documentElement.style.setProperty('--witch-main-background', `url(${men})`);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const section1 = document.getElementById("section1");

            if (window.scrollY <= section1.offsetHeight + section1.offsetHeight) {
                document.documentElement.style.setProperty('--witch-main-background', `url(${men})`);
            } else {
                document.documentElement.style.setProperty('--witch-main-background', `url(${women})`);
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
                <img src="/witch-pages/tenebrae/header.gif" style={{ width: '600px', height: 'auto', margin: '0 auto' }} alt='' />
                <br />
                <Link className='link-back' href="/">
                    <img src="/resources/pixels/cj2PLXc.gif" style={{ height: '15px' }} alt='' />
                    <span style={{ background: 'white', color: 'black' }}>&nbsp;back to witch page&nbsp;</span>
                    <img src="/resources/pixels/cj2PLXc.gif" style={{ width: '15px' }} alt='' />
                </Link>
                <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'row', margin: '0 auto' }}>
                    <img src="/witch-pages/tenebrae/women.png" className='playlist-image' style={{ width: '18%', height: 'auto' }} alt='' />
                    <div style={{ width: '40%', margin: '20px' }}>
                        <VKPlaylist
                            playlistId={79}
                            ownerId={283385573}
                            width={400}
                        />
                    </div>
                    <img src="/witch-pages/tenebrae/men.png" className='playlist-image' style={{ width: '18%', height: 'auto' }} alt='' />
                </div>
            </section>
            <section id='section2' style={{ textAlign: 'center' }} >
                <div className='links-block-background'>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://www.facebook.com/whatistenebrae" target="_blank" rel="noreferrer">facebook</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://vk.com/tenebrae.music" target="_blank" rel="noreferrer">вконтакте</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://www.last.fm/ru/music/%E2%80%A0Enebr%C3%A6" target="_blank" rel="noreferrer">last.fm</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://soundcloud.com/tenebraemusic" target="_blank" rel="noreferrer">soundcloud</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://whatistenebrae.bandcamp.com/" target="_blank" rel="noreferrer">bandcamp</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://whatistenebrae.tumblr.com/" target="_blank" rel="noreferrer">tumblr</a>
                    <hr />
                </div>
                <br />
                <div className='photo-gallery' style={{ margin: '0 auto', maxWidth: '900px' }}>
                    <GalleryWithMusic items={photosTenebrae} className='photo-gallery'></GalleryWithMusic>
                </div>
                <br />
                <iframe width="560" height="315" src="https://www.youtube.com/embed/K9dUJaUhcDg?si=f3fmQflf3d76pYFY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </section>
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', fontFamily: 'dot', fontSize: '15px' }}>
                    <span style={{ background: 'white', color: 'black' }}>Last upd: 15.05.2024</span>
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