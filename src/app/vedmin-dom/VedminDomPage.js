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

const text3_background = "/resources/images/444.gif";
const text2_background = "/resources/images/4_.gif";
const text1_background = "/resources/images/smoke.gif";
const third_background = "/resources/images/ccad.gif";
const second_background = "/resources/images/5mjD.gif";
const main_background = "/resources/images/18_.gif";

import { VedmindomPhotos } from './photos';

export default function VedminDomPage() {

    useEffect(() => {
        document.documentElement.style.setProperty('--witch-main-background', `url(${main_background})`);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const section1 = document.getElementById("section1");
            const section2 = document.getElementById("section2");
            const section3 = document.getElementById("section3");

            if (window.scrollY <= section1.offsetHeight) {
                document.documentElement.style.setProperty('--witch-main-background', `url(${main_background})`);
            } else if (window.scrollY <= section1.offsetHeight + section2.offsetHeight) {
                document.documentElement.style.setProperty('--witch-main-background', `url(${second_background})`);
            } else if (window.scrollY <= section1.offsetHeight + section2.offsetHeight + section3.offsetHeight) {
                document.documentElement.style.setProperty('--witch-main-background', `url(${third_background})`);
            } else {
                document.documentElement.style.setProperty('--witch-main-background', `url(${main_background})`);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const [photosVedminDom, setPhotosVedminDom] = useState([]);
    useEffect(() => {

        if (photosVedminDom.length === 0) {
            const photos = VedmindomPhotos.map(photo => ({
                src: photo.src,
                width: 4,
                height: 3,
                type: "photo"
            }));
            const shuffledArray = [...photos];
            setPhotosVedminDom(shuffle(shuffledArray));
        }
    }, [photosVedminDom.length]);

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
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            textAlign: 'center',
                            justifyContent: 'center'
                        }}>
                            <img
                                src="/resources/images/angel1.png"
                                style={{ height: '120px', width: 'auto', margin: '15px' }}
                                alt=''
                            />
                            <img
                                src="/witch-pages/vedmin-dom/photos/NxBqafomgvk.jpg"
                                style={{ width: '400px', height: 'auto' }}
                                alt=''
                            />

                            <img
                                src="/resources/images/angel1_l.png"
                                style={{ height: '120px', width: 'auto', margin: '15px' }}
                                alt=''
                            />
                        </div>
                        <br />
                        <Link className='link-back' href="/">
                            <img src="/resources/pixels/cj2PLXc.gif" style={{ height: '15px' }} alt='' />
                            <span style={{ background: 'white', color: 'black' }}>&nbsp;back to witch page&nbsp;</span>
                            <img src="/resources/pixels/cj2PLXc.gif" style={{ width: '15px' }} alt='' />
                        </Link>

                        <iframe style={{ margin: '15px', textAlign: 'center' }} src="https://vkvideo.ru/video_ext.php?oid=-150736684&id=456239435&hd=2" width="410" height="250" title='vk' allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameBorder="0" allowFullScreen></iframe>
                        <iframe style={{ margin: '15px', textAlign: 'center' }} width="410px" height="70px" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1911335450&color=%23090909&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                        <br />
                    </div>
                </div>

                <div style={{ margin: '0 15px' }}>
                    <div className="header-with-bg" style={{
                        height: '120px',
                        objectFit: 'contain',
                        background: `linear-gradient(
                            rgba(0, 0, 0, 0.5), 
                            rgba(0, 0, 0, 0.5)
                        ),url(${text1_background})`,
                        backgroundSize: 'auto 120px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'CyrillicGoth', color: 'white', fontSize: '35px' }}>
                            <p>
                                ВЕДЬМИН ДОМ I
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Arial',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <iframe style={{ margin: '15px' }} width="410" height="250" src="https://www.youtube.com/embed/dJoFqM9iTrU?si=kS4UBcYKx9W7Es41" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>
                    <div className="header-with-bg" style={{
                        height: '120px',
                        objectFit: 'contain',
                        background: `linear-gradient(
                            rgba(0, 0, 0, 0.5), 
                            rgba(0, 0, 0, 0.5)
                        ),url(${text1_background})`,
                        backgroundSize: 'auto 120px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'CyrillicGoth', color: 'white', fontSize: '35px' }}>
                            <p>
                                ВЕДЬМИН ДОМ ∞ TORQUE
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Arial',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/vedmin-dom/photos/l8MQCmdMVv0.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} width="410" height="250" src="https://www.youtube.com/embed/pqk1NR5bM54?si=Qqa1ztfOmnQeF-0a" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>
                    <div className="header-with-bg" style={{
                        height: '120px',
                        objectFit: 'contain',
                        background: `linear-gradient(
                            rgba(0, 0, 0, 0.5), 
                            rgba(0, 0, 0, 0.5)
                        ),url(${text1_background})`,
                        backgroundSize: 'auto 120px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'CyrillicGoth', color: 'white', fontSize: '35px' }}>
                            <p>
                                ВЕДЬМИН ДОМ ∞ TORQUE
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Arial',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/vedmin-dom/photos/6FADAEnUFJg.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} width="410" height="250" src="https://www.youtube.com/embed/vufy1v0sKK0?si=LcmVG9n7YmHCW6l3" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>
                    <div className="header-with-bg" style={{
                        height: '120px',
                        objectFit: 'contain',
                        background: `linear-gradient(
                            rgba(0, 0, 0, 0.5), 
                            rgba(0, 0, 0, 0.5)
                        ),url(${text1_background})`,
                        backgroundSize: 'auto 120px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'CyrillicGoth', color: 'white', fontSize: '35px' }}>
                            <p>
                                ВЕДЬМИН ДОМ ∞ ЛАК
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Arial',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/vedmin-dom/photos/3eaomTsECK8.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>
                    <div className="header-with-bg" style={{
                        height: '120px',
                        objectFit: 'contain',
                        background: `linear-gradient(
                            rgba(0, 0, 0, 0.5), 
                            rgba(0, 0, 0, 0.5)
                        ),url(${text1_background})`,
                        backgroundSize: 'auto 120px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'CyrillicGoth', color: 'white', fontSize: '35px' }}>
                            <p>
                                ВЕДЬМИН ДОМ ∞ КАПЕЛЛА
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Arial',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/vedmin-dom/photos/GYum_-vw4OE.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} width="410" height="250" src="https://www.youtube.com/embed/m5cEhtFSo9k?si=JdLeYMlXL7rvKFhn" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
            </section>

            <br /><br />

            <section
                id='section2'
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center'
                }}
            >

                <div style={{ margin: '0 15px' }}>
                    <div className="header-with-bg" style={{
                        height: '120px',
                        objectFit: 'contain',
                        background: `linear-gradient(
                            rgba(0, 0, 0, 0.5), 
                            rgba(0, 0, 0, 0.5)
                        ),url(${text1_background})`,
                        backgroundSize: 'auto 120px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'CyrillicGoth', color: 'white', fontSize: '35px' }}>
                            <p>
                                ВЕДЬМИН ДОМ ∞ БИБЛИОТЕКА
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Arial',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/vedmin-dom/photos/EuIk4sXNgaQ.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} width="410" height="250" src="https://www.youtube.com/embed/AKPRg7qDyWo?si=UYNDI_QvFW7nlH5Y" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>
                    <div className="header-with-bg" style={{
                        height: '120px',
                        objectFit: 'contain',
                        background: `linear-gradient(
                            rgba(0, 0, 0, 0.5), 
                            rgba(0, 0, 0, 0.5)
                        ),url(${text2_background})`,
                        backgroundSize: 'auto 330px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'CyrillicGoth', color: 'white', fontSize: '35px' }}>
                            <p>
                                ВЕДЬМИН ДОМ ∞ МОРЕ
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Arial',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/vedmin-dom/photos/IwEZ6-RL6u8.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} width="410" height="250" src="https://www.youtube.com/embed/S1gOiB1D6zw?si=pus9h0KdFu0n8uDK" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>
                    <div className="header-with-bg" style={{
                        height: '120px',
                        objectFit: 'contain',
                        background: `linear-gradient(
                            rgba(0, 0, 0, 0.5), 
                            rgba(0, 0, 0, 0.5)
                        ),url(${text2_background})`,
                        backgroundSize: 'auto 330px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'CyrillicGoth', color: 'white', fontSize: '35px' }}>
                            <p>
                                ВЕДЬМИН ДОМ ∞ ТЮМЕНЬ
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Arial',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/vedmin-dom/photos/H_6JsXIWGSY.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>
                    <div className="header-with-bg" style={{
                        height: '120px',
                        objectFit: 'contain',
                        background: `linear-gradient(
                            rgba(0, 0, 0, 0.5), 
                            rgba(0, 0, 0, 0.5)
                        ),url(${text2_background})`,
                        backgroundSize: 'auto 330px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'CyrillicGoth', color: 'white', fontSize: '35px' }}>
                            <p>
                                ВЕДЬМИН ДОМ ∞ ОДИН ГОД
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Arial',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/vedmin-dom/photos/vedmin_dom.gif"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} width="410" height="250" src="https://www.youtube.com/embed/aKkvg_ChQXo?si=OgufUhtj9kqsBwdR" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>
                    <div className="header-with-bg" style={{
                        height: '120px',
                        objectFit: 'contain',
                        background: `linear-gradient(
                            rgba(0, 0, 0, 0.5), 
                            rgba(0, 0, 0, 0.5)
                        ),url(${text2_background})`,
                        backgroundSize: 'auto 330px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'CyrillicGoth', color: 'white', fontSize: '35px' }}>
                            <p>
                                РУССКАЯ ТЬМА
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Arial',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/vedmin-dom/photos/vA4fGJqklrE.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                    </div>
                </div>

                <br />
                <div className='links-block-background'>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://vk.com/vedmin_dom" target="_blank" rel="noreferrer">Вконтакте</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://vedmindomrussia.tumblr.com/" target="_blank" rel="noreferrer">tumblr</a>
                    <hr />
                </div>
                <br />

                <div style={{ margin: '0 70px' }}>
                    <div className='photo-gallery'>
                        <GalleryWithMusic items={photosVedminDom} className='photo-gallery'></GalleryWithMusic>
                    </div>
                </div>

            </section>

            <section
                id='section3'
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center'
                }}
            >

                <br /><br />

                <div style={{ margin: '0 15px' }}>
                    <div className="header-with-bg" style={{
                        height: '120px',
                        objectFit: 'contain',
                        background: `linear-gradient(
                            rgba(0, 0, 0, 0.5), 
                            rgba(0, 0, 0, 0.5)
                        ),url(${text2_background})`,
                        backgroundSize: 'auto 330px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'CyrillicGoth', color: 'white', fontSize: '25px' }}>
                            <p>
                                ВЕДЬМИН ДОМ ∞ ОТКРЫТЫЙ ВОЗДУХ
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Arial',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/vedmin-dom/photos/3eupcg7eUz8.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} width="410" height="250" src="https://www.youtube.com/embed/LDYxWXjp0EM?si=GJaG0zcmjCij2jry" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>
                    <div className="header-with-bg" style={{
                        height: '120px',
                        objectFit: 'contain',
                        background: `linear-gradient(
                            rgba(0, 0, 0, 0.5), 
                            rgba(0, 0, 0, 0.5)
                        ),url(${text3_background})`,
                        backgroundSize: 'auto 330px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'CyrillicGoth', color: 'white', fontSize: '35px' }}>
                            <p>

                                ВЕДЬМИН ДОМ X
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Arial',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/vedmin-dom/photos/QKG4-imckRo.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} width="410" height="250" src="https://www.youtube.com/embed/wumepUJMDag?si=bYXEd8HzgMIPZF1R" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>
                    <div className="header-with-bg" style={{
                        height: '120px',
                        objectFit: 'contain',
                        background: `linear-gradient(
                            rgba(0, 0, 0, 0.5), 
                            rgba(0, 0, 0, 0.5)
                        ),url(${text3_background})`,
                        backgroundSize: 'auto 330px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'CyrillicGoth', color: 'white', fontSize: '35px' }}>
                            <p>
                                ВЕДЬМИН ДОМ XI
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Arial',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/vedmin-dom/photos/Fo0RQIgAmr4.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} width="410" height="250" src="https://www.youtube.com/embed/dOjgXWYbrBs?si=5IzPLTiZKAhiFImu" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>
                    <div className="header-with-bg" style={{
                        height: '120px',
                        objectFit: 'contain',
                        background: `linear-gradient(
                            rgba(0, 0, 0, 0.5), 
                            rgba(0, 0, 0, 0.5)
                        ),url(${text3_background})`,
                        backgroundSize: 'auto 330px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'CyrillicGoth', color: 'white', fontSize: '35px' }}>
                            <p>

                                ВЕДЬМИН ДОМ XII
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Arial',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/vedmin-dom/photos/hAHsXuKKEBc.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} width="410" height="250" src="https://www.youtube.com/embed/W3JxpOql45w?si=7HdFMNQLAF1kFmS_" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>
                    <div className="header-with-bg" style={{
                        height: '120px',
                        objectFit: 'contain',
                        background: `linear-gradient(
                            rgba(0, 0, 0, 0.5), 
                            rgba(0, 0, 0, 0.5)
                        ),url(${text3_background})`,
                        backgroundSize: 'auto 330px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'CyrillicGoth', color: 'white', fontSize: '25px' }}>
                            <p>

                                ВЕДЬМИН ДОМ XIII: 2 ГОДА НА СЦЕНЕ
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Arial',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/vedmin-dom/photos/tzQMvjNUOww.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                    </div>
                </div>

                <br /><br />


                <div style={{ margin: '0 15px' }}>
                    <div className="header-with-bg" style={{
                        height: '120px',
                        objectFit: 'contain',
                        background: `linear-gradient(
                            rgba(0, 0, 0, 0.5), 
                            rgba(0, 0, 0, 0.5)
                        ),url(${text3_background})`,
                        backgroundSize: 'auto 330px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'CyrillicGoth', color: 'white', fontSize: '35px' }}>
                            <p>
                                ВЕДЬМИН ДОМ ∞ МОСКВА
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Arial',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/vedmin-dom/photos/POOeQMHUXww.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                    </div>
                </div>

                <br /><br />


                <div style={{ margin: '0 15px' }}>
                    <div className="header-with-bg" style={{
                        height: '120px',
                        objectFit: 'contain',
                        background: `linear-gradient(
                            rgba(0, 0, 0, 0.5), 
                            rgba(0, 0, 0, 0.5)
                        ),url(${text3_background})`,
                        backgroundSize: 'auto 330px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'CyrillicGoth', color: 'white', fontSize: '35px' }}>
                            <p>

                                ПОСЛЕДНИЙ ВЕДЬМИН ДОМ
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Arial',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/vedmin-dom/photos/oOlbgE5Qe9k.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} width="410" height="250" src="https://www.youtube.com/embed/kAK7qoNVg9w?si=-WH9lK6acz0rNWtI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>
                    <div className="header-with-bg" style={{
                        height: '120px',
                        objectFit: 'contain',
                        background: `linear-gradient(
                            rgba(0, 0, 0, 0.5), 
                            rgba(0, 0, 0, 0.5)
                        ),url(${text3_background})`,
                        backgroundSize: 'auto 330px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'CyrillicGoth', color: 'white', fontSize: '35px' }}>
                            <p>


                                РУССКАЯ ТЬМА 2
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Arial',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/vedmin-dom/photos/kfkZn0VXh4A.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>
                    <div className="header-with-bg" style={{
                        height: '120px',
                        objectFit: 'contain',
                        background: `linear-gradient(
            rgba(0, 0, 0, 0.5), 
            rgba(0, 0, 0, 0.5)
        ),url(${text3_background})`,
                        backgroundSize: 'auto 330px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'CyrillicGoth', color: 'white', fontSize: '35px' }}>
                            <p>

                                ВЕДЬМИН ДОМ: ВОЗРОЖДЕНИЕ
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Arial',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/vedmin-dom/photos/KLHWuAmcHPs.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} src="https://vkvideo.ru/video_ext.php?oid=-150736684&id=456239793&hd=2" title="vk" width="410" height="250" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameBorder="0" allowFullScreen></iframe>
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>
                    <div className="header-with-bg" style={{
                        height: '120px',
                        objectFit: 'contain',
                        background: `linear-gradient(
            rgba(0, 0, 0, 0.5), 
            rgba(0, 0, 0, 0.5)
        ),url(${text3_background})`,
                        backgroundSize: 'auto 330px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'CyrillicGoth', color: 'white', fontSize: '35px' }}>
                            <p>

                                ВЕДЬМИН ДОМ Х CRIM3S
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Arial',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/vedmin-dom/photos/u93ghP9jNXI.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} width="410" height="250" src="https://www.youtube.com/embed/Z7_k644dCco?si=HFoKPqNo0tKJls6A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>

                </div>
                <br />
                <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', margin: '0 auto' }}>
                    <div style={{ width: '400px', margin: '20px' }}>
                        <VKPlaylist
                            playlistId={149}
                            ownerId={-150736684}
                            width={400}
                        />
                    </div>
                </div>
            </section>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', fontFamily: 'dot', fontSize: '15px' }}>
                    <span style={{ background: 'white', color: 'black' }}>Last upd: 25.03.2025</span>
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