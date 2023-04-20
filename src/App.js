import "./App.css";

function Button() {
  return <button className="rounded-btn">Get Started For Free!</button>;
}

function App() {
  return (
    <>
      <div className="content" style={{height: '100vh'}}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p style={{fontFamily: "'Sen Black', sans-serif"}}>Welcome to StandardsGPT! - </p>
          <p style={{color: 'var(--green-color)', fontFamily: "'Sen Black', sans-serif"}}>“Where Standards Come to Find You!"</p>
        </div>
        <div style={{ width: "64rem" }}>
          <h1 className="big-text" style={{color: 'var(--green-color)'}}>Say Goodbye to Clause Chaos:</h1>
          <h1 className="big-text">Meet Your New AI Standards Searching Savior</h1>
        </div>
        <div style={{ width: "44rem" }}>
          <p className="about-gary-desc">
            "Gary, our AI robot, has spent more time studying Australia's
            standards, legislation, and codes than most humans have spent
            binge-watching on Netflix. He`s the AI robot that puts Google to
            shame. With his lightning-fast search skills, he can find the clause
            numbers you need faster than you can say "Hey, Gary!"
          </p>
          <p>So sit back, relax, and let Gary do the heavy lifting!</p>
        </div>
        <Button />
        <p className="credit-card-desc">*No Credit Card Required*</p>
      </div>
    </>
  );
}

export default App;
