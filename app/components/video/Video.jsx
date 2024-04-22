const Video = () => {
  return (
    <section className="px-5">
      <div className="max-w-[1200px] py-[3rem] mx-auto rounded-xl">
        <video
          autoPlay
          muted
          loop
          style={{ width: "100%" }}
          aria-label="lady wearing google vision and pressing a keyboard"
          className="rounded-xl"
        >
          <source src={"/img/vid1.mp4"} type="video/mp4" />
          <source src={"/img/vid1.mp4"} type="video/webm" />
          Your browser is not supported!
        </video>
      </div>
    </section>
  );
};
export default Video;
