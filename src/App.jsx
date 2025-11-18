import React from "react";
import {
  Layout,
  Typography,
  Avatar,
  List,
  Space,
  Divider,
  Row,
  Col,
  Image,
  Grid,
} from "antd";

import { CheckCircleTwoTone, ClockCircleOutlined, JavaScriptOutlined } from "@ant-design/icons";
import CodeBlock from "./components/CodeBlock.jsx";
import { GithubOutlined, AmazonOutlined, HeartOutlined } from "@ant-design/icons";

const { Content, Footer } = Layout;
const { Title, Text, Paragraph } = Typography;
const { useBreakpoint } = Grid;

function App() {
  const screens = useBreakpoint();
  const sideQuests = [
    {
      title: "Plug-and-play design systems like Ant Design",
      status: "completed",
    },
    { title: "Syntax highlighting", status: "completed" },
    {
      title:
        "Literally every web feature you could ever imagine is available in JS/React",
      status: "completed",
    },
    {
      title:
        "If you've made it this far, I don't need to give you any more examples",
      status: "completed",
    },
  ];

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

  const createReactApp = `npx create-react-app my-website`;

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
      <Content style={{ maxWidth: "1000px", margin: "0 auto", padding: screens.xs ? "20px" : "40px" }}>
        {/* Profile Section */}
        <Row justify="center" gutter={[16, 16]}>
          <Col>
            <Avatar
              size={screens.xs ? 80 : 120}
              src="https://willwillis.com/assets/images/simpsons-me.webp"
              style={{ marginBottom: "20px" }}
            />
          </Col>
        </Row>
        <Row justify="center" gutter={[16, 16]}>
          <Col>
            <Title level={screens.xs ? 2 : 1}>⚛ Node.js on Shared Hosting ⚛</Title>
            <Text type="secondary">New web meets nostalgic web.</Text>
          </Col>
        </Row>

        <Row justify="center" align="middle" gutter={[16, 16]}>
          <Col span={24} md={12}>
            <Image
              src="/gtp-server-room.jpg"
              preview={false}
              alt="illustration of a server room"
              style={{ width: "100%" }}
            />
          </Col>
        </Row>
        <Divider />
        {/* Motivation Section */}
        <Title level={2}>My Motivation</Title>
        <Paragraph>
          I've been nostalgic for the old and "easy" web for a few years now.
          Don't get me wrong, websites today are impressively usable,
          responsive and beautiful. But they're also complicated. Some might
          argue, overly complicated if you're developing a simple/personal web
          site.
        </Paragraph>
        <Paragraph>placeholder: explain why it's complicated</Paragraph>
        <Paragraph>
          placeholder: try and explain how I can be nostalgic for old web, yet
          I'm using React
        </Paragraph>
        <Paragraph>placeholder: Make it make sense!</Paragraph>
        <Paragraph>
          Also, cloud hosting can get expensive quickly. I know, I know, before
          you call me out... you can host the latest and greatest JavaScript
          built websites/frameworks for free with Cloudflare, Netlify and other
          providers. Who's really comfortable though, building their site on a
          "free tier" that could change at any moment?
        </Paragraph>
        <Paragraph>
          This is the point where I realize my reasons may not be the most
          rational... Suffice it to say, I wanted to see if it was possible.
        </Paragraph>

        <Divider />

        {/* About Me Section */}
        <Title level={2}>The implementation</Title>
        <Paragraph>
          If you are reading this... <i>it's possible</i>! And it wasn't really
          that difficult either.
        </Paragraph>
        <Paragraph>
          First, create a React app like you normally would.{" "}
          <CodeBlock code={createReactApp} language="bash" />
        </Paragraph>
        <Paragraph>
          Next, add your code to a repository on Github. If you don't know about{" "}
          <code>git</code> or version control, start{" "}
          <a href="https://docs.github.com/en/get-started/using-git/about-git">
            here
          </a>
          . <GithubOutlined />
        </Paragraph>
        <Paragraph>
          GitHub not only provides version control, but "Actions". They let you
          run/build code on their servers... FOR FREE! And yes, you could even
          host the site at github <a href="https://pages.github.com/">pages</a>{" "}
          without having to pay for shared hosting, or lease domain name.
        </Paragraph>
        <Paragraph>
          My Github actions consist of a simple single{" "}
          <a href="https://github.com/willwillis/react.willwillis.com/blob/main/.github/workflows/deploy.yml">
            deploy workflow
          </a>{" "}
          that does the following:
          <ol style={{ margin: "1.5em", lineHeight: "2", marginBottom: "2em" }}>
            <li>
              Watches for code commits on the <code>main</code> branch
            </li>
            <li>
              When triggered, the actions build the React application, resulting
              in some HTML and JavaScript being generated.
            </li>
            <li>
              Lastly, the actions transfer those files from the github server to
              my shared hosting server over FTP.
            </li>
          </ol>
        </Paragraph>
        <Title level={3}>cPanel / Shared Hosting Configuration</Title>
        <Paragraph>
          With the files on the shared server, we're ready to umm, "serve" the
          application. In the <a href="https://cpanel.net">cPanel</a> dashboard,
          click on the <code>Setup Node.js App</code> link.
          <Row justify="center" align="middle" gutter={[16, 16]}>
            <Col span={24} md={12}>
              <Image src="/cpanel-setup-node-app.png" style={{ width: "100%" }} />
            </Col>
          </Row>
          You'll then be presented with a simple form where you can specify
          where on the file system the application will live (application root).
          How you'd like people to find your react app (URL), and the name of
          the startup file.
          <Row justify="center" align="middle" gutter={[16, 16]}>
            <Col span={24} md={12}>
              <Image src="/cpanel-create-node-app-form.png" style={{ width: "100%" }} />
            </Col>
          </Row>
          Notice we're setting up a "Node.js" app, not a "React" app. In simple
          terms, <code>Node</code> is what's actually serving the{" "}
          <code>React</code> app.
          <Title level={4} style={{ marginTop: "1em" }}>
            server.js
          </Title>
          <CodeBlock code={serverCode} language="javascript" />
        </Paragraph>

        <Title level={3}>Subsequent Migration to Vite</Title>
        <Paragraph>
          After initially building this site with Create React App (CRA), I migrated it to <a href="https://vite.dev">Vite</a> for better performance, modern tooling, and to eliminate security vulnerabilities found in CRA's dependencies.
        </Paragraph>

        <Paragraph>
          <strong>Why migrate from CRA to Vite?</strong>
          <ul style={{ margin: "1.5em", lineHeight: "1.8" }}>
            <li><strong>Security:</strong> CRA is no longer maintained and had 9 vulnerabilities in dependencies</li>
            <li><strong>Performance:</strong> Vite dev server starts in ~100ms vs CRA's 2000ms+</li>
            <li><strong>Modern tooling:</strong> ES modules, better tree-shaking, Hot Module Replacement</li>
            <li><strong>Active development:</strong> Vite is actively maintained with regular updates</li>
          </ul>
        </Paragraph>

        <Title level={4}>Migration Process</Title>
        <Paragraph>
          The migration involved several key steps to transition from CRA's webpack-based build system to Vite's modern ESBuild-powered toolchain:
        </Paragraph>

        <Paragraph>
          <strong>1. Dependency Management:</strong><br/>
          Removed all CRA-specific packages and installed Vite:
          <CodeBlock code={`# Remove CRA dependencies
npm uninstall react-scripts @testing-library/jest-dom @testing-library/react @testing-library/user-event web-vitals

# Install Vite and React plugin
npm install --save-dev vite @vitejs/plugin-react`} language="bash" />
        </Paragraph>

        <Paragraph>
          <strong>2. Configuration Setup:</strong><br/>
          Created a <code>vite.config.js</code> to handle JSX in .js files and maintain the same build output structure:
          <CodeBlock code={`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react({
    include: "**/*.{jsx,js}"
  })],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'build' // Keep same output directory for compatibility
  },
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.(jsx?|tsx?)$/,
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx'
      }
    }
  }
})`} language="javascript" />
        </Paragraph>

        <Paragraph>
          <strong>3. HTML Template Migration:</strong><br/>
          Moved <code>public/index.html</code> to the project root and updated it for Vite's module system:
          <CodeBlock code={`<!-- Updated for Vite -->
<script type="module" src="/src/index.jsx"></script>

<!-- Replaced CRA's %PUBLIC_URL% tokens with direct paths -->
<link rel="icon" href="/favicon.ico" />
<link rel="manifest" href="/manifest.json" />`} language="html" />
        </Paragraph>

        <Paragraph>
          <strong>4. File Extensions and Imports:</strong><br/>
          Renamed JavaScript files containing JSX to use .jsx extensions for proper Vite handling:
          <CodeBlock code={`# Renamed files for proper JSX recognition
mv src/index.js src/index.jsx
mv src/App.js src/App.jsx
mv src/components/CodeBlock.js src/components/CodeBlock.jsx

# Updated import statements to include .jsx extension
import App from './App.jsx';
import CodeBlock from './components/CodeBlock.jsx';`} language="bash" />
        </Paragraph>

        <Paragraph>
          <strong>5. Package.json Scripts:</strong><br/>
          Updated npm scripts to use Vite commands while maintaining compatibility:
          <CodeBlock code={`{
  "scripts": {
    "dev": "vite",           // New: Fast development server
    "build": "vite build",   // Same command, different tool
    "preview": "vite preview", // New: Preview production build
    "start": "vite"          // Alias for convenience
  }
}`} language="json" />
        </Paragraph>

        <Paragraph>
          <strong>6. Cleanup and Testing:</strong><br/>
          Removed unused CRA-specific files and ensured full compatibility:
          <CodeBlock code={`# Removed unused files
rm src/reportWebVitals.js

# Removed web-vitals import from index.jsx
# Updated antd CSS import path for Vite compatibility

# Testing commands
npm run dev    # Fast development server
npm run build  # Production build (same output location)
npm run preview # Test production build locally`} language="bash" />
        </Paragraph>

        <Paragraph>
          <strong>Deployment Compatibility:</strong><br/>
          The migration was designed to be completely transparent to the existing deployment pipeline. The GitHub Actions workflow, server.js file, and FTP deployment process required <em>zero changes</em> because:
          <ul style={{ margin: "1.5em", lineHeight: "1.8" }}>
            <li>Vite outputs to the same <code>./build/</code> directory</li>
            <li><code>npm run build</code> command remains identical</li>
            <li>Generated static files are served the same way by Express.js</li>
            <li>React Router handling in server.js works unchanged</li>
          </ul>
        </Paragraph>

        <Paragraph>
          <strong>Results:</strong> Zero security vulnerabilities, 20x faster development builds, modern tooling, and a completely seamless deployment process. The migration eliminated all technical debt from the unmaintained CRA while maintaining 100% functionality and deployment compatibility.
        </Paragraph>

        <Divider />

        {/* About Me Section */}
        <Title level={2}>Wrapping it up</Title>
        <Paragraph>
          I may be coming around to the idea of using React for simple/personal
          websites. I've built dashboard apps for work using Next.js/React,
          GraphQL, etc... but that makes sense, cuz CORPORATE, right?
        </Paragraph>

        <Paragraph>
          I just can't deny any longer how much functionality, features like
          responsiveness, and general <b>pizzazz</b> to be had with little to no
          effort using <JavaScriptOutlined />. Like what, you ask? For starters...
        </Paragraph>

        <List
          dataSource={sideQuests}
          renderItem={(item) => (
            <List.Item>
              <Space>
                {item.status === "completed" ? (
                  <CheckCircleTwoTone twoToneColor="#52c41a" />
                ) : (
                  <ClockCircleOutlined style={{ color: "#faad14" }} />
                )}
                <Text>{item.title}</Text>
              </Space>
            </List.Item>
          )}
        />

        <Divider />
        <Title level={2}>Disclaimer</Title>
        <Paragraph>
          If you're asking yourself,{" "}
          <em>
            "Is his 'nostalgic shared hosting' actually running on some guy's
            server in a budget, mid-tier co-lo?"
          </em>
        </Paragraph>
        <Paragraph>
          I'm 99% sure it's running on someone's EC2 instance in AWS{" "}
          <AmazonOutlined /> ... so there's some irony for ya.
        </Paragraph>
        <Paragraph>
          Thanks for reading! If you enjoyed this, feel free to subscribe to my{" "}
          <a href="https://links.willwillis.com/guest/links/feed">links</a> RSS
          feed.
        </Paragraph>

        <Divider />
        <Title level={2}>To do</Title>
        <Paragraph>
          <ul>
            <li>
              Tinker with some different design systems. I <HeartOutlined />{" "}
              <a href="https://framework.willwillis.com/">Bootstrap</a>, I've
              dabbled in <a href="https://clarity.design/">Clarity Design</a>,
              and have a firm grasp on Material UI, Tailwind CSS, and and I am
              in awe of what <a href="https://ui.shadcn.com/">Shadcn/ui</a> is
              doing.
            </li>
            <li>
              Break sections or other features which repeat themselves (I'm
              looking at you <code>Image</code>) into proper components
            </li>
            <li>
              build out a Perl/CGI or Python API to pull dynamic data from. YES,
              on shared hosting as well!
            </li>
          </ul>
        </Paragraph>
        <Divider />
      </Content>

      <Footer style={{ textAlign: "center" }}>
        Obligatory Footer ©{new Date().getFullYear()} Created by Will Willis
      </Footer>
    </Layout>
  );
}

export default App;
