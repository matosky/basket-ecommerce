import * as React from "react";
import Stack from "@mui/material/Stack";
import {Button as MuiButton} from "@mui/material";


interface IButton{
    variant: "contained" | "text" | "outlined";
    href?: string;
    text: string;
    onClick?: ()=>void;
    loading?: boolean;
}
export const Button = ({variant, text, loading, onClick}:IButton) => {
  return (
    <Stack onClick={onClick} spacing={2} direction="row">
      <MuiButton variant={variant}>{!loading ? text:'Loading'}</MuiButton>
    </Stack>
  );
};
