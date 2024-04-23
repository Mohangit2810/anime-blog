import blogs from "./blogs";

const categories = [
  {
    id: 1,
    name: "Slice of Life",
    image: "/slice.webp",
    description:
      "Slice of Life is a genre where the anime shows the daily lives of the characters without any major plot",
    blogs: blogs.filter((blog) => blog.mainCategory === "Slice of Life"),
    blogsNumber: blogs.filter((blog) => blog.mainCategory === "Slice of Life")
      .length,
  },
  {
    id: 2,
    name: "Shonen",
    image: "/shounen.gif",
    description:
      "Shonen is a genre which is targeted towards young teen boys. It often contains action-filled plots and is characterized by the main character's quest to become stronger.",
    blogs: blogs.filter((blog) => blog.mainCategory === "Shonen"),
    blogsNumber: blogs.filter((blog) => blog.mainCategory === "Shonen").length,
  },
  {
    id: 3,
    name: "Rom-Com",
    image: "/romcom.gif",
    description:
      "Rom-Com is a genre which is targeted towards young teen boys. It often contains action-filled plots and is characterized by the main character's quest to become stronger.",
    blogs: blogs.filter((blog) => blog.mainCategory === "Rom-Com"),
    blogsNumber: blogs.filter((blog) => blog.mainCategory === "Rom-Com").length,
  },
  {
    id: 4,
    name: "Romance",
    image: "/romance.gif",
    description:
      "Romance is a genre which is targeted towards young teen boys. It often contains action-filled plots and is characterized by the main character's quest to become stronger.",
    blogs: blogs.filter((blog) => blog.mainCategory === "Romance"),
    blogsNumber: blogs.filter((blog) => blog.mainCategory === "Romance").length,
  },
  {
    id: 5,
    name: "Gacha",
    image: "/gacha.gif",
    description:
      "Gacha is a genre which is targeted towards young teen boys. It often contains action-filled plots and is characterized by the main character's quest to become stronger.",
    blogs: blogs.filter((blog) => blog.mainCategory === "Gacha"),
    blogsNumber: blogs.filter((blog) => blog.mainCategory === "Gacha").length,
  },
  {
    id: 6,
    name: "Bgmi",
    image: "/bgmi.gif",
    description:
      "Bgmi is a genre which is targeted towards young teen boys. It often contains action-filled plots and is characterized by the main character's quest to become stronger.",
    blogs: blogs.filter((blog) => blog.mainCategory === "Bgmi"),
    blogsNumber: blogs.filter((blog) => blog.mainCategory === "Bgmi").length,
  },
  {
    id: 7,
    name: "Isekai",
    image: "/isekai.gif",
    description:
      "Isekai is a genre which is targeted towards young teen boys. It often contains action-filled plots and is characterized by the main character's quest to become stronger.",
    blogs: blogs.filter((blog) => blog.mainCategory === "Isekai"),
    blogsNumber: blogs.filter((blog) => blog.mainCategory === "Isekai").length,
  },
  {
    id: 8,
    name: "Random",
    image: "/random.gif",
    description:
      "Random is a genre which is targeted towards young teen boys. It often contains action-filled plots and is characterized by the main character's quest to become stronger.",
    blogs: blogs.filter((blog) => blog.mainCategory === "Random"),
    blogsNumber: blogs.filter((blog) => blog.mainCategory === "Random").length,
  },
];

export default categories;
