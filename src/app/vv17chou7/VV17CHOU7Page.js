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

const second_background = "/resources/images/baba.gif";
const main_background = "/resources/images/13.gif";

import { Vv17chou7 } from './vv17chou7Text';
import { VV17CHOU7Photos } from './photos';

export default function VV17CHOU7Page() {

    useEffect(() => {
        document.documentElement.style.setProperty('--witch-main-background', `url(${main_background})`);
    }, []);

    const [photosVv17chou7, setPhotosVv17chou7] = useState([]);
    useEffect(() => {
        const musics = [
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/155682507' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/154824757' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/154601524' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/153899543' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/154020925' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/154182467' }
        ];

        if (photosVv17chou7.length === 0) {
            const photos = VV17CHOU7Photos.map(photo => ({
                src: photo.src,
                width: 4,
                height: 3,
                type: "photo"
            }));
            const array = photos.concat(musics);
            const shuffledArray = [...array];
            setPhotosVv17chou7(shuffle(shuffledArray));
        }
    }, [photosVv17chou7.length]);

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
                <hr />
                <Vv17chou7 />
                <hr />
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
                            src="/witch-pages/vv17chou7/photos/UZkGNXWqMHk.jpg"
                            style={{ width: '600px', height: 'auto' }}
                            alt=''
                        />
                        <br />
                        <Link className='link-back' href="/">
                            <img src="/resources/pixels/cj2PLXc.gif" style={{ height: '15px' }} alt='' />
                            <span style={{ background: 'white', color: 'black' }}>&nbsp;back to witch page&nbsp;</span>
                            <img src="/resources/pixels/cj2PLXc.gif" style={{ width: '15px' }} alt='' />
                        </Link>
                        <iframe style={{ margin: '15px', textAlign: 'center' }} width="560" height="315" src="https://www.youtube.com/embed/FaF2kQeN3hU?si=NqnAUlzSoTbn8mBc" autoplay='1' title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
                <div style={{ margin: '0 15px' }}>
                    <div className="header-with-bg" style={{
                        height: '120px',
                        objectFit: 'contain',
                        background: `linear-gradient(
                            rgba(0, 0, 0, 0.5), 
                            rgba(0, 0, 0, 0.5)
                        ),url(${second_background})`,
                        backgroundSize: 'auto 330px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'Better VCR', color: 'white', fontSize: '65px' }}>
                            <p>
                                VV17CHØU7
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
                            src="/witch-pages/vv17chou7/photos/unswl-wue1M.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} src="https://vkvideo.ru/video_ext.php?oid=-74730723&id=171630624&hd=1" title='VK' width="410" height="250" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameBorder="0" allowFullScreen></iframe>
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
                        ),url(${second_background})`,
                        backgroundSize: 'auto 330px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'Better VCR', color: 'white', fontSize: '55px' }}>
                            <p>
                                &nbsp;VV17CHØU7 II&nbsp;
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

                        <iframe style={{ margin: '15px' }} src="https://vkvideo.ru/video_ext.php?oid=-74730723&id=171630636&hd=2" title='VK' width="410" height="250" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameBorder="0" allowFullScreen></iframe>
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
                        ),url(${second_background})`,
                        backgroundSize: 'auto 330px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'Better VCR', color: 'white', fontSize: '55px' }}>
                            <p>
                                VV17CHØU7 III
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
                            src="/witch-pages/vv17chou7/photos/J1JQMnEcvxA.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} src="https://vkvideo.ru/video_ext.php?oid=-74730723&id=171630637&hd=2" title='VK' width="410" height="250" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameBorder="0" allowFullScreen></iframe>
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
    ),url(${second_background})`,
                        backgroundSize: 'auto 330px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'Better VCR', color: 'white', fontSize: '55px' }}>
                            <p>
                                &nbsp;VV17CHØU7 IV&nbsp;
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
                            src="/witch-pages/vv17chou7/photos/WeVH_FFK7tw.jpg"
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
                        ),url(${second_background})`,
                        backgroundSize: 'auto 330px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'Better VCR', color: 'white', fontSize: '55px' }}>
                            <p>
                                &nbsp;VV17CHØU7 V&nbsp;
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
                            src="/witch-pages/vv17chou7/photos/dvgP_jeNh6I.jpg"
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
                        ),url(${second_background})`,
                        backgroundSize: 'auto 330px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'Better VCR', color: 'white', fontSize: '50px' }}>
                            <p>
                                VV17CHØU7 KVZVN
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
                            src="/witch-pages/vv17chou7/photos/tknK0qesT0Y.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} src="https://vkvideo.ru/video_ext.php?oid=-74730723&id=171630663&hd=2" title='VK' width="410" height="250" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameBorder="0" allowFullScreen></iframe>
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
                        ),url(${second_background})`,
                        backgroundSize: 'auto 330px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'Better VCR', color: 'white', fontSize: '55px' }}>
                            <p>
                                &nbsp;VV17CHØU7 VI&nbsp;
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
                            src="/witch-pages/vv17chou7/photos/l1Vy674Bewk.jpg"
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
                        ),url(${second_background})`,
                        backgroundSize: 'auto 330px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'Better VCR', color: 'white', fontSize: '55px' }}>
                            <p>
                                VV17CHØU7 VII
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
                            src="/witch-pages/vv17chou7/photos/IATBm3qqllg.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} src="https://vkvideo.ru/video_ext.php?oid=304864481&id=171169759&hd=2" title='VK' width="410" height="250" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameBorder="0" allowFullScreen></iframe>
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
                        ),url(${second_background})`,
                        backgroundSize: 'auto 330px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'Better VCR', color: 'white', fontSize: '45px' }}>
                            <p>
                                VV17CHØU7 VØZM3ZD13
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
                            src="/witch-pages/vv17chou7/photos/O9DhDGySM7A.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} width="410" height="250" src="https://www.youtube.com/embed/y6vL0r_VGB0?si=hJk2cGZHwFQeZlN4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
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
                        ),url(${second_background})`,
                        backgroundSize: 'auto 330px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'Better VCR', color: 'white', fontSize: '55px' }}>
                            <p>
                                VV17CHØU7 IX
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
                            src="/witch-pages/vv17chou7/photos/D8yH4NVOyYA.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} width="410" height="250" src="https://www.youtube.com/embed/PnqiWsyH-3w?si=MLkuuPCLjQlj5Uny" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
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
                        ),url(${second_background})`,
                        backgroundSize: 'auto 330px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'Better VCR', color: 'white', fontSize: '55px' }}>
                            <p>
                                &nbsp;VV17CHØU7 X&nbsp;
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
                            src="/witch-pages/vv17chou7/photos/u_0VFDsAaOk.jpg"
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
                        ),url(${second_background})`,
                        backgroundSize: 'auto 330px',
                        lineHeight: '120px',
                        maxWidth: '660px'
                    }}>
                        <div style={{ fontFamily: 'Better VCR', color: 'white', fontSize: '35px' }}>
                            <p>
                                &nbsp;VV17CHØU7 III YEARS&nbsp;
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
                            src="/witch-pages/vv17chou7/photos/88888.gif"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                    </div>
                </div>

                <br /><br />

                <div className='links-block-background'>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://vk.com/w17chou7" target="_blank" rel="noreferrer">Вконтакте</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://soundcloud.com/vv17chou7" target="_blank" rel="noreferrer">soundcloud</a>
                    <hr />
                    <a style={{ margin: '0 10px' }} href="https://www.instagram.com/vv17chou7" target="_blank" rel="noreferrer">instagram</a>
                    <hr />
                </div>
                <br />

                <div style={{ margin: '0 50px' }}>
                    <div className='photo-gallery'>
                        <GalleryWithMusic items={photosVv17chou7} className='photo-gallery'></GalleryWithMusic>
                    </div>
                </div>

            </section>
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', fontFamily: 'dot', fontSize: '15px' }}>
                    <span style={{ background: 'white', color: 'black' }}>Last upd: 24.03.2025</span>
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
