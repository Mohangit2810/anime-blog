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

async function extractHeadingsFromMarkdown(filePath) {
  try {
    // Fetch the Markdown file
    const response = await fetch(filePath);

    if (!response.ok) {
      throw new Error("Failed to fetch Markdown file");
    }

    // Read the content of the Markdown file
    const markdownContent = await response.text();

    // Regular expression to match headings (lines starting with ##)
    const headingRegex = /^##\s(.+)/gm;

    // Array to store the extracted headings
    const headings = [];

    // Match all headings using the regular expression
    let match;
    while ((match = headingRegex.exec(markdownContent)) !== null) {
      // Extract the heading text and add it to the array
      headings.push(match[1]);
    }

    return headings;
  } catch (error) {
    console.error("Error fetching or processing Markdown file:", error);
    return null;
  }
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
    content: await renderMarkdownFile("/src/blogs/blog1.md"),
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
    content: await renderMarkdownFile("/src/blogs/blog2.md"),
    headings: await extractHeadingsFromMarkdown("/src/blogs/blog2.md"),
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
    content: await renderMarkdownFile("/src/blogs/blog3.md"),
    headings: await extractHeadingsFromMarkdown("/src/blogs/blog3.md"),
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
    content: await renderMarkdownFile("/src/blogs/blog4.md"),
    headings: await extractHeadingsFromMarkdown("/src/blogs/blog4.md"),
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
    content: await renderMarkdownFile("/src/blogs/blog5.md"),
    headings: await extractHeadingsFromMarkdown("/src/blogs/blog5.md"),
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
    content: await renderMarkdownFile("/src/blogs/blog6.md"),
    headings: await extractHeadingsFromMarkdown("/src/blogs/blog6.md"),
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
    content: await renderMarkdownFile("/src/blogs/blog7.md"),
    headings: await extractHeadingsFromMarkdown("/src/blogs/blog7.md"),
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
    content: await renderMarkdownFile("/src/blogs/blog8.md"),
    headings: await extractHeadingsFromMarkdown("/src/blogs/blog8.md"),
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
    content: await renderMarkdownFile("/src/blogs/blog1.md"),
    headings: await extractHeadingsFromMarkdown("/src/blogs/blog1.md"),
    quote: "Graduation isnt the end - Hirasawa Yui",
  },
];

export default blogs;
