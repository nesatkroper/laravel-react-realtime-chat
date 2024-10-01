import { Button } from "@/components/ui/button";
import {
  Bookmark,
  CircleUser,
  History,
  Moon,
  Phone,
  Settings,
  SmilePlus,
  Users,
} from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import AccountSetting from "./AccountSetting";

const ProfileButtonList = () => {
  return (
    <>
      <Button className="bg-background hover:bg-gray-200 text-dark w-full justify-start">
        <Users className="me-3" />
        New Group
      </Button>
      <Button className="bg-background hover:bg-gray-200 text-dark w-full justify-start">
        <SmilePlus className="me-3" />
        New Channel
      </Button>
      <Button className="bg-background hover:bg-gray-200 text-dark w-full justify-start">
        <History className="me-3" />
        New Stories
      </Button>
      <Button className="bg-background hover:bg-gray-200 text-dark w-full justify-start">
        <CircleUser className="me-3" />
        Contacts
      </Button>
      <Button className="bg-background hover:bg-gray-200 text-dark w-full justify-start">
        <Phone className="me-3" />
        Calls
      </Button>
      <Button className="bg-background hover:bg-gray-200 text-dark w-full justify-start">
        <Bookmark className="me-3" />
        Save Messages
      </Button>
      <Dialog>
        <DialogTrigger>
          <Button className="bg-background hover:bg-gray-200 text-dark w-full justify-start">
            <Settings className="me-3" />
            Settings
          </Button>
        </DialogTrigger>
        {/*  */}
        <AccountSetting />
      </Dialog>

      <Button className="bg-background hover:bg-gray-200 text-dark w-full justify-between flex">
        <div className="flex">
          <Moon className="me-3" />
          <p>Night Mode </p>
        </div>
        <Switch />
      </Button>
    </>
  );
};

export default ProfileButtonList;
