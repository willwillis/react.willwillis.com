import React from 'react';
import { Layout, Typography, Avatar, List, Space, Divider, Row, Col } from 'antd';
import { CheckCircleTwoTone, ClockCircleOutlined } from '@ant-design/icons';
import CodeBlock from './components/CodeBlock';

const { Content } = Layout;
const { Title, Text, Paragraph } = Typography;


function App() {
  const sideQuests = [
    { title: "Databricks", status: "completed" },
    { title: "Laravel v CakePHP for small projects", status: "completed" },
    { title: "Running Python Flask in a shared hosting environment", status: "completed" },
    { title: "Running React in shared hosting environment", status: "inProgress" },
  ];

  // const infraAndComponents = [
  //   { title: "Local Development Environment", url: "", description: ""},
  //   { title: "GitHub Repository", url: "", description: ""},
  //   { title: "GitHub Actions", url: "", description: ""},
  //   { title: "Shared Hosting Account", url: "https://namecrane.com/", description: ""}
  // ];

  const serverCode = `
  const express = require('express');
  const path = require('path');

  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(express.static(path.join(__dirname, 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

  app.listen(PORT, () => {
    console.log(\`Server is running on port \${PORT}\`);
  });
  `;
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
            <Title level={2}>So you <u>can</u> run ⚛React on Shared Hosting!🫶</Title>
            <Text type="secondary">New web meets nostalgic web.</Text>
          </Col>
        </Row>

        <Divider />

        {/* Motivation Section */}
        <Title level={3}>My Motivation</Title>
        <Paragraph>
          I've been nostalgic for the old and "easy" web for a few years now. Don't get me wrong, websites today are impressively useable, responsive and beautiful. But they're also complicated. Some might argue, overly complicated if you're developing a simple/personal web site.
        </Paragraph>
        <Paragraph>
          placeholder, explain why complicated 
        </Paragraph>
        <Paragraph>
          Also, cloud hosting can get expensive quickly. I know, I know, before you call me out... 
          you can host the latest and greatest JavaScript built websites/frameworks for free with Cloudflare, 
          Netlify and other providers. Who's really comfortable though, building their site on a "free tier"
          that could change at any moment?
        </Paragraph>
        <Paragraph>
          This is the point where I realize my reasons may not be the most rational... Suffice it to say,
          I wanted to see if it was possible.
        </Paragraph>

      
        <Divider />

        {/* About Me Section */}
        <Title level={3}>The implementation</Title>
        <Paragraph>
          If you are reading this... <i>it's possible</i>! And it wasn't really that difficult either.
        </Paragraph>
        <Paragraph>
          First, create a React app like you normally would. <pre>npx create-react-app my-website</pre>
        </Paragraph>
        <Paragraph>
          Host your code at Github. If you don't know about <pre>git</pre> or version control, start here (link)
        </Paragraph>
        <Paragraph>
          GitHub not only provides version control, but "Actions". They let you run/build code on their servers... FOR FREE! And yes, 
          you could even host the site at github <a href="https://pages.github.com/">pages</a> without
          having to pay for shared hosting, or lease domain name. I have a very simple 
          <a href="https://github.com/willwillis/react.willwillis.com/blob/main/.github/workflows/deploy.yml">deploy workflow</a>
           that does the following:
           
           <ol>
            <li>Watches for code commits on the <pre>main</pre> branch</li>
            <li>When triggered, the actions build the React application, resulting in some HTML and JavaScript being generated.</li>
            <li>Lastly, the actions transfer those files from the github server to my shared hosting server over FTP.</li>
            </ol>
        </Paragraph>

      
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
        
        {/* About Me Section */}
        <Title level={3}>Implementation</Title>
        <Paragraph>
         I like the semantic tags like paragraph, Row, Col, etc.. I need to have another look at bootstrap. tailwind was a little too much, even anchors were 'reset', I don't think I should have to style every 'a' on the page. but that's probably my lack of understanding.
        </Paragraph>
        <Paragraph>
          The default Typography is small. I can override that tho.
        </Paragraph>
        <CodeBlock code={serverCode} language="javascript" />
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
