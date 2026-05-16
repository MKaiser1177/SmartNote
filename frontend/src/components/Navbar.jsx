import React from "react";
import { Link } from "react-router-dom";
import { PlusIcon } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-6xl p-4 ">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary font-mono centered trackring-tight">
            Smartnote
          </h1>
          <div className="flex items-center gap-4">
            {user && (
              <>
                <span className="text-sm text-base-content/70">
                  {user.email}
                </span>
                <Link to={"/create"} className="btn btn-primary">
                  <PlusIcon className="size-5" />
                  <span>New Note</span>
                </Link>
                <button className="btn btn-ghost" onClick={logout}>
                  Logout
                </button>
              </>
            )}
            {!user && (
              <>
                <Link to="/login" className="btn btn-ghost">
                  Login
                </Link>
                <Link to="/register" className="btn btn-primary">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
