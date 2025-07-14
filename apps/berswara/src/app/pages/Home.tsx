import { FloatButton, Layout, Select, theme } from 'antd';
import { NavLink, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

const { Header, Content, Footer } = Layout;

export default function Home() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.get('city')) {
      setSearchParams({
        ...Object.fromEntries(searchParams.entries()),
        city: 'bdg',
      });
    }
  }, [searchParams, setSearchParams]);

  const handleCityChange = (value: string) => {
    setSearchParams({
      ...Object.fromEntries(searchParams.entries()),
      city: value,
    });
  };

  return (
    <Layout>
      <Header className="flex justify-between items-center px-12 sticky top-0 z-10">
        <div className="flex-1 max-w-48">
          <img src="/berswara-logo-v1.png" alt="logo berswara" />
        </div>
        <Select
          defaultValue="bdg"
          options={[
            { value: 'bdg', label: 'Bandung' },
            { value: 'bdj', label: 'Banjarbaru' },
          ]}
          className="flex-1 max-w-28"
          onChange={handleCityChange}
        />
      </Header>
      <Content className="px-12 py-5">
        <div
          style={{
            background: colorBgContainer,
            minHeight: 2080,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </div>
        <FloatButton.BackTop />
      </Content>
      <Footer className="text-center">
        Berswara ©{new Date().getFullYear()} Created by{' '}
        <NavLink
          to="https://aprianfi.my.id"
          className="no-underline hover:underline"
        >
          aprianfi.my.id
        </NavLink>
      </Footer>
    </Layout>
  );
}
