import styled from "styled-components";
import { Button, CircularProgress } from "@mui/material";

import { FONTS } from "../theme";

const StyledButton = styled(Button)`
  font-family: ${FONTS.main};
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  border-radius: 12px;
  background-color: ${(props) => props.backgroundcolor};
`;

const ThemedButton = ({
  variant = "contained",
  classes,
  children,
  isLoading,
  color = "primary",
  disabled,
  style,
  ...props
}) => {
  return (
    <>
      <StyledButton
        variant={variant}
        disabled={disabled || isLoading}
        color={color}
        classes={classes}
        {...props}
      >
        <span style={{ opacity: isLoading ? 0 : 1 }}>{children}</span>
        {isLoading && (
          <CircularProgress
            size={24}
            style={{
              position: "absolute",
            }}
          />
        )}
      </StyledButton>
    </>
  );
};

export default ThemedButton;
