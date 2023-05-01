const Box = (props) => {
  //  Write your code here.
  const { textContent, className } = props;
  return (
    <div className={className}>
      <p>{textContent}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div class="bg-container">
    <div>
      <h1 className="h1">Boxes</h1>
    </div>
    <div class="container">
      <Box textContent="Small" className="b1" />
      <Box textContent="Medium" className="b2" />
      <Box textContent="Large" className="b3" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
