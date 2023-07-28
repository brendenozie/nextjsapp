import Layout from "@/components/AdminLayout";
import Sidebar from "@/components/sidebar";
import { IDestination } from "@/types/typings";
import getDestinations from "@/utils/getDestinations";
import { GetServerSidePropsContext } from "next";
import Link from "next/link";


type Props = {
  destinationsData: IDestination[];
};

const Destinations = (props: Props) => {

  return (
    <Layout>
        <main>
          {/* <!-- component --> */}
          <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
            <div className="mx-auto sm:flex sm:items-center sm:justify-between">
              <div>
                  <div className="mx-auto flex items-center gap-x-3">
                      <h2 className="text-lg font-medium text-gray-800 text-black">Destinations</h2>

                      <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">0</span>
                  </div>

                  <p className="mx-auto mt-1 text-sm text-gray-500 dark:text-gray-300">.</p>
              </div>

              <div className=" flex items-center mt-4 gap-x-3">
                  <Link href={"/adddestination"}>
                  <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>

                      <span>Add Destinations</span>
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
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
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
                    {props.destinationsData.map((destination) => (
                          <tr className="bg-white border-4 border-gray-200">
                          <td className="px-16 py-2 flex flex-row items-center">
                            <img
                              className="h-8 w-8 rounded-full object-cover "
                              src={destination.img[0].url}
                              alt=""
                            />
                          </td>
                          <td>
                            <span className="text-center ml-2 font-semibold">{destination.title}</span>
                          </td>
                          <td className="px-16 py-2">
                          <Link href={`/adddestination/${destination.id}`} >
                            <button className="bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black ">
                              Edit
                            </button>
                            </Link>
                          </td>
                          <td className="px-16 py-2">
                          <button className="bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black ">
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
    </Layout>
  );
};

export default Destinations;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
 
  const destinationsData =  await getDestinations();

  return {
    props: {
      destinationsData,
    },
  };
};
