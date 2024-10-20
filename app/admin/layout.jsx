import SideBar from "@/Components/AdminComponents/SideBar";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex">
        <SideBar />
        <div className="flex"></div>
      </div>
      {children}
    </>
  );
}
