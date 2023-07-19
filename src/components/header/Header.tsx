import HeaderList from "./HeaderList/HeaderList";
import TwitterIcon from "./TwitterIcon/TwitterIcon";

function Header() {
  return (
    <header className="h-screen w-16 border-r fixed left-0 top-0 border-border-twitter">
      <div className="p-5 w-16">
        <TwitterIcon/>
        <HeaderList/>
      </div>
    </header>
  )
}

export default Header;