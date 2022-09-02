import React from "react";

import {

  Button,

  Box,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import Modal from "@mui/material/Modal";
import { AuthContext } from "../../App";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const DetailPage = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const { detailId: id } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await (
        await fetch(`http://localhost:3000/jobs/${id}`)
      ).json();
      setData(res);
      setLoading(false);
    };
    getData();
  }, [id]);

  const handleClose = () => {
    auth.setOpen(false);
    navigate("/");
  };

  return (
   <React.Fragment>
    {loading && <p>Loading...</p>}
      <Modal
        hideBackdrop
        open={auth.open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 400, color: "#fff" }}>
          <h2 id="child-modal-title">{data.title}</h2>
          <p id="child-modal-description">{data.description}</p>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "hsl(16, 100%, 50%)",
              borderRadius: 4,
              color: "#fff",
            }}
            size="small"
          >
            Up to: {data.salaryHigh}
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "hsl(16, 100%, 50%)",
              borderRadius: 4,
              color: "#fff",
            }}
            size="small"
          >
             {data.city}
          </Button>
          {data.remote && (
            <Button
              variant="contained"
              sx={{
                backgroundColor: "hsl(16, 100%, 50%)",
                borderRadius: 4,
                color: "#fff",
              }}
              size="small"
            >
              {" "}
              Work From Home{" "}
            </Button>
          )}
          <br />
          <Button sx={{ mt: 3 }} onClick={handleClose}>
            Close
          </Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default DetailPage;
