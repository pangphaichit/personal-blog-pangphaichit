
function Header() {
  return (
    
    <header className="flex justify-between items-center bg-white border-b  p-4 ">
      <div className="logo ">
        <img src="./public/hh..svg" alt="Logo"/>
      </div>
      <nav className="flex-grow">
       <ul className="nav-list flex justify-end space-x-4">
          <li>
          <a href="/login" className="px-4 py-2 rounded-full border hover:bg-gray-700 transition-colors hover:text-white">Log in</a>
          </li>
          <li>
          <a href="/login" className="px-8 py-2  rounded-full border hover:bg-gray-700 transition-colors hover:text-white"> Sign up</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}


function HeroSection() {
  return (
    <main className="container px-4 py-8 lg:py-16 mx-auto">
      <div className="flex flex-col lg:flex-row items-center">
      <div className="lg:w-1/3 mb-8 lg:mb-0 lg:pr-8">
      <h1 className="text-4xl lg:text-5xl font-bold mb-4">
        Stay <br className="hidden lg:block" />
        Informed, <br />
        Stay Inspired,
      </h1>
      <p className="text-lg text-gray-500">
      Discover a World of Knowledge at Your Fingertips. Your Daily Dose of
      Inspiration and Information.
      </p>
      </div>
      <img src="./public/person.svg" alt="man"  className="h-[530px] object-cover rounded-lg shadow-lg lg:w-1/3 mx-4 mb-8 lg:mb-0"/>
      <div className="lg:w-1/3 lg:pl-8">
      <h2 className="text-xl font-semibold mb-2">-Author</h2>
      <h3 className="text-2xl font-bold mb-4">Thompson P.</h3>
      <p className="text-gray-500 mb-4">
            I am a pet enthusiast and freelance writer who specializes in animal
            behavior and care. With a deep love for cats, I enjoy sharing
            insights on feline companionship and wellness.
      </p>
      <p className="text-gray-500">
            When I&apos;m not writing, I spend time volunteering at my local
            animal shelter, helping cats find loving homes.
      </p>
      </div>
      </div>

    </main>
);
}

function App() {
return (
    <>
    <div>
      <Header />
      <HeroSection />
     </div>
    </>
  );
}

export default App;

