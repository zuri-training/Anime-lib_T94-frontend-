import "./button.css";

export const Button = (props) => {
  const { className, component, ...buttonProps } = props;
  const _className = `button ${className || ""}`;

  if (component === "a") {
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    return <a {...buttonProps} className={_className} />;
  }

  return <button {...buttonProps} className={_className} />;
};

Button.Primary = (props) => {
  const { className, ...primaryButtonProps } = props;

  return (
    <Button
      {...primaryButtonProps}
      className={`button--primary ${className || ""}`}
    />
  );
};

Button.OutlinePrimary = (props) => {
  const { className, ...primaryButtonProps } = props;

  return (
    <Button
      {...primaryButtonProps}
      className={`button--outline-primary ${className || ""}`}
    />
  );
};
