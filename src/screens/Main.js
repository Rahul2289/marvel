import NavBar from "./../components/navBar/NavBar";
import Card from "./../components/Card/Card";
import Filters from "./../components/filters/Filters";
const Main = ({ loading, apidata, setQuery, catogery, setcatogery }) => {
  return (
    <div className="main-container">
      <NavBar setQuery={setQuery} />
      <Filters catogery={catogery} setcatogery={setcatogery} />
      <Card loading={loading} apidata={apidata} />
    </div>
  );
};

export default Main;
