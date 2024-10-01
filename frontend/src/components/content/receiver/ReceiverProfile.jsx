import React, { useEffect } from "react";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import {
  Ban,
  FilePenLine,
  Forward,
  Image,
  Mic,
  Trash,
  Users,
} from "lucide-react";
import AlertBlock from "../AlertBlock";
import { getUser } from "@/app/reducer/userSlice";
import { useSelector, useDispatch } from "react-redux";

const ReceiverProfile = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state?.user);
  useEffect(() => {
    dispatch(getUser());
  }, []);
  return (
    <React.Fragment>
      <DialogContent className="w-[400px] ">
        <DialogHeader>
          <DialogTitle>User Info</DialogTitle>
        </DialogHeader>
        <Separator />
        <div className="flex">
          <img
            src={localStorage.getItem("baseUrl") + "profile/" + users.photo}
            alt="profile image"
            className="w-[70px] h-[70px] rounded-full"
          />
          <div className="flex flex-col ms-3">
            <p className="font-bold text-lg">{users.name}</p>
            <p className="">+855 {users.phone}</p>
          </div>
        </div>
        <Separator />
        <div className="flex flex-col gap-1">
          <Button className="bg-background text-dark hover:bg-gray-100 px-2 ms-2 flex justify-start">
            <Image className="me-3" />
            Image
          </Button>
          <Button className="bg-background text-dark hover:bg-gray-100 px-2 ms-2 flex justify-start">
            <Mic className="me-3" />
            Voice
          </Button>
          <Button className="bg-background text-dark hover:bg-gray-100 px-2 ms-2 flex justify-start">
            <Users className="me-3" />
            in group common
          </Button>
        </div>
        <Separator />
        <div className="flex flex-col gap-1">
          <Button className="bg-background text-dark hover:bg-gray-100 px-2 ms-2 flex justify-start">
            <Forward className="me-3" />
            Share this contact
          </Button>
          <Button className="bg-background text-dark hover:bg-gray-100 px-2 ms-2 flex justify-start">
            <FilePenLine className="me-3" />
            Edit this contact
          </Button>
          <Button className="bg-background text-dark hover:bg-gray-100 px-2 ms-2 flex justify-start">
            <Trash className="me-3" />
            Delete this contact
          </Button>
        </div>
        <Separator />
        <AlertDialog>
          <AlertDialogTrigger>
            <Button className="bg-background text-red-600 hover:bg-gray-100 px-2 ms-2 flex justify-start w-full">
              <Ban className="me-3" />
              Block this contact
            </Button>
          </AlertDialogTrigger>
          <AlertBlock />
        </AlertDialog>
      </DialogContent>
    </React.Fragment>
  );
};

export default ReceiverProfile;
