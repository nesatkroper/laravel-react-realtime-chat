import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import axiosInstance from "@/config/axiosInstance";
import { getUser } from "@/app/reducer/userSlice";
import { useSelector, useDispatch } from "react-redux";
const Username = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state?.user);
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axiosInstance.post("/user/username", {
      id: users.usr_id,
      username: username,
    });
    dispatch(getUser());
  };

  useEffect(() => {
    dispatch(getUser());
    setUsername(users.username);
  }, []);
  return (
    <>
      <AlertDialogContent className="w-[350px]">
        <form onSubmit={handleSubmit}>
          <AlertDialogHeader>
            <AlertDialogTitle className="mb-3">
              Edit you username
            </AlertDialogTitle>
            <div className="grid w-full max-w-sm items-center gap-2 ">
              <Label htmlFor="email">Username</Label>
              <Input
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                value={username}
                type="text"
                id="email"
                placeholder="@jonhcena"
              />
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter className="mt-3">
            <AlertDialogCancel type="button">Cancel</AlertDialogCancel>
            <AlertDialogAction type="submit">Save</AlertDialogAction>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </>
  );
};

export default Username;
