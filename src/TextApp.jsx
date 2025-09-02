import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import './TextArea.css';

function TextArea({ mode }) {
  const [text, setText] = useState('');
  const [originalText, setOriginalText] = useState('');
  const [findWord, setFindWord] = useState('');
  const [replaceWord, setReplaceWord] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
    if (!originalText) setOriginalText(e.target.value);
  };

  const resetText = () => setText(originalText);

  const checkGrammar = () => {
    let fixed = text.replace(/\s+/g, ' ').trim();
    if (fixed) {
      fixed = fixed.charAt(0).toUpperCase() + fixed.slice(1);
      if (!/[.!?]$/.test(fixed)) fixed += '.';
    }
    setText(fixed);
    alert('Basic grammar corrections applied!');
  };

 
  const replaceAllCaseInsensitive = (source, find, replaceWith) => {
    if (!find) return source;
    const lowerSource = source.toLowerCase();
    const lowerFind = find.toLowerCase();
    let result = '';
    let pos = 0;
    let idx;
    while ((idx = lowerSource.indexOf(lowerFind, pos)) !== -1) {
      result += source.slice(pos, idx) + replaceWith;
      pos = idx + find.length;
    }
    result += source.slice(pos);
    return result;
  };

  const replaceWordHandler = () => {
    if (!findWord || !replaceWord) return;
    const replaced = replaceAllCaseInsensitive(text, findWord, replaceWord);
    setText(replaced);
    setFindWord('');
    setReplaceWord('');
  };

  const removeWordHandler = () => {
    if (!findWord) return;
    const removed = replaceAllCaseInsensitive(text, findWord, '');
    setText(removed);
    setFindWord('');
  };

  
  const getHighlightedText = () => {
    const query = findWord.trim();
    if (!query) return text || '';

    const lowerText = text.toLowerCase();
    const lowerQuery = query.toLowerCase();

    const nodes = [];
    let start = 0;
    let idx;
    let key = 0;

    while ((idx = lowerText.indexOf(lowerQuery, start)) !== -1) {
      if (idx > start) {
        nodes.push(text.slice(start, idx));
      }
      // push highlighted match
      const match = text.slice(idx, idx + query.length);
      nodes.push(
        <span key={key++} style={{ backgroundColor: 'yellow' }}>
          {match}
        </span>
      );
      start = idx + query.length;
    }
    if (start < text.length) nodes.push(text.slice(start));
    return nodes;
  };

  const wordCount = text ? text.split(/\s+/).filter(Boolean).length : 0;

  return (
    <>
      <h3 style={{ margin: '20px' }}>Enter your Text to Analyze</h3>
      <div className="textarea">
        <Row>
          <Col>
            <Form.Control
              as="textarea"
              rows={10}
              value={text}
              onChange={handleChange}
              style={{
                height: '300px',
                boxShadow: '0 0 8px',
                backgroundColor: mode === 'light' ? 'white' : '#333',
                color: mode === 'light' ? 'black' : 'white'
              }}
            />
          </Col>
        </Row>
      </div>

      <div className="buttons-div" style={{ margin: '20px' }}>
        <Button variant="primary" onClick={() => setText(text.toUpperCase())}>
          Uppercase
        </Button>
        <Button variant="primary mx-2" onClick={() => setText(text.toLowerCase())}>
          Lowercase
        </Button>
        <Button variant="primary mx-2" onClick={() => setText('')}>
          Clear
        </Button>
        <Button variant="primary mx-2" onClick={resetText}>
          Reset
        </Button>
        <Button variant="primary mx-2" onClick={checkGrammar}>
          Grammar Check
        </Button>

        {/* Find & Replace / Remove */}
        <Form.Control
          type="text"
          placeholder="Word to find"
          className="my-3"
          value={findWord}
          onChange={(e) => setFindWord(e.target.value)}
        />
        <Form.Control
          type="text"
          placeholder="Word to replace with"
          className="my-3"
          value={replaceWord}
          onChange={(e) => setReplaceWord(e.target.value)}
        />
        <Button variant="success mx-2" onClick={replaceWordHandler}>
          Replace Word
        </Button>
        <Button variant="danger mx-2" onClick={removeWordHandler}>
          Remove Word
        </Button>
      </div>

      <div className="container m-4">
        <h4>Summary of your text</h4>
        <p>
          {wordCount} words and {text.length} characters
        </p>
        <p>{0.008 * wordCount} Minutes read</p>

        <h4>Preview Of Text</h4>
        <div style={{ whiteSpace: 'pre-wrap' }}>
          {text.length > 0 ? getHighlightedText() : 'Nothing to preview!'}
        </div>
      </div>
    </>
  );
}

function TextApp({ mode }) {
  return (
    <div
      style={{
        backgroundColor: mode === 'light' ? 'white' : '#121212',
        color: mode === 'light' ? 'black' : 'white',
        minHeight: '100vh'
      }}
    >
      <div className="container">
        <TextArea mode={mode} />
      </div>
    </div>
  );
}

export default TextApp;
