import { GetServerSidePropsContext } from "next";
import { ITravelStyle } from "../types/typings";
import Sidebar from "@/components/sidebar";
import Link from "next/link";


type Props = {
  travelStyles: ITravelStyle[];
};

const Cities = (props: Props) => {

  return (
    // <!-- ===== Page Wrapper Start ===== -->
    <div className="flex h-screen overflow-hidden">
      {/* <!-- ===== Sidebar Start ===== --> */}
      
      <Sidebar/>
      {/* <!-- ===== Sidebar End ===== --> */}
  
      {/* <!-- ===== Content Area Start ===== --> */}
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
  
        {/* <!-- ===== Main Content Start ===== --> */}
        <main>

          {/* <!-- component --> */}
          <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
            <div className="mx-auto sm:flex sm:items-center sm:justify-between">
              <div>
                  <div className="mx-auto flex items-center gap-x-3">
                      <h2 className="text-lg font-medium text-gray-800 text-black">Travel Style</h2>

                      <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">0</span>
                  </div>

                  <p className="mx-auto mt-1 text-sm text-gray-500 dark:text-gray-300">.</p>
              </div>

              <div className=" flex items-center mt-4 gap-x-3">
                  {/* <Link href={"/addcity"}>
                    <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_3098_154395)">
                            <path d="M13.3333 13.3332L9.99997 9.9999M9.99997 9.9999L6.66663 13.3332M9.99997 9.9999V17.4999M16.9916 15.3249C17.8044 14.8818 18.4465 14.1806 18.8165 13.3321C19.1866 12.4835 19.2635 11.5359 19.0351 10.6388C18.8068 9.7417 18.2862 8.94616 17.5555 8.37778C16.8248 7.80939 15.9257 7.50052 15 7.4999H13.95C13.6977 6.52427 13.2276 5.61852 12.5749 4.85073C11.9222 4.08295 11.104 3.47311 10.1817 3.06708C9.25943 2.66104 8.25709 2.46937 7.25006 2.50647C6.24304 2.54358 5.25752 2.80849 4.36761 3.28129C3.47771 3.7541 2.70656 4.42249 2.11215 5.23622C1.51774 6.04996 1.11554 6.98785 0.935783 7.9794C0.756025 8.97095 0.803388 9.99035 1.07431 10.961C1.34523 11.9316 1.83267 12.8281 2.49997 13.5832" stroke="currentColor" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_3098_154395">
                            <rect width="20" height="20" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>

                        <span>Import</span>
                    </button>
                  </Link> */}

                  <Link href={"/addtravelstyle"}>
                    <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                        <span>Add Travel Style</span>
                    </button>
                  </Link>
              </div>
            </div>

            <div className="mt-6 mb-6 md:flex md:items-center md:justify-between">
                <div className="inline-flex overflow-hidden bg-white border divide-x rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700">
                    <button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 bg-gray-100 sm:text-sm dark:bg-gray-800 dark:text-gray-300">
                        View all
                    </button>

                    <button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
                        
                    </button>

                    <button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
                        
                    </button>
                </div>

                <div className="relative flex items-center mt-4 md:mt-0">
                    <span className="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </span>

                    <input type="text" placeholder="Search" className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                </div>
            </div>
            <div>
                <table className="min-w-full table-auto">
                  <thead className="justify-between">
                      <tr className="bg-gray-800">
                        <th className="px-16 py-2">
                          <span className="text-gray-300"></span>
                        </th>
                        <th className="px-16 py-2">
                          <span className="text-gray-300">Name</span>
                        </th>
                        <th className="px-16 py-2">
                          <span className="text-gray-300"></span>
                        </th>
                        <th className="px-16 py-2">
                          <span className="text-gray-300"></span>
                        </th>

                        <th className="px-16 py-2">
                          <span className="text-gray-300"></span>
                        </th>

                        <th className="px-16 py-2">
                          <span className="text-gray-300">Status</span>
                        </th>
                      </tr>
                  </thead>
                <tbody className="bg-gray-200">
                    {props.travelStyles.map((travelStyle) => (
                          <tr className="bg-white border-4 border-gray-200">
                          <td className="px-16 py-2 flex flex-row items-center">
                            <img
                              className="h-8 w-8 rounded-full object-cover "
                              src={travelStyle.url}
                              alt={travelStyle.styleName}
                            />
                          </td>
                          <td>
                            <span className="text-center ml-2 font-semibold">{travelStyle.styleName}</span>
                          </td>
                          <td className="px-16 py-2">
                          <Link href={`/addtravelstyle/${travelStyle.id}`} >
                            <button className="bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black ">
                              Edit
                            </button>
                            </Link>
                          </td>
                          <td className="px-16 py-2">
                            <button className="bg-red-800 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black ">
                              Delete
                            </button>
                          </td>
                          <td className="px-16 py-2">
                            <span>-</span>
                          </td>
              
                          <td className="px-16 py-2">
                            <span className="text-green-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h5 "
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="#2c3e50"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M5 12l5 5l10 -10" />
                              </svg>
                            </span>
                          </td>
                        </tr>
                    ))}
                </tbody>
                </table>
            </div>
          </div>
        </main>
        {/* <!-- ===== Main Content End ===== --> */}
      </div>
      {/* <!-- ===== Content Area End ===== --> */}
    </div>
  );
};

export default Cities;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
 
  const travelStyles =  await fetch(`${process.env.NEXT_API_URL}/get-travel-style`).then(
                        (res) => res.json()
                      );

  return {
    props: {
      travelStyles,
    },
  };
};
