"use client";

import CardPopularProducts from "@/app/dashboard/CardPopularProducts";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
      <CardPopularProducts />
      <div className="row-span-3 xl:row-span-6 bg-gray-500 rounded-md">
        Item 2
      </div>
      <div className="row-span-2 xl:row-span-3 col-span-1 md:col-span-2 xl:col-span-1 bg-gray-500 rounded-md">
        Item 3
      </div>
      <div className="row-span-3 bg-gray-500 rounded-md">Item 4</div>
      <div className="md:row-span-1 xl:row-span-2 bg-gray-500 rounded-md">
        Item 5
      </div>
      <div className="md:row-span-1 xl:row-span-2 bg-gray-500 rounded-md">
        Item 6
      </div>
      <div className="md:row-span-1 xl:row-span-2 bg-gray-500 rounded-md">
        Item 7
      </div>
    </div>
  );
};

export default Dashboard;
