import SectionContainer from "./SectionContainer";
import Image from "next/image";
const NavBar = () => {
  return (
    <>
      <div
        id="#top"
        className="z-40  w-full bg-uui-bg-primary fixed flex top-0 border-b-uui-1 border-b-uui-border-secondary py-uui-2xl "
      >
        {/* Remove the mr-auto and ml-uui-none to place the navbar logo in line with the other sections */}
        <SectionContainer>
          <a href="/leaderboard">
            <Image
              src="lilypad-logo.svg"
              width={155}
              height={32}
              alt="Lilypad logo"
            />
          </a>
        </SectionContainer>
      </div>
      <div className="w-full h-[4.549rem]"></div>
    </>
  );
};

export default NavBar;
