import Navbar from "../components/Navbar";

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{ padding: "20px" }}>
        {children}
      </main>
    </>
  );
}

export default MainLayout;
