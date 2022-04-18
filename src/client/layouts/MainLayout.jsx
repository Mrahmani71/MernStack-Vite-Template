import Footer from '../components/Footer';

function MainLayout({ children }) {
  return (
    <>
      {/* Main */}

      <main className="main">{children}</main>

      {/* Footer */}

      <Footer />
    </>
  );
}

export default MainLayout;
