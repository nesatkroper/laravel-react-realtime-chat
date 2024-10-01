import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { useEffect } from "react";
import { AlignJustify } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logout from "@/components/sidebar/Logout";
import ProfileButtonList from "@/components/sidebar/ProfileButtonList";
import { getUser } from "@/app/reducer/userSlice";
import { useSelector, useDispatch } from "react-redux";

const Sidebar = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state?.user);

  useEffect(() => {
    dispatch(getUser());
  }, []);
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <div
            className="flex bg-gray-300 justify-center w-[45px] h-[100vh]
          "
          >
            <Button className="px-3 mt-2">
              <AlignJustify className="w-4 h-4" />
            </Button>
          </div>
        </SheetTrigger>
        <SheetContent side={"left"} className="w-[300px]">
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <img
                  src={
                    localStorage.getItem("baseUrl") + "profile/" + users.photo
                  }
                  alt="profile image"
                  className="w-[70px] h-[70px] rounded-full"
                />
                <Separator className="my-3" />
                <p className="font-bold text-lg">{users.name}</p>
                <p className="">+855 {users.phone}</p>
              </div>
              <Separator className="my-3" />

              {/* profile list button  */}
              <ProfileButtonList />
            </div>

            {/* Logout components */}
            <Logout />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Sidebar;
