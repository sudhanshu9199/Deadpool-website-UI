import style from "./MainContent.module.scss";
import deadpoolPortrait from "../../assets/deadpoolPortrait.png";
import deadpoolEyes from "../../assets/blackEye.png";
import deadpoolBadge from "../../assets/deadpoolBadge.png";
import marvelLogo from "../../assets/marvelLogo.png";
import deadpoolCard from "../../assets/deadpoolCard.jpg";
import ironmanCard from "../../assets/ironmanCard.jpg";
import spidermanCard from "../../assets/spidermanCard.jpg";
import grootCard from "../../assets/grootCard.jpg";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
const MainContent = () => {
    const marqueeRef1 = useRef(null);
  const marqueeRef2 = useRef(null);
  const repeatCount = 50;

  useEffect(() => {
    const inner = marqueeInnerRef.current;

    // clone content to create a seamless loop
    const clone = inner.cloneNode(true);
    inner.parentElement.appendChild(clone);

    gsap.to(inner, {
      xPercent: -50, // move entire content half its width
      duration: 20, // control speed
      ease: "none",
      repeat: -1,
    });
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

        <div className={style.marqueTrack}>
          <div className={style.marqueeInner} ref={marqueeInnerRef}>
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
        <div className={style.marqueTrack}>
          <div className={style.marqueeInner} ref={marqueeInnerRef}>
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
              <p>
                Release Date
              </p>
            </div>
            <p className={style.desc}>
              PART B. &nbsp;&nbsp; Deadpool 3 is scheduled to be released in the United States on May 3, 2024 it was previously sccheduled for September 6 of that year, and then November 8. It will be part of Phase Five of the MCU.
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
        <p className={style.middleTexts}>Deadpool III: Release date, cast, and <br />everything about the film!</p>
      </section>
    </>
  );
};

export default MainContent;
