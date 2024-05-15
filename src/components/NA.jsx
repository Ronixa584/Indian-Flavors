import { Link } from "react-router-dom";

const NA = () => {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-gradient-to-r from-pink-400 to-yellow-500 px-6 py-24 sm:py-32 lg:px-8 bg-cover bg-center w-full h-screen">
        <div className="text-center">
          <p className="text-7xl font-bold text-indigo-600">404</p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-green-600  sm:text-5xl">
            No Service Available.Please wait and try after some time!
          </h1>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to="/">
              <button className="m-5 group relative h-12 w-48 overflow-hidden rounded-3xl bg-indigo-600 text-white text-lg shadow bg-cover bg-center border-2 border-purple-400">
                <div class="absolute inset-0 w-0 "></div>
                <span class="relative group-hover:text-white text-white">
                  Refresh!
                </span>
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};
export default NA;
