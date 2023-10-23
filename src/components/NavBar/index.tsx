import menuBurger from '../../assets/menu.svg';

const NavBar = () => {
  return (
    <header className=" w-full sticky top-0 backdrop-blur-[2px] p-4 bg-red-400/50 ">
      <div className="flex justify-between w-full">
        <p>PatoDev</p>
        <nav className="flex justify-end w-full ">
          <ul className="hidden md:flex md:items-center md:gap-10">
            <li>Home</li>
            <li>About me</li>
            <li>Contact me</li>
          </ul>
          <div className='sm:block md:hidden'>
            <button>
              <img className='w-10 h-10' src={menuBurger} alt="" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default NavBar