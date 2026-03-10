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

const ave = "/resources/images/childhood_friend.gif";

import { GalleryWithMusic, shuffle } from "../../components/PhotoMusicGallery";
import { photos } from "./photos";

export default function BlamevenusPage() {

    useEffect(() => {
        document.documentElement.style.setProperty('--witch-main-background', `linear-gradient(
        rgba(0, 0, 0, 0.6), 
        rgba(0, 0, 0, 0.6)
      ),url(${ave})`);
    }, []);

    const [photosBlame, setPhotosBlame] = useState([]);
    useEffect(() => {
        const musics = [
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/106572025' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/182112575' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/174336017' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/228844209' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/173020788' },

        ];

        if (photosBlame.length === 0) {
            const photosS = photos.map((obj) => ({ ...obj, type: "photo" }));
            const array = photosS.concat(musics);
            const shuffledArray = [...array];
            setPhotosBlame(shuffle(shuffledArray));
        }
    }, [photosBlame.length]);

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
            <div className='text-background'>
                <p className="text-background-tubfuck"
                    style={{ fontFamily: 'Abbadon', letterSpacing: '20px' }}>
                    <span style={{ fontFamily: 'Arial' }}>BLAME VENUS</span></p>
            </div>
            <Link className="link-back" href="/">
                <img src="/resources/pixels/cj2PLXc.gif" style={{ height: 15 }} alt="" />
                <span>&nbsp;back to witch page&nbsp;</span>
                <img src="/resources/pixels/cj2PLXc.gif" style={{ width: 15 }} alt="" />
            </Link>
            <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'row', margin: '0 auto' }}>
                <img src="/resources/images/people.png" className='playlist-image' style={{ height: '350px', margin: '20px 0' }} alt='' />
                <div style={{ margin: '20px', width: '400px' }}>
                    <VKPlaylist
                        playlistId={96}
                        ownerId={283385573}
                        width={400}
                    />
                </div>
                <img src="/resources/images/people.png" className='playlist-image' style={{ height: '350px', margin: '20px 0' }} alt='' />
            </div>
            <div className='links-block'>
                <hr />
                <a style={{ margin: '0 10px' }} href="https://vk.com/blamevenus" target="_blank" rel="noreferrer">вконтакте</a>
                <hr />
                <a style={{ margin: '0 10px' }} href="https://soundcloud.com/blamevenus" target="_blank" rel="noreferrer">soundcloud blamevenus</a>
                <hr />
                <a style={{ margin: '0 10px' }} href="https://soundcloud.com/bl4ck-sun" target="_blank" rel="noreferrer">soundcloud bl4ck-sun</a>
                <hr />
                <a style={{ margin: '0 10px' }} href="https://blamevenus.bandcamp.com/" target="_blank" rel="noreferrer">bandcamp blamevenus</a>
                <hr />
                <a style={{ margin: '0 10px' }} href="https://bl4cksunmusic.bandcamp.com/" target="_blank" rel="noreferrer">bandcamp bl4ck-sun</a>
                <hr />
            </div>
            <br />
            <div className='photo-gallery' style={{ margin: '0 auto', maxWidth: '850px' }}>
                <GalleryWithMusic items={photosBlame} className='photo-gallery' style={{ margin: '20px' }}></GalleryWithMusic>
            </div>
            <br />            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', fontFamily: 'dot', fontSize: '15px' }}>
                    <span style={{ color: 'white' }}>Last upd: 06.04.2025</span>
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