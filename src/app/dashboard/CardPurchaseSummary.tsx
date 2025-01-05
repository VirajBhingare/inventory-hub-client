import { useGetDashboardMetricsQuery } from "@/state/api";
import { TrendingDown, TrendingUp } from "lucide-react";
import numeral from "numeral";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CardPurchaseSummary = () => {
  const { data, isLoading } = useGetDashboardMetricsQuery();
  const purchaseData = data?.purchaseSummary || [];

  const lastDataPoint = purchaseData[purchaseData.length - 1] || null;

  return (
    <div className="flex flex-col justify-between row-span-2 xl:row-span-3 col-span-1 md:col-span-2 xl:col-span-1 bg-white rounded-xl shadow-md">
      {isLoading ? (
        <div className="m-5">Loading...</div>
      ) : (
        <>
          {/* HEADER */}
          <h2 className="font-semibold text-lg px-7 pb-2">Purchase Summary</h2>
          <hr />
          {/* BODY */}
          <div className="mt-4 px-7 mb-4">
            <p className="text-xs text-gray-400">Purchased</p>
            <div className="flex items-center">
              <p className="font-bold text-2xl">
                {lastDataPoint
                  ? numeral(lastDataPoint.totalPurchased).format("$0.00a")
                  : "0"}
              </p>
              {lastDataPoint && (
                <p
                  className={`text-sm ${
                    lastDataPoint.changePercentage! >= 0
                      ? "text-green-500"
                      : "text-red-500"
                  } flex ml-3`}
                >
                  {lastDataPoint.changePercentage! >= 0 ? (
                    <TrendingUp className="w-5 h-5 mr-1" />
                  ) : (
                    <TrendingDown className="w-5 h-5 mr-1" />
                  )}
                  {Math.abs(lastDataPoint.changePercentage!)}%
                </p>
              )}
            </div>
          </div>

          {/* CHART */}
          <ResponsiveContainer width="100%" height={180} className="px-2 pb-4">
            <AreaChart
              data={purchaseData}
              margin={{ top: 0, right: 0, left: -50, bottom: 45 }}
            >
              <XAxis dataKey="date" tick={false} axisLine={false} />
              <YAxis tickLine={false} tick={false} axisLine={false} />
              <Tooltip
                formatter={(value: number) => [
                  `$${value.toLocaleString("en")}`,
                ]}
                labelFormatter={(label) => {
                  const date = new Date(label);
                  return date.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  });
                }}
              />
              <Area
                type="linear"
                dataKey="totalPurchased"
                stroke="#8884d8"
                fill="#8884d8"
                dot={true}
              />
            </AreaChart>
          </ResponsiveContainer>
        </>
      )}
    </div>
  );
};

export default CardPurchaseSummary;
