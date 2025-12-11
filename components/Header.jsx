import Link from "next/link";
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          
          {/* logo */}
          <Link href="/" className="flex items-center">
            <div className="w-[260px] h-auto">
              <svg
                width="260"
                height="40"
                viewBox="0 0 260 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Text: ARUL PRAKASH */}
                <text
                  x="0"
                  y="27"
                  fill="white"
                  fontSize="26"
                  fontFamily="Poppins, Montserrat, Arial, sans-serif"
                  fontWeight="700"
                  letterSpacing="3"
                >
                  ARUL PRAKASH
                </text>
              </svg>
            </div>
          </Link>

          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
