import style from "./MainContent.module.scss";
import deadpoolPortrait from "../../assets/deadpoolPortrait.png";
import deadpoolEyes from "../../assets/blackEye.png";
import deadpoolBadge from "../../assets/deadpoolBadge.png";
import marvelLogo from "../../assets/marvelLogo.png";
import deadpoolCard from "../../assets/deadpoolCard.jpg";
import ironmanCard from "../../assets/ironmanCard.jpg";
import spidermanCard from "../../assets/spidermanCard.jpg";
import grootCard from "../../assets/grootCard.jpg";
import redBlackArrow from "../../assets/red_black_arrow.png";
import deadpoolLovePose from '../../assets/deadpool_love_pose.png'
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
const MainContent = () => {
  const marqueeRef1 = useRef(null);
  const marqueeRef2 = useRef(null);
  const repeatCount = 50;

  useEffect(() => {
    const animateMarquee = (marquee) => {
      const inner = marquee.querySelector(`.${style.marqueeInner}`);
      const clone = inner.cloneNode(true);
      marquee.appendChild(clone);
      gsap.to(inner, {
        xPercent: -50, // move entire content half its width
        duration: 20, // control speed
        ease: "none",
        repeat: -1,
      });
    };

    animateMarquee(marqueeRef1.current);
    animateMarquee(marqueeRef2.current);

    // clone content to create a seamless loop
  }, []);

  const cardsRef = useRef([]);

  const handleSwap = (direction) => {
    const cards = cardsRef.current;
    if (!cards.length) return;

    const frontCard = cards[0];
    const moveX = direction === "left" ? -300 : 300;
    const rotate = direction === "left" ? -45 : 45;

    gsap.to(frontCard, {
      x: moveX,
      rotate,
      opacity: 0,
      duration: 0.5,
      ease: "power2.in",
      onComplete: () => {
        // Move it to the back
        frontCard.style.zIndex = -1;
        gsap.set(frontCard, { x: 0, rotate: 0, opacity: 1 });

        cards.push(cards.shift());

        cards.forEach((card, index) => {
          gsap.set(card, { zIndex: cards.length - index });
        });
      },
    });
  };
  return (
    <>
      <section className={style.section1}>
        <div className={style.topTexts}>
          <div className={style.left}>
            <p>Action</p>
            <p>Comedy</p>
            <p>Sci-fi</p>
          </div>
          <div className={style.right}>
            <p>Release [May 3, 2024]</p>
          </div>
        </div>

        <div className={style.names}>
          <div className={style.left}>
            <p>Ryan Reynolds</p>
            <p>Karan Soni</p>
          </div>
          <div className={style.right}>
            <p>Emma Corrin</p>
            <p>Hugh Jackman</p>
          </div>
          <p className={style.threeRom}>III</p>
        </div>
        <img className={style.deadpoolPortrait} src={deadpoolPortrait} alt="" />
        <div className={style.redCircle}></div>
        <h2 className={style.titleText}>Deadpool</h2>
        <p className={style.year}>[2024]</p>

        <div className={style.marqueTrack} ref={marqueeRef1}>
          <div className={style.marqueeInner}>
            {[...Array(repeatCount)].map((_, index) => (
              <img
                key={index}
                className={style.eye}
                src={deadpoolEyes}
                alt="deadpool-eye"
              />
            ))}
          </div>
        </div>
        <div className={style.bottomContainer}>
          <div className={style.left}>
            <div className={style.header}>
              <div className={style.beltLogo}></div>
              <p>
                Deadpool <span>III</span> story
              </p>
            </div>
            <p className={style.desc}>
              PART A. &nbsp;&nbsp; Wolverine joins the "merc with a mouth" in
              the third installment of the Deadpool film franchise...
            </p>
          </div>
          <div className={style.right}>
            <div className={style.bookBtn}>
              <p>Book Now</p>
              <i className="ri-arrow-right-up-long-line"></i>
            </div>
            <div className={style.badge}>
              <p>01</p>
              <img src={deadpoolBadge} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className={style.section2}>
        <div className={style.marqueTrack} ref={marqueeRef2}>
          <div className={style.marqueeInner}>
            {[...Array(repeatCount)].map((_, index) => (
              <img
                key={index}
                className={style.eye}
                src={deadpoolEyes}
                alt="deadpool-eye"
              />
            ))}
          </div>
        </div>

        <div className={style.trailerDetails}>
          <div className={style.left}>
            <div className={style.header}>
              <div className={style.beltLogo}></div>
              <p>Production</p>
            </div>
            <img className={style.marvelLogo} src={marvelLogo} alt="" />
          </div>
          <div className={style.middle}>
            <div className={style.trailerDur}>
              <p>Trailer</p>
              <p>1:47"</p>
            </div>
            <div className={style.rating}>
              <p>Imax</p>
              <p>6</p>
            </div>
            <div className={style.releaseDate}>
              <p>May</p>
              <p>3</p>
            </div>
          </div>
          <div className={style.right}>
            <div className={style.redLine}></div>
            <p>
              &ldquo; Hugh Jackman said he really was done playing the character
              of logan/wolverine after 2017's 'Logan'.
            </p>
          </div>
        </div>

        <div className={style.secondRow}>
          <div className={style.left}>
            <p>02</p>
            <div className={style.stars}>
              <i className={`ri-star-s-fill ${style.redStar}`}></i>
              <i className={`ri-star-s-fill ${style.redStar}`}></i>
              <i className={`ri-star-s-fill ${style.redStar}`}></i>
              <i className={`ri-star-s-fill ${style.redStar}`}></i>
              <i className="ri-star-s-line"></i>
            </div>
          </div>

          <div className={style.right}>
            <a
              href="https://www.instagram.com/sudhanshu_9199"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-instagram-line"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/sudhanshu-ghosh9199"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-linkedin-fill"></i>
            </a>

            <a href="mailto:shudhanshukumar9713@gmail.com">
              <i className="ri-mail-line"></i>
            </a>
          </div>
        </div>

        <div className={style.thirdRow}>
          <div className={style.leftNav} onClick={() => handleSwap("left")}>
            <i className="ri-arrow-left-s-fill"></i>
          </div>
          <div className={style.cards}>
            {[deadpoolCard, ironmanCard, spidermanCard, grootCard].map(
              (card, i) => (
                <div
                  key={i}
                  className={style.card}
                  ref={(el) => (cardsRef.current[i] = el)}
                  style={{ zIndex: 4 - i }}
                >
                  <img src={card} alt="" />
                </div>
              )
            )}
          </div>
          <div className={style.rightNav} onClick={() => handleSwap("right")}>
            <i className="ri-arrow-right-s-fill"></i>
          </div>
        </div>
      </section>
      <section className={style.section3}>
        <div className={style.tops}>
          <div className={style.left}></div>
          <div className={style.right}>
            <div className={style.header}>
              <div className={style.beltLogo}></div>
              <p>Release Date</p>
            </div>
            <p className={style.desc}>
              PART B. &nbsp;&nbsp; Deadpool 3 is scheduled to be released in the
              United States on May 3, 2024 it was previously sccheduled for
              September 6 of that year, and then November 8. It will be part of
              Phase Five of the MCU.
            </p>
          </div>
        </div>
        <div className={style.BolderTexts}>
          <h1 className={style.firstText}>Directed</h1>
          <h3 className={style.secondText}>By</h3>
          <h1 className={style.thirdText}>Shawn Levy</h1>
        </div>
        <p className={style.gallery}>GALLERY 07/32</p>
        <div className={style.numberTexts}>
          <div className={style.numbers}>
            <p>01</p>
            <p>02</p>
          </div>
          <div className={style.numbers}>
            <p>03</p>
            <p>04</p>
          </div>
        </div>
        <p className={style.middleTexts}>
          Deadpool III: Release date, cast, and <br />
          everything about the film!
        </p>
        <div className={style.indexingRow}>
          <div className={style.castsImg}>
            <div className={style.cast}>
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </div>
            <div className={style.cast}>
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </div>
            <div className={style.cast}>
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QGwRXhpZgAASUkqAAgAAAAEAA4BAgBJAQAAPgAAAJiCAgARAAAAhwEAABoBBQABAAAAmAEAABsBBQABAAAAoAEAAAAAAABMT05ET04gLSBBUFJJTCAxNjogQWN0b3IgSHVnaCBKYWNrbWFuIHNtaWxlcyBhZnRlciBhYnNlaWxpbmcgZG93biBhIGJ1aWxkaW5nIGluIFdhcHBpbmcgdG8gcmFpc2UgbW9uZXkgZm9yIHRoZSAnSGVscCA0IEhlcm9lcycgQ2hhcml0eSBvbiBBcHJpbCAxNiwgMjAwOSBpbiBMb25kb24sIEVuZ2xhbmQuIFRoZSBhY3RvciBpcyBpbiBMb25kb24gYXMgcGFydCBvZiBoaXMgcHJvbW90aW9uYWwgdG91ciBmb3IgdGhlIGZpbG0gIlgtTWVuIE9yaWdpbnM6IFdvbHZlcmluZSIuICAoUGhvdG8gYnkgQ2hyaXMgSmFja3Nvbi9HZXR0eSBJbWFnZXMgZm9yIDIwdGggQ2VudHVyeSBGb3ggKTIwMDkgR2V0dHkgSW1hZ2VzLAEAAAEAAAAsAQAAAQAAAP/tAZJQaG90b3Nob3AgMy4wADhCSU0EBAAAAAABdhwCUAANQ2hyaXMgSmFja3NvbhwCeAFJTE9ORE9OIC0gQVBSSUwgMTY6IEFjdG9yIEh1Z2ggSmFja21hbiBzbWlsZXMgYWZ0ZXIgYWJzZWlsaW5nIGRvd24gYSBidWlsZGluZyBpbiBXYXBwaW5nIHRvIHJhaXNlIG1vbmV5IGZvciB0aGUgJ0hlbHAgNCBIZXJvZXMnIENoYXJpdHkgb24gQXByaWwgMTYsIDIwMDkgaW4gTG9uZG9uLCBFbmdsYW5kLiBUaGUgYWN0b3IgaXMgaW4gTG9uZG9uIGFzIHBhcnQgb2YgaGlzIHByb21vdGlvbmFsIHRvdXIgZm9yIHRoZSBmaWxtICJYLU1lbiBPcmlnaW5zOiBXb2x2ZXJpbmUiLiAgKFBob3RvIGJ5IENocmlzIEphY2tzb24vR2V0dHkgSW1hZ2VzIGZvciAyMHRoIENlbnR1cnkgRm94ICkcAnQAETIwMDkgR2V0dHkgSW1hZ2Vz/+EGr2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyI+Cgk8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgoJCTxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6SXB0YzR4bXBDb3JlPSJodHRwOi8vaXB0Yy5vcmcvc3RkL0lwdGM0eG1wQ29yZS8xLjAveG1sbnMvIiAgIHhtbG5zOkdldHR5SW1hZ2VzR0lGVD0iaHR0cDovL3htcC5nZXR0eWltYWdlcy5jb20vZ2lmdC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBsdXM9Imh0dHA6Ly9ucy51c2VwbHVzLm9yZy9sZGYveG1wLzEuMC8iICB4bWxuczppcHRjRXh0PSJodHRwOi8vaXB0Yy5vcmcvc3RkL0lwdGM0eG1wRXh0LzIwMDgtMDItMjkvIiB4bWxuczp4bXBSaWdodHM9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9yaWdodHMvIiBkYzpSaWdodHM9IjIwMDkgR2V0dHkgSW1hZ2VzIiBHZXR0eUltYWdlc0dJRlQ6QXNzZXRJRD0iODYwMDg5NTEiIHhtcFJpZ2h0czpXZWJTdGF0ZW1lbnQ9Imh0dHBzOi8vd3d3LmdldHR5aW1hZ2VzLmNvbS9ldWxhP3V0bV9tZWRpdW09b3JnYW5pYyZhbXA7dXRtX3NvdXJjZT1nb29nbGUmYW1wO3V0bV9jYW1wYWlnbj1pcHRjdXJsIiBwbHVzOkRhdGFNaW5pbmc9Imh0dHA6Ly9ucy51c2VwbHVzLm9yZy9sZGYvdm9jYWIvRE1JLVBST0hJQklURUQtRVhDRVBUU0VBUkNIRU5HSU5FSU5ERVhJTkciID4KPGRjOmNyZWF0b3I+PHJkZjpTZXE+PHJkZjpsaT5DaHJpcyBKYWNrc29uPC9yZGY6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"
                alt=""
              />
            </div>
            <div className={style.cast}>
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </div>
          </div>
          <div className={style.arrows}>
            <img src={redBlackArrow} alt="" />
          </div>
          <div className={style.badge}>
            <p>03</p>
            <img src={deadpoolBadge} alt="" />
          </div>
        </div>
      </section>
      <section className={style.section4}>
        <div className={style.top}>
          <div className={style.left}>
            <div className={style.header}>
              <div className={style.beltLogo}></div>
              <p>X-MEN :</p>
            </div>
            <p className={style.desc}>
              PART C. &nbsp;&nbsp; Deadpool, AKA Wade Wilson, AKA the Merc with
              a Mouth, first made his debut in the much-maligned X-Men Origins:
              Wolverine.
            </p>
          </div>

          <div className={style.middle}>
            <div className={style.card}>
              <p className={style.film}>Film</p>
              <h2>Deadpool III</h2>

              <div className={style.sCards}>
                <div className={style.sCard1}>
                    <p>Map</p>
                </div>
                <div className={style.sCard2}>
                    <i className="ri-arrow-down-s-fill"></i>
                    <p>Cinema</p>
                    <p>Carvinal Theatre</p>
                </div>
                <div className={style.sCard3}>
                    <p>Date</p>
                    <p>May 29</p>
                </div>
                <div className={style.sCard4}>
                    <p>Time</p>
                    <p>9:30 <span>PM</span></p>
                </div>
              </div>
              <div className={style.book}>
                <p>Book Now</p>
                <i className="ri-arrow-right-long-line"></i>
              </div>
            </div>
          </div>

          <div className={style.right}>
            <div className={style.header}>
              <div className={style.beltLogo}></div>
              <p>Premiering :</p>
            </div>
            <p className={style.desc}>
              PART D. &nbsp;&nbsp; The film was initially announced for
              September 6, 2024, but it later changed, being pushed back to
              November 8, 2024 ...
            </p>
          </div>
        </div>
        <img className={style.deadpoolLovePose} src={deadpoolLovePose} alt="" />
      </section>
    </>
  );
};

export default MainContent;
