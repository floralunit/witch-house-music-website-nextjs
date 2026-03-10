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

const girl = "/resources/images/12_.gif";
const forest = "/resources/images/663506957637434225.gif";
import GlitchSquiggly from "../../components/GlitchSquiggly";

export default function PlachzemlyaPage() {

    useEffect(() => {
        document.documentElement.style.setProperty('--witch-main-background', `url(${girl})`);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const section1 = document.getElementById("section1");

            if (window.scrollY <= section1.offsetHeight) {
                document.documentElement.style.setProperty('--witch-main-background', `url(${girl})`);
            } else {
                document.documentElement.style.setProperty('--witch-main-background', `url(${forest})`);
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
    ),url(${forest})`,
                        backgroundSize: 'auto 183px',
                        padding: '0 20px',
                        lineHeight: '183px'
                    }}>
                        <div style={{ fontFamily: 'Abbadon', letterSpacing: '25px', color: 'white' }}>
                            <p>
                                Плачь Ʒемля
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
                    <img src="/resources/images/plant2_1.png" className='playlist-image' style={{ margin: '80px 0' }} alt='' />
                    <div style={{ margin: '20px', width: '400px' }}>
                        <VKPlaylist
                            playlistId={90}
                            ownerId={283385573}
                            width={400}
                        />
                    </div>
                    <img src="/resources/images/plant2.png" className='playlist-image' style={{ margin: '80px 0' }} alt='' />
                </div>
            </section>
            <section id='section2' style={{ textAlign: 'center' }} >
                <div className='links-block'>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://vk.com/plachzemlya" target="_blank" rel="noreferrer">vk</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://soundcloud.com/saudadeblack" target="_blank" rel="noreferrer">soundcloud</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://plachzemlya.bandcamp.com/" target="_blank" rel="noreferrer">bandcamp</a>
                    <hr />
                </div>
                <br />
                <div className='photo-gallery' style={{ margin: '0 auto', maxWidth: '850px' }}>
                    <div style={{ width: '500px', margin: '0 auto' }}>
                        <br />

                        <iframe src="https://vkvideo.ru/video_ext.php?oid=-115494169&id=456239150&hd=2" width="560" height="315" title="VK video player" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameBorder="0" allowFullScreen></iframe>
                        <br /><br />
                        <iframe src="https://vkvideo.ru/video_ext.php?oid=283385573&id=456239743&hd=2" width="360" height="640" title="VK video player" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameBorder="0" allowFullScreen></iframe>
                        <br /><br />
                        <div style={{ width: '400px' }}>
                            <div id="vk_playlist_-150736684_153"></div>
                        </div>
                    </div>
                </div>
                <br />
            </section>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', fontFamily: 'dot', fontSize: '15px' }}>
                    <span style={{ background: 'white', color: 'black' }}>Last upd: 09.03.2025</span>
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