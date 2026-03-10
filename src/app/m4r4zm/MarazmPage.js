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

const ave = "/resources/images/335155b9fccc08edd74fbdbfeafac2a2.gif";


export default function MarazmPage() {

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
                <p className="text-background-marazm"
                    style={{ fontFamily: 'Abbadon', letterSpacing: '10px' }}>
                    <span style={{ fontFamily: 'Arial' }}>ΛΛ4Я4ZΛΛ</span></p>
            </div>
            <Link className="link-back" href="/">
                <img src="/resources/pixels/cj2PLXc.gif" style={{ height: 15 }} alt="" />
                <span>&nbsp;back to witch page&nbsp;</span>
                <img src="/resources/pixels/cj2PLXc.gif" style={{ width: 15 }} alt="" />
            </Link>
            <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'row', margin: '0 auto' }}>
                <img src="/resources/images/moon_1.png" className='playlist-image' style={{ height: '150px', margin: '100px 20px' }} alt='' />
                <div className='vk-playlist'>
                    <VKPlaylist
                        playlistId={97}
                        ownerId={283385573}
                        width={400}
                    />
                </div>
                <img src="/resources/images/moon.png" className='playlist-image' style={{ height: '150px', margin: '100px 20px' }} alt='' />
            </div>
            <div className='links-block'>
                <hr />
                <a style={{ margin: '0 10px' }} href="https://vk.com/m4r4zm" target="_blank" rel="noreferrer">вконтакте</a>
                <hr />
                <a style={{ margin: '0 10px' }} href="https://soundcloud.com/m4r4zm" target="_blank" rel="noreferrer">soundcloud</a>
                <hr />
                <a style={{ margin: '0 10px' }} href="https://m4r4zm.bandcamp.com/" target="_blank" rel="noreferrer">bandcamp</a>
                <hr />
            </div>
            <br />
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