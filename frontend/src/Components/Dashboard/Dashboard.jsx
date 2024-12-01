import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import { DataGrid } from "@mui/x-data-grid";
import MessageModal from "../MessageModal/MessageModal";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "fullName",
    headerName: "Full Name",
    description: "This column combines first and last name.",
    sortable: false,
    width: 160,
    valueGetter: (params) => `${params.row.name || ""}`,
  },
  {
    field: "phone",
    headerName: "Phone Number",
    width: 150,
    editable: false,
  },
  {
    field: "email",
    headerName: "Email",
    type: "text",
    width: 200,
    editable: false,
  },
  {
    field: "assurance",
    headerName: "Insurance No.",
    type: "number",
    width: 150,
    editable: false,
  },
  {
    field: "message",
    headerName: "Message",
    type: "text",
    width: 200,
    editable: false,
  },
  {
    field: "file",
    headerName: "File",
    type: "text",
    width: 200,
    editable: false,
    renderCell: (params) => (
      params.value ? (
        <a href={params.value} target="_blank" rel="noopener noreferrer">
          View File
        </a>
      ) : (
        "No File"
      )
    ),
  },
];

const Dashboard = () => {
  const [form, setForm] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState("");

  const handleCellClick = (params) => {
    if (params.field === "message") {
      setSelectedMessage(params.value);
      setOpenModal(true);
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/backend/form/")
      .then((res) => {
        setForm(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data. Please try again later.");
        setLoading(false);
      });
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
        height: "100vh",
        backgroundColor: "#f9f9f9",
      }}
    >
      <Box sx={{ width: "80%", height: "80vh" }}>
        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <CircularProgress />
          </Box>
        ) : error ? (
          <Alert severity="error">{error}</Alert>
        ) : (
          <DataGrid
            rows={form}
            columns={columns}
            onCellClick={handleCellClick}
            pageSize={5}
            checkboxSelection
            disableSelectionOnClick
            disableColumnMenu
          />
        )}
      </Box>
      <MessageModal open={openModal} onClose={handleCloseModal} message={selectedMessage} />
    </Box>
  );
};

export default Dashboard;
