const fs = require("fs");

const createBlogIndex = () => {
  const POSTS_BUILD_PATH = "./static/markdown/_posts";
  if (!fs.existsSync(POSTS_BUILD_PATH)) {
    fs.mkdirSync(POSTS_BUILD_PATH);
  }
  const POSTS_READ_PATH = "./static/markdown/posts";
  const postsManifest = fs.readdirSync(POSTS_READ_PATH).map(child => {
    const content = fs.readFileSync(`${POSTS_READ_PATH}/${child}`, "utf8");
    const [props, body] = content.split("%%%");
    const { title, date } = JSON.parse(props);

    fs.writeFileSync(
      `${POSTS_BUILD_PATH}/${child}`,
      `# ${title}\n\n${date}${body}`
    );

    return { id: child, title, date };
  });

  fs.writeFileSync(
    "./static/markdown/manifest.json",
    JSON.stringify(postsManifest)
  );
};

createBlogIndex();
