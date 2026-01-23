import AdminLayout from "@/components/admin/AdminLayout";
import { Plane, Users, Map, Wallet, TrendingUp } from "lucide-react"; // Assuming Lucide icons

export default function DashboardPage() {
  const stats = [
    { label: "Total Bookings", value: "1,284", icon: <Plane className="text-blue-500" />, change: "+12%" },
    { label: "Active Tours", value: "43", icon: <Map className="text-green-500" />, change: "+3" },
    { label: "Total Revenue", value: "$42,500", icon: <Wallet className="text-yellow-500" />, change: "+18%" },
    { label: "New Customers", value: "156", icon: <Users className="text-purple-500" />, change: "+5%" },
  ];

  return (
    <div className="p-6 mt-10 space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-gray-800">Travel Overview</h1>
        <p className="text-gray-500">Welcome back! Here’s what’s happening with your tours today.</p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <div key={idx} className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">{stat.label}</p>
              <h3 className="text-2xl font-bold">{stat.value}</h3>
              <span className="text-xs font-medium text-green-600">{stat.change} <span className="text-gray-400 font-normal">vs last month</span></span>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">{stat.icon}</div>
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Bookings Table */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold mb-4">Upcoming Expeditions</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-gray-400 border-b">
                  <th className="pb-3 font-medium">Destination</th>
                  <th className="pb-3 font-medium">Customer</th>
                  <th className="pb-3 font-medium">Date</th>
                  <th className="pb-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr className="hover:bg-gray-50 transition">
                  <td className="py-4 font-medium">Bali, Indonesia</td>
                  <td className="py-4">John Doe</td>
                  <td className="py-4">Oct 12, 2023</td>
                  <td className="py-4"><span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">Confirmed</span></td>
                </tr>
                <tr className="hover:bg-gray-50 transition">
                  <td className="py-4 font-medium">Swiss Alps</td>
                  <td className="py-4">Sarah Smith</td>
                  <td className="py-4">Oct 15, 2023</td>
                  <td className="py-4"><span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">Pending</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Popular Destinations Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold mb-4">Top Destinations</h2>
          <div className="space-y-4">
            {[ 
              { name: "Paris, France", bookings: 450 },
              { name: "Tokyo, Japan", bookings: 320 },
              { name: "Rome, Italy", bookings: 210 }
            ].map((dest, i) => (
              <div key={i} className="flex flex-col">
                <div className="flex justify-between text-sm mb-1">
                  <span>{dest.name}</span>
                  <span className="font-bold">{dest.bookings}</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${(dest.bookings / 500) * 100}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}