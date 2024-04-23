function renderMarkdownWithClasses(markdownContent) {
  const htmlContent = markdownContent
    .replace(
      /## (.+)/g,
      '<h2 class="text-xl md:text-2xl font-bold my-8">$1</h2>'
    )
    .replace(/(\*\*)(.*?)\1/g, '<span class="font-semibold">$2</span>')
    .replace(
      /^- (.+)(?=\n-|\n\n|$)/gm,
      '<li class="tracking-wider leading-relaxed mb-3">$1</li>'
    )
    .replace(/<li/g, '<ul class="list-disc pl-8"><li')
    .replace(/<\/li>/g, "</li></ul>")
    .replace(
      /!\[(.*?)\]\((.*?)\)/g,
      '<img class="rounded my-8 max-h-96 mx-auto" src="$2" alt="$1" />'
    )
    .replace(
      /<p>(.*?)<\/p>/g,
      '<p class="indent-20 my-4 text-justify tracking-wide leading-relaxed">$1</p>'
    );

  return htmlContent;
}

function extractHeadingsFromMarkdown(filePath) {
  return fetch(filePath)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch Markdown file");
      }
      return response.text();
    })
    .then((markdownContent) => {
      const headingRegex = /^##\s(.+)/gm;
      const headings = [];
      let match;
      while ((match = headingRegex.exec(markdownContent)) !== null) {
        headings.push(match[1]);
      }
      return headings;
    })
    .catch((error) => {
      console.error("Error fetching or processing Markdown file:", error);
      return null;
    });
}

async function renderMarkdownFile(filePath) {
  try {
    // Fetch the Markdown file
    const response = await fetch(filePath);

    if (!response.ok) {
      throw new Error("Failed to fetch Markdown file");
    }

    // Read the content of the Markdown file
    const markdownContent = await response.text();

    // Render Markdown content with class names
    const htmlContent = renderMarkdownWithClasses(markdownContent);
    return htmlContent;
  } catch (error) {
    console.error("Error fetching or processing Markdown file:", error);
    return null;
  }
}

async function getContent(blogId) {
  const content = await renderMarkdownFile(`/src/blogs/blog${blogId}.md`);
  return content;
}

const blogs = [
  {
    id: 1,
    author: "MohanRaji",
    title: "Why you should watch K-On ?",
    titleImage: { landscape: "/big-blog.jpg", potrait: "/hero.jpg" },
    published: "28, August 2021",
    updated: "29, August 2021",
    minsRead: "5",
    tags: ["CGDCT", "Slice of Life"],
    mainCategory: "Slice of Life",
    categoryId: 1,
    rating: 4,
    description:
      "The Anime which made the Cute Girls Doing Cute Things Genre popular,The K-On should be in your watchlist not only because the anime is cute ",
    content: getContent(1),
    headings: await extractHeadingsFromMarkdown("/src/blogs/blog1.md"),
    quote: ' "Graduation isnt the end" - Hirasawa Yui',
  },
  {
    id: 2,
    author: "MohanRaji",
    title: "Why you should watch K-On ?",
    titleImage: { landscape: "/big-blog.jpg", potrait: "/hero.jpg" },
    published: "28, August 2021",
    updated: "29, August 2021",
    minsRead: "5",
    tags: ["CGDCT", "Slice of Life"],
    mainCategory: "Shonen",
    categoryId: 2,
    rating: 4,
    description:
      "The Anime which made the Cute Girls Doing Cute Things Genre popular,The K-On should be in your watchlist not only because the anime is cute ",
    content: getContent(2),
    headings: await extractHeadingsFromMarkdown("/src/blogs/blog1.md"),
    quote: "Graduation isnt the end - Hirasawa Yui",
  },
  {
    id: 3,
    author: "Rahul Raj",
    title: "Why you should watch K-On ?",
    titleImage: { landscape: "/big-blog.jpg", potrait: "/hero.jpg" },
    published: "28, August 2021",
    updated: "29, August 2021",
    minsRead: "5",
    tags: ["CGDCT", "Slice of Life"],
    mainCategory: "Rom-Com",
    categoryId: 3,
    rating: 4,
    description:
      "The Anime which made the Cute Girls Doing Cute Things Genre popular,The K-On should be in your watchlist not only because the anime is cute ",
    content: getContent(3),
    headings: await extractHeadingsFromMarkdown("/src/blogs/blog1.md"),
    quote: "Graduation isnt the end - Hirasawa Yui",
  },
  {
    id: 4,
    author: "Rahul Raj",
    title: "Why you should watch K-On ?",
    titleImage: { landscape: "/big-blog.jpg", potrait: "/hero.jpg" },
    published: "28, August 2021",
    updated: "29, August 2021",
    minsRead: "5",
    tags: ["CGDCT", "Slice of Life"],
    mainCategory: "Romance",
    categoryId: 4,
    rating: 4,
    description:
      "The Anime which made the Cute Girls Doing Cute Things Genre popular,The K-On should be in your watchlist not only because the anime is cute ",
    content: getContent(4),
    headings: await extractHeadingsFromMarkdown("/src/blogs/blog1.md"),
    quote: "Graduation isnt the end - Hirasawa Yui",
  },
  {
    id: 5,
    author: "Rahul Raj",
    title: "Why you should watch K-On ?",
    titleImage: { landscape: "/big-blog.jpg", potrait: "/hero.jpg" },
    published: "28, August 2021",
    updated: "29, August 2021",
    minsRead: "5",
    tags: ["CGDCT", "Slice of Life"],
    mainCategory: "Gacha",
    categoryId: 5,
    rating: 4,
    description:
      "The Anime which made the Cute Girls Doing Cute Things Genre popular,The K-On should be in your watchlist not only because the anime is cute ",
    content: getContent(5),
    headings: await extractHeadingsFromMarkdown("/src/blogs/blog1.md"),
    quote: "Graduation isnt the end - Hirasawa Yui",
  },
  {
    id: 6,
    author: "Rahul Raj",
    title: "Why you should watch K-On ?",
    titleImage: { landscape: "/big-blog.jpg", potrait: "/hero.jpg" },
    published: "28, August 2021",
    updated: "29, August 2021",
    minsRead: "5",
    tags: ["CGDCT", "Slice of Life"],
    mainCategory: "Bgmi",
    categoryId: 6,
    rating: 4,
    description:
      "The Anime which made the Cute Girls Doing Cute Things Genre popular,The K-On should be in your watchlist not only because the anime is cute ",
    content: getContent(6),
    headings: await extractHeadingsFromMarkdown("/src/blogs/blog1.md"),
    quote: "Graduation isnt the end - Hirasawa Yui",
  },
  {
    id: 7,
    author: "Rahul Raj",
    title: "Why you should watch K-On ?",
    titleImage: { landscape: "/big-blog.jpg", potrait: "/hero.jpg" },
    published: "28, August 2021",
    updated: "29, August 2021",
    minsRead: "5",
    tags: ["CGDCT", "Slice of Life"],
    mainCategory: "Isekai",
    categoryId: 7,
    rating: 4,
    description:
      "The Anime which made the Cute Girls Doing Cute Things Genre popular,The K-On should be in your watchlist not only because the anime is cute ",
    content: getContent(7),
    headings: await extractHeadingsFromMarkdown("/src/blogs/blog1.md"),
    quote: "Graduation isnt the end - Hirasawa Yui",
  },
  {
    id: 8,
    author: "Rahul Raj",
    title: "Why you should watch K-On ?",
    titleImage: { landscape: "/big-blog.jpg", potrait: "/hero.jpg" },
    published: "28, August 2021",
    updated: "29, August 2021",
    minsRead: "5",
    tags: ["CGDCT", "Slice of Life"],
    mainCategory: "Random",
    categoryId: 8,
    rating: 4,
    description:
      "The Anime which made the Cute Girls Doing Cute Things Genre popular,The K-On should be in your watchlist not only because the anime is cute ",
    content: getContent(8),
    headings: await extractHeadingsFromMarkdown("/src/blogs/blog1.md"),
    quote: "Graduation isnt the end - Hirasawa Yui",
  },
  {
    id: 9,
    author: "Rahul Raj",
    title: "Why you should watch Yuru Camp ?",
    titleImage: { landscape: "/big-blog.jpg", potrait: "/hero.jpg" },
    published: "28, August 2021",
    updated: "29, August 2021",
    minsRead: "5",
    tags: ["CGDCT", "Slice of Life"],
    mainCategory: "Slice of Life",
    categoryId: 1,
    rating: 4,
    description:
      "The Anime which made the Cute Girls Doing Cute Things Genre popular,The K-On should be in your watchlist not only because the anime is cute ",
    content: getContent(9),
    headings: await extractHeadingsFromMarkdown("/src/blogs/blog1.md"),
    quote: "Graduation isnt the end - Hirasawa Yui",
  },
];

export default blogs;
