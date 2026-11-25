import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let previousScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHidden(currentScrollY > previousScrollY && currentScrollY > 80);
      if (currentScrollY <= 80) setHidden(false);
      previousScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`siteHeader ${hidden ? "siteHeaderHidden" : ""}`}>
      <div className="headerInner">
        <a className="brand" href="#game" onClick={closeMenu}>
          <img
            className="brandLogo"
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="Ashish Ranjan logo"
          />
          <span className="brandText">
            <span className="brandTitle">Tic Tac Toe</span>
            <span className="brandCaption">Classic game night</span>
          </span>
        </a>

        <nav className="desktopNav" aria-label="Main navigation">
          <a href="#game">Game</a>
          <a href="#how-to-play">How to play</a>
        </nav>

        <button
          className="menuButton"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>
      </div>

      <nav
        className={`mobileNav ${menuOpen ? "mobileNavOpen" : ""}`}
        aria-label="Mobile navigation"
      >
        <a href="#game" onClick={closeMenu}>Game</a>
        <a href="#how-to-play" onClick={closeMenu}>How to play</a>
      </nav>
    </header>
  );
}

export default SiteHeader;
