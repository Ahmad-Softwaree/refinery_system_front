import Icon from "../providers/_root/Icon";

const Delete = ({
  variant = "primary",
  size = "sm",
  onClick = () => {},
  disabled = false,
  className,
  type = "button",
}) => {
  return (
    <Icon
      variant={variant}
      size={size}
      onClick={onClick}
      disabled={disabled}
      className={className}
      type={type}>
      {({ color, width }) => {
        return (
          <span className={`${width} ${color}`}>
            <i class="fa-solid fa-trash"></i>
          </span>
        );
      }}
    </Icon>
  );
};

export default Delete;
