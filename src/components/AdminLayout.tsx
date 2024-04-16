import React, { PropsWithChildren, useState } from "react";
import Navbar from "./AdminNavbar";
import Sidebar from "./sidebar";
import UserNavbar from "./UserNavbar";
import UserLayout from "./UserLayout";

const Layout = (props: PropsWithChildren) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    // <div className="grid min-h-screen grid-rows-header bg-zinc-100">
    //   <div>
    //     <Navbar onMenuButtonClick={() => setSidebarOpen((prev) => !prev)} />
    //   </div>

    //   <div className="grid md:grid-cols-sidebar">
    //     <UserNavbar/>
    //     {/* <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} /> */}
    //     {props.children}
    //   </div>
    // </div>
    <UserLayout>
            <div className="flex flex-col flex-1 w-full overflow-y-auto">
              <UserNavbar/>
                <main className="">
                    <div className="flex flex-row  h-fit">
                      <div className="grid mb-4 pb-10 px-8 mx-4 rounded-3xl bg-gray-100 border-4 border-yellow-400 w-full h-fit">
                        {props.children}
                      </div>
                    </div>
                </main>
              </div>
    </UserLayout>
  );
};

export default Layout;
