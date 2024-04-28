// import { Link } from "react-router-dom";

function Subscribe() {
  return (
    <div className="relative bg-white flex flex-col md:flex-row items-center justify-between gap-12 md:!gap-24 px-8 md:px-12 xl:!px-24 py-20 mb-12">
      <div className="flex flex-col gap-6 w-full md:!w-1/2">
        <h3 className="text-2xl xl:text-4xl font-bold">
          Subscribe to our Channel 👋
        </h3>
        <p className="text-xl leading-relaxed">
          Join youself in this <b>Community</b> of outrageous takes <wbr />{" "}
          about
          <b> anime</b> , <b>manga</b> and in video games.
        </p>
      </div>
      <div className="flex flex-col items-center gap-6">
        <p className="text-lg">
          Subcribe to the channel <b>Divertido Anime Clips</b> .
        </p>
        <a
          href="https://youtube.com/@DivertidoAnimeClips-ho6rd?si=PmAiKAtwq7P2gPZJ"
          target="_blank"
        >
          <button className="bg-accent text-white rounded px-6 py-2 hover:bg-darkAccent">
            Go to Youtube
          </button>
        </a>
      </div>

      <img
        className="md:hidden absolute bottom-0 left-0 md:right-[43%] xl:!right-[38%] h-[9rem] md:h-[14rem] xl:!h-72"
        src="/Paw.gif"
        alt="subscribe"
      />
      <img
        className=" absolute bottom-0 right-0 md:right-[43%] xl:!right-[38%] h-[9rem] md:h-[14rem] xl:!h-72"
        src="/Paw.gif"
        alt="subscribe"
      />
    </div>
  );
}

export default Subscribe;
