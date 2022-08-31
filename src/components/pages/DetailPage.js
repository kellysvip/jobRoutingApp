import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const DetailPage = () => {
  const navigate = useNavigate();
  const params = useParams();

  console.log("jobid", params.detailId);
  const handleClick = () => {
    navigate("/");
  };
  return (
    <Box sx={{ position: "relative", top: "-500px" }}>
      <Card
        sx={{
          width: 500,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        variant="outlined"
      >
        <React.Fragment>
          <Button
            sx={{ position: "relative", left: "-200px" }}
            onClick={handleClick}
          >
            <CloseIcon />
          </Button>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
              be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
};

export default DetailPage;
