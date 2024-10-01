import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { AtSign, CalendarDays, CircleUser, Phone } from "lucide-react";
import { getUser } from "@/app/reducer/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Name from "@/components/setting/account/Name";
import Username from "@/components/setting/account/Username";
import PhoneEdit from "@/components/setting/account/Phone";
import Bio from "@/components/setting/account/Bio";
import DOB from "@/components/setting/account/DOB";
import Profile from "@/components/setting/account/Profile";

const AccountSetting = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state?.user);

  useEffect(() => {
    dispatch(getUser());
  }, []);
  return (
    <DialogContent className="w-[400px] ">
      <DialogHeader>
        <DialogTitle>Settings</DialogTitle>
      </DialogHeader>
      <div className="flex flex-col items-center ">
        <AlertDialog>
          <AlertDialogTrigger>
            <img
              src={localStorage.getItem("baseUrl") + "profile/" + users.photo}
              alt="profile image"
              className="w-[70px] h-[70px] cursor-pointer rounded-full"
            />
          </AlertDialogTrigger>
          {/*  */}
          <Profile />
        </AlertDialog>

        <div className="flex flex-col ms-3">
          <p className="font-bold text-lg">{users.name}</p>
          <p className="">+855 {users.phone}</p>
        </div>
      </div>
      <div className="flex flex-col">
        <Separator className="my-2" />

        <AlertDialog>
          <AlertDialogTrigger>
            <Button className="bg-background hover:bg-gray-200 flex justify-start text-dark h-full text-wrap text-start w-full">
              {users.bio}
            </Button>
          </AlertDialogTrigger>
          <Bio />
        </AlertDialog>
        <Separator className="my-2" />
        <div className="flex flex-col">
          <AlertDialog>
            <AlertDialogTrigger>
              <Button className="bg-background hover:bg-gray-200 flex justify-start text-dark my-1 w-full">
                <CircleUser className="me-4" />
                {users.name}
              </Button>
            </AlertDialogTrigger>
            {/*  */}
            <Name />
          </AlertDialog>
          <AlertDialog>
            <AlertDialogTrigger>
              <Button className="bg-background hover:bg-gray-200 flex justify-start text-dark my-1 w-full">
                <Phone className="me-4" />
                {users.phone}
              </Button>
            </AlertDialogTrigger>
            <PhoneEdit />
          </AlertDialog>
          <AlertDialog>
            <AlertDialogTrigger>
              <Button className="bg-background hover:bg-gray-200 flex justify-start text-dark my-1 w-full">
                <AtSign className="me-4" />
                {users.username}
              </Button>
            </AlertDialogTrigger>
            <Username />
          </AlertDialog>
        </div>
        <Separator className="my-2" />

        <AlertDialog>
          <AlertDialogTrigger>
            <Button className="bg-background hover:bg-gray-200 flex justify-start text-dark my-1 w-full">
              <CalendarDays className="me-4" />
              {users.dob}
            </Button>
          </AlertDialogTrigger>
          <DOB />
        </AlertDialog>
      </div>
    </DialogContent>
  );
};

export default AccountSetting;
