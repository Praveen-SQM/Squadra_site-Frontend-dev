import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen">
      Video Element
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source
          src="https://s3-figma-videos-production-sig.figma.com/video/1312412244029964973/TEAM/eff6/0010/-92e2-4815-b26d-cb6b0dbf738e?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fDwAd1~VfELq25rulQgKvweBr4~t4QYwqAVqw6VGdKodR37an5i09WdwjjdOa9pPk5nSEGAi~ZiZ0AZcFV3wnDKfyfU7K1lnXXis5lvcbaaF1XDTnhL63A~BPDaVsTm40fzSVIJtCkBpTBxz3smz4bUISIWkeLnLpOpTVZAoZQiYvowOTfCBI988fNQGezMLUf~w6yRcNSu8aooiGvhhnaoaDyBDyM8MsC6pl2o0-xfAMPpgneaVPnIqA0925zx6AsKLnfmBkaBCFACjiV4nVQBnFTQg5PN82zh7jyWpB-6Mox-hCmGUpgWty7yU68WwduKRLmRGQ5m1PY4-ATKFgQ__"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
      <div className="absolute max-w-2xl inset-0 top-[60%] left-[9%] text-white z-20 px-4 sm:px-6 md:px-8">
        <div>
          <h1
            style={{ lineHeight: "75px" }}
            className="text-4xl sm:text-5xl md:text-6xl font-[300] w-[90%] sm:w-[80%] md:w-[500px] mb-6"
          >
            Start Building a{" "}
            <strong className="font-[300] text-[#FBAE17]">Solid Brand</strong>{" "}
            Today!
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl">
            Let’s build your brand together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
