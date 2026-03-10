"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import "../../styles/gallery.css";
import "../../styles/text-background.scss";
import "../../styles/links-block.css";
import '../../styles/WitchHousePage.css';
import '../../styles/photos.css';
import "../../styles/crt-lines.css"

import { GalleryWithMusic, shuffle } from "../../components/PhotoMusicGallery";

const main_background = "/resources/images/ccdd.gif";

import { CrimewavePhotos } from './photos';

export default function CrimewavePage() {

    useEffect(() => {
        document.documentElement.style.setProperty(
            '--witch-main-background',
            `url(${main_background})`
        );
    }, []);

    const [photosCrimewave, setPhotosCrimewave] = useState([]);
    useEffect(() => {

        if (photosCrimewave.length === 0) {
            const photos = CrimewavePhotos.map(photo => ({
                src: photo.src,
                width: 4,
                height: 3,
                type: "photo"
            }));
            const shuffledArray = [...photos];
            setPhotosCrimewave(shuffle(shuffledArray));
        }
    }, [photosCrimewave.length]);

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
            <section
                id='section1'
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center'
                }}
            >
                <br />
                <div >
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/crimewave/photos/ntPq50xiUBM.jpg"
                            style={{ width: '500px', height: 'auto' }}
                            alt=''
                        />
                        <br />
                        <Link className='link-back' href="/">
                            <img src="/resources/pixels/cj2PLXc.gif" style={{ height: '15px' }} alt='' />
                            <span style={{ background: 'white', color: 'black' }}>&nbsp;back to witch page&nbsp;</span>
                            <img src="/resources/pixels/cj2PLXc.gif" style={{ width: '15px' }} alt='' />
                        </Link>
                    </div>
                </div>
                <br />
                <div style={{ margin: '0 70px' }}>
                    <div className='photo-gallery'>
                        <GalleryWithMusic items={photosCrimewave} className='photo-gallery'></GalleryWithMusic>
                    </div>
                </div>
                <br />

            </section>
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
