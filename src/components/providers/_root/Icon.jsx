import { Loader } from "@/components/shared";

const Icon = ({
  children,
  variant = "primary",
  size = "sm",
  onClick,
  disabled,
  className,
  type,
}) => {
  let color =
    variant === "primary"
      ? "text-primary-500"
      : variant === "secondary"
      ? "text-secondary-500"
      : variant === "red"
      ? "text-red-500"
      : variant === "tertiary"
      ? "text-tertiary-500"
      : null;
  let width =
    size === "sm"
      ? "text-[20px]"
      : size === "md"
      ? "text-[25px]"
      : size === "lg"
      ? "text-[35px]"
      : size === "xl"
      ? "text-[40px]"
      : size === "xxl"
      ? "text-[80px]"
      : null;
  return (
    <button
      tabIndex={`-1`}
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={`flex justify-center cursor-pointer ${className}`}>
      {disabled ? (
        <Loader />
      ) : (
        children({
          color,
          width,
        })
      )}
    </button>
  );
};

export default Icon;
