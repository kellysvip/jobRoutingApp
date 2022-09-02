import { Grid } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { createContext } from "react";
import "./App.css";
import JobCard from "./components/JobCard";
import PaginationRounded from "./components/PaginationRounded";
import SearchAppBar from "./components/SearchAppBar";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

export const AuthContext = createContext();
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
function App() {
  const [page, setPage] = useState(0);
  const [isLogged, setIsLogged] = useState(false);
  const [response, setResponse] = useState([]);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('')
  const handleChange = (event, value) => {
    setPage(value*5);
  };
  const BASE_URL = 'http://localhost:3000/jobs'
  useEffect(() => {
    const renderJobCard = async () => {
      try {
        const res = await (await fetch(`${BASE_URL}?q=${search}`)).json();
        setResponse(res);
      } catch (error) {
        console.log("Failed", error);
      }
    };
    renderJobCard();
  }, [page, search]);
  
  return (
    <div className="app">
      <ThemeProvider theme={darkTheme}>
        <AuthContext.Provider value={{ isLogged, setIsLogged, response, open, setOpen, setSearch }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <SearchAppBar />
            <Grid container spacing={0}>
              {response.slice(page, page + 5).map((job) => (
                <Grid key={job.id} item xs={12} md={6} lg={4}>
                  <JobCard id={job.id} key={job.id} job={job} />
                </Grid>
              ))}
            </Grid>

            <PaginationRounded handleChange={handleChange} />
          </div>
          <Outlet />
        </AuthContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
