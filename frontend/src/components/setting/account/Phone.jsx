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
import { getUser } from "@/app/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axiosInstance from "@/config/axiosInstance";

const PhoneEdit = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state?.user);
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axiosInstance.post("/user/phone", {
      id: users.usr_id,
      phone: phone,
    });
    dispatch(getUser());
  };

  useEffect(() => {
    dispatch(getUser());
    setPhone(users.phone);
  }, []);
  return (
    <>
      <AlertDialogContent className="w-[350px]">
        <form onSubmit={handleSubmit}>
          <AlertDialogHeader>
            <AlertDialogTitle className="mb-3">Edit you phone</AlertDialogTitle>
            <div className="grid w-full max-w-sm items-center gap-2 ">
              <Label htmlFor="phone">Phone</Label>
              <Input
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                value={phone}
                type="number"
                id="phone"
                placeholder="010 xxx xxx"
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

export default PhoneEdit;
