function HeaderList() {
  return (
    <ul>
      <li>
        <a href="/">
          <span className="material-symbols-outlined item_list iconsSizeMobile iconHover">home</span>
          <span className="displayNone_media">Home</span>
        </a>
      </li>
      <li>
        <a href="/">
          <span className="material-symbols-outlined item_list iconsSizeMobile iconHover">search</span>
          <span className="displayNone_media ">Explore</span>
        </a>
      </li>
      <li>
        <a href="/">
          <span className="material-symbols-outlined item_list iconsSizeMobile iconHover">notifications</span>
          <span className="displayNone_media">Notifications</span>
        </a>
      </li>
      <li>
        <a href="/">
          <span className="material-symbols-outlined item_list iconsSizeMobile iconHover">stacked_email</span>
          <span className="displayNone_media">Lists</span>
        </a>
      </li>
      <li>
        <a href="/">
          <span className="material-symbols-outlined item_list iconsSizeMobile iconHover">lists</span>
          <span className="displayNone_media">Bookmarks</span>
        </a>
      </li>
      <li>
        <a href="/">
          <span className="material-symbols-outlined item_list iconsSizeMobile iconHover">group</span>
          <span className="displayNone_media">Communities</span>
        </a>
      </li>
      <li>
        <a href="/">
          <span className="material-symbols-outlined item_list iconsSizeMobile iconHover">verified</span>
          <span className="displayNone_media">Veriefied</span>
        </a>
      </li>
      <li>
        <a href="/">
          <span className="material-symbols-outlined item_list iconsSizeMobile iconHover">person</span>
          <span className="displayNone_media">Profile</span>
        </a>
      </li>
      <li>
        <a href="/">
          <span className="material-symbols-outlined item_list iconsSizeMobile iconHover">more_horiz</span>
          <span className="displayNone_media">More</span>
        </a>
      </li>
      <li>
        <a href="/" className="-ml-2 bg-twitter-blue hover:bg-blue-500 flex justify-center items-center w-10 h-10 rounded-full">
          <span className="material-symbols-outlined">add</span>
        </a>
      </li>
      <li>
        <div className="bg-twitter-blue -ml-2 w-10 h-10 rounded-full flex justify-center items-center mt-32">L</div>
      </li>
    </ul>
  );
}

export default HeaderList;
