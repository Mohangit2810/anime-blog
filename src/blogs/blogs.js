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

function extractHeadingsFromMarkdown(markdownContent) {
  const headingRegex = /^##\s(.+)/gm;
  const headings = [];
  let match;
  while ((match = headingRegex.exec(markdownContent)) !== null) {
    headings.push(match[1]);
  }
  return headings;
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
    const headings = extractHeadingsFromMarkdown(markdownContent);

    return [htmlContent, headings];
  } catch (error) {
    console.error("Error fetching or processing Markdown file:", error);
    return null;
  }
}

async function getContent(blogId) {
  const content = await renderMarkdownFile(`/blogs/blog${blogId}.md`);
  return content[0];
}

async function getHeadings(blogId) {
  const content = await renderMarkdownFile(`/blogs/blog${blogId}.md`);
  return content[1];
}

const blogs = [
  {
    id: 1,
    author: "MohanRaji",
    title: "Why you should watch K-On ?",
    titleImage: {
      landscape: "https://images3.alphacoders.com/127/127889.jpg",
      potrait: "https://s1.zerochan.net/K-ON%21.600.2013134.jpg",
    },
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
    headings: [],
    quote: ' "Graduation isnt the end" - Hirasawa Yui',
  },
  {
    id: 2,
    author: "MohanRaji",
    title: "Is Jujutsu Kaisen Worth it ?",
    titleImage: {
      landscape: "https://4kwallpapers.com/images/walls/thumbs_3t/13907.jpg",
      potrait:
        "https://i.pinimg.com/564x/d6/65/34/d66534254a92227669b11040231bf9e0.jpg",
    },
    published: "28, August 2021",
    updated: "29, August 2021",
    minsRead: "5",
    tags: ["CGDCT", "Slice of Life"],
    mainCategory: "Shonen",
    categoryId: 2,
    rating: 4,
    description:
      "Jujustu Kaisen is one of the best Shonen anime out there, The anime has a great story and the animation is top notch. The anime is a must watch for all the Shonen fans out there.",
    content: getContent(2),
    headings: [],
    quote: "Graduation isnt the end - Hirasawa Yui",
  },
  {
    id: 3,
    author: "Rahul Raj",
    title: "Why Nisekoi is still one of the best Rom Com ?",
    titleImage: {
      landscape:
        "https://m.media-amazon.com/images/M/MV5BNTNkNTBkYzktNzY1Mi00NjgzLTk4Y2YtMWUyNTdiYjNhZTQwXkEyXkFqcGdeQXVyNzI2MzA2OTE@._V1_FMjpg_UX1088_.jpg",
      potrait:
        "https://m.media-amazon.com/images/M/MV5BNjliYjI4OTktYjA4YS00NTQ4LTliNGMtYzAzNDA1ZTU0YzY4XkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX640_.jpg",
    },
    published: "28, August 2021",
    updated: "29, August 2021",
    minsRead: "5",
    tags: ["CGDCT", "Slice of Life"],
    mainCategory: "Rom-Com",
    categoryId: 3,
    rating: 4,
    description:
      "Nisekoi might be a harem anime but the anime has a great story and the characters are well written. The anime is a must watch for all the Rom Com fans out there.",
    content: getContent(3),
    headings: [],
    quote: "Graduation isnt the end - Hirasawa Yui",
  },
  {
    id: 4,
    author: "Rahul Raj",
    title: "This is One of the Perfect Anime Couple You can find!",
    titleImage: {
      landscape:
        "https://m.media-amazon.com/images/M/MV5BMzNjZDIzMGYtNmZkYS00ZDMxLWIwMzgtOTk0NTBiNjk3YzRjXkEyXkFqcGdeQXVyMzI2Mjc1NjQ@._V1_FMjpg_UX900_.jpg",
      potrait:
        "https://m.media-amazon.com/images/M/MV5BMGQ1ZjYzOGQtOWFhNy00YzQwLWEyYmItZGYwODQ4NDU3MDhlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX640_.jpg",
    },
    published: "28, August 2021",
    updated: "29, August 2021",
    minsRead: "5",
    tags: ["CGDCT", "Slice of Life"],
    mainCategory: "Romance",
    categoryId: 4,
    rating: 4,
    description:
      "The relationship between Sakuta and Mai is one of the best relationship you can find in anime. The anime is a must watch for all the romance fans out there.",
    content: getContent(4),
    headings: [],
    quote: "Graduation isnt the end - Hirasawa Yui",
  },
  {
    id: 5,
    author: "Rahul Raj",
    title: "Is Genshin Impact Game is as bad as the Community ?",
    titleImage: {
      landscape:
        "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_GenshinImpact_miHoYoLimited_S1_2560x1440-91c6cd7312cc2647c3ebccca10f30399",
      potrait:
        "https://cdn1.epicgames.com/offer/879b0d8776ab46a59a129983ba78f0ce/genshintall_1200x1600-4a5697be3925e8cb1f59725a9830cafc",
    },
    published: "28, August 2021",
    updated: "29, August 2021",
    minsRead: "5",
    tags: ["CGDCT", "Slice of Life"],
    mainCategory: "Gacha",
    categoryId: 5,
    rating: 4,
    description:
      "Genshin Impact is a great game and has a great story. The game is a must play for all the Gacha fans out there. The game is not as bad as the community says it is.",
    content: getContent(5),
    headings: [],
    quote: "Graduation isnt the end - Hirasawa Yui",
  },
  {
    id: 6,
    author: "MohanRaji",
    title: "When and Where you should use VSS in PUBGM ?",
    titleImage: {
      landscape:
        "https://qph.cf2.quoracdn.net/main-qimg-d0e256ec6ad61810f3a93b4385f8639f-lq",
      potrait: "https://guide.pubg.com/img/dmr_vss.2dad5921.png",
    },
    published: "28, August 2021",
    updated: "29, August 2021",
    minsRead: "5",
    tags: ["CGDCT", "Slice of Life"],
    mainCategory: "Bgmi",
    categoryId: 6,
    rating: 4,
    description:
      "The VSS is one of the most underrated gun in PUBG Mobile, the players who says its useless are the one who dont know how to use it. The VSS is a great gun for close and mid range combat. The gun is a must use for all the players out there.",
    content: getContent(6),
    headings: [],
    quote: "Graduation isnt the end - Hirasawa Yui",
  },
  {
    id: 7,
    author: "MohanRaji",
    title: "Are all Isekai Trash ?",
    titleImage: {
      landscape:
        "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/04/isekai-trio-feature.jpg",
      potrait:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYtrhvFBdcKuSrne9qpJ9QAzr1v1eFLJaY0txVcyZv4A&s",
    },
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
    headings: [],
    quote: "Graduation isnt the end - Hirasawa Yui",
  },
  {
    id: 8,
    author: "Rahul Raj",
    title: "Why Instagram Comment Sections are so toxic ?",
    titleImage: {
      landscape:
        "https://photo-cdn2.icons8.com/Y0VXlH9sHFFzVGK2zPGWk3ek6j8ovJSOj2ueIZS_B_Y/rs:fit:1072:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi8yYTFkMWIwODE4/MDE0YmI4OGZkYTdh/MTM5MjYzOTkxMi5q/cGc.jpg",
      potrait:
        "https://photo-cdn2.icons8.com/Y0VXlH9sHFFzVGK2zPGWk3ek6j8ovJSOj2ueIZS_B_Y/rs:fit:1072:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi8yYTFkMWIwODE4/MDE0YmI4OGZkYTdh/MTM5MjYzOTkxMi5q/cGc.jpg",
    },
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
    headings: [],
    quote: "Graduation isnt the end - Hirasawa Yui",
  },
  {
    id: 9,
    author: "Rahul Raj",
    title: "Why you should watch Yuru Camp ?",
    animeId: 34798,
    titleImage: {
      landscape: "https://images6.alphacoders.com/114/1140046.jpg",
      potrait:
        "https://m.media-amazon.com/images/M/MV5BMGM1ODZmYjMtZThiNi00OTcwLWEyNmUtNGM4ZmU4MGQ5YmIzXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg",
    },
    published: "28, August 2021",
    updated: "29, August 2021",
    minsRead: "5",
    tags: ["CGDCT", "Slice of Life"],
    mainCategory: "Slice of Life",
    categoryId: 1,
    rating: 4,
    description:
      "This Anime is a must watch for all the people who love camping and the great outdoors. The anime is a perfect blend of comedy and slice of life.",
    content: getContent(9),
    headings: [],
    quote: "Graduation isnt the end - Hirasawa Yui",
  },
];

blogs.forEach((element) => {
  Promise.all([getContent(element.id), getHeadings(element.id)])
    .then(([content, headings]) => {
      element.content = content;
      element.headings = headings;
    })
    .catch((error) => {
      console.error("Error fetching content or headings:", error);
    });
});
// Promise.all([getContent(1), getHeadings(1)])
//   .then(([content, headings]) => {
//     blogs[0].content = content;
//     blogs[0].headings = headings;
//   })
//   .catch((error) => {
//     console.error("Error fetching content or headings:", error);
//   });

// Promise.all([getContent(2), getHeadings(2)])
//   .then(([content, headings]) => {
//     blogs[1].content = content;
//     blogs[1].headings = headings;
//   })
//   .catch((error) => {
//     console.error("Error fetching content or headings:", error);
//   });

export default blogs;
