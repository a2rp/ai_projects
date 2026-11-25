import {
  FaCodepen,
  FaFacebookF,
  FaGithub,
  FaGlobe,
  FaHandHoldingHeart,
  FaLinkedinIn,
  FaEnvelope,
  FaMugHot,
  FaPatreon,
  FaYoutube,
} from "react-icons/fa6";

const links = [
  { label: "Portfolio", href: "https://www.ashishranjan.net/", icon: FaGlobe },
  { label: "GitHub", href: "https://github.com/a2rp", icon: FaGithub },
  { label: "CodePen", href: "https://codepen.io/ash1198", icon: FaCodepen },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aashishranjan", icon: FaLinkedinIn },
  { label: "Facebook", href: "https://www.facebook.com/theash.ashish/", icon: FaFacebookF },
  { label: "YouTube", href: "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", icon: FaYoutube },
  { label: "Email", href: "mailto:ash.ranjan09@gmail.com", icon: FaEnvelope },
  { label: "Support", href: "https://a2rp-donation-page.netlify.app/", icon: FaHandHoldingHeart },
  { label: "Buy Me a Coffee", href: "https://buymeacoffee.com/a2rp", icon: FaMugHot },
  { label: "Patreon", href: "https://www.patreon.com/a2rp", icon: FaPatreon },
];

function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="footerInner">
        <div className="footerCopy">
          <span>
            Copyright © {new Date().getFullYear()} {" "}
            <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">
              Ashish Ranjan
            </a>
          </span>
          <span>Play a quick round and keep your next move sharp.</span>
        </div>
        <nav className="footerLinks" aria-label="Footer links">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              title={label}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              <Icon aria-hidden="true" />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export default SiteFooter;
