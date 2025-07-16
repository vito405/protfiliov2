const navLinks = [
  { href: "#Home", label: "Home" },
  { href: "#About", label: "About" },
  { href: "#Skills", label: "Skills" },
  { href: "#Projects", label: "Projects" },
];

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-[4rem] bg-[#586F7C] flex items-center justify-center gap-8 z-50">
      {navLinks.map(({ href, label }) => (
        <a
          className="text-2xl text-white hover:underline "
          key={label}
          href={href}
        >
          <span className="">{label}</span>
        </a>
      ))}
    </nav>
  );
};

export default Header;
