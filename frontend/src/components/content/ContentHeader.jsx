import React, { useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Ellipsis, Phone, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ReceiverProfile from "./receiver/ReceiverProfile.jsx";
import ReceiverOption from "./receiver/ReceiverOption.jsx";
import { getUser } from "@/app/reducer/userSlice.jsx";
import { useSelector, useDispatch } from "react-redux";

const ContentHeader = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state?.user);
  useEffect(() => {
    dispatch(getUser());
  }, []);
  return (
    <React.Fragment>
      <div className="border-b shadow-lg py-2 px-4 flex justify-between">
        <Dialog>
          <DialogTrigger>
            <div className="flex">
              <Avatar>
                <AvatarImage
                  src={
                    localStorage.getItem("baseUrl") + "profile/" + users.photo
                  }
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col ms-2 ">
                <p className="font-bold text-sm">{users.name}</p>
                <p className="text-gray-600 text-xs">{users.phone}</p>
              </div>
            </div>
          </DialogTrigger>
          {/*  */}
          <ReceiverProfile />
        </Dialog>
        <div className="flex gap-1 p">
          <Button className="bg-background text-dark px-2 hover:bg-gray-200">
            <Phone />
          </Button>
          <Button className="bg-background text-dark px-2 hover:bg-gray-200">
            <Video />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button className="bg-background text-dark px-2 hover:bg-gray-200">
                <Ellipsis />
              </Button>
            </DropdownMenuTrigger>
            <ReceiverOption />
          </DropdownMenu>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContentHeader;
