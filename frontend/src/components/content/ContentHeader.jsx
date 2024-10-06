import { useEffect, useState } from "react";
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
import { getChater } from "@/app/reducer/chaterSlice.jsx";
import { useSelector, useDispatch } from "react-redux";

const ContentHeader = () => {
  const dispatch = useDispatch();
  const [select, setSelect] = useState(true);
  const contact = useSelector((state) => state.contact?.data);
  const type = useSelector((state) => state.contact?.type);
  const chater = useSelector((state) => state.chater?.data[0]);

  useEffect(() => {
    dispatch(
      getChater(
        type == "creator"
          ? contact[0]?.creator[0]?.usr_id
          : contact[0]?.member[0]?.usr_id
      )
    );
    setSelect(false);
  }, []);
  return (
    <>
      {select ? (
        ""
      ) : (
        <div className="border-b shadow-lg py-2 px-4 flex justify-between">
          <Dialog>
            <DialogTrigger>
              <div className="flex">
                <Avatar>
                  {
                    select ? "" : ""
                    // <AvatarImage
                    //   src={
                    //     localStorage.getItem("baseUrl") +
                    //     "profile/" +
                    //     chater?.users[0]?.photo
                    //   }
                    // />
                  }
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col ms-2 ">
                  <p className="font-bold text-sm">
                    {type == "creator"
                      ? chater?.creator[0]?.name
                      : chater?.member[0]?.name}
                  </p>
                  <p className="text-gray-600 text-xs">
                    {/* +855 {select ? " " : chater?.users[0]?.phone} */}
                  </p>
                </div>
              </div>
            </DialogTrigger>
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
      )}
    </>
  );
};

export default ContentHeader;
