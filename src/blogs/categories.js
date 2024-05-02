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
      "The anime genre of rom com is just what you think it is: romantic comedy. It is about exploring love, friendships, and sweet memories. Along the way, the characters may bump into comical misunderstandings and unexpected situations that keep the story going.",
    blogs: blogs.filter((blog) => blog.mainCategory === "Rom-Com"),
    blogsNumber: blogs.filter((blog) => blog.mainCategory === "Rom-Com").length,
  },
  {
    id: 4,
    name: "Romance",
    image: "/romance.gif",
    description:
      "The world of romance anime also explores a remarkable variety of personal themes and settings, with high schools being a familiar backdrop for young love, along with the office for adult-oriented romance anime or even fantasy and historical settings for the more outlandish romances.",
    blogs: blogs.filter((blog) => blog.mainCategory === "Romance"),
    blogsNumber: blogs.filter((blog) => blog.mainCategory === "Romance").length,
  },
  {
    id: 5,
    name: "Gacha",
    image: "/gacha.gif",
    description:
      "A gacha game is a video game that implements the gacha mechanic. Similar to loot boxes, gacha games entice players to spend in-game currency to receive a random in-game item. Most of these games are free-to-play mobile games, where the gacha serves as an incentive to spend real-world money.",
    blogs: blogs.filter((blog) => blog.mainCategory === "Gacha"),
    blogsNumber: blogs.filter((blog) => blog.mainCategory === "Gacha").length,
  },
  {
    id: 6,
    name: "Bgmi",
    image: "/bgmi.gif",
    description:
      "Battlegrounds Mobile India is a version of PUBG Mobile, exclusively available in India. It is an online multiplayer battle royale game by Krafton. The game was initially released on 2 July 2021 for Android devices, and on 18 August 2021 for iOS devices. ",
    blogs: blogs.filter((blog) => blog.mainCategory === "Bgmi"),
    blogsNumber: blogs.filter((blog) => blog.mainCategory === "Bgmi").length,
  },
  {
    id: 7,
    name: "Isekai",
    image: "/isekai.gif",
    description:
      "Isekai - “alternative world” - anime covers a broad range of storylines in which a character is transported into a new life. But one form of isekai often starts with a bang: a struggling protagonist, sometimes depicted as a loser, dies a violent death but is reincarnated as a hero with unique powers.",
    blogs: blogs.filter((blog) => blog.mainCategory === "Isekai"),
    blogsNumber: blogs.filter((blog) => blog.mainCategory === "Isekai").length,
  },
  {
    id: 8,
    name: "Random",
    image: "/random.gif",
    description:
      "This category is for blogs that don't fit into any of the other categories. It's a mixed bag of topics that don't have a common theme.",
    blogs: blogs.filter((blog) => blog.mainCategory === "Random"),
    blogsNumber: blogs.filter((blog) => blog.mainCategory === "Random").length,
  },
];

export default categories;
