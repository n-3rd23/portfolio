import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <main className="bg-primary min-h-screen px-5 sm:px-10">
      <Outlet />
    </main>
  );
}

export default Layout;
