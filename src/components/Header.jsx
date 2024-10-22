export function Header() {
    return (
      
      <header className="flex justify-between items-center bg-white border-b  p-4 ">
        <div className="logo ">
          <img src="/hh..svg" alt="Logo"/>
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