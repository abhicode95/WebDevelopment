import MyBook from "./components/MyBook";
import BgTexture from "./assets/brown-wooden-flooring.jpg";

const BgTextureStyle = {
  backgroundImage: `url(${BgTexture})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
  width: "100%",
};

function App() {
  return (
    <div
      className="w-full h-full flex justify-center items-center bg-red-600"
      style={BgTextureStyle}
    >
      <MyBook />
    </div>
  );
}

export default App;
