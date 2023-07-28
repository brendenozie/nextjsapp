import Layout from "@/components/AdminLayout";
import Sidebar from "@/components/sidebar";
import Link from "next/link";


type Props = {};

const Admin = (props: Props) => {

  return (
    <Layout>
      <main>
        <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
          {/* <!-- component --> */}
            <div className="py-6 flex flex-col justify-center sm:py-12">
              <div className="flex space-x-4 px-4 justify-around">
                {/* <!-- CARD --> */}
                <div className="bg-gradient-to-t from-black via-pink-900 to-pink-700 w-28 md:w-96 md:rounded-3xl rounded-full shadow-md relative flex flex-col items-center justify-between md:items-start py-5 md:p-5 transition-all duration-150">
                 
                  {/* <!-- TEXTS --> */}
                  <div className="transform -rotate-90 md:rotate-0 align-middle text-2xl font-semibold text-gray-200 text-center m-auto md:m-0 md:mt-8">User Count</div>
                  <ul className="text-lg text-gray-300 font-light hidden md:block">
                    <li>9</li>
                    <li></li>
                    <li>❤ </li>
                  </ul>

                  {/* <!-- BUTTONS --> */}
                  <div className="flex w-full justify-around">
                    <button className=" rounded-full w-16 h-16 shadow-sm bg-pink-400 bg-opacity-40 backdrop-blur-lg" >
                      <img className="p-4 w-16 h-16" src="https://www.flaticon.com/svg/vstatic/svg/2362/2362719.svg?token=exp=1618564954~hmac=10f97ba27ae869c1901e136068278327" alt="" />
                    </button>
                    <button className="hidden md:block | rounded-full w-16 h-16 shadow-sm bg-yellow-400 bg-opacity-40 backdrop-blur-lg" >
                      <img className="p-4 w-16 h-16" src="https://www.flaticon.com/svg/vstatic/svg/1256/1256468.svg?token=exp=1618558810~hmac=ba07805284d7548e9f5a51136fd2239d" alt="" />
                    </button>
                    <button className="hidden md:block | rounded-full w-16 h-16 shadow-sm bg-red-400 bg-opacity-40 backdrop-blur-lg" >
                      <img className="p-4 w-16 h-16" src="https://www.flaticon.com/svg/vstatic/svg/1256/1256450.svg?token=exp=1618558812~hmac=898fb277bfa2d329029c133292caacab" alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Card Item Start --> */}
            <div className="py-6 flex flex-col justify-center sm:py-12">
              <div className="flex space-x-4 px-4 justify-around">
                {/* <!-- CARD --> */}
                <div className="bg-gradient-to-t from-black via-pink-900 to-pink-700 w-28 md:w-96 md:rounded-3xl rounded-full shadow-md relative flex flex-col items-center justify-between md:items-start py-5 md:p-5 transition-all duration-150">
                 
                  {/* <!-- TEXTS --> */}
                  <div className="transform -rotate-90 md:rotate-0 align-middle text-2xl font-semibold text-gray-200 text-center m-auto md:m-0 md:mt-8">User Count</div>
                  <ul className="text-lg text-gray-300 font-light hidden md:block">
                    <li>9</li>
                    <li></li>
                    <li>❤ </li>
                  </ul>

                  {/* <!-- BUTTONS --> */}
                  <div className="flex w-full justify-around">
                    <button className=" rounded-full w-16 h-16 shadow-sm bg-pink-400 bg-opacity-40 backdrop-blur-lg" >
                      <img className="p-4 w-16 h-16" src="https://www.flaticon.com/svg/vstatic/svg/2362/2362719.svg?token=exp=1618564954~hmac=10f97ba27ae869c1901e136068278327" alt="" />
                    </button>
                    <button className="hidden md:block | rounded-full w-16 h-16 shadow-sm bg-yellow-400 bg-opacity-40 backdrop-blur-lg" >
                      <img className="p-4 w-16 h-16" src="https://www.flaticon.com/svg/vstatic/svg/1256/1256468.svg?token=exp=1618558810~hmac=ba07805284d7548e9f5a51136fd2239d" alt="" />
                    </button>
                    <button className="hidden md:block | rounded-full w-16 h-16 shadow-sm bg-red-400 bg-opacity-40 backdrop-blur-lg" >
                      <img className="p-4 w-16 h-16" src="https://www.flaticon.com/svg/vstatic/svg/1256/1256450.svg?token=exp=1618558812~hmac=898fb277bfa2d329029c133292caacab" alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Card Item End --> */}
        
            {/* <!-- Card Item Start --> */}
            <div className="py-6 flex flex-col justify-center sm:py-12">
              <div className="flex space-x-4 px-4 justify-around">
                {/* <!-- CARD --> */}
                <div className="bg-gradient-to-t from-black via-pink-900 to-pink-700 w-28 md:w-96 md:rounded-3xl rounded-full shadow-md relative flex flex-col items-center justify-between md:items-start py-5 md:p-5 transition-all duration-150">
                 
                  {/* <!-- TEXTS --> */}
                  <div className="transform -rotate-90 md:rotate-0 align-middle text-2xl font-semibold text-gray-200 text-center m-auto md:m-0 md:mt-8">User Count</div>
                  <ul className="text-lg text-gray-300 font-light hidden md:block">
                    <li>9</li>
                    <li></li>
                    <li>❤ </li>
                  </ul>

                  {/* <!-- BUTTONS --> */}
                  <div className="flex w-full justify-around">
                    <button className=" rounded-full w-16 h-16 shadow-sm bg-pink-400 bg-opacity-40 backdrop-blur-lg" >
                      <img className="p-4 w-16 h-16" src="https://www.flaticon.com/svg/vstatic/svg/2362/2362719.svg?token=exp=1618564954~hmac=10f97ba27ae869c1901e136068278327" alt="" />
                    </button>
                    <button className="hidden md:block | rounded-full w-16 h-16 shadow-sm bg-yellow-400 bg-opacity-40 backdrop-blur-lg" >
                      <img className="p-4 w-16 h-16" src="https://www.flaticon.com/svg/vstatic/svg/1256/1256468.svg?token=exp=1618558810~hmac=ba07805284d7548e9f5a51136fd2239d" alt="" />
                    </button>
                    <button className="hidden md:block | rounded-full w-16 h-16 shadow-sm bg-red-400 bg-opacity-40 backdrop-blur-lg" >
                      <img className="p-4 w-16 h-16" src="https://www.flaticon.com/svg/vstatic/svg/1256/1256450.svg?token=exp=1618558812~hmac=898fb277bfa2d329029c133292caacab" alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Card Item End --> */}
        
            {/* <!-- Card Item Start --> */}
            <div className="py-6 flex flex-col justify-center sm:py-12">
              <div className="flex space-x-4 px-4 justify-around">
                {/* <!-- CARD --> */}
                <div className="bg-gradient-to-t from-black via-pink-900 to-pink-700 w-28 md:w-96 md:rounded-3xl rounded-full shadow-md relative flex flex-col items-center justify-between md:items-start py-5 md:p-5 transition-all duration-150">
                 
                  {/* <!-- TEXTS --> */}
                  <div className="transform -rotate-90 md:rotate-0 align-middle text-2xl font-semibold text-gray-200 text-center m-auto md:m-0 md:mt-8">User Count</div>
                  <ul className="text-lg text-gray-300 font-light hidden md:block">
                    <li>9</li>
                    <li></li>
                    <li>❤ </li>
                  </ul>

                  {/* <!-- BUTTONS --> */}
                  <div className="flex w-full justify-around">
                    <button className=" rounded-full w-16 h-16 shadow-sm bg-pink-400 bg-opacity-40 backdrop-blur-lg" >
                      <img className="p-4 w-16 h-16" src="https://www.flaticon.com/svg/vstatic/svg/2362/2362719.svg?token=exp=1618564954~hmac=10f97ba27ae869c1901e136068278327" alt="" />
                    </button>
                    <button className="hidden md:block | rounded-full w-16 h-16 shadow-sm bg-yellow-400 bg-opacity-40 backdrop-blur-lg" >
                      <img className="p-4 w-16 h-16" src="https://www.flaticon.com/svg/vstatic/svg/1256/1256468.svg?token=exp=1618558810~hmac=ba07805284d7548e9f5a51136fd2239d" alt="" />
                    </button>
                    <button className="hidden md:block | rounded-full w-16 h-16 shadow-sm bg-red-400 bg-opacity-40 backdrop-blur-lg" >
                      <img className="p-4 w-16 h-16" src="https://www.flaticon.com/svg/vstatic/svg/1256/1256450.svg?token=exp=1618558812~hmac=898fb277bfa2d329029c133292caacab" alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Card Item End --> */}
          </div>
        
          <div className="overflow-x-auto">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                  <thead className="ltr:text-left rtl:text-right">
                    <tr>
                      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Name
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Date of Birth
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Role
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Salary
                      </th>
                      <th className="px-4 py-2"></th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        John Doe
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">Web Developer</td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">$120,000</td>
                      <td className="whitespace-nowrap px-4 py-2">
                        <a
                          href="#"
                          className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                        >
                          View
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Jane Doe
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">04/11/1980</td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">Web Designer</td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">$100,000</td>
                      <td className="whitespace-nowrap px-4 py-2">
                        <a
                          href="#"
                          className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                        >
                          View
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Gary Barlow
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">Singer</td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">$20,000</td>
                      <td className="whitespace-nowrap px-4 py-2">
                        <a
                          href="#"
                          className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                        >
                          View
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
          </div>

        </div>
      </main>
  </Layout>
  );
};

export default Admin;