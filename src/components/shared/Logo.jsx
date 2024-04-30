import { Link } from "react-router-dom";

const Logo = ({ size = "sm", className, fallback = false }) => {
  return size === "sm" ? (
    <Link
      to={`/`}
      className={`flex flex-row justify-center items-center gap-5 ${className}`}>
      <div className="relative w-[30px]">
        <img src="/images/logo.png" alt="logo" />
      </div>
      {!fallback && <span className="text-text1-bold">PMS</span>}
    </Link>
  ) : size === "md" ? (
    <Link
      to={`/`}
      className={`flex flex-row justify-center items-center gap-5 ${className}`}>
      <div className="relative w-[40px]">
        <img src="/images/logo.png" alt="logo" />
      </div>
      {!fallback && <span className="text-body1-bold">PMS</span>}
    </Link>
  ) : size === "lg" ? (
    <Link
      to={`/`}
      className={`flex flex-row justify-center items-center gap-5 ${className}`}>
      <div className="relative w-[60px]">
        <img src="/images/logo.png" alt="logo" />
      </div>
      {!fallback && <span className="text-heading2-bold">PMS</span>}
    </Link>
  ) : (
    <Link
      to={`/`}
      className={`flex flex-row justify-center items-center gap-5 ${className}`}>
      <div className="relative w-[200px]">
        <img src="/images/logo.png" alt="logo" />
      </div>
      {!fallback && <span className="text-heading-bold">PMS</span>}
    </Link>
  );
};

export default Logo;
