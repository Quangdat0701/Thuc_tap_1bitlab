import Sidebar from "../component/Sidebar";

function DashboardLayout({ children }) {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",   // QUAN TRỌNG
        width: "100%",
      }}
    >
      {/* SIDEBAR */}
      <Sidebar />

      {/* CONTENT SCROLL */}
      <main
        style={{
          flex: 1,
          background: "#f7f8fc",
          padding: 30,
          overflowY: "auto", // CHỈ CONTENT CUỘN
        }}
      >
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;
