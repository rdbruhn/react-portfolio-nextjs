const tileStyle = {
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  color: "#621A19"
};

const linkStyle = {
  color: "#621A19"
};

const Tile = ({ alt, src, href, title }) => (
  <div style={tileStyle}>
    <a style={linkStyle} href={href} target="_blank">
      <h3>{title}</h3>
      <img alt={alt} src={src} />
    </a>
    <style jsx>{`
      img {
        width: 250px;
        height: 170px;
        border-radius: 20px;
        padding: 8px;
      }
      h3 {
        margin-bottom: 8px;
      }
    `}</style>
  </div>
);

export default Tile;
