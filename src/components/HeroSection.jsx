import SofiaImage from "../assets/author-image.jpg";

export function HeroSection() {
    return (
      <main className="container px-4 lg:px-4  mx-auto mb-12 md:mb-20 mt-12 lg:mt-0">
        <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/3 mb-8 lg:mb-5 lg:pr-8">
        <h1 className="text-4xl lg:text-5xl font-bold text-center mb-6 pl-4 lg:pl-20 lg:text-right">
        <span className="inline lg:inline">Stay</span>
        <span className="inline lg:block"> Informed,</span>
        <span className="block lg:inline">Stay Inspired</span>
        </h1>
        <p className="text-lg text-gray-500 text-center pl-4 lg:pl-20 lg:text-right">
        Discover a World of Knowledge at Your Fingertips. Your Daily Dose of
        Inspiration and Information.
        </p>
        </div>
        <img src={SofiaImage} alt="A woman with a cat on her back."  className="h-[530px] object-cover rounded-lg shadow-lg lg:w-1/3 mx-4 mb-8 lg:mb-0"/>
        <div className="lg:w-1/3 lg:pl-8 lg:pt-6">
        <h2 className="text-xl font-semibold mb-2 mt-4 lg:mt-0">-Author</h2>
        <h3 className="text-2xl font-bold mb-4">Sofia Blake</h3>
        <p className="text-gray-500 mb-4 pr-20 text-lg">
              I am a pet enthusiast and freelance writer who specializes in animal
              behavior and care. With a deep love for cats, I enjoy sharing
              insights on feline companionship and wellness.
        </p>
        <p className="text-gray-500 pr-20 text-lg">
              When I&apos;m not writing, I spend time volunteering at my local
              animal shelter, helping cats find loving homes.
        </p>
        </div>
        </div>
  
      </main>
  );
  }