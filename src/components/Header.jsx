export function Header() {
    return (
      
      <header className="flex items-center bg-white border-b  p-4 justify-between ">
        <div className="logo pl-20 ">
          <img src="/hh..svg" alt="Logo"/>
        </div>
        <nav>
         <ul className="nav-list flex justify-end space-x-4 pr-20">
            <li className="hidden md:flex space-x-4">
            <a href="/login" className="px-9 py-3 rounded-full border border-slate-300 bg-white text-black hover:bg-gray-400 hover:text-white transition-colors">Log in</a>
            </li>
            <li className="hidden md:flex space-x-4">
            <a href="/login" className="px-8 py-3  rounded-full border border-slate-300 bg-white text-black hover:bg-gray-400 hover:text-white transition-colors"> Sign up</a>
            </li>
          </ul>
          <button className="md:hidden">Menu</button>
        </nav>
      </header>
    );
  }