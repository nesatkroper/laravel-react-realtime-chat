import { useNavigate } from "react-router-dom";
import { useAuth } from "@/config/AuthProvider";
import axiosInstance from "@/config/axiosInstance";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

const Logout = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await axiosInstance
      .post("/logout", {
        id: localStorage.getItem("id"),
      })
      .catch((err) => {
        console.log(err);
      });

    setToken();
    navigate("/auth", { replace: true });
  };
  return (
    <>
      <Button
        onClick={handleLogout}
        className=" bg-red-500 hover:bg-red-900 flex justify-start"
      >
        <LogOut className="me-4" />
        Logout
      </Button>
    </>
  );
};

export default Logout;
