import { useState } from "react";
import Link from "next/link";

function NavBar({isOpen, toggleSidebar}) {
      
    return(
        <div className="navBar">
            <button className="sideButton" onClick={toggleSidebar}>
            <img className="navImage"
              src={'./open.svg'}
              />
            </button>

            <Link href="/bookmarks/" className="bookmarkRoute">
                <button className="bookmark">
                <img className="bookmarkImage"
                src={'./bookmark.svg'}
                />
                </button>
            </Link>
            
            <Link href="/account/" className="accountRoute">
            <button className="account">
            <img className="accountImage"
              src={'./user.svg'}
              />
            </button>
            </Link>
        </div>
    )
}


export default NavBar;
