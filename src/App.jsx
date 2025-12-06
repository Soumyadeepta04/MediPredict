import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { AuthPage } from "./components/AuthPage";
import { DashboardPage } from "./components/DashboardPage";
import { Toaster } from "./components/ui/sonner";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleNavigation = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <>
            <Navbar onNavigate={handleNavigation} currentPage={currentPage} />
            <HomePage onNavigate={handleNavigation} isLoggedIn={isLoggedIn} />
            <Footer />
          </>
        );
      case "about":
        return (
          <>
            <Navbar onNavigate={handleNavigation} currentPage={currentPage} />
            <AboutPage />
            <Footer />
          </>
        );
      case "auth":
        return <AuthPage onNavigate={handleNavigation} setIsLoggedIn={setIsLoggedIn} />;
      case "dashboard":
        return <DashboardPage onNavigate={handleNavigation} />;
      default:
        return (
          <>
            <Navbar onNavigate={handleNavigation} currentPage={currentPage} />
            <HomePage onNavigate={handleNavigation} isLoggedIn={isLoggedIn} />
            <Footer />
          </>
        );
    }
  };

  return (
    <>
      {renderPage()}
      <Toaster />
    </>
  );
}

export default App;

