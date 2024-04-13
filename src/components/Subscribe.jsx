function Subscribe() {
  return (
    <div className="relative bg-white flex items-center gap-24 px-56 py-20 mb-12">
      <div className="flex flex-col gap-6">
        <h2 className="text-4xl font-bold">Subscribe to our Channel 👋</h2>
        <p className="text-xl leading-relaxed">
          Join youself in this <b>Community</b> of outrageous takes <br /> about
          <b> anime</b> , <b>manga</b> and in video games.
        </p>
      </div>
      <div className="flex flex-col items-center gap-6">
        <p className="text-lg">
          Subcribe to the channel <b>Divertido Anime Clips</b> .
        </p>
        <button className="bg-accent text-white rounded px-6 py-2">
          Go to Youtube
        </button>
      </div>
      <img
        className="absolute -left-[60px] w-72"
        src="/subscribe-1.png"
        alt="subscribe"
      />
      <img
        className="absolute right-[45px] h-72"
        src="/Paw.gif"
        alt="subscribe"
      />
    </div>
  );
}

export default Subscribe;
