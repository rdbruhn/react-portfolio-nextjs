import Layout from "../components/Layout";
import Tile from "../components/Tile";

const projects = [
  {
    title: "Raise Chrome Extension",
    href:
      "https://chrome.google.com/webstore/detail/raise/mcheealmocffihjegbpnmoljmlhodmdc",
    src: "../static/images/ChromeExtension.jpg",
    alt: "Raise Chrome Extension Screen Shot"
  },
  {
    title: "Goby Analytics Platform",
    href: "http://www.gobyinc.com",
    src: "../static/images/GobyUI.jpg",
    alt: "Goby User Interface Screen Shot"
  },
  {
    title: "Space Pirates",
    href: "https://github.com/rdbruhn/spacePirates",
    src: "../static/images/SpacePirates.jpg",
    alt: "Space Pirates Screen Shot"
  },
  {
    title: "Canteen App",
    href: "https://github.com/rdbruhn/Canteen",
    src: "../static/images/CanteenScreenShot.jpg",
    alt: "Canteen App Screen Shot"
  },
  {
    title: "HelpMe HelpMe",
    href: "https://github.com/rdbruhn/helpme-helpme",
    src: "../static/images/HelpMeHelpMeScreenShot.jpg",
    alt: "HelpMe HelpMe Screen Shot"
  },
  {
    title: "Book Breaker",
    href: "http://book-breaker.herokuapp.com",
    src: "../static/images/BookBreaker.jpg",
    alt: "BookBreaker Screen Shot"
  }
];

export default () => (
  <Layout>
    <div>
      <header>
        <div>
          <img src="../static/images/Rob.jpg" alt="Picture of Rob" />
        </div>
        <div>
          <h1>Rob Bruhn</h1>
          <h3>Software Engineer</h3>
        </div>
      </header>
      <div>
        {projects.map(({ src, alt, href, title }) => (
          <Tile key={title} title={title} src={src} alt={alt} href={href} />
        ))}
      </div>
      <style jsx>{`
        h1 {
          margin-bottom: 0;
          margin-top: 8px;
        }
        h3 {
          margin-top: 0;
          margin-bottom: 0;
        }
        img {
          height: 100px;
          border-radius: 60px;
        }
        div {
          display: flex;
          text-align: center;
          flex-flow: row wrap;
          justify-content: center;
          align-items: center;
        }
        header {
          display: flex;
          text-align: center;
          flex-flow: column nowrap;
          justify-content: center;
          align-items: center;
          height: 200px;
        }
        header div {
          display: flex;
          text-align: center;
          flex-flow: column nowrap;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  </Layout>
);
