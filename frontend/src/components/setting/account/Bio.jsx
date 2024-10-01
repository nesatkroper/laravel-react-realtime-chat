import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import axiosInstance from "@/config/axiosInstance";
import { getUser } from "@/app/user/userSlice";
import { useSelector, useDispatch } from "react-redux";

const Bio = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state?.user);
  const [bio, setBio] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axiosInstance.post("/user/bio", {
      id: users.usr_id,
      bio: bio,
    });
    dispatch(getUser());
  };

  useEffect(() => {
    dispatch(getUser());
    setBio(users.bio);
  }, []);
  return (
    <>
      <AlertDialogContent className="w-[350px]">
        <form onSubmit={handleSubmit}>
          <AlertDialogHeader>
            <AlertDialogTitle className="mb-3">Edit you bio</AlertDialogTitle>
            <div className="grid w-full max-w-sm items-center gap-2 ">
              <Label htmlFor="email">Bio</Label>
              <Textarea
                onChange={(e) => setBio(e.target.value)}
                value={bio}
                placeholder="Say something ..."
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

export default Bio;
