import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import axiosInstance from "@/config/axiosInstance";
import { useAuth } from "@/config/AuthProvider";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const { setToken } = useAuth();
  const [auth, setAuth] = useState({
    username: "",
    password: "",
  });

  const handleShowPassword = () => {
    setShow(!show);
  };

  const handleChange = (e) => {
    setAuth({ ...auth, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("/login", {
        username: auth.username[0],
        password: auth.password[0],
      });

      console.log(response);

      if (response.data.status === true) {
        setToken(response.data.token);
        localStorage.setItem("baseUrl", "http://localhost:8000/");
        localStorage.setItem("id", response.data.user.usr_id);
        navigate("/", { replace: true });
      } else alert("error");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <div className="grid w-full max-w-sm items-center gap-1.5 my-4">
          <Label htmlFor="username">Username</Label>
          <Input
            onChange={(e) => handleChange(e)}
            type="text"
            name="username"
            placeholder="Username"
            required
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 mb-2">
          <Label htmlFor="password">Password</Label>
          <Input
            onChange={(e) => handleChange(e)}
            type={show ? "text" : "password"}
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="flex items-center space-x-2 mb-4">
          <Checkbox id="terms" onCheckedChange={handleShowPassword} />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {show ? "Hide" : "Show"} Password
          </label>
        </div>
        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </form>
    </React.Fragment>
  );
};

export default Signin;
