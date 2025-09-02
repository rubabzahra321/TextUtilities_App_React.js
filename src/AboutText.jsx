import Accordion from 'react-bootstrap/Accordion';

function AboutText({ mode }) {
  const isLight = mode === "light";

  return (
    <div
      style={{
        backgroundColor: isLight ? "white" : "#121212",
        color: isLight ? "black" : "white",
        minHeight: "100vh",
        padding: "20px"
      }}
    >
      <div className="container my-5 mx-5">
        <Accordion defaultActiveKey="0" alwaysOpen>
          <Accordion.Item 
            eventKey="0"
            style={{
              backgroundColor: isLight ? "white" : "#333",
              color: isLight ? "black" : "white",
              border: "1px solid",
              borderColor: isLight ? "#ddd" : "#555"
            }}
          >
            <Accordion.Header>About TextUtilities-App</Accordion.Header>
            <Accordion.Body
              style={{
                backgroundColor: isLight ? "white" : "#333",
                color: isLight ? "black" : "white"
              }}
            >
              <p>
                TextUtilities-App is a simple tool that helps you work with your text
                easily. You can:
              </p>
              <ul>
                <li>Convert your text to <strong>UPPERCASE</strong> or <strong>lowercase</strong></li>
                <li>Clear the text or reset it back to the original</li>
                <li>Check and fix basic grammar issues</li>
                <li>Find and replace any word</li>
                <li>Remove unwanted words from your text</li>
                <li>See a live summary: word count, character count, and reading time</li>
                <li>Preview your text with highlighted words</li>
              </ul>
              <p>
                This app is built with <strong>React</strong> and <strong>React-Bootstrap</strong>.
                It’s designed to be simple, lightweight, and helpful for quick text
                editing tasks.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item 
            eventKey="1"
            style={{
              backgroundColor: isLight ? "white" : "#333",
              color: isLight ? "black" : "white",
              border: "1px solid",
              borderColor: isLight ? "#ddd" : "#555"
            }}
          >
            <Accordion.Header>About the Developer</Accordion.Header>
            <Accordion.Body
              style={{
                backgroundColor: isLight ? "white" : "#333",
                color: isLight ? "black" : "white"
              }}
            >
              <p>
                Hi 👋, I am the developer of this application. I enjoy building simple and
                useful tools with modern web technologies like <strong>React</strong>  
                 and <strong>Bootstrap</strong>.
              </p>
              <p>
                My goal with this project was to create a lightweight app where anyone
                can edit, format, and analyze text quickly without hassle.
              </p>
              <p>
                If you like this project or want to collaborate, feel free to reach out! 🚀
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default AboutText;
