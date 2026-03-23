'use client';

import '../styles/WitchHousePage.css';
import '../styles/photos.css';
import "../styles/crt-lines.css"

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import GlitchSquiggly from '../components/GlitchSquiggly';
import GlitchText from '../components/GlitchText';
import Link from 'next/link';

import { Thissadnesswilllastforever } from '../components/thissadnesswilllastforever';
import { BloodText } from '../components/BloodText';
import VKPlaylist from '../components/VKPlaylist';
import {
  WITCH_BACKGROUND,
  NOISE_BACKGROUND,
} from './global-const';
import WebampMusic from '@/components/webamp/WebampMusic';

export function WitchHousePage({ lang }) {

  const isRussian = lang === 'ru'

  const pathname = usePathname(); // Получаем текущий путь

  useEffect(() => {
    document.documentElement.style.setProperty('--witch-main-background', `url(${WITCH_BACKGROUND.src})`);
  }, []);

  useEffect(() => {
    // Устанавливаем CSS переменные

    // Обработчик скролла
    const handleScroll = () => {
      const section1 = document.getElementById("section1");
      const section2 = document.getElementById("section2");

      if (section1 && section2) {
        if (window.scrollY <= section1.offsetHeight + section2.offsetHeight - section2.offsetHeight / 3) {
          document.documentElement.style.setProperty('--witch-main-background', `url(${WITCH_BACKGROUND.src})`);
        } else {
          document.documentElement.style.setProperty('--witch-main-background', `url(${NOISE_BACKGROUND.src})`);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="witch-house-page">
      <div className='crt' />
      <WebampMusic />
      <section className="info-section" id='section1'>
        <div className="container">
          <div className="head-container">
            <hr />
            <Thissadnesswilllastforever />
            <hr />
            <BloodText />
          </div>
          <br />

          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
            <img
              src="/resources/my-button/floralunit-button.gif"
              style={{ width: '88px', height: '31px', margin: '0 auto' }}
              alt="floralunit button"
            />

            <a href='https://floralunit.vercel.app/' target="_blank" rel="noreferrer">
              <div className='witch-link-small'>
                floralunit world <br />
                <span style={{ fontFamily: 'arial' }}> 𓆩♡𓆪</span>
              </div>
            </a>

          </div>
          <br />

          <div className="info-container">
            <div className="info-text">
              {isRussian ? (
                <>
                  Витч-хаус - жанр электронной и экспериментальной музыки и цифрового искусства, впоследствии породивший целую отдельную интернет-субкультуру; возник на рубеже 2000—2010-х годов. По одной из версий, название впервые в 2009 году шуточно применил Трэвис Эгеди (сценическое имя Pictureplane) для описания музыки, создаваемой им и его соратниками.
                  <br /><br />Во всей совокупности витч-хаус несёт в себе нигилистические, деструктивные и «мрачные» настроения, неотъемлемой частью которых являются дух упадка, депрессии и меланхолии, «размышления о смерти и бессмысленности бытия». Также витч-хаусу присущи эксплуатация тематики колдовства, шаманизма и чёрной магии, преступного, аморального и развратного поведений, романтизация наркотиков и психических расстройств, эстетизация собирательного жанра ужасов (фильмы, фотографии, аниме и манга) и явления так называемого шок-контента, — звуки и/или видео с демонстрацией страданий, пыток, убийств или смерти животных и/или людей, плачей, криков и/или стонов боли, отталкивающим и тошнотворным изображением насекомых, религиозных, в частности оккультных ритуальных практик, разного рода травм и прочего.
                  <br /><br />Витч-хаус, вопреки частым заблуждениям, не имеет прямого отношения к религии в общем и к сатанизму в частности, в отличие, например, от некоторых ответвлений жанра блэк-метал; и оккультные элементы витч-хауса используются скорее как эстетическая эксплуатация: для провокации и подчёркивания общей «мрачности» музыкального жанра.
                  <br /><br />В визуальном плане витч-хаус перенял эстетику музыки 1980-х в виде аналоговых фотографий, глитч и VHS эффектов, а также в визуальном сопровождении обычно задействованы фильмы ужасов. Как правило, названия музыкальных проектов и композиций в жанре витч-хаус, помимо стандартных букв, содержат символы треугольников (△, ▲, ▽, ▼ и др.), крестов <span style={{ fontFamily: 'arial' }}>(⸸, †, ‡,</span> и др.) и прочие элементы Юникода, использование которых позволило бы подчеркнуть индивидуальность как отдельного проекта, так и всего жанра в целом, и возможность приобщиться к жанровому движению, а также затруднив нахождение музыки посредством их ввода в поисковых запросах.
                </>) : (
                <>
                  Witch house is a genre of electronic and experimental music and digital art, which subsequently spawned an entire separate internet subculture; it emerged at the turn of the 2010s. According to one version, the name was first used jokingly in 2009 by Travis Egedy (stage name Pictureplane) to describe the music created by him and his associates.
                  <br /><br />In its entirety, witch house carries nihilistic, destructive, and "bleak" sentiments, an integral part of which is a spirit of decay, depression, and melancholy, "reflections on death and the meaninglessness of existence." Witch house is also characterized by the exploitation of themes of witchcraft, shamanism, and black magic; criminal, immoral, and depraved behavior; the romanticization of drugs and mental disorders; and the aestheticization of the collective horror genre (films, photographs, anime, and manga) and the phenomenon of so-called shock content — sounds and/or videos depicting suffering, torture, murder, or the death of animals and/or people; crying, screaming, and/or moaning in pain; repulsive and nauseating images of insects, religious (particularly occult) ritual practices, various kinds of injuries, and more.
                  <br /><br />Contrary to frequent misconceptions, witch house has no direct relation to religion in general or to Satanism in particular, unlike, for example, some branches of the black metal genre; and the occult elements of witch house are used more as an aesthetic exploitation: for provocation and to emphasize the overall "bleakness" of the musical genre.
                  <br /><br />Visually, witch house adopted the aesthetic of 1980s music in the form of analog photographs, glitch and VHS effects, and horror films are typically used in the visual accompaniment. As a rule, the names of musical projects and compositions in the witch house genre, in addition to standard letters, contain triangle symbols (△, ▲, ▽, ▼, etc.), crosses <span style={{ fontFamily: 'arial' }}>(⸸, †, ‡,</span>, etc.), and other Unicode elements, the use of which would make it possible to emphasize the individuality of both a particular project and the entire genre as a whole, and the opportunity to become part of the genre movement, while also making it difficult to find the music by typing them into search queries.
                </>
              )}
            </div>
            <hr />

            <div className="vv17ch-container">
              <div className="vv17ch">
                <img
                  src="/resources/angel-right.png"
                  loading="lazy"
                  className="vv17chImg"
                  alt="angel right"
                />
              </div>

              <div className="vv17ch">
                <Link href="https://witch-house.vercel.app/vedmin-dom">

                  <GlitchSquiggly onHover={false}>
                    <img
                      src="/resources/artist-icons/vedmindom.png"
                      loading="lazy"
                      className="vv17chImg"
                      alt="Ведьмин дом"
                    />
                  </GlitchSquiggly>

                  <div className='witch-link-small' style={{ textDecoration: 'underline' }}> Ведьмин дом</div>
                </Link>
              </div>

              <div className="vv17ch">
                <Link href="https://witch-house.vercel.app/vv17chou7">

                  <GlitchSquiggly onHover={false}>
                    <img
                      src="/resources/artist-icons/vv17chou7.jpg"
                      loading="lazy"
                      className="vv17chImg"
                      alt="VV17CHØU7"
                    />
                  </GlitchSquiggly>

                  <div className='witch-link-small' style={{ textDecoration: 'underline' }}>
                    VV17CH<span style={{ fontFamily: 'arial' }}>Ø</span>U7
                  </div>
                </Link>
              </div>

              <div className="vv17ch">
                <Link href="https://witch-house.vercel.app/gate">

                  <GlitchSquiggly>
                    <img
                      src="/resources/artist-icons/gate.jpg"
                      loading="lazy"
                      className="vv17chImg"
                      alt="Gáte"
                    />
                  </GlitchSquiggly>

                  <div className='witch-link-small' style={{ textDecoration: 'underline' }}>Gáte</div>
                </Link>
              </div>

              <div className="vv17ch">
                <Link href="https://witch-house.vercel.app/nedostupnost">

                  <GlitchSquiggly>
                    <img
                      src="/resources/artist-icons/nedo.jpg"
                      loading="lazy"
                      className="vv17chImg"
                      alt="NEDOSTUPNOSTЬ"
                    />
                  </GlitchSquiggly>

                  <div className='witch-link-small' style={{ textDecoration: 'underline' }}>NEDOSTUPNOSTЬ</div>
                </Link>
              </div>

              <div className="vv17ch">
                <Link href="https://witch-house.vercel.app/crimewave">

                  <GlitchSquiggly>
                    <img
                      src="/resources/artist-icons/crimewave.jpg"
                      loading="lazy"
                      className="vv17chImg"
                      alt="CRIMEWAVE"
                    />
                  </GlitchSquiggly>

                  <div className='witch-link-small' style={{ textDecoration: 'underline' }}>CRIMEWAVE</div>
                </Link>
              </div>

              <div className="vv17ch">
                <img
                  src="/resources/angel-left.png"
                  loading="lazy"
                  className="vv17chImg"
                  alt="angel left"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='container'>
        <div className='info-text' style={{ color: 'red', textAlign: 'center', fontSize: '13px' }}>
          {isRussian ? (
            <>
              Здесь будут мои любимые исполнители. Добавлять их и оформлять странички буду по мере возможностей.
              <br /><span style={{ fontWeight: 'bold' }}>Last upd: 06.04.25 - добавлены страницы по vv17chou7, ведьмин дом, gate</span>
            </>) : (
            <>
              This is where my favorite artists will be. I'll be adding them and designing the pages as I have time.
              <br /><span style={{ fontWeight: 'bold' }}>Last upd: 06.04.25 - pages added for vv17chou7, witch house, gate</span>
            </>
          )}
        </div>
      </div>

      <section className="music-section" id='section2'>
        <div className="container">
          {/* <GlitchText> */}
          <div className="music-container">
            <div className='row'>
              {/* Радость Моя */}
              <div className="column" >
                <Link href="https://witch-house.vercel.app/radost-moja">

                  <GlitchSquiggly onHover={false} className="s">
                    <img
                      src="/resources/artist-icons/radostmoja.png"
                      loading="lazy"
                      className="s"
                      alt="Радость Моя"
                    />
                  </GlitchSquiggly>

                  <div className='witch-link'>Радость Моя</div>
                </Link>
              </div>

              {/* † CΛIN † */}
              <div className="column">
                <Link href="https://witch-house.vercel.app/cain">

                  <GlitchSquiggly onHover={false} className="l">
                    <img
                      src="/resources/artist-icons/cain.png"
                      loading="lazy"
                      className="l"
                      alt="† CΛIN †"
                    />
                  </GlitchSquiggly>

                  <div className='witch-link' style={{ fontFamily: 'arial' }}>† CΛIN †</div>
                </Link>
              </div>

              {/* SUICIDEWΛVЕ */}
              <div className="column">
                <Link href="https://witch-house.vercel.app/suicidewave">

                  <GlitchSquiggly onHover={false} className="l">
                    <br /><br /><br />
                    <img
                      src="/resources/artist-icons/suicidewave.png"
                      loading="lazy"
                      className="l"
                      alt="SUICIDEWΛVЕ"
                    />
                  </GlitchSquiggly>

                  <br />
                  <div className='witch-link' style={{ fontFamily: 'arial' }}>SUICIDEWΛVЕ</div>
                </Link>
              </div>
            </div>

            <div className="row">
              {/* †▼BF▼CK */}
              <div className="column">
                <Link href="https://witch-house.vercel.app/tvbfvck">

                  <GlitchSquiggly onHover={false} className="s">
                    <img
                      src="/resources/artist-icons/tabfuck.png"
                      loading="lazy"
                      className="l"
                      alt="†▼BF▼CK"
                    />
                  </GlitchSquiggly>

                  <div className='witch-link' style={{ fontFamily: 'arial' }}>†▼BF▼CK</div>
                </Link>
              </div>

              {/* †ENEBRÆ */}
              <div className="column">
                <Link href="https://witch-house.vercel.app/tenebrae">

                  <GlitchSquiggly onHover={false} className="s">
                    <img
                      src="/resources/artist-icons/tenebrae.png"
                      loading="lazy"
                      className="s"
                      alt="†ENEBRÆ"
                    />
                  </GlitchSquiggly>

                  <div className='witch-link' style={{ fontFamily: 'arial' }}>†ENEBRÆ</div>
                </Link>
              </div>

              {/* △Sco△ */}
              <div className="column">
                <Link href="https://witch-house.vercel.app/scowitchboy">

                  <GlitchSquiggly onHover={false} className="s">
                    <img
                      src="/resources/artist-icons/sco.png"
                      loading="lazy"
                      className="s"
                      alt="△Sco△"
                    />
                  </GlitchSquiggly>

                  <div className='witch-link' style={{ fontFamily: 'arial' }}>△Sco△</div>
                </Link>
              </div>
            </div>

            <div className="row">
              {/* ǝțâ ΛЮƂǪɃЬ */}
              <div className="column">
                <Link href="https://witch-house.vercel.app/etalybovb">

                  <GlitchSquiggly onHover={false} className="s">
                    <img
                      src="/resources/artist-icons/Etalybovb.png"
                      loading="lazy"
                      className="s"
                      alt="ǝțâ ΛЮƂǪɃЬ"
                    />
                  </GlitchSquiggly>

                  <div className='witch-link' style={{ fontFamily: 'arial' }}>ǝțâ ΛЮƂǪɃЬ</div>
                </Link>
              </div>

              {/* Summer of Haze */}
              <div className="column">
                <Link href="https://witch-house.vercel.app/summer-of-haze">

                  <GlitchSquiggly onHover={false} className="s">
                    <img
                      src="/resources/artist-icons/summer.png"
                      loading="lazy"
                      className="s"
                      alt="Summer of Haze"
                    />
                  </GlitchSquiggly>

                  <div className='witch-link'>Summer of Haze</div>
                </Link>
              </div>

              {/* Mugl */}
              <div className="column" style={{ textAlign: 'center' }}>
                <Link href="https://witch-house.vercel.app/mugl">

                  <GlitchSquiggly onHover={false} className="s">
                    <img
                      src="/resources/artist-icons/mugl.png"
                      loading="lazy"
                      className="s"
                      style={{ maxHeight: '250px' }}
                      alt="Mugl"
                    />
                  </GlitchSquiggly>

                  <div className='witch-link'>Mugl</div>
                </Link>
              </div>
            </div>

            <div className="row">
              {/* Fraunhofer Diffraction */}
              <div className="column">
                <Link href="https://witch-house.vercel.app/fraunhofer-diffraction">

                  <GlitchSquiggly onHover={false} className="s">
                    <img
                      src="/resources/artist-icons/fd.png"
                      loading="lazy"
                      className="s"
                      alt="Fraunhofer Diffraction"
                    />
                  </GlitchSquiggly>

                  <div className='witch-link'>Fraunhofer Diffraction</div>
                </Link>
              </div>

              {/* Πлачь Ʒемля */}
              <div className="column">
                <Link href="https://witch-house.vercel.app/plach-zemlya">

                  <GlitchSquiggly onHover={false} className="s">
                    <img
                      src="/resources/artist-icons/plach.png"
                      loading="lazy"
                      className="l"
                      alt="Πлачь Ʒемля"
                    />
                  </GlitchSquiggly>

                  <div className='witch-link' style={{ fontFamily: 'arial' }}>Πлачь Ʒемля</div>
                </Link>
              </div>

              {/* D E P R E S S E D 0 4 0 */}
              <div className="column">
                <Link href="https://witch-house.vercel.app/depressed040">

                  <GlitchSquiggly onHover={false} className="s">
                    <img
                      src="/resources/artist-icons/depressed40.png"
                      loading="lazy"
                      className="s"
                      alt="D E P R E S S E D 0 4 0"
                    />
                  </GlitchSquiggly>

                  <div className='witch-link'>D E P R E S S E D 0 4 0</div>
                </Link>
              </div>
            </div>

            <div className="row">
              {/* △XIUS LIИK */}
              <div className="column">
                <Link href="https://witch-house.vercel.app/axius-link">

                  <GlitchSquiggly onHover={false} className="s">
                    <img
                      src="/resources/artist-icons/axius.png"
                      loading="lazy"
                      className="s"
                      alt="△XIUS LIИK"
                    />
                  </GlitchSquiggly>

                  <div className='witch-link' style={{ fontFamily: 'arial' }}>△XIUS LIИK</div>
                </Link>
              </div>

              {/* VSN7 */}
              <div className="column">
                <Link href="https://witch-house.vercel.app/vsn7">

                  <GlitchSquiggly onHover={false} className="l">
                    <img
                      src="/resources/artist-icons/vsn7.png"
                      loading="lazy"
                      className="l"
                      alt="VSN7"
                    />
                  </GlitchSquiggly>

                  <div className='witch-link'>VSN7</div>
                </Link>
              </div>

              {/* BLAME VENUS */}
              <div className="column">
                <Link href="https://witch-house.vercel.app/blame-venus">

                  <GlitchSquiggly onHover={false} className="s">
                    <img
                      src="/resources/artist-icons/blamevenus.png"
                      loading="lazy"
                      className="s"
                      alt="BLAME VENUS"
                      style={{ maxHeight: '250px' }}
                    />
                  </GlitchSquiggly>

                  <div className='witch-link'>BLAME VENUS</div>
                </Link>
              </div>
            </div>

            <div className="row">
              {/* ΛΛ4Я4ZΛΛ */}
              <div className="column">
                <Link href="https://witch-house.vercel.app/m4r4zm">

                  <GlitchSquiggly onHover={false} className="s">
                    <img
                      src="/resources/artist-icons/marazm.png"
                      loading="lazy"
                      className="s"
                      alt="ΛΛ4Я4ZΛΛ"
                    />
                  </GlitchSquiggly>

                  <div className='witch-link' style={{ fontFamily: 'arial' }}>ΛΛ4Я4ZΛΛ</div>
                </Link>
              </div>
            </div>
          </div>
          {/* </GlitchText> */}
        </div>
      </section>
      <br />

      <section className="info-section" id='section3'>
        <div className="container">
          <div className='info-container'>
            <div className='info-text'>

              {isRussian ? (
                <>
                  <div style={{ textAlign: "center" }}>
                    <GlitchSquiggly>
                      <h1>История витч-хауса</h1>
                    </GlitchSquiggly>
                  </div>
                  <br /><br />

                  <h2>Зарождение, 2005-2008 гг.</h2>
                  15 августа 2005 года концептуальный художник Антонио Урдиалес (Antonio Urdiales) впервые начинает делиться своей музыкой, стилизованными изображениями и анимациями в своём блоге на «Живом Журнале» под никнеймами Ponyboy и GODBLESS. В будущем его работы станут опорой и вдохновением для возникновения «эстетики» визуальной составляющей жанра витч-хаус.
                  <br /> <br />

                  <h2>Разрастание, 2009-2010 гг.</h2>
                  Начальные этапы становления витч-хауса совпали с периодом популяризации такого явления, как даркнет и появления первых криптовалют. Некоторые аспекты культуры даркнета повлияли на формирование визуального стиля витч-хауса, что особенно заметно в раннем творчестве проекта Blvck Ceiling.
                  <br /><br />Выпуск крупных альбомов Dark Rift (2009) от Pictureplane и King Night (2010) группы Salem и появление таких музыкальных проектов, как White Ring и Ritualz за короткое время дают стимул мощному развитию витч-хаус.
                  <br /><br />С этого периода самобытное звучание и эксцентричная эстетика жанра стали стремительно распространяться в популярных на тот момент социальных сетях Myspace и Tumblr, где уже активно обсуждали, воспроизводили и делились витч-хаусом множество DIY-музыкантов. Появляются десятки новых музыкальных проектов, таких как Crim3s, Purity Ring, Gvcci Hvcci, oOoOO, Crystal Castles и Holy Other.
                  <br /><br />Происходит стремительное развитие жанра, который уже на тот момент представлял собой противопоставление новой «волне» западной поп-музыки. Предельно мрачное и нестандартное, нарочито грубое и необработанное звучание, обильное использование хоррор и арт-хаус эстетики и символов Юникода закрепляются в витч-хаусе как его неотъемлемая часть, порождая «атмосферу магии хаоса, волшебной свободы и анархии». Среди тех, кто внёс наибольший вклад в развитие жанра в данный период можно выделить такие проекты, как Blvck Ceiling и Sidewalks and Skeletons.
                  <br /> <br />

                  <h2>Перерождение, 2011-2012 гг.</h2>
                  Появляется российский лейбл ODDOT, c которого начинается развитие жанра в России, и на котором начинают издаваться такие исполнители, как (((O))), Summer of Haze, Mugl и Crossparty. Также в это время появляется англоязычный форум witch-house.com, ставший отправной точкой в формировании сообщества на западе и к настоящему времени также являющийся лейблом, выпускающим музыкальные альбомы, синглы и сборники, ориентированные на ценителей «старой школы» витч-хауса. Возникают музыкальные коллективы Crim3s, Chainless.
                  <br /><br />Происходит перерождение жанра. В это время на западе популярность витч-хауса спадает, новые релизы уже практически не выходят, а исполнители участвуют в живых выступлениях всё реже и реже. Однако в это же время в России витч-хаус становится значительно популярнее и начинает развиваться стремительными темпами. На сцене появляются исполнители, которые вскоре станут «культовыми» для жанра и определят его дальнейшее развитие на годы вперёд как в России, так и в США и Европе.
                  <br /><br />В этот период в России начинает зарождаться своё комьюнити, никак не пересекающееся с западным, что в дальнейшем сильно отразится на самом жанре. Начинают встречаться первые упоминания витч-хауса в интернет-изданиях. Также появляются первые крупные промоутеры — Untitled Burial и Nightmares and 808s, внёсшие большой вклад в формирование комьюнити, сохранение и развитие жанра по обе стороны океана.
                  <br /> <br />

                  <h2>Золотой век, 2013-2015 гг.</h2>
                  Этот период принято считать «золотым веком» витч-хауса. Множество исполнителей как в России, так и в США и Европе выпускают релиз за релизом, немалая часть из которых станет эталоном витч-хауса. В России проходит множество живых выступлений и крупных вечеринок, таких как VV17CHØU7 и ВЕДЬМИН ДОМ. В США витч-хаус переживает второе рождение, при этом в Европе с ним происходят определённые метаморфозы, которые приводят к активному развитию недавно появившийся жанра электронной музыки — wave (не путать с жанром, появившемся в 1980-х годах). Возникают новые исполнители, впоследствии приобретшие большую известность: Fraunhofer Diffraction, † CΛIN † и Craspore.
                  <br /> <br />

                  <h2>Упадок, 2016-2021 гг.</h2>
                  В этот период истории жанра происходит постепенный спад его популярности; также бо́льшая часть известных исполнителей со временем перестаёт активно создавать музыку, творчески стагнируя и не привнося ничего нового в сам жанр, в то время как новых исполнителей практически не появляется. В 2016 году закрываются наиболее значимые и популярные нет-лейблы: Aural Sects (США), Pale Noir (США), Equilateral Records (Чили) и MUTANT FUNK (Россия).
                  <br /><br />В 2021 году впервые за несколько лет в России проходит полноформатный витч-хаус фестиваль CRIMEWAVE, на который собралось порядка 1 500 человек. В том же году возникают новые жанры, такие как дримкор (dreamcore), или вирдкор (weirdcore), которые практически полностью затмевают собой витч-хаус.
                  <br /><br />В январе 2022 состоялась пятая часть крупного фестиваля NEDOSTUPNOSTЬ в Москве.
                </>) : (
                <>
                  <div style={{ textAlign: "center" }}>
                    <GlitchSquiggly>
                      <h1>The History of Witch House</h1>
                    </GlitchSquiggly>
                  </div>
                  <br /><br />
                  <h2>The Genesis, 2005-2008</h2>
                  On August 15, 2005, conceptual artist Antonio Urdiales first began sharing his music, stylized images, and animations on his LiveJournal blog under the nicknames Ponyboy and GODBLESS. In the future, his work would become a foundation and inspiration for the emergence of the "aesthetic" of the visual component of the witch house genre.
                  <br /><br />
                  <h2>Proliferation, 2009-2010</h2>
                  The initial stages of witch house's formation coincided with the period of popularization of the darknet phenomenon and the emergence of the first cryptocurrencies. Certain aspects of darknet culture influenced the formation of witch house's visual style, which is particularly noticeable in the early work of the project Blvck Ceiling.
                  <br /><br />The release of major albums such as Pictureplane's *Dark Rift* (2009) and Salem's *King Night* (2010), along with the emergence of musical projects like White Ring and Ritualz, quickly provided the impetus for the powerful development of witch house.
                  <br /><br />From this period onward, the genre's distinctive sound and eccentric aesthetic began to spread rapidly across the then-popular social networks Myspace and Tumblr, where numerous DIY musicians were already actively discussing, reproducing, and sharing witch house. Dozens of new musical projects emerged, such as Crim3s, Purity Ring, Gvcci Hvcci, oOoOO, Crystal Castles, and Holy Other.
                  <br /><br />The genre underwent rapid development, already at that time representing a counterpoint to the new "wave" of Western pop music. An extremely dark and unconventional, deliberately raw and unpolished sound, along with the abundant use of horror and art-house aesthetics and Unicode symbols, became established as integral parts of witch house, generating an "atmosphere of chaos magic, magical freedom, and anarchy." Among those who contributed most significantly to the genre's development during this period, projects like Blvck Ceiling and Sidewalks and Skeletons can be highlighted.
                  <br /><br />
                  <h2>Rebirth, 2011-2012</h2>
                  The Russian label ODDOT emerges, marking the beginning of the genre's development in Russia, and releases music by artists such as (((O))), Summer of Haze, Mugl, and Crossparty. Around the same time, the English-language forum witch-house.com appears, becoming a starting point for forming the community in the West and, to this day, also functioning as a label releasing albums, singles, and compilations geared towards connoisseurs of the "old school" witch house. Musical collectives like Crim3s and Chainless are formed.
                  <br /><br />A rebirth of the genre occurs. During this time, witch house's popularity wanes in the West; new releases become scarce, and performers participate in live shows less and less frequently. However, at this very time, witch house becomes significantly more popular in Russia and begins to develop at a rapid pace. Performers emerge who will soon become "cult" figures for the genre and define its further development for years to come, both in Russia and in the US and Europe.
                  <br /><br />During this period, a distinct community begins to form in Russia, with no overlap with the Western one — a fact that will later greatly impact the genre itself. The first mentions of witch house start appearing in online publications. The first major promoters also emerge — Untitled Burial and Nightmares and 808s — who make significant contributions to forming the community and preserving and developing the genre on both sides of the ocean.
                  <br /><br />
                  <h2>The Golden Age, 2013-2015</h2>
                  This period is widely considered the "golden age" of witch house. Numerous artists in Russia, the US, and Europe release one record after another, a considerable portion of which would become benchmarks for the genre. In Russia, many live performances and major parties take place, such as VV17CHØU7 and ВЕДЬМИН ДОМ (Witch House). In the US, witch house experiences a second birth, while in Europe it undergoes certain metamorphoses that lead to the active development of the then-recently emerged electronic music genre — wave (not to be confused with the genre that appeared in the 1980s). New artists emerge who subsequently gain great fame: Fraunhofer Diffraction, † CΛIN †, and Craspore.
                  <br /><br />
                  <h2>Decline, 2016-2021</h2>
                  During this period in the genre's history, a gradual decline in its popularity occurs; furthermore, most of the well-known artists eventually stop actively creating music, experiencing creative stagnation and bringing nothing new to the genre itself, while new artists are practically non-existent. In 2016, the most significant and popular net-labels close down: Aural Sects (USA), Pale Noir (USA), Equilateral Records (Chile), and MUTANT FUNK (Russia).
                  <br /><br />In 2021, for the first time in several years, a full-scale witch house festival, CRIMEWAVE, takes place in Russia, gathering around 1,500 people. In the same year, new genres such as dreamcore or weirdcore emerge, which almost completely overshadow witch house.
                  <br /><br />In January 2022, the fifth installment of the major festival NEDOSTUPNOSTЬ was held in Moscow.
                </>
              )}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ width: '400px', margin: '10px' }}>
              <VKPlaylist
                ownerId={283385573}
                playlistId={66}
                hash="673a590f1a736bd2ab"
                width={400}
              />
            </div>
            <div style={{ width: '400px', margin: '10px' }}>
              <VKPlaylist
                ownerId={283385573}
                playlistId={41}
                hash="1da7061a109e85cd77"
                width={400}
              />
            </div>
          </div>
        </div>
      </section>
      <br /> <br />
    </div>
  );
}