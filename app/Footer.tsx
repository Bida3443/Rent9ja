

export default function Nav() {

    const Nav = [
        {
            text: "Privacy",
            link: "#Hero",
        },
        {
            text: "Terms",
            link: "#Hero",
        },
        {
            text: "Contact",
            link: "#Hero",
        },
    ]

    return (
        

        <nav className="bg-[#020C04] px-3 transition-all duration-300">

  <div className="flex flex-col lg:flex-row items-center justify-between p-6 lg:p-10 text-white gap-4">

    {/* TOP ROW ON MOBILE: logo left + links right */}
    <div className="w-full flex items-center justify-between lg:w-auto">

      {/* LOGO */}
      <a href="#Hero">
        <h1 className="text-[20px] font-extrabold tracking-tight">
          <span className="text-[#C9F967]">Rent</span>9ja
        </h1>
      </a>

      {/* LINKS (RIGHT ON MOBILE) */}
      <div className="flex gap-5 text-[#B4B8AB] lg:hidden">
        {Nav.map((item, index) => (
          <div
            key={index}
            className="hover:text-white text-[14px] transition-all duration-300"
          >
            <a href={item.link}>{item.text}</a>
          </div>
        ))}
      </div>

    </div>

    {/* CENTER TEXT (ONLY CENTERED P TAG ON MOBILE) */}
    <div className="w-full flex justify-center lg:justify-center">
      <p className="text-[#91938A] text-[13px] text-center">
        Built in Lagos, for Nigeria.
      </p>
    </div>

    {/* DESKTOP LINKS */}
    <div className="hidden lg:flex gap-5 text-[#B4B8AB]">
      {Nav.map((item, index) => (
        <div
          key={index}
          className="hover:text-white text-[14px] transition-all duration-300"
        >
          <a href={item.link}>{item.text}</a>
        </div>
      ))}
    </div>
  </div>
</nav>
    );
}
