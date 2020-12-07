import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import AssignmentIcon from "@material-ui/icons/Assignment";
import machinesList from "./mock/machines";

const selectMachine = (id) => {
  console.log(id);
};

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    {machinesList.map((machine) => (
      <ListItem
        key={machine.id}
        button
        onClick={(e) => selectMachine(machine.id, e)}
      >
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary={machine.label} />
      </ListItem>
    ))}
  </div>
);
