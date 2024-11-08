import React from 'react';
import { Layout, Typography, Avatar, List, Card, Space, Divider, Row, Col } from 'antd';
import { CheckCircleTwoTone, ClockCircleOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { Title, Text, Paragraph } = Typography;

function App() {
  const sideQuests = [
    { title: "Databricks", status: "completed" },
    { title: "Laravel v CakePHP for small projects", status: "completed" },
    { title: "Running Python Flask in a shared hosting environment", status: "completed" },
    { title: "Running React in shared hosting environment", status: "inProgress" },
  ];

  const projects = [
    {
      title: "Storing Data in the Browser",
      description: "Experiment with JavaScript Service Workers and Local Cache Storage",
      date: "October 2024",
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Content style={{ maxWidth: '800px', margin: '0 auto', padding: '40px' }}>
        {/* Profile Section */}
        <Row justify="center">
          <Col>
            <Avatar
              size={120}
              src="https://willwillis.com/assets/images/simpsons-me.webp" // Replace with your avatar URL
              style={{ marginBottom: '20px' }}
            />
          </Col>
        </Row>
        <Row justify="center">
          <Col>
            <Title level={2}>React &amp; Ant Design on Shared Hosting!🫶</Title>
            <Text type="secondary">Just kicking the tires with different design frameowrks.</Text>
          </Col>
        </Row>

        <Divider />

        {/* About Me Section */}
        <Title level={3}>Thoughts so far</Title>
        <Paragraph>
         I like the semantic tags like paragraph, Row, Col, etc.. I need to have another look at bootstrap. tailwind was a little too much, even anchors were 'reset', I don't think I should have to style every 'a' on the page. but that's probably my lack of understanding.
        </Paragraph>
        <Paragraph>
          The default Typography is small. I can override that tho.
        </Paragraph>

        <Divider />

        {/* Recent Side Quests Section */}
        <Title level={3}>Recent Side Quests</Title>
        <List
          dataSource={sideQuests}
          renderItem={(item) => (
            <List.Item>
              <Space>
                {item.status === 'completed' ? (
                  <CheckCircleTwoTone twoToneColor="#52c41a" />
                ) : (
                  <ClockCircleOutlined style={{ color: '#faad14' }} />
                )}
                <Text>{item.title}</Text>
              </Space>
            </List.Item>
          )}
        />

        <Divider />

      </Content>
    </Layout>
  );
}

export default App;
