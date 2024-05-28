import { Outlet } from "react-router-dom";
import NavBar from "../navbar/NavBar";

export function Layout() {
  return (
    <div className="bg-neutral-900 text-white min-h-screen w-screen">
      <NavBar />
      <Outlet />
    </div>
  );
}
