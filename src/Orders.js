import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { DataGrid } from "@material-ui/data-grid";

import Title from "./Title";
import programsList from "./mock/programs";

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Pods</Title>
      <div style={{ height: 300, width: "100%" }}>
        <DataGrid rows={programsList.programs} columns={programsList.headers} />
      </div>
    </React.Fragment>
  );
}
