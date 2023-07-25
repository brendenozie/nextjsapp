import Sidebar from "@/components/sidebar";


type Props = {};

const Admin = (props: Props) => {

  return (
    // <!-- ===== Page Wrapper Start ===== -->
    <div className="flex h-screen overflow-hidden">
      {/* <!-- ===== Sidebar Start ===== --> */}
      {/* <include src="./partials/sidebar.html"></include> */}
      <Sidebar/>
      {/* <!-- ===== Sidebar End ===== --> */}
  
      {/* <!-- ===== Content Area Start ===== --> */}
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        {/* <!-- ===== Header Start ===== --> */}
        {/* <include src="./partials/header.html" /> */}
        {/* <!-- ===== Header End ===== --> */}
  
        {/* <!-- ===== Main Content Start ===== --> */}
        <main>
          <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">                      
          
          </div>
        </main>
        {/* <!-- ===== Main Content End ===== --> */}
      </div>
      {/* <!-- ===== Content Area End ===== --> */}
    </div>
    // <!-- ===== Page Wrapper End ===== -->
  );
};

export default Admin;