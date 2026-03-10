"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import "../../styles/gallery.css";
import "../../styles/text-background.scss";
import "../../styles/text-change-colors.scss"
import "../../styles/links-block.css";
import '../../styles/WitchHousePage.css';
import '../../styles/photos.css';
import "../../styles/crt-lines.css"

import VKPlaylist from "@/components/VKPlaylist";

import { photos } from "./photos";

const main_background = "/resources/images/bbcb.gif";
const second_background = "/resources/images/caca.gif";
const text_background = "/resources/images/acbb.gif";

import { GalleryWithMusic, shuffle } from "../../components/PhotoMusicGallery";

import { RakDushi } from './rakdushi.js';

export default function ScoPage() {

    const [photosSco, setPhotosSco] = useState([]);
    useEffect(() => {
        const musics = [
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/236858194' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/204101978' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/261410697' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/204106900' },

        ];

        if (photosSco.length === 0) {
            const photosS = photos.map((obj) => ({ ...obj, type: "photo" }));
            const array = photosS.concat(musics);
            const shuffledArray = [...array];
            setPhotosSco(shuffle(shuffledArray));
        }
    }, [photosSco.length]);

    useEffect(() => {
        document.documentElement.style.setProperty('--witch-main-background', `url(${main_background})`);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const section1 = document.getElementById("section1");

            if (window.scrollY <= section1.offsetHeight / 2) {
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
                <RakDushi />
                <hr />
                <br />
                <div className="header-with-bg" style={{
                    height: '183px',
                    objectFit: 'contain',
                    background: `linear-gradient(
        rgba(0, 0, 0, 0.2), 
        rgba(0, 0, 0, 0.2)
    ),url(${text_background})`,
                    backgroundSize: 'auto 183px',
                    padding: '0 20px',
                    lineHeight: '183px',
                    margin: '0 auto',
                    fontWeight: 'bold',
                    letterSpacing: '15px'
                }}>
                    <div className='sco-animate' style={{ fontFamily: 'Abbadon', color: 'white' }}>
                        <p>
                            <span style={{ fontFamily: 'Arial' }}>△</span>Sco<span style={{ fontFamily: 'Arial' }}>△</span>
                        </p>
                    </div>
                </div>
                <br />
                <Link className='link-back' href="/">
                    <img src="/resources/pixels/cj2PLXc.gif" style={{ height: '15px' }} alt='' />
                    &nbsp;<span style={{ backgroundColor: 'white', color: 'black' }}>back to witch page</span>&nbsp;
                    <img src="/resources/pixels/cj2PLXc.gif" style={{ width: '15px' }} alt='' />
                </Link>
                <br />
                <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'row', margin: '0 auto' }}>
                    <div style={{ width: '400px', margin: '0 20px' }}>
                        <VKPlaylist
                            playlistId={71}
                            ownerId={283385573}
                            width={400}
                        />
                    </div>
                    <div>
                        <br /><br /><br /><br />
                        <img src="/resources/images/heart-boy.gif" className='playlist-image' style={{ height: '250px', width: 'auto' }} alt='' />
                    </div>
                </div>
            </section>
            <br />
            <section id='section2' style={{ textAlign: 'center' }} >
                <div className='links-block-background'>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://vk.com/scowitchboy" target="_blank" rel="noreferrer">вконтакте</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://www.last.fm/ru/music/Sco?ysclid=lxukj09pk3244676194" target="_blank" rel="noreferrer">last.fm</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://soundcloud.com/scowitchboy" target="_blank" rel="noreferrer">soundcloud</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://www.instagram.com/scowitchaboi/" target="_blank" rel="noreferrer">instagram</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://scowitchboy.bandcamp.com/" target="_blank" rel="noreferrer">bandcamp</a>
                    <hr />
                </div>
                <br />
                <div className='photo-gallery' style={{ margin: '0 auto', maxWidth: '850px' }}>
                    <GalleryWithMusic items={photosSco} className='photo-gallery'></GalleryWithMusic>
                    <div style={{ width: '500px', margin: '0 auto' }}>
                        <br /><br />
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/AHO6Ph9RbAM?si=WuywFjHhxYVqhy18" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
                <br />
            </section>
            <br />            <br />
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