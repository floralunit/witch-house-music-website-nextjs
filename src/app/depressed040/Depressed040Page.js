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

import { GalleryWithMusic, shuffle } from "../../components/PhotoMusicGallery";
import { DepressedPhotos } from "./photos";

const mainBackground = "/resources/images/Ote.gif";
const secondBackground = "/resources/images/dabc.gif";

const rabbit = "/resources/images/rabbit.png";
const backGif = "/resources/pixels/cj2PLXc.gif";

export default function Depressed040Page() {

    const [photosDepressed, setPhotosDepressed] = useState([]);

    useEffect(() => {
        const musics = [
            {
                type: "music",
                src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1023242209",
            },
            {
                type: "music",
                src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/237060749",
            },
            {
                type: "music",
                src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/941322226",
            },
            {
                type: "music",
                src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/237061011",
            },
        ];

        const photos = DepressedPhotos.map((photo) => ({
            src: photo.src,
            width: 4,
            height: 3,
            type: "photo",
        }));

        const combined = [...photos, ...musics];
        setPhotosDepressed(shuffle(combined));
    }, []);

    useEffect(() => {
        const root = document.documentElement;

        root.style.setProperty(
            "--witch-main-background",
            `url(${mainBackground})`
        );
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const section1 = document.getElementById("section1");
            if (!section1) return;

            if (window.scrollY <= section1.offsetHeight - 100) {
                document.documentElement.style.setProperty(
                    "--witch-main-background",
                    `url(${mainBackground})`
                );
            } else {
                document.documentElement.style.setProperty(
                    "--witch-main-background",
                    `url(${secondBackground})`
                );
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="witch-house-page">
            <div className='crt' />
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>

                <section
                    id="section1"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        textAlign: "center",
                    }}
                >
                    <div className="text-background">
                        <div style={{ color: "white" }}>
                            <p className="text-background-depressed">
                                <span style={{ fontFamily: "dot", fontWeight: "bold" }}>
                                    D E P R E S S E D 0 4 0
                                </span>
                            </p>
                        </div>
                    </div>

                    <Link className="link-back" href="/">
                        <img src={backGif} style={{ height: 15 }} alt="" />
                        <span>&nbsp;back to witch page&nbsp;</span>
                        <img src={backGif} style={{ width: 15 }} alt="" />
                    </Link>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            margin: "0 auto",
                        }}
                    >
                        <img src={rabbit} className="playlist-image" style={{ margin: "80px 0" }} alt="" />

                        <div style={{ margin: 20, width: 400 }}>
                            <VKPlaylist
                                playlistId={91}
                                ownerId={283385573}
                                width={400}
                            />
                        </div>

                        <img src={rabbit} className="playlist-image" style={{ margin: "80px 0" }} alt="" />
                    </div>

                    <div className="links-block">
                        <hr />
                        <a href="https://depressed040.tumblr.com/" target="_blank" rel="noreferrer">
                            tumblr
                        </a>
                        <hr />
                        <a href="https://soundcloud.com/depressed040" target="_blank" rel="noreferrer">
                            soundcloud
                        </a>
                        <hr />
                        <a href="https://depressed040.bandcamp.com/" target="_blank" rel="noreferrer">
                            bandcamp
                        </a>
                        <hr />
                    </div>
                </section>
                <br />
                <section id="section2" style={{ margin: "0 100px" }}>
                    <div className="photo-gallery">
                        <GalleryWithMusic items={photosDepressed} />
                        <div style={{ width: 500, margin: "0 auto" }}>
                            <br />
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/3Q2QWoF7uYk"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            />
                            <br /><br />
                        </div>
                    </div>
                </section>
                <br />            <br />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', fontFamily: 'dot', fontSize: '15px' }}>
                        <span style={{ background: 'white', color: 'black' }}>Last upd: 10.03.2025</span>
                        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0 0 0', cursor: 'pointer' }}>
                            <img src='/resources/my-button/floralunit-button.gif'
                                style={{ width: '82px', height: '32px', margin: '0 auto' }} alt='' />
                        </div>

                        <a href='https://floralunit.vercel.app/' target="_blank" rel="noreferrer"><div className='witch-link-small' style={{ fontSize: '13px', fontFamily: 'dot', textDecoration: 'none' }}>????? floralunit world ?????</div></a>
                    </div>
                </div>
                <br />
            </div>
        </div>
    );
}