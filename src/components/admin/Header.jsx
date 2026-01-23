import Link from "next/link";
import { Bell, User } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-gray-800 text-white px-6 h-16 flex items-center justify-between shadow">
      {/* Left */}
      <div className="flex items-center gap-8">
        <h1 className="text-xl font-bold tracking-wide">Admin Panel</h1>

        {/* Header Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/admin/dashboard" className="hover:text-gray-300 transition">
            Dashboard
          </Link>
          <Link href="/admin/tours" className="hover:text-gray-300 transition">
            Tours
          </Link>
          <Link href="/admin/bookings" className="hover:text-gray-300 transition">
            Bookings
          </Link>
          <Link href="/admin/users" className="hover:text-gray-300 transition">
            Users
          </Link>
        </nav>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Notification
        <button className="relative p-2 rounded hover:bg-gray-700">
          <Bell size={18} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-xs px-1 rounded-full">
            3
          </span>
        </button> */}

        {/* Profile */}
        <Link href="/admin/profile" className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
            <User size={16} />
          </div>
          <span className="text-sm font-medium">Admin</span>
        </Link>
      </div>
    </header>
  );
};
