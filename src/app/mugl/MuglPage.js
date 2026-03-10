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

const mainbackground = "/resources/images/caba.gif";
const secondbackground = "/resources/images/663506957637434250.gif";

import GlitchSquiggly from "../../components/GlitchSquiggly";

export default function MuglPage() {

    useEffect(() => {
        document.documentElement.style.setProperty('--witch-main-background', `url(${mainbackground})`);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const section1 = document.getElementById("section1");

            if (window.scrollY <= section1.offsetHeight) {
                document.documentElement.style.setProperty('--witch-main-background', `url(${mainbackground})`);
            } else {
                document.documentElement.style.setProperty('--witch-main-background', `url(${secondbackground})`);
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
                        ),url(${secondbackground})`,
                        backgroundSize: 'auto 183px',
                        padding: '0 20px',
                        lineHeight: '183px',
                        maxWidth: '700px',
                    }}>
                        <div style={{ fontFamily: 'Abbadon', letterSpacing: '25px', color: 'white', fontSize: '120px' }}>
                            <p>
                                Mugl
                            </p>
                        </div>
                    </div>
                </GlitchSquiggly>
                <br />
                <Link className='link-back' href="/">
                    <img src="/resources/pixels/cj2PLXc.gif" style={{ height: '15px' }} alt='' />
                    &nbsp;<span style={{ backgroundColor: 'white', color: 'black' }}>back to witch page</span>&nbsp;
                    <img src="/resources/pixels/cj2PLXc.gif" style={{ width: '15px' }} alt='' />
                </Link>
                <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'row', margin: '0 auto' }}>
                    <img src="/resources/images/eye1_left.png" className='playlist-image' style={{ height: '100px', width: 'auto', margin: '100px 0' }} alt='' />
                    <div style={{ width: '400px', margin: '20px' }}>
                        <VKPlaylist
                            playlistId={74}
                            ownerId={283385573}
                            width={400}
                        />
                    </div>
                    <img src="/resources/images/eye1.png" className='playlist-image' style={{ height: '100px', width: 'auto', margin: '100px 0' }} alt='' />
                </div>
            </section>
            <section id='section2' style={{ textAlign: 'center' }} >
                <div className='links-block-background' >
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://mugl.bandcamp.com/" target="_blank" rel="noreferrer">bandcamp</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://soundcloud.com/mugly/" target="_blank" rel="noreferrer">soundcloud</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://vk.com/iammugl/" target="_blank" rel="noreferrer">vk</a>
                    <hr />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <iframe style={{ margin: '10px' }} width="500" height="300" src="https://www.youtube.com/embed/pjBgDjgvc80?si=gZbjH_NvB4IJ-AEU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <iframe style={{ margin: '10px' }} width="500" height="300" src="https://www.youtube.com/embed/mibcLkE9ENw?si=X0rS-q1yoFdvCGYs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <iframe style={{ margin: '10px' }} width="500" height="300" src="https://www.youtube.com/embed/ExB5dcs4Iio?si=pWP9oTjxYDieRqhQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <div style={{ margin: '20px', width: '400px' }}>
                        <VKPlaylist
                            playlistId={95}
                            ownerId={-150736684}
                            width={400}
                        />
                    </div>
                </div>
            </section>
            <br />
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