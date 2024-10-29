import React from "react";
import Button from "@mui/material/Button";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ButtonGroup from "@mui/material/ButtonGroup/ButtonGroup";

interface Props {
  sorting: string[];
  direction: string;
  sorter: (sort: string) => void;
}

const GridSorting: React.FC<Props> = ({ sorter, sorting, direction }) => {
  const sortingButtons = sorting.map((sort) => {
    return (
      <Button
        variant="outlined"
        key={sort}
        onClick={() => {
          sorter(sort);
        }}
        data-sort={sort}
        endIcon={
          direction === "desc" ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />
        }
      >
        Sort by {sort} {direction}
      </Button>
    );
  });
  return <ButtonGroup className="filtr-controls">{sortingButtons}</ButtonGroup>;
};

export default GridSorting;
