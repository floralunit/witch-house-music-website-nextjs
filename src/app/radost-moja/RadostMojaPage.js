"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { WITCH_BACKGROUND } from '../global-const';

import "../../styles/gallery.css";
import "../../styles/text-background.scss";
import "../../styles/links-block.css";
import '../../styles/WitchHousePage.css';
import '../../styles/photos.css';
import "../../styles/crt-lines.css"
import VKPlaylist from "@/components/VKPlaylist";

import { GalleryWithMusic, shuffle } from "../../components/PhotoMusicGallery";
import RadostMojaPhotos from './RadostMojaPhotos.json';

const forest = "/resources/images/dark-forest.jpg";
const pain = "/resources/images/PVnW.gif";
const girls = "/resources/images/girls.gif";

import { Pomnim } from "./pomnim.js"
import Mrachneemrachnogo from './mrachneemrachnogo.js';
import GlitchSquiggly from "../../components/GlitchSquiggly";


export default function RadostMojaPage() {


    useEffect(() => {
        document.documentElement.style.setProperty('--witch-main-background', `url(${pain})`);
    }, []);

    const [photosRadost, setPhotosRadost] = useState([]);
    useEffect(() => {
        const musics = [
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/146296601' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/136815635' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/100073656' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/97733282' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/95891674' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/93806159' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/85851188' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/89783906' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/84421056' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/84420798' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/73476919' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/71575408' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/54515925' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/198072149' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/209861704' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/209863388' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/159272833' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/159289964' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/165725952' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/143898802' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/143021984' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/136066484' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/136068924' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/136064086' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/120655619' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/126082769' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/120655490' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/120654976' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/114081143' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/109373326' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/108868711' },

        ];

        if (photosRadost.length === 0) {
            const photos = RadostMojaPhotos.response.items.map(photo => ({
                src: photo.sizes.find(size => size.type === "x").url,
                width: 4,
                height: 3,
                title: photo.text,
                comments: photo.comments,
                type: "photo"
            }));
            const array = photos.concat(musics);
            const shuffledArray = [...array];
            setPhotosRadost(shuffle(shuffledArray));
        }
    }, [photosRadost.length]);


    useEffect(() => {
        const handleScroll = () => {
            const section1 = document.getElementById("section1");
            const section2 = document.getElementById("section2");
            const section3 = document.getElementById("section3");

            if (window.scrollY <= section1.offsetHeight) {
                document.documentElement.style.setProperty('--witch-main-background', `url(${pain})`);
            } else if (window.scrollY <= section1.offsetHeight + section2.offsetHeight / 3) {
                document.documentElement.style.setProperty('--witch-main-background', `url(${WITCH_BACKGROUND})`);
            } else if (window.scrollY <= section1.offsetHeight + section2.offsetHeight + section3.offsetHeight / 3) {
                document.documentElement.style.setProperty('--witch-main-background', `url(${forest})`);
            } else {
                document.documentElement.style.setProperty('--witch-main-background', `url(${girls})`);
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
                <Pomnim />
                <hr />
                <br />
                <div className='text-background'>
                    <p className='text-background-radost' style={{ fontFamily: 'Abbadon', letterSpacing: '25px' }}>Радость моя</p>
                </div>
                <br />
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <GlitchSquiggly onHover={false}>
                        <img src="/witch-pages/radost-moja/radost.png"
                            style={{ width: '100px', margin: '0 auto' }} alt='' />
                    </GlitchSquiggly>
                    <Mrachneemrachnogo />
                    <GlitchSquiggly onHover={false} >
                        <img src="/witch-pages/radost-moja/radostmoja-norm.png"
                            style={{ width: '100px', margin: '0 auto' }} alt='' />
                    </GlitchSquiggly>
                </div>
                <Link className='link-back' style={{ color: '#8a0303' }} href="/">
                    <img src="/resources/pixels/cj2PLXc.gif" style={{ height: '15px' }} alt='' />
                    <span>&nbsp;back to witch page&nbsp;</span>
                    <img src="/resources/pixels/cj2PLXc.gif" style={{ width: '15px' }} alt='' />
                </Link>
                <br />
            </section>
            <section id='section2' style={{ margin: '0 20px' }}>
                <div className='photo-gallery'>
                    <GalleryWithMusic items={photosRadost} className='photo-gallery'></GalleryWithMusic>
                </div>
            </section>
            <br />
            <section id='section3' style={{ margin: '0 50px', textAlign: 'center' }} >
                <GlitchSquiggly>
                    <h5 style={{ color: 'white' }}>Прими́ за́писи неизве́стные,</h5>
                    <h5 style={{ color: 'white' }}>му́зыку отве́рженную,</h5>
                    <h5 style={{ color: 'white' }}>слова́ отречённые,</h5>
                    <h5 style={{ color: 'white' }}>вечера́ потаённые.</h5>
                </GlitchSquiggly>
                <br /><br />
                <div className='links-block'>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://vk.com/radostmoja" target="_blank" rel="noreferrer">вконтакте</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://soundcloud.com/radostmoya" target="_blank" rel="noreferrer">soundcloud</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://radostmoja.bandcamp.com/" target="_blank" rel="noreferrer">bandcamp</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://radostimoja.tumblr.com/" target="_blank" rel="noreferrer">tumblr</a>
                    <hr />
                </div>
                <br />
                <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'row' }}>
                    <img src="/resources/images/heart-boy.gif" style={{ height: '200px', width: 'auto', margin: '100px 0' }} alt='' />
                    <div style={{ width: '400px', margin: '20px' }}>
                        <VKPlaylist
                            playlistId={57}
                            ownerId={283385573}
                            width={400}
                        />
                    </div>
                    <img src="/resources/images/heart-boy.gif" style={{ height: '200px', width: 'auto', margin: '100px 0', transform: 'rotate(180deg)' }} alt='' />
                </div>
                <br />
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <iframe width="500" height="300" style={{ margin: '10px' }} src="https://www.youtube.com/embed/YDYoWCIzlSM?si=Uiwi1TLxCAwg_Xhp" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <iframe src="https://vk.com/video_ext.php?oid=283385573&id=456239695&hd=2" title='vk' width="500" height="300" style={{ margin: '10px' }} allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameBorder="0" allowFullScreen></iframe>
                    <iframe width="500" height="300" style={{ margin: '10px' }} src="https://www.youtube.com/embed/Tkg7BgN-PSc?si=L7IZkgwQ3xNX9H-y" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen ></iframe>
                </div>
            </section>
            <br />
            <section id='section4' style={{ margin: '0 50px', textAlign: 'center' }} >
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <iframe width={300} height={300} style={{ margin: '10px' }} scrolling="no" frameBorder="no" allow="autoplay" title='soundcloud'
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/2466872&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    />
                    <iframe width={300} height={300} style={{ margin: '10px' }} scrolling="no" frameBorder="no" allow="autoplay" title='soundcloud'
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/3627373&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    />
                    <iframe width={300} height={300} style={{ margin: '10px' }} scrolling="no" frameBorder="no" allow="autoplay" title='soundcloud'
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/5817551&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    />
                    <iframe width={300} height={300} style={{ margin: '10px' }} scrolling="no" frameBorder="no" allow="autoplay" title='soundcloud'
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/9190387&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    />
                    <iframe width={300} height={300} style={{ margin: '10px' }} scrolling="yes" frameBorder="no" allow="autoplay" title='soundcloud'
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/14894453&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    />
                    <iframe width={300} height={300} style={{ margin: '10px' }} scrolling="yes" frameBorder="no" allow="autoplay" title='soundcloud'
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/17922124&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    />
                    <iframe width={300} height={300} style={{ margin: '10px' }} frameBorder="no" allow="autoplay" title='soundcloud'
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/24255867&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    />
                    <iframe width={300} height={300} style={{ margin: '10px' }} scrolling="yes" frameBorder="no" allow="autoplay" title='soundcloud'
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/38800757&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    />
                </div>
            </section>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', fontFamily: 'dot', fontSize: '15px' }}>
                    <span style={{ color: 'white' }}>Last upd: 09.05.2024</span>
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
