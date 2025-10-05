import Cookies from "js-cookie";

export default function Logout() {
  const handleLogout = () => {
    Cookies.remove("userEmail");  // ✅ Remove cookie
    alert("Logged out!");
  };

  return <button onClick={handleLogout}>Logout</button>;
}
