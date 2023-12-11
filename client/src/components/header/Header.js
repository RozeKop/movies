import logo from "../../assets/logo.png";
import "./header.css";
export default function Header() {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="logo" />
    </div>
  );
}
