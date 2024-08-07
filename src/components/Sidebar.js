import React from "react";
import { Icon } from "Icons";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-[88px] lg:w-[275px] p-4 pt-4 ml-[115px] lg:ml-0">
      <div className="flex flex-col fixed">
        <div>
          <div className="hover:bg-blue-50 rounded-full max-w-min h-auto p-2 ml-2 transition-all">
            <span>
              <a href="/">
                <Icon name="tlogo" size={30} />
              </a>
            </span>
          </div>
          <nav className="flex flex-col gap-y-0 mt-2">
            <ul>
              <li>
                <NavLink
                  to={"/"}
                  activeClassName="!font-semibold"
                  exact
                  className="flex gap-x-4 items-center hover:bg-sgray hover:bg-opacity-[0.1] max-w-max p-4 py-3 rounded-full"
                >
                  {window.location.href ===
                  "https://twitter-clone-byerenyalcn.netlify.app/" ? (
                    <Icon name="homeact" />
                  ) : (
                    <Icon name="home" />
                  )}
                  <span className="text-xl text-sgray hidden lg:block">
                    Home
                  </span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"/explore"}
                  activeClassName="!font-semibold"
                  className="flex gap-x-4 items-center hover:bg-sgray hover:bg-opacity-[0.1] max-w-max p-4 py-3 rounded-full"
                  href="#"
                >
                  {window.location.href ===
                  "https://twitter-clone-byerenyalcn.netlify.app/explore" ? (
                    <Icon name="hashact" />
                  ) : (
                    <Icon name="hash" />
                  )}
                  <span className="text-xl text-sgray hidden lg:block">
                    Explore
                  </span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"/notification"}
                  activeClassName="!font-semibold"
                  className="flex gap-x-4 items-center hover:bg-sgray hover:bg-opacity-[0.1] max-w-max p-4 py-3 rounded-full"
                  href="#"
                >
                  {window.location.href ===
                  "https://twitter-clone-byerenyalcn.netlify.app/notification" ? (
                    <Icon name="notifiact" />
                  ) : (
                    <Icon name="notifi" />
                  )}
                  <span className="text-xl text-sgray hidden lg:block">
                    Notification
                  </span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"/messages"}
                  activeClassName="!font-semibold"
                  className="flex gap-x-4 items-center hover:bg-sgray hover:bg-opacity-[0.1] max-w-max p-4 py-3 rounded-full"
                  href="#"
                >
                  {window.location.href ===
                  "https://twitter-clone-byerenyalcn.netlify.app/messages" ? (
                    <Icon name="messageact" />
                  ) : (
                    <Icon name="message" />
                  )}
                  <span className="text-xl text-sgray hidden lg:block">
                    Messages
                  </span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"/bookmarks"}
                  activeClassName="!font-semibold"
                  className="flex gap-x-4 items-center hover:bg-sgray hover:bg-opacity-[0.1] max-w-max p-4 py-3 rounded-full"
                  href="#"
                >
                  {window.location.href ===
                  "https://twitter-clone-byerenyalcn.netlify.app/bookmarks" ? (
                    <Icon name="bookmarkact" />
                  ) : (
                    <Icon name="bookmark" />
                  )}
                  <span className="text-xl text-sgray hidden lg:block">
                    Saved
                  </span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"/lists"}
                  activeClassName="!font-semibold"
                  className="flex gap-x-4 items-center hover:bg-sgray hover:bg-opacity-[0.1] max-w-max p-4 py-3 rounded-full"
                  href="#"
                >
                  {window.location.href ===
                  "https://twitter-clone-byerenyalcn.netlify.app/lists" ? (
                    <Icon name="listact" />
                  ) : (
                    <Icon name="list" />
                  )}
                  <span className="text-xl text-sgray hidden lg:block">
                    List
                  </span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"/profile"}
                  activeClassName="!font-semibold"
                  className="flex gap-x-4 items-center hover:bg-sgray hover:bg-opacity-[0.1] max-w-max p-4 py-3 rounded-full"
                  href="#"
                >
                  {window.location.href === "http://localhost:3000/profile" ? (
                    <Icon name="profileact" />
                  ) : (
                    <Icon name="profile" />
                  )}
                  <span className="text-xl text-sgray hidden lg:block">
                    Profile
                  </span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"/more"}
                  activeClassName="!font-semibold"
                  className="flex gap-x-4 items-center hover:bg-sgray hover:bg-opacity-[0.1] max-w-max p-4 py-3 rounded-full"
                  href="#"
                >
                  <Icon name="more" size={26} />
                  <span className="text-xl text-sgray hidden lg:block">
                    More
                  </span>
                </NavLink>
              </li>
            </ul>
          </nav>
          <button className="bg-primary text-[17px] font-semibold p-4 rounded-full max-w-max lg:max-w-none lg:w-[212px] mt-4 shadow-xs hover:bg-dblue transition-all">
            <span className="hidden lg:block">Tweeter</span>
            <div className="block lg:hidden">
              <Icon name="create" size={20} />
            </div>
          </button>
        </div>

        <div className="text-black bottom-0 fixed mb-4 rounded-full group">
          <div className="flex justify-between items-center group-hover:bg-ts group-hover:bg-opacity-20 transition-all rounded-full">
            <div className="flex lg:gap-x-3 lg:mx-2 p-2 items-center ">
              <img
                alt="profile"
                className="w-[40px] h-[40px] rounded-full"
                src="https://pbs.twimg.com/profile_images/1296943658281979912/2ucPJ6wG_x96.jpg"
              />
              <div className="flex flex-col ">
                <span className="text-sgray font-semibold hidden lg:block">
                  Full name
                </span>
                <span className="text-xs text-ts hidden lg:block">
                  @username
                </span>
              </div>
            </div>
            <span className="justify-between ml-8 mr-4 hidden hlg:block">
              <Icon name="dots" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
