import * as React from "react";
import { styled, typographyVariant } from "@mui/system";
import TablePaginationUnstyled from "@mui/base/TablePaginationUnstyled";
import SideMenuDrawer from "./drawer";
import { useState, useEffect } from "react";
import axios from "axios";
import { convertFromRaw } from "draft-js";
import { EditorState } from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import { Link } from "react-router-dom";

let moment = require("moment");

function createData(name, calories, id) {
  return { name, calories, id };
}

//var rows = [].sort((a, b) => (a.calories < b.calories ? -1 : 1));

const Root = styled("div")`
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid #ddd;
    text-align: left;
    padding: 8px;
  }

  th {
    background-color: #ddd;
  }
`;

const CustomTablePagination = styled(TablePaginationUnstyled)`
  & .MuiTablePaginationUnstyled-toolbar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }

  & .MuiTablePaginationUnstyled-selectLabel {
    margin: 0;
  }

  & .MuiTablePaginationUnstyled-displayedRows {
    margin: 0;

    @media (min-width: 768px) {
      margin-left: auto;
    }
  }

  & .MuiTablePaginationUnstyled-spacer {
    display: none;
  }

  & .MuiTablePaginationUnstyled-actions {
    display: flex;
    gap: 0.25rem;
  }
`;

export default function ArticleTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState([]);
  const [totalDocumentCount, setTotalDocumentCount] = useState(0);

  // Avoid a layout jump when reaching the last page with empty rows.
  var emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  var handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  var handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };

  useEffect(() => {
    axios
      .get("/posts/" + page + "/" + rowsPerPage, {})
      .then(function (response) {
        const regex = /(<([^>]+)>)/gi;

        let listItems = response.data.map((val, key, arr) => {
          return createData(
            val.title,
            moment(val.date).utc().format("DD MMM YYYY HH:mm"),
            val._id
          );
        });
        setRows(listItems);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("/posts-count/", {})
      .then(function (response) {
        setTotalDocumentCount(Number(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [page, rowsPerPage]);

  <div class="admin-container">
    <div class="admin-content-wrapper">
      <div className="sidebar">
        <SideMenuDrawer />
      </div>
    </div>
  </div>;

  return (
    <div>
      <div className="sidebar">
        <SideMenuDrawer />
      </div>
      <Root sx={{ maxWidth: "100%", width: "80%", ml: "300px", mt: "50px" }}>
        <table aria-label="custom pagination table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name}>
                <td style={{ width: 600 }}>{row.name}</td>
                <td style={{ width: 160 }} align="right">
                  {row.calories}
                </td>
                <td>
                  <Link to={"/edit-post/" + row.id}>Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <CustomTablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={3}
                count={totalDocumentCount}
                rowsPerPage={rowsPerPage}
                page={page}
                componentsProps={{
                  select: {
                    "aria-label": "rows per page",
                  },
                  actions: {
                    showFirstButton: true,
                    showLastButton: true,
                  },
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </tr>
          </tfoot>
        </table>
      </Root>
    </div>
  );
}
