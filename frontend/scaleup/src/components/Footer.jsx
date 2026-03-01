import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#193A84] text-white font-[Poppins] h-[527px] md:h-[487px] flex flex-col justify-between px-6 md:px-16 lg:px-24 py-10 md:py-14">
      <div className="max-w-6xl mx-auto w-full flex flex-col justify-between flex-1">
        {/* Desktop layout */}
        <div className="hidden md:flex w-full justify-between mb-0">
          {/* Brand + Socials */}
          <div className="flex flex-col justify-start max-w-[340px]">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[#193A84] font-extrabold text-xl">S</span>
              </div>
              <span className="text-2xl font-bold tracking-tight uppercase">ScaleUp</span>
            </div>
            <p className="text-[15px] leading-relaxed text-white/80 mb-5">
              ScaleUp is a collaborative innovation hub focused on building digital products and empowering talent through real world execution
            </p>
            {/* Socials directly below description */}
            <div className="flex items-center gap-6">
              <a href="#" className="flex items-center justify-center" aria-label="Facebook">
                <Facebook size={22} className="text-white" />
              </a>
              <a href="#" className="flex items-center justify-center" aria-label="Instagram">
                <Instagram size={22} className="text-white" />
              </a>
              <a href="#" className="flex items-center justify-center" aria-label="Twitter">
                <Twitter size={22} className="text-white" />
              </a>
              <a href="#" className="flex items-center justify-center" aria-label="Linkedin">
                <Linkedin size={22} className="text-white" />
              </a>
            </div>
          </div>
          {/* Explore */}
          <div className="flex flex-col justify-start">
            <h4 className="font-bold text-[19px] mb-7 uppercase">Explore</h4>
            <ul className="flex flex-col gap-5 text-[15px] text-white/80">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Products</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          {/* Community */}
          <div className="flex flex-col justify-start">
            <h4 className="font-bold text-[19px] mb-7 uppercase">Community</h4>
            <ul className="flex flex-col gap-5 text-[15px] text-white/80">
              <li><a href="#" className="hover:underline">Testimonials</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
              <li><a href="#" className="hover:underline">Team Members</a></li>
              <li><a href="#" className="hover:underline">Join Us</a></li>
            </ul>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden flex flex-col gap-8">
          {/* Brand */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[#193A84] font-extrabold text-xl">S</span>
              </div>
              <span className="text-2xl font-bold tracking-tight uppercase">ScaleUp</span>
            </div>
            <p className="text-[14px] leading-relaxed text-white/80 mb-4">
              ScaleUp is a collaborative innovation hub focused on building digital products and empowering talent through real world execution
            </p>
          </div>
          {/* Explore & Community side by side */}
          <div className="flex flex-row gap-8 w-full">
            {/* Explore + Socials */}
            <div className="flex flex-col items-start flex-1">
              <h4 className="font-bold text-[16px] mb-4 uppercase">Explore</h4>
              <ul className="flex flex-col gap-3 text-[14px] text-white/80">
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Products</a></li>
                <li><a href="#" className="hover:underline">Contact Us</a></li>
              </ul>
              {/* Socials below Explore links */}
              <div className="flex items-center gap-4 mt-5">
                <a href="#" className="flex items-center justify-center" aria-label="Facebook">
                  <Facebook size={20} className="text-white" />
                </a>
                <a href="#" className="flex items-center justify-center" aria-label="Instagram">
                  <Instagram size={20} className="text-white" />
                </a>
                <a href="#" className="flex items-center justify-center" aria-label="Twitter">
                  <Twitter size={20} className="text-white" />
                </a>
                <a href="#" className="flex items-center justify-center" aria-label="Linkedin">
                  <Linkedin size={20} className="text-white" />
                </a>
              </div>
            </div>
            {/* Community */}
            <div className="flex flex-col items-start flex-1">
              <h4 className="font-bold text-[16px] mb-4 uppercase">Community</h4>
              <ul className="flex flex-col gap-3 text-[14px] text-white/80">
                <li><a href="#" className="hover:underline">Testimonials</a></li>
                <li><a href="#" className="hover:underline">FAQs</a></li>
                <li><a href="#" className="hover:underline">Team Members</a></li>
                <li><a href="#" className="hover:underline">Join Us</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom: line + copyright */}
        <div>
          <div className="w-full h-px bg-white/30 mb-5" />
          <p className="text-center text-[13px] text-white/60">
            &copy;ScaleUp. Copyright and All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
