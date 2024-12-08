
 function HeroSection() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        src="https://s3-figma-videos-production-sig.figma.com/video/1312412244029964973/TEAM/eff6/0010/-92e2-4815-b26d-cb6b0dbf738e?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fDwAd1~VfELq25rulQgKvweBr4~t4QYwqAVqw6VGdKodR37an5i09WdwjjdOa9pPk5nSEGAi~ZiZ0AZcFV3wnDKfyfU7K1lnXXis5lvcbaaF1XDTnhL63A~BPDaVsTm40fzSVIJtCkBpTBxz3smz4bUISIWkeLnLpOpTVZAoZQiYvowOTfCBI988fNQGezMLUf~w6yRcNSu8aooiGvhhnaoaDyBDyM8MsC6pl2o0-xfAMPpgneaVPnIqA0925zx6AsKLnfmBkaBCFACjiV4nVQBnFTQg5PN82zh7jyWpB-6Mox-hCmGUpgWty7yU68WwduKRLmRGQ5m1PY4-ATKFgQ__"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative flex h-full items-center">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24">
          <div className="max-w-3xl pt-60 md:pt-60 lg:pt-72"> {/* Added padding-top here */}
           <h1 className="text-left text-4xl font-extralight tracking-tight text-white sm:text-5xl sm:leading-tight md:text-6xl lg:text-7xl lg:leading-tight md:leading-relaxed">
                    Smart Solutions For <br className="md:inline" /> Your{" "}
       <span className="text-amber-500">Brand </span>
      
</h1>

            <p className="mt-6 text-left text-lg text-gray-200 sm:text-xl md:text-xl">
              We handle the journey, so you can enjoy the destination.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection