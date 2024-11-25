import Footer from "./Footer";
import Header from "./Header";
import BackToTopButton from "./BacktoTop";
import Loading from "./Loading";
import { ReactNode, useState, useEffect } from "react";
import { useRouter } from "next/router";
import ChatComponent from "./Chat";
const Layout = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <div className="flex flex-col min-h-screen">
      {loading && <Loading />}
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <BackToTopButton />
      <div className="fixed bottom-4 right-4">
        <ChatComponent />
      </div>
    </div>
  );
};

export default Layout;
