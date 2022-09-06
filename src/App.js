import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Main from "./screens/Main";
import NotFound from "./components/NotFound/NotFound";
import CardDetails from "./components/Card/CardDetails";

function App() {
  const [apidata, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("a");
  const [catogery, setcatogery] = useState("characters");

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await axios.get(
          `https://gateway.marvel.com/v1/public/${catogery}?${
            catogery === "characters"
              ? `nameStartsWith=${query}`
              : `titleStartsWith=${query}`
          }&ts=1&apikey=${process.env.key}&hash=${process.env.hash}`
        );
        setApiData(response.data.data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, [query, catogery]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Main
              loading={loading}
              apidata={apidata}
              setQuery={setQuery}
              catogery={catogery}
              setcatogery={setcatogery}
            />
          }
        />
        <Route
          path="/details/:id"
          element={<CardDetails catogery={catogery} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
