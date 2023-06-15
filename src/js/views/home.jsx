import React, { useContext } from "react";
import { Context } from "../store/appContext";

const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-bold dark:text-white text-center">Donation List</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {store.donations.map((donation, index) => (
            <a href="#" className="group relative" key={index}>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src={donation.imageURL} alt="..." className="image h-full w-full object-cover object-center group-hover:opacity-75" />
                <p className="absolute bottom-3 left-3 badge-lg badge">{donation.productStatus}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );

}
export default Home;


