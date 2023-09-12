export default function Footer() {
  return (
    <footer className="relative z-20 flex flex-col justify-center bg-[url('/footer_bg.png')] h-60 -mt-48 sm:bg-[length:1920px_auto]  bg-[length:920px_auto] bg-no-repeat">
      <div className="relative z-10 w-full mt-14 sm:mt-36">
        <div className="flex flex-col items-center justify-between w-10/12 h-10 m-auto sm:flex-row sm:w-7/12">
          <div className="flex flex-row items-center justify-center gap-3">
            <img src="/footer_logo.svg" className="h-5 w-14" alt="logo" />
            <a target="_blank" href="https://twitter.com/WalkFun_Web3">
              <i className="bg-[url('/twitter.png')] bg-no-repeat bg-contain w-4 h-4 block"></i>
            </a>
            {/* <a target="_blank" href="https://t.me/AquaLabs_Announcement">
              <i className="bg-[url('/telegram.png')] bg-no-repeat bg-contain w-4 h-4 block hover:bg-[url('/telegram_hover.png')]"></i>
            </a>
            <a href="mailto:contact@alab.fund">
              <i className="bg-[url('/email.png')] bg-no-repeat bg-contain w-4 h-4 block hover:bg-[url('/email_hover.png')]"></i>
            </a> */}
          </div>
          <div className="text-xs text-white">
            © 2023 Walk.Fun, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
