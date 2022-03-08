import * as React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import TextField from "@mui/material/TextField";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function ChipsArray() {
  const [chipData, setChipData] = React.useState([]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  function addChip(e) {
    if (e.key === "Enter") {
      let key = chipData.length + 1;
      let newChip = [{ key: key, label: e.target.value }];
      setChipData(chipData.concat(newChip));
      e.preventDefault();
    }
  }

  return (
    <div>
      <TextField
        id="filled-basic"
        label="Tag"
        variant="filled"
        onKeyPress={(e) => {
          addChip(e);
        }}
        value={<Chip>xxx</Chip>}
      ></TextField>
      <Paper
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          flexWrap: "wrap",
          listStyle: "none",
          p: 0,
          m: 0,
        }}
        component="ul"
      >
        {chipData.map((data) => {
          let icon;

          if (data.label === "React") {
            icon = <TagFacesIcon />;
          }

          return (
            <ListItem key={data.key}>
              <Chip
                icon={icon}
                label={data.label}
                onDelete={
                  data.label === "React" ? undefined : handleDelete(data)
                }
              />
            </ListItem>
          );
        })}
      </Paper>
    </div>
  );
}
