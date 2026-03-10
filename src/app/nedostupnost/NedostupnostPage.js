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

const second_background = "/resources/images/6c84f488193221209b236e1bf15238de.gif";
const main_background = "/resources/images/4db32fc86e1694f99df8bf9b86d6d290.gif";

import { NedostupnostPhotos } from './photos';

export default function NedostupnostPage() {

    useEffect(() => {
        document.documentElement.style.setProperty('--witch-main-background', `url(${main_background})`);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const section1 = document.getElementById("section1");
            const section2 = document.getElementById("section2");

            if (window.scrollY <= section1.offsetHeight) {
                document.documentElement.style.setProperty('--witch-main-background', `url(${main_background})`);
            } else if (window.scrollY <= section1.offsetHeight + section2.offsetHeight) {
                document.documentElement.style.setProperty('--witch-main-background', `url(${second_background})`);
            } else {
                document.documentElement.style.setProperty('--witch-main-background', `url(${main_background})`);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const [photosNedostupnost, setPhotosNedostupnost] = useState([]);
    useEffect(() => {
        const musics = [
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/718769947' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/622863612' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/516657756' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/516657696' },
            { type: "music", src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/959427169' }
        ];

        if (photosNedostupnost.length === 0) {
            const photos = NedostupnostPhotos.map(photo => ({
                src: photo.src,
                width: 4,
                height: 3,
                type: "photo"
            }));
            const array = photos.concat(musics);
            const shuffledArray = [...array];
            setPhotosNedostupnost(shuffle(shuffledArray));
        }
    }, [photosNedostupnost.length]);

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
                            src="/witch-pages/nedostupnost/photos/vopros.jpg"
                            style={{ width: '200px', height: 'auto' }}
                            alt=''
                        />
                        <br />
                        <Link className='link-back' href="/">
                            <img src="/resources/pixels/cj2PLXc.gif" style={{ height: '15px' }} alt='' />
                            <span style={{ color: 'white' }}>&nbsp;back to witch page&nbsp;</span>
                            <img src="/resources/pixels/cj2PLXc.gif" style={{ width: '15px' }} alt='' />
                        </Link>
                    </div>
                </div>
                <br />
                <div style={{ margin: '0 15px' }}>
                    <div style={{ color: 'white' }}>
                        <p className='text-background-nedostupnost'>
                            <div style={{ fontFamily: 'Better VCR', fontWeight: 'bold' }}>NEDOSTUPNOSTЬ I</div>
                        </p>
                    </div>

                    <br />
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/nedostupnost/photos/W-QTIhlu6oA.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} width="410" height="250" src="https://www.youtube.com/embed/TZyf7YqoC1c?si=RZ-bZjsBTjaalaFj" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>
                    <div style={{ color: 'white' }}>
                        <p className='text-background-nedostupnost'>
                            <div style={{ fontFamily: 'Better VCR', fontWeight: 'bold' }}>NEDOSTUPNOSTЬ II</div>
                        </p>
                    </div>

                    <br />
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/nedostupnost/photos/1yeLx2Wiazg.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />

                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>
                    <div style={{ color: 'white' }}>
                        <p className='text-background-nedostupnost'>
                            <div style={{ fontFamily: 'Better VCR', fontWeight: 'bold' }}>NEDOSTUPNOSTЬ III</div>
                        </p>
                    </div>
                    <br />
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/nedostupnost/photos/3.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} width="410" height="250" src="https://www.youtube.com/embed/I2e-diSAAY4?si=3ccVCGicM_9njrLO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>
                    <div style={{ color: 'white' }}>
                        <p className='text-background-nedostupnost'>
                            <div style={{ fontFamily: 'Better VCR', fontWeight: 'bold' }}>NEDOSTUPNOSTЬ IV</div>
                        </p>
                    </div>

                    <br />
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/nedostupnost/photos/4.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} width="410" height="250" src="https://www.youtube.com/embed/F2IwU1Jz-2w?si=g1gfGEtYyEppdZ0g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div style={{ color: 'white' }}>
                        <p className='text-background-nedostupnost'>
                            <div style={{ fontFamily: 'Better VCR', fontWeight: 'bold' }}>NEDOSTUPNOSTЬ V</div>
                        </p>
                    </div>

                    <br />
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/nedostupnost/photos/5.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} width="410" height="250" src="https://www.youtube.com/embed/orSmJlStbfo?si=etqEYqsrX_zmMyO3" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div style={{ color: 'white' }}>
                        <p className='text-background-nedostupnost'>
                            <div style={{ fontFamily: 'Better VCR', fontWeight: 'bold' }}>L33T 5</div>
                        </p>

                    </div>
                    <br />
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/nedostupnost/photos/L33T5.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />

                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div style={{ color: 'white' }}>
                        <p className='text-background-nedostupnost'>
                            <div style={{ fontFamily: 'Better VCR', fontWeight: 'bold' }}>L33T 6</div>
                        </p>

                    </div>
                    <br />
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/nedostupnost/photos/L33T6.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} width="410" height="250" src="https://www.youtube.com/embed/lCDQKdCU5Qo?si=he9tsPeGarOYes0E" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div style={{ color: 'white' }}>
                        <p className='text-background-nedostupnost'>
                            <div style={{ fontFamily: 'Better VCR', fontWeight: 'bold', fontSize: '40px' }}>WITCH HOUSE FESTIVAL</div>
                        </p>

                    </div>
                    <br />
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/nedostupnost/photos/WITCHHOUSEFESTIVAL.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />

                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div style={{ color: 'white' }}>
                        <p className='text-background-nedostupnost'>
                            <div style={{ fontFamily: 'Better VCR', fontWeight: 'bold', fontSize: '40px' }}>L33T: STAY OFFLINE</div>
                        </p>
                    </div>

                    <br />
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/nedostupnost/photos/L33TSTAYOFFLINE.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />

                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div style={{ color: 'white' }}>
                        <p className='text-background-nedostupnost'>
                            <div style={{ fontFamily: 'Better VCR', fontWeight: 'bold' }}>L33T 7</div>
                        </p>
                    </div>

                    <br />
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/nedostupnost/photos/L33T7.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} width="410" height="250" src="https://www.youtube.com/embed/iuRWaFBQ9_s?si=x4FXkMfKKtwqp583" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div style={{ color: 'white' }}>
                        <p className='text-background-nedostupnost'>
                            <div style={{ fontFamily: 'Better VCR', fontWeight: 'bold' }}>NEIZVESTNOSTЬ</div>
                        </p>
                    </div>

                    <br />
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/nedostupnost/photos/NEIZVESTNOSTЬ.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />

                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div style={{ color: 'white' }}>
                        <p className='text-background-nedostupnost'>
                            <div style={{ fontFamily: 'Better VCR', fontWeight: 'bold', fontSize: '40px' }}>WITCH HOUSE FESTIVAL | Санкт-Петербург</div>
                        </p>
                    </div>
                    <br />
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/nedostupnost/photos/WITCHHOUSEFESTIVALSPB.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} width="410" height="250" src="https://www.youtube.com/embed/N6q4VWR044Q?si=f_l7eDsGYLaw_W8b" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div style={{ color: 'white' }}>
                        <p className='text-background-nedostupnost'>
                            <div style={{ fontFamily: 'Better VCR', fontWeight: 'bold', fontSize: '40px' }}>L33T Open Rain</div>
                        </p>
                    </div>

                    <br />
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/nedostupnost/photos/L33TOpenRain.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />

                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div style={{ color: 'white' }}>
                        <p className='text-background-nedostupnost'>
                            <div style={{ fontFamily: 'Better VCR', fontWeight: 'bold' }}>NEDOSTUPNOSTЬ VI</div>
                        </p>
                    </div>

                    <br />
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/nedostupnost/photos/NEDOSTUPNOSTЬ6.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />

                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div style={{ color: 'white' }}>
                        <p className='text-background-nedostupnost'>
                            <div style={{ fontFamily: 'Better VCR', fontWeight: 'bold' }}>L33T 8</div>
                        </p>
                    </div>

                    <br />
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/nedostupnost/photos/L33T8.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />

                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div style={{ color: 'white' }}>
                        <p className='text-background-nedostupnost'>
                            <div style={{ fontFamily: 'Better VCR', fontWeight: 'bold' }}>NEDOSTUPNOSTЬ VII</div>
                        </p>
                    </div>
                    <br />
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/nedostupnost/photos/NEDOSTUPNOSTЬ7.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} width="410" height="250" src="https://www.youtube.com/embed/IY3ePCUCGOo?si=WAwq8OO58iKCr_GT" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div style={{ color: 'white' }}>
                        <p className='text-background-nedostupnost'>
                            <div style={{ fontFamily: 'Better VCR', fontWeight: 'bold' }}>NEDOSTUPNOSTЬ VIII</div>
                        </p>
                    </div>

                    <br />
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/nedostupnost/photos/NEDOSTUPNOSTЬ8.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />

                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div style={{ color: 'white' }}>
                        <p className='text-background-nedostupnost'>
                            <div style={{ fontFamily: 'Better VCR', fontWeight: 'bold' }}>L33T 9</div>
                        </p>
                    </div>

                    <br />
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/nedostupnost/photos/L33T9.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />

                    </div>
                </div>

                <br />
                <div style={{ margin: '0 70px' }}>
                    <div className='photo-gallery'>
                        <GalleryWithMusic items={photosNedostupnost} className='photo-gallery'></GalleryWithMusic>
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
