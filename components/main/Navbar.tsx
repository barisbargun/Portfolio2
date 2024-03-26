import { NavDesktop, NavMobile } from "../index";

const Navbar = () => {
  return (
    <header className='flex-center fixed left-0 top-0 z-50 h-12 w-screen bg-background/50 shadow-[0_1px_1px_theme("colors.slate.500")] backdrop-blur-[2px] lg:h-16'>
      {/** For Desktop */}
      <NavDesktop />

      {/** For Mobile */}
      <NavMobile />
    </header>
  );
};
export default Navbar;
