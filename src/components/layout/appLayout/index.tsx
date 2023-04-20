import { useRouter } from "next/router";

import styled from "styled-components";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

type AppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
  const { pathname } = useRouter();

  return (
    <div>
      {pathname == "/login" ? "" : <Header />}
      {children}
      {pathname == "/login" ? "" : <Footer />}
    </div>
  );
};

export default AppLayout;
