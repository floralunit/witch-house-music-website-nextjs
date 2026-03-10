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

import GlitchSquiggly from "../../components/GlitchSquiggly";

const ave = "/resources/images/5EjD.gif";

export default function TubfuckPage() {

    useEffect(() => {
        document.documentElement.style.setProperty('--witch-main-background', `linear-gradient(
        rgba(0, 0, 0, 0.4), 
        rgba(0, 0, 0, 0.4)
      ),url(${ave})`);
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
            <div className='text-background'>
                <p className="text-background-tubfuck"
                    style={{ fontFamily: 'Abbadon', letterSpacing: '20px' }}>
                    <span style={{ fontFamily: 'Arial' }}>†▼</span>BF<span style={{ fontFamily: 'Arial' }}>▼</span>CK</p>
            </div>
            <GlitchSquiggly>
                <h5 style={{ color: 'white' }}>D E P R E S S I V E</h5>
                <h5 style={{ color: 'white' }}>O C C V L T</h5>
                <h5 style={{ color: 'white' }}>D R V G</h5>
                <h5 style={{ color: 'white' }}>S H I T</h5>
            </GlitchSquiggly>
            <br />
            <Link className="link-back" href="/">
                <img src="/resources/pixels/cj2PLXc.gif" style={{ height: 15 }} alt="" />
                <span>&nbsp;back to witch page&nbsp;</span>
                <img src="/resources/pixels/cj2PLXc.gif" style={{ width: 15 }} alt="" />
            </Link>
            <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'row', margin: '0 auto' }}>
                <img src="/resources/images/angel2_l.png" className='playlist-image' style={{ height: '350px', margin: '20px 0' }} alt='' />
                <div style={{ margin: '20px', width: '400px' }}>
                    <VKPlaylist
                        playlistId={78}
                        ownerId={283385573}
                        width={400}
                    />
                </div>
                <img src="/resources/images/angel2.png" className='playlist-image' style={{ height: '350px', margin: '20px 0' }} alt='' />
            </div>
            <div className='links-block'>
                <hr />
                <a style={{ margin: '0 10px' }} href="https://vk.com/xtubfuckx" target="_blank" rel="noreferrer">вконтакте</a>
                <hr />
                <a style={{ margin: '0 10px' }} href="https://soundcloud.com/tvbfvck" target="_blank" rel="noreferrer">soundcloud</a>
                <hr />
                <a style={{ margin: '0 10px' }} href="https://tubfuck.bandcamp.com/" target="_blank" rel="noreferrer">bandcamp</a>
                <hr />
                <a style={{ margin: '0 10px' }} href="https://www.mixcloud.com/tvbfvck/" target="_blank" rel="noreferrer">mixcloud</a>
                <hr />
            </div>
            <br />
            <div style={{ margin: '0 auto' }}>
                <iframe title='youtube' src="https://vk.com/video_ext.php?oid=-48990715&id=456239018" width="426" height="240" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameBorder="0" allowFullScreen></iframe>
            </div>
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', fontFamily: 'dot', fontSize: '15px' }}>
                    <span style={{ color: 'white' }}>Last upd: 12.05.2024</span>
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
