import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function App() {
  const [input, setInput] = useState('');
  return (
    <div className="App">
      <h1>Live editor untuk membuat markdown</h1>
      <div className="editor">
        <textarea name="editor" value={input} onChange={(e) => setInput(e.target.value)} className="live-editor"></textarea>
      </div>
      <ReactMarkdown
        source={input}
        className="hasil"
        renderers={{
          code: Component
        }}
      />
    </div>
  );
}

const Component = ({ value, language }) => {
  return (
    <SyntaxHighlighter language={language ?? null} style={docco}>
      {value ?? ''}
    </SyntaxHighlighter>
  );
};

export default App;
