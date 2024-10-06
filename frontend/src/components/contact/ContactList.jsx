import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getContact } from "@/app/reducer/contactSlice";
import { getChater } from "@/app/reducer/chaterSlice";
import { useSelector, useDispatch } from "react-redux";
import { getMessage } from "@/app/reducer/messageSlice";

const ContactList = () => {
  const dispatch = useDispatch();
  const contact = useSelector((state) => state?.contact?.data);
  const type = useSelector((state) => state?.contact?.type);

  const handleClick = (member) => {
    console.log(member);
    dispatch(getChater(member));
    dispatch(getMessage(member));
  };

  useEffect(() => {
    dispatch(getContact());
  }, []);
  return (
    <>
      <ScrollArea className="h-[86vh] w-full rounded-md p-1">
        {contact?.map((con) => (
          <Card
            onClick={() =>
              handleClick(
                type == "creator"
                  ? con?.creator[0]?.usr_id
                  : con?.member[0]?.usr_id
              )
            }
            className="mt-1 cursor-pointer"
            key={con.con_id}
          >
            <CardContent className="p-2">
              <div className="flex">
                <Avatar>
                  <AvatarImage
                    src={
                      localStorage.getItem("baseUrl") +
                      "profile/" +
                      (type == "creator")
                        ? con?.creator[0]?.photo
                        : con?.member[0]?.photo
                    }
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col ms-2 font-bold">
                  <p>
                    {type == "creator"
                      ? con?.creator[0]?.name
                      : con?.member[0]?.name}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </ScrollArea>
    </>
  );
};

export default ContactList;
