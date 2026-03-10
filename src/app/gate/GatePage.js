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
const main_background = "/resources/images/c4818406128a73fa3de6251864a28b32.gif";

import { GatePhotos } from './photos';

export default function GatePage() {

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

    const [photosGate, setPhotosGate] = useState([]);
    useEffect(() => {

        if (photosGate.length === 0) {
            const photos = GatePhotos.map(photo => ({
                src: photo.src,
                width: 4,
                height: 3,
                type: "photo"
            }));
            const shuffledArray = [...photos];
            setPhotosGate(shuffle(shuffledArray));
        }
    }, [photosGate.length]);

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
                            src="/witch-pages/gate/photos/aImA93crPGQ.jpg"
                            style={{ width: '600px', height: 'auto' }}
                            alt=''
                        />
                        <br />
                        <Link className='link-back' href="/">
                            <img src="/resources/pixels/cj2PLXc.gif" style={{ height: '15px' }} alt='' />
                            <span style={{ background: 'white', color: 'black' }}>&nbsp;back to witch page&nbsp;</span>
                            <img src="/resources/pixels/cj2PLXc.gif" style={{ width: '15px' }} alt='' />
                        </Link>
                        <iframe style={{ margin: '15px', textAlign: 'center' }} title="vk" src="https://vk.com/video_ext.php?oid=-200546006&id=456239064&hd=2" width="560" height="315" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameBorder="0" allowFullScreen></iframe>
                    </div>
                </div>
                <br />
                <div style={{ margin: '0 15px' }}>
                    <div className='text-background'>
                        <div style={{ color: 'white' }}>
                            <p className='text-background-gate'>
                                <div style={{ fontFamily: 'Abbadon', fontWeight: 'bold' }}>Р А С П А Д</div>
                            </p>
                        </div>
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
                            src="/witch-pages/gate/photos/auLTXqeWAv4.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} src="https://vk.com/video_ext.php?oid=-32130549&id=456239048&hd=2" title="vk" width="410" height="250" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameBorder="0" allowFullScreen></iframe>
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div className='text-background'>
                        <div style={{ color: 'white' }}>
                            <p className='text-background-gate'>
                                <div style={{ fontFamily: 'Abbadon', fontWeight: 'bold' }}>Р А С П А Д  2</div>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Abbadon',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/gate/photos/DXmKX8TJ-j8.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                    </div>
                </div>
                <br />
                <div style={{ margin: '0 70px' }}>
                    <div className='photo-gallery'>
                        <GalleryWithMusic items={photosGate} className='photo-gallery'></GalleryWithMusic>
                    </div>
                </div>
                <br />
                <div style={{ margin: '0 15px' }}>

                    <div className='text-background'>
                        <div style={{ color: 'white' }}>
                            <p className='text-background-gate'>
                                <div style={{ fontFamily: 'Abbadon', fontWeight: 'bold', fontSize: '50px' }}>Unowned Sprees : the sect</div>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Abbadon',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/gate/photos/1.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} src="https://vk.com/video_ext.php?oid=52909919&id=456239272&hd=2" title="vk" width="410" height="250" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameBorder="0" allowFullScreen></iframe>
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div className='text-background'>
                        <div style={{ color: 'white' }}>
                            <p className='text-background-gate'>
                                <div style={{ fontFamily: 'Abbadon', fontWeight: 'bold' }}>ОТКРОВЕНИЯ</div>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Abbadon',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/gate/photos/Am6TA9aVt3o.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} src="https://vk.com/video_ext.php?oid=52909919&id=456239352&hd=2" title="vk" width="410" height="250" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameBorder="0" allowFullScreen></iframe>
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div className='text-background'>
                        <div style={{ color: 'white' }}>
                            <p className='text-background-gate'>
                                <div style={{ fontFamily: 'Abbadon', fontWeight: 'bold' }}>ОТКРОВЕНИЯ 2</div>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Abbadon',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/gate/photos/nK2uMsgqNts.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
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

                    <div className='text-background'>
                        <div style={{ color: 'white' }}>
                            <p className='text-background-gate'>
                                <div style={{ fontFamily: 'Abbadon', fontWeight: 'bold', fontSize: '55px' }}>Unformed Sprees</div>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Abbadon',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/gate/photos/5nBzVgHpFy0.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div className='text-background'>
                        <div style={{ color: 'white' }}>
                            <p className='text-background-gate'>
                                <div style={{ fontFamily: 'Abbadon', fontWeight: 'bold' }}>ОТКРОВЕНИЯ 3</div>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Abbadon',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/gate/photos/4lt5-GwPsuk.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div className='text-background'>
                        <div style={{ color: 'white' }}>
                            <p className='text-background-gate'>
                                <div style={{ fontFamily: 'Abbadon', fontWeight: 'bold', fontSize: '55px' }}>United Souls</div>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Abbadon',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/gate/photos/EPVDREUMrMc.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div className='text-background'>
                        <div style={{ color: 'white' }}>
                            <p className='text-background-gate'>
                                <div style={{ fontFamily: 'Abbadon', fontWeight: 'bold' }}>ОТКРОВЕНИЯ ?</div>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Abbadon',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/gate/photos/1hlY9XOy-XA.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} src="https://vk.com/video_ext.php?oid=1696685&id=456239870&hd=2&hash=629a3c7c28392ae3" title="vk" width="410" height="250" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameBorder="0" allowFullScreen></iframe>
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>
                    <div className='text-background'>
                        <div style={{ color: 'white' }}>
                            <p className='text-background-gate'>
                                <div style={{ fontFamily: 'Abbadon', fontWeight: 'bold', fontSize: '45px' }}>Unowned Sprees : hidden lake</div>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Abbadon',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/gate/photos/MDZ2r7kbtV4.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div className='text-background'>
                        <div style={{ color: 'white' }}>
                            <p className='text-background-gate'>
                                <div style={{ fontFamily: 'Abbadon', fontWeight: 'bold' }}>ОТКРОВЕНИЯ 7</div>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Abbadon',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/gate/photos/B6ACi2FTU7Q.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} width="410" height="250" src="https://www.youtube.com/embed/Ax-xIeSQObo?si=HetmDsDxvId6ZG8-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div className='text-background'>
                        <div style={{ color: 'white' }}>
                            <p className='text-background-gate'>
                                <div style={{ fontFamily: 'Abbadon', fontWeight: 'bold' }}>ОТКРОВЕНИЯ 8</div>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Abbadon',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/gate/photos/UnHR65Z3IDc.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div className='text-background'>
                        <div style={{ color: 'white' }}>
                            <p className='text-background-gate'>
                                <div style={{ fontFamily: 'Abbadon', fontWeight: 'bold', fontSize: '50px' }}>Catharsis | 7 уровень</div>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Abbadon',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/gate/photos/jSD2rNCtjzk.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                    </div>
                </div>


                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div className='text-background'>
                        <div style={{ color: 'white' }}>
                            <p className='text-background-gate'>
                                <div style={{ fontFamily: 'Abbadon', fontWeight: 'bold', fontSize: '55px' }}>Unowned Sprees 9</div>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Abbadon',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/gate/photos/FUxtk47rKd0.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} width="410" height="250" src="https://www.youtube.com/embed/54AIrdIYO5I?si=PJBB445Cp9m_iI-8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>


                <br /><br />

                <div style={{ margin: '0 15px' }}>
                    <div className='text-background'>
                        <div style={{ color: 'white' }}>
                            <p className='text-background-gate'>
                                <div style={{ fontFamily: 'Abbadon', fontWeight: 'bold', fontSize: '50px' }}>Причастие - акт 1</div>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Abbadon',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/gate/photos/OMl_01nrGKY.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} width="410" height="250" src="https://www.youtube.com/embed/pUOzEuLWp4g?si=7YxxU52uYtn1mPai" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>


                <br /><br />

                <div style={{ margin: '0 15px' }}>
                    <div className='text-background'>
                        <div style={{ color: 'white' }}>
                            <p className='text-background-gate'>
                                <div style={{ fontFamily: 'Abbadon', fontWeight: 'bold', fontSize: '50px' }}>Catharsis | 8 уровень</div>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Abbadon',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/gate/photos/8CXzPGd6aws.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />

                        <iframe style={{ margin: '15px' }} src="https://vk.com/video_ext.php?oid=-161137927&id=456239034&hd=2" title="vk" width="410" height="250" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameBorder="0" allowFullScreen></iframe>
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div className='text-background'>
                        <div style={{ color: 'white' }}>
                            <p className='text-background-gate'>
                                <div style={{ fontFamily: 'Abbadon', fontWeight: 'bold' }}>ОТКРОВЕНИЯ 9</div>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Abbadon',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/gate/photos/sdJXdXNcYio.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />

                        <iframe style={{ margin: '15px' }} src="https://vk.com/video_ext.php?oid=22814591&id=456239156&hd=2&hash=9b31b15a7ca027cf" title="vk" width="410" height="250" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameBorder="0" allowFullScreen></iframe>
                    </div>
                </div>


                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div className='text-background'>
                        <div style={{ color: 'white' }}>
                            <p className='text-background-gate'>
                                <div style={{ fontFamily: 'Abbadon', fontWeight: 'bold', fontSize: '50px' }}>ПРИЧАСТИЕ : АКТ 2</div>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Abbadon',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/gate/photos/xUnggUcEf_k.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} src="https://vk.com/video_ext.php?oid=83942138&id=456239476&hd=2" title="vk" width="410" height="250" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameBorder="0" allowFullScreen></iframe>

                    </div>
                </div>


                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div className='text-background'>
                        <div style={{ color: 'white' }}>
                            <p className='text-background-gate'>
                                <div style={{ fontFamily: 'Abbadon', fontWeight: 'bold' }}>ОТКРОВЕНИЯ X</div>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Abbadon',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/gate/photos/SnazEAniSOM.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                        <iframe style={{ margin: '15px' }} src="https://vk.com/video_ext.php?oid=-200546006&id=456239064&hd=2" title="vk" width="410" height="250" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameBorder="0" allowFullScreen></iframe>
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div className='text-background'>
                        <div style={{ color: 'white' }}>
                            <p className='text-background-gate'>
                                <div style={{ fontFamily: 'Abbadon', fontWeight: 'bold', fontSize: '50px' }}> Catharsis | 9 уровень</div>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Abbadon',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/gate/photos/QoDohhmYiXM.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div className='text-background'>
                        <div style={{ color: 'white' }}>
                            <p className='text-background-gate'>
                                <div style={{ fontFamily: 'Abbadon', fontWeight: 'bold' }}>ОТКРОВЕНИЯ XI</div>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Abbadon',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/gate/photos/5GcvTIZrpYA.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div className='text-background'>
                        <div style={{ color: 'white' }}>
                            <p className='text-background-gate'>
                                <div style={{ fontFamily: 'Abbadon', fontWeight: 'bold' }}>ОТКРОВЕНИЯ XII</div>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Abbadon',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/gate/photos/qSX5y7AkdYE.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                    </div>
                </div>

                <br /><br />

                <div style={{ margin: '0 15px' }}>

                    <div className='text-background'>
                        <div style={{ color: 'white' }}>
                            <p className='text-background-gate'>
                                <div style={{ fontFamily: 'Abbadon', fontWeight: 'bold', fontSize: '50px' }}>ПРИЧАСТИЕ : АКТ 4</div>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div style={{
                        fontFamily: 'Abbadon',
                        color: 'white',
                        fontSize: '70px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        textAlign: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/witch-pages/gate/photos/qvw6vTtsq8g.jpg"
                            style={{ height: '350px', width: 'auto' }}
                            alt=''
                        />
                    </div>
                </div>

            </section>
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
