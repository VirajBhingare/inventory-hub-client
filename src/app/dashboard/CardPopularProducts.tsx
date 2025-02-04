import { useGetDashboardMetricsQuery } from "@/state/api";
import { ShoppingBag } from "lucide-react";
import Rating from "@/app/(components)/Rating";

const CardPopularProducts = () => {
  const { data: dashboardMetrics, isLoading } = useGetDashboardMetricsQuery();

  return (
    <div className="row-span-3 xl:row-span-6 rounded-2xl bg-white shadow-xl pb-16">
      {isLoading ? (
        <div className="m-5">Loading...</div>
      ) : (
        <>
          <h3 className="px-7 pt-5 pb-2 font-semibold text-lg">
            Popular Products
          </h3>
          <hr />
          <div className="overflow-auto h-full">
            {dashboardMetrics?.popularProducts.map((product) => (
              <div
                key={product.productId}
                className="flex justify-between items-center gap-3 px-5 py-7 border-b"
              >
                <div className="flex items-center gap-3">
                  <div className="">Image</div>
                  <div className="flex flex-col justify-between gap-1">
                    <div className="font-bold text-gray-700">
                      {product.name}
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="font-bold text-blue-500 text-xs">
                        $ {product.price}
                      </span>
                      <span className="mx-2">|</span>
                      <Rating rating={product.rating || 0} />
                    </div>
                  </div>
                </div>

                <div className="text-xs flex items-center">
                  <button className="p-2 rounded-full bg-blue-100 text-blue-600 mr-2">
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                  <span>{Math.floor(product.stockQuantity / 1000)}k Sold</span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CardPopularProducts;
