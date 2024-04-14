function MiniCard() {
  return (
    <article className="flex gap-4 items-center rounded-lg h-28">
      <div className="shrink-0 overflow-hidden">
        <img
          className="blog-card-image w-24 rounded-lg"
          src="/about-personal.webp"
          alt="mwew"
        />
      </div>
      <div className="flex flex-col items-start justify-center gap-3 pr-4">
        <h3 className="text-base font-semibold hover:underline">
          Why you should watch K-On ?
        </h3>
        <p className="flex items-start text-start">
          <svg
            className="inline-block mr-2 w-5 h-5 fill-accent"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 32 32"
          >
            <path d="M 9 4 L 9 5 L 5 5 L 5 27 L 27 27 L 27 5 L 23 5 L 23 4 L 21 4 L 21 5 L 11 5 L 11 4 Z M 7 7 L 9 7 L 9 8 L 11 8 L 11 7 L 21 7 L 21 8 L 23 8 L 23 7 L 25 7 L 25 9 L 7 9 Z M 7 11 L 25 11 L 25 25 L 7 25 Z M 13 13 L 13 15 L 15 15 L 15 13 Z M 17 13 L 17 15 L 19 15 L 19 13 Z M 21 13 L 21 15 L 23 15 L 23 13 Z M 9 17 L 9 19 L 11 19 L 11 17 Z M 13 17 L 13 19 L 15 19 L 15 17 Z M 17 17 L 17 19 L 19 19 L 19 17 Z M 21 17 L 21 19 L 23 19 L 23 17 Z M 9 21 L 9 23 L 11 23 L 11 21 Z M 13 21 L 13 23 L 15 23 L 15 21 Z M 17 21 L 17 23 L 19 23 L 19 21 Z"></path>
          </svg>
          28, August 2003
        </p>
      </div>
    </article>
  );
}

export default MiniCard;
