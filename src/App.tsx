import { Layout, Menu } from "antd";
import { FC, useEffect, useState } from "react";

import { StaffTable } from "./components";
import { StaffMember, doctors, nurses } from "./data";

const { Header, Content } = Layout;

const App: FC = () => {
  const [currentTab, setCurrentTab] = useState("doctors");
  const [doctorList, setDoctorList] = useState<StaffMember[]>(doctors);
  const [nurseList, setNurseList] = useState<StaffMember[]>(nurses);
  const isMobile = window.innerWidth < 769;

  useEffect(() => {
    console.log(isMobile);
  }, []);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ paddingInline: isMobile ? 0 : "1rem" }}>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[currentTab]}
          onClick={(e) => setCurrentTab(e.key)}
          items={[
            { key: "doctors", label: "Врачи" },
            { key: "nurses", label: "Медсестры" },
          ]}
        />
      </Header>

      <Content style={{ padding: "20px" }}>
        {currentTab === "doctors" ? (
          <StaffTable
            title="Врачи"
            staffList={doctorList}
            onUpdate={setDoctorList}
          />
        ) : (
          <StaffTable
            title="Медсестры"
            staffList={nurseList}
            onUpdate={setNurseList}
          />
        )}
      </Content>
    </Layout>
  );
};

export default App;
