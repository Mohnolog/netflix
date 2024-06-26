import "./App.css";
import logo from "./assets/netflix.png";
import data from "./assets/movies.json";
import Section from "./components/Section";
console.log(data);

function App() {
  return (
    <>
      <h1>
        <img className="logo" src={logo} alt="logo-netflix" />
      </h1>
      {data.map((section, index) => {
        // console.log(section); // {category: 'Reprendre avec', images: Array(27)}
        return <Section key={index} section={section} />;
      })}
    </>
  );
}

export default App;
