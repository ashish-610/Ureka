import { NavLink } from "react-router";
import { User } from "lucide-react";
import { useAppStore } from "@/store";

const AdminLayout = () => {
    const companyName=useAppStore(
  (state) => state.companyName
);
    return (
        <div className=" bg-blue-700  text-white">
           
            <div className="flex flex-col w-64 h-screen bg-blue-700 text-white p-4 gap-4">
                 <h1 className="text-3xl  text-red-600">{companyName}</h1>
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

                <NavLink
                    to="/query?category=mobile&id=10"
                    className={({ isActive }) =>
                        isActive ? "bg-black w-full p-2 rounded" : "p-2"
                    }
                >
                    Query
                </NavLink>
                <NavLink
                    to="/users"
                    className={({ isActive }) =>
                        isActive ? "bg-black w-full p-2 rounded" : "p-2"
                    }
                >
                    Users(Using Loaders)
                </NavLink>
                 <NavLink
                    to="/register"
                    className={({ isActive }) =>
                        isActive ? "bg-black w-full p-2 rounded" : "p-2"
                    }
                >
                    Registration
                </NavLink>

                  <NavLink
                    to="/changeCompanyName"
                    className={({ isActive }) =>
                        isActive ? "bg-black w-full p-2 rounded" : "p-2"
                    }
                >
                    Change Company Name
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
