import menuBurger from '../../assets/menu.svg';

const NavBar = () => {
  return (
    <header className=" w-full fixed top-0 backdrop-blur-[2px] h-10 p-2 bg-red-400/50 ">
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
              <img className='w-6 h-6' src={menuBurger} alt="" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default NavBar