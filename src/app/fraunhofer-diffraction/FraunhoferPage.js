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

const second_background = "/resources/images/663506957637469065.gif";
const main_background = "/resources/images/18_.gif";

export default function FraunhoferPage() {

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
            <br />
            <section id='section1' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
                <div className='text-background'>
                    <div style={{ color: 'white' }}>
                        <p className='text-background-fraunhofer'>
                            <div style={{ fontFamily: 'Better VCR', fontWeight: 'bold' }}>fraunhofer diffraction</div>
                        </p>
                    </div>
                </div>
                <br />
                <Link className='link-back' href="/">
                    <img src="/resources/pixels/cj2PLXc.gif" style={{ height: '15px' }} alt='' />
                    <span style={{ background: 'white', color: 'black' }}>&nbsp;back to witch page&nbsp;</span>
                    <img src="/resources/pixels/cj2PLXc.gif" style={{ width: '15px' }} alt='' />
                </Link>
                <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'row', margin: '0 auto' }}>
                    <img src="/resources/images/angel10.png" className='playlist-image' style={{ height: '200px', margin: '100px 0' }} alt='' />
                    <div style={{ margin: '20px', width: '400px' }}>
                        <VKPlaylist
                            playlistId={73}
                            ownerId={283385573}
                            width={400}
                        />
                    </div>
                    <img src="/resources/images/angel10_right.png" className='playlist-image' style={{ height: '200px', margin: '100px 0' }} alt='' />
                </div>
            </section>
            <section id='section2' style={{ margin: '0 50px', textAlign: 'center' }} >
                <div className='links-block' >
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://ivoryrite.bandcamp.com/" target="_blank" rel="noreferrer">bandcamp</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://soundcloud.com/ivoryrite/" target="_blank" rel="noreferrer">soundcloud</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://vk.com/fraunhoferdiffraction/" target="_blank" rel="noreferrer">vk</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://www.instagram.com/ivory.rite/" target="_blank" rel="noreferrer">instagram</a>
                    <hr />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <iframe style={{ margin: '10px' }} width="500" height="300" src="https://www.youtube.com/embed/voGZy4jJIOU?si=_aSIBmqRJ1CC3nXc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <iframe style={{ margin: '10px' }} width="500" height="300" src="https://www.youtube.com/embed/5J9OhDMKOoM?si=CrfSjifyWoH73yMy" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <iframe style={{ margin: '10px' }} src="https://vk.com/video_ext.php?oid=283385573&id=456239747&hd=2&hash=2888d17b037e36ca" title="VK video player" width="325" height="646" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameBorder="0" allowFullScreen></iframe>
                    <div style={{ margin: '20px', width: '400px' }}>
                        <VKPlaylist
                            playlistId={134}
                            ownerId={-150736684}
                            width={400}
                        />
                    </div>
                    <iframe style={{ margin: '10px' }} src="https://vkvideo.ru/video_ext.php?oid=283385573&id=456239748&hd=2" title="VK video player" width="500" height="300" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameBorder="0" allowFullScreen></iframe>
                </div>
            </section>
            <br />            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', fontFamily: 'dot', fontSize: '15px' }}>
                    <span style={{ background: 'white', color: 'black' }}>Last upd: 23.03.2025</span>
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