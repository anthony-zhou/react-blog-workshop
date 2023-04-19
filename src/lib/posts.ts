import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

// Returns an array of all posts, most recent first.
function getSortedPosts() {
  const filenames = fs.readdirSync('posts');
  return filenames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  }).sort((a: any, b: any) => {
    if (a.date < b.date) {
      return 1;
    }
    return -1;
  });
}

export default { getSortedPosts };
