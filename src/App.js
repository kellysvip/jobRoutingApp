import { Grid } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { createContext } from "react";
import "./App.css";
import JobCard from "./components/JobCard";
import PaginationRounded from "./components/PaginationRounded";
import SearchAppBar from "./components/SearchAppBar";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import jobAPI from "./JobAPI";

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
  const handleChange = (event, value) => {
    setPage(value);
  };

  const renderJobCard = async () => {
    try {
      const res = await jobAPI.getAll();
      setResponse(res);
    } catch (error) {
      console.log("Failed", error);
    }
  };
  renderJobCard();
  return (
    <div className="app">
      <ThemeProvider theme={darkTheme}>
        <AuthContext.Provider value={{ isLogged, setIsLogged, response }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <SearchAppBar />
            <Grid container spacing={0}>
              {response.slice(page, page + 5).map((job) => (
                <Grid key={job.id} item xs={12} md={6} lg={4}>
                  <JobCard key={job.id} job={job} />
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
