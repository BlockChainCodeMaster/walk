export default function Footer() {
  return (
    <footer className="flex flex-col justify-center">
      <div className="relative z-10 w-full -mt-10 bg-black border border-t-orange-600">
        <div className="flex items-center justify-between w-10/12 h-10 m-auto sm:w-7/12">
          <div className="flex flex-row items-center justify-center gap-3">
            <img src="/footer_logo.svg" className="h-5 w-14" alt="logo" />
            <a target="_blank" href="https://twitter.com/AquaLabs_">
              <i className="bg-[url('/twitter.png')] bg-no-repeat bg-contain w-4 h-4 block hover:bg-[url('/twitter_hover.png')]"></i>
            </a>
            <a target="_blank" href="https://t.me/AquaLabs_Announcement">
              <i className="bg-[url('/telegram.png')] bg-no-repeat bg-contain w-4 h-4 block hover:bg-[url('/telegram_hover.png')]"></i>
            </a>
            <a href="mailto:contact@alab.fund">
              <i className="bg-[url('/email.png')] bg-no-repeat bg-contain w-4 h-4 block hover:bg-[url('/email_hover.png')]"></i>
            </a>
          </div>
          <div className="text-xs text-white">
            © 2023 Walk.Fun, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
