import { useEffect, useState } from 'react'
import style from './Navbar.module.scss'
const Navbar = () => {
  const [theme, settheme] = useState('light');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom >= 80) {
          const bg = window.getComputedStyle(section).backgroundColor;
          const rgb = bg.match(/\d+/g)?.map(Number);
          if (rgb) {
            const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
            settheme(brightness < 128 ? 'dark' : 'light');
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={`${style.navBar} ${theme === 'dark' ? style.lightMode : style.darkMode}`}>
      <div className={style.logo}>POOL-DAILY</div>
      <div className={style.ops}>
        <a href="section1">Top Casts</a>
        <div className={style.dot}>.</div>
        <a href="">Production</a>
        <div className={style.dot}>.</div>
        <a href="">Box Office</a>
        <div className={style.dot}>.</div>
        <a href="">Imax 6</a>
      </div>

      <div className={style.rights}>
        <i className="ri-search-line"></i>
        <i className="ri-user-line"></i>
        <i className="ri-menu-3-line"></i>
      </div>
    </div>
  )
}

export default Navbar