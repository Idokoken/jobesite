import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Header, NavLinks } from "../../components/Index";

const Wrapper = styled.div`
  margin: 0;
`;

function SharedLayout() {
  return (
    <Wrapper>
      <main className="dashboard">
        <Header />
        <div>
          <NavLinks />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
}

export default SharedLayout;
