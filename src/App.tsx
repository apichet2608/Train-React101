const App = () => {
  return (
    <div>
      APP01
      <Article />
    </div>
  );
};

const Article = () => {
  return (
    <div style={style}>
      <h1>สวัสดี React</h1>
      <p>ยินดีต้อนรับสู่ React</p>
    </div>
  );
};

export default App;

const style = {
  backgroundColor: "red",
  color: "white",
  padding: "10px",
  borderRadius: "5px",
};
