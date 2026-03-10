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

const flowers = "/resources/images/women.gif";
const roses = "/resources/images/roses.gif";
import GlitchSquiggly from "../../components/GlitchSquiggly";


export default function EtalybovbPage() {

    useEffect(() => {
        document.documentElement.style.setProperty('--witch-main-background', `url(${flowers})`);
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
            <div className="header-with-bg" style={{
                height: '183px',
                objectFit: 'contain',
                background: `linear-gradient(
        rgba(0, 0, 0, 0.2), 
        rgba(0, 0, 0, 0.2)
    ),url(${roses})`,
                backgroundSize: 'auto 183px',
                padding: '0 20px',
                lineHeight: '183px',
                margin: '0 auto',
                minWidth: '600px'
            }}>
                <div style={{ fontFamily: 'Arial', color: 'white' }}>
                    <p>
                        ǝțâ ΛЮƂǪɃЬ
                    </p>
                </div>
            </div>
            <br />
            <Link className='link-back' href="/">
                <img src="/resources/pixels/cj2PLXc.gif" style={{ height: '15px' }} alt='' />
                <span>&nbsp;back to witch page&nbsp;</span>
                <img src="/resources/pixels/cj2PLXc.gif" style={{ width: '15px' }} alt='' />
            </Link>
            <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'row' }}>
                <img src="/resources/images/fairy_l.png" className='playlist-image' style={{ height: '400px', width: 'auto' }} alt='' />
                <div style={{ width: '400px', margin: '20px' }}>
                    <VKPlaylist
                        playlistId={80}
                        ownerId={283385573}
                        width={400}
                    />
                </div>
                <img src="/resources/images/fairy.png" className='playlist-image' style={{ height: '400px', width: 'auto' }} alt='' />
            </div>
            <div className='links-block'>
                <hr />
                <a style={{ margin: '0 10px' }} href="https://vk.com/coolness36" target="_blank" rel="noreferrer">вконтакте</a>
                <hr />
                <a style={{ margin: '0 10px' }} href="https://soundcloud.com/etalybovb" target="_blank" rel="noreferrer">soundcloud</a>
                <hr />
                <a style={{ margin: '0 10px' }} href="https://www.last.fm/ru/music/%C7%9D%C8%9B%C3%A2+%CE%9B%D0%AE%C6%82%C7%AA%C9%83%D0%AC" target="_blank" rel="noreferrer">last.fm</a>
                <hr />
            </div>
            <br />
            <div style={{ margin: '0 auto', width: "400px", background: 'rgb(0,0,0,0.5)' }}>
                <iframe width="400px" height="80" scrolling="no" frameBorder="no" allow="autoplay" title="soundcloud" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/199375719&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                <GlitchSquiggly>
                    <h5 style={{ color: 'white', padding: '0', margin: '0' }}>Освободи себя от холода в сердце</h5>
                    <h5 style={{ color: 'white', padding: '0', margin: '0' }}>Разбуди в душе ураган страстей</h5>
                    <h5 style={{ color: 'white', padding: '0', margin: '0' }}>Если тебе некуда деться</h5>
                    <h5 style={{ color: 'white', padding: '0', margin: '0' }}>Вина красного в стакан налей</h5>
                    <br />
                    <h5 style={{ color: 'white', padding: '0', margin: '0' }}>Потухли твои глаза</h5>
                    <h5 style={{ color: 'white', padding: '0', margin: '0' }}>Я вижу в них пустоту</h5>
                    <h5 style={{ color: 'white', padding: '0', margin: '0' }}>Холодная как смерть слеза</h5>
                    <h5 style={{ color: 'white', padding: '0', margin: '0' }}>Стекает по твоему рту</h5>
                    <h5 style={{ color: 'white', padding: '0', margin: '0' }}>Мне нечего тебе сказать</h5>
                    <h5 style={{ color: 'white', padding: '0', margin: '0' }}>Потому что ты меня не слышишь</h5>
                    <h5 style={{ color: 'white', padding: '0', margin: '0' }}>Сегодня все повторится опять</h5>
                    <h5 style={{ color: 'white', padding: '0', margin: '0' }}>Но сердце не станет тише</h5>
                </GlitchSquiggly>
            </div>
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', fontFamily: 'dot', fontSize: '15px' }}>
                    <span style={{ color: 'white' }}>Last upd: 15.05.2024</span>
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