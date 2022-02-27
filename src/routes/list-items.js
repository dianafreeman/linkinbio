import fs from 'fs/promises';
import frontmatter from 'frontmatter';

export async function get() {
  const filenames = await fs.readdir('_content/listItems/');

  const contentPromises = await filenames.map(async (filename) => {
    const data = await fs.readFile(`_content/listItems/${filename}`);
    const newItem = frontmatter(data.toString());
    return { frontmatter: newItem.data, body: newItem.content };
  });

  const content = await Promise.all(contentPromises);

  if (content) {
    return {
      body: { postFiles: content },
    };
  } else {
    return {
      status: 404,
    };
  }
}
