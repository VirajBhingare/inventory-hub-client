"use client";

import CardPopularProducts from "@/app/dashboard/CardPopularProducts";
import CardSalesSummary from "@/app/dashboard/CardSalesSummary";
import CardPurchaseSummary from "@/app/dashboard/CardPurchaseSummary";
import CardExpenseSummary from "@/app/dashboard/CardExpenseSummary";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
      <CardPopularProducts />
      <CardSalesSummary />
      <CardPurchaseSummary />
      <CardExpenseSummary />
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
