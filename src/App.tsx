import CardContainer from "./components/CardContainer";
import StyledH1 from "./components/styled/StyledH1";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
          'url("http://unblast.com/wp-content/uploads/2021/01/Space-Background-Image-2.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <StyledH1>Memory game!</StyledH1>
      <CardContainer />
    </div>
  );
}

export default App;
