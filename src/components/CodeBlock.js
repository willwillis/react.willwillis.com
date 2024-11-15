import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'; // Choose your desired theme

const CodeBlock = ({ code, language }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre>
      <code className={`language-${language}`}>
        {code}
      </code>
    </pre>
  );
};

export default CodeBlock;