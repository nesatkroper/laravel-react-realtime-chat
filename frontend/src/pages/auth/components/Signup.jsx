import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import axiosInstance from "@/config/axiosInstance";
import { useAuth } from "@/config/AuthProvider";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [show, setShow] = useState(false);
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const [auth, setAuth] = useState({
    name: "",
    gender: "male",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setAuth({ ...auth, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/register", {
        name: auth.name[0],
        gender: auth.gender[0],
        username: auth.username[0],
        email: auth.email[0],
        password: auth.password[0],
      });

      console.log(response);

      if (response.data.status) {
        setToken(response.data.token);
        localStorage.setItem("id", response.data.user.usr_id);
        navigate("/", { replace: true });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleShowPassword = () => {
    setShow(!show);
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <div className="grid w-full max-w-sm items-center gap-1.5 my-4">
          <p className="border text-center rounded-xl h-10 flex items-center justify-center font-bold text-red-600">
            Email is already created
          </p>
          <Label htmlFor="name">Name*</Label>
          <Input
            onChange={(e) => handleChange(e)}
            type="text"
            name="name"
            placeholder="Jonh Cena"
            required
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 my-4">
          <Label htmlFor="gender">Gender*</Label>
          <RadioGroup
            onValueChange={(value) =>
              handleChange({ target: { name: "gender", value } })
            }
            name="gender"
            defaultValue="other"
            className="flex flex-row"
            required
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="other" id="other" />
              <Label htmlFor="other">Other</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="male" />
              <Label htmlFor="male">Male</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="female" />
              <Label htmlFor="female">Female</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 my-4">
          <Label htmlFor="username">Username*</Label>
          <Input
            onChange={(e) => handleChange(e)}
            type="text"
            name="username"
            placeholder="@jonhcena"
            required
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 my-4">
          <Label htmlFor="email">Email*</Label>
          <Input
            onChange={(e) => handleChange(e)}
            type="email"
            name="email"
            placeholder="jonhcena@example.com"
            required
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 mb-2">
          <Label htmlFor="password">Password*</Label>
          <Input
            onChange={(e) => handleChange(e)}
            type={show ? "text" : "password"}
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="flex items-center space-x-2 mb-4">
          <Checkbox onCheckedChange={handleShowPassword} id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {show ? "Hide" : "Show"} Password
          </label>
        </div>
        <Button type="submit" className="w-full">
          Sign Up
        </Button>
      </form>
    </React.Fragment>
  );
};

export default Signup;
