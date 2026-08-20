import HamburgerList from "./HamburgerList";

function Hamburger({ isOpen, onClose, navItems }) {
  return (
    <nav
      id="mobile-menu"
      aria-label="Main navigation"
      aria-hidden={!isOpen}
      className="mt-6 flex flex-col gap-4 w-[90%] mx-auto h-[90%]"
    >
      <HamburgerList navItems={navItems} onClose={onClose} />
    </nav>
  );
}

export default Hamburger;
