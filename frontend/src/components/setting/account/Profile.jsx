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
import { getUser } from "@/app/reducer/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axiosInstance from "@/config/axiosInstance";

const Profile = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state?.user);
  const [image, setImage] = useState(null);
  const [upload, setUpload] = useState(false);
  const [url, setUrl] = useState(null);

  const handleChange = (e) => {
    setImage(e.target.files[0]);
    setUpload(!upload);
    const imageFile = e.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setUrl(imageUrl);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post("/user/photo", {
        id: users.usr_id,
        photo: image,
      });
      dispatch(getUser());
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    dispatch(getUser());
    setImage(users.photo);
  }, []);
  return (
    <>
      <AlertDialogContent className="w-[350px]">
        <form onSubmit={handleSubmit}>
          <AlertDialogHeader>
            <AlertDialogTitle className="mb-3">
              Edit you profile
            </AlertDialogTitle>
            <div className="flex justify-center">
              {upload ? (
                <img
                  src={url}
                  alt="profile image"
                  className="rounded-xl w-[200px] shadow-xl"
                />
              ) : (
                <img
                  src={
                    localStorage.getItem("baseUrl") + "profile/" + users.photo
                  }
                  alt="profile image"
                  className="rounded-xl w-[200px] shadow-xl"
                />
              )}
            </div>
            <div className="grid w-full max-w-sm items-center gap-2 ">
              <Label htmlFor="phone">Profile</Label>
              <Input onChange={handleChange} type="file" accept="image/*" />
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

export default Profile;
