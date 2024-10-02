import { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Forward } from "lucide-react";
import { getMessage } from "@/app/reducer/messageSlice";
import { useDispatch, useSelector } from "react-redux";

const ContentBody = () => {
  const dispatch = useDispatch();
  const [select, setSelect] = useState(true);
  const message = useSelector((state) => state?.message);
  const chater = useSelector((state) => state?.chater[0]);

  useEffect(() => {
    dispatch(getMessage(chater?.member));
    setSelect(false);
  }, []);
  return (
    <>
      {select ? (
        ""
      ) : (
        <ScrollArea className=" w-full h-[80vh] rounded-md  p-2">
          {message?.map((msg) => (
            <div className="flex mt-2 items-end" key={msg?.msg_id}>
              <Avatar>
                <AvatarImage
                  src={
                    localStorage.getItem("baseUrl") +
                    "profile/" +
                    msg?.users?.photo
                  }
                />
              </Avatar>
              <Card className="ms-2">
                <CardContent className="py-2 me-2">{msg?.message}</CardContent>
              </Card>
              <Button className="bg-background text-black hover:bg-gray-100 ms-2">
                <Forward />
              </Button>
            </div>
          ))}
        </ScrollArea>
      )}
    </>
  );
};

export default ContentBody;
