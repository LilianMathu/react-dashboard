import React from 'react';
import { Layout, Typography, Avatar, Image } from 'antd';
import './App.css';

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;



function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={{padding:10, backgroundColor:"#ffebe6"}}>
        <Avatar style={{float: "right"}} src="https://res.cloudinary.com/dcltsh8p7/image/upload/v1607930587/lily_tb9omz.jpg" />
        <Title level={3}>Mobile Mechanics</Title>
        </Header>
        <Layout>
          <Sider style={{ backgroundColor: 'blueviolet' }}>Sider</Sider>
          <Layout>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </Layout>
    </div> 
  );
}

export default App;
