import { TextField } from "@mui/material";
import styles from "./input.module.scss";
import { Button } from "../button/button";
// Example usage in another component

interface Input {
  type: string;
  placeholder: string;
}
export const Input = ({ type, placeholder }: Input) => {
  return (
    <TextField id="outlined-basic" label={placeholder} variant="outlined" />
  );
};
