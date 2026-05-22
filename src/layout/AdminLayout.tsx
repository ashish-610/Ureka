import { NavLink } from "react-router";
import { User } from "lucide-react";

const AdminLayout = () => {
    return (
        <div className=" bg-blue-700  text-white">
            <div className="flex flex-col w-64 h-screen bg-blue-700 text-white p-4 gap-4">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "bg-black w-full p-2 rounded" : "p-2"
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/product"
                    className={({ isActive }) =>
                        isActive ? "bg-black w-full p-2 rounded" : "p-2"
                    }
                >
                    Product
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? "bg-black w-full p-2 rounded" : "p-2"
                    }
                >
                    About
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        isActive ? "bg-black w-full p-2 rounded" : "p-2"
                    }
                >
                    Contact
                </NavLink>
            </div>
            <div className="p-4">
                <User size={30} color="white" className="inline-block " />
                <span className="mx-2">Profile</span>

            </div>

        </div>
    );
};

export default AdminLayout;
