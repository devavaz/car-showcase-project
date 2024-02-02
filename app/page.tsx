"use client";


import {CustomButton, CustomFilter, Hero} from "@/components";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
          <div className="home__text-container">
            <h1 className="text-4x1 font-extrabold ">Car Catalog</h1>
            <p>Explore cars you might like</p>
          </div>

          <div className="home__filters">
            <SearchBar />

            <div className="home__filter-container">
              <CustomFilter  />
              <CustomFilter  />
             </div>
          </div>
      </div>
    </main>
  );
}
