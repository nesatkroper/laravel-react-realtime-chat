import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mic, Paperclip, SendHorizonal, Smile } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "@/app/reducer/messageSlice";

const ContentSender = () => {
  const dispatch = useDispatch();
  const chater = useSelector((state) => state?.chater[0]);
  const contact = useSelector((state) => state?.contact[0]);
  const [msg, setMsg] = useState("");
  const [type, setType] = useState(false);

  const openDialog = () => {
    document.getElementById("selectFile")?.click();
  };

  console.log(chater);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(
        addMessage({
          creator: localStorage.getItem("id"),
          member: chater?.member,
          message: msg,
        })
      );
      setMsg("");
    } catch (err) {
      console.log(err);
      setMsg("");
    }
  };
  return (
    <React.Fragment>
      <Card className="absolute bottom-[60px] ">
        <form onSubmit={handleSubmit}>
          <CardContent className="p-1 flex">
            <Input type="file" id="selectFile" className="hidden" />
            <Button
              onClick={openDialog}
              className="bg-background text-dark hover:bg-gray-100 px-2 me-2"
            >
              <Paperclip />
            </Button>
            <Input
              value={msg}
              onChange={(e) => {
                setMsg(e.target.value);
                setType(true);
                if (e.target.value == "") setType(false);
              }}
              className="min-w-[350px] border-none"
              placeholder="White a message..."
            />
            {type ? (
              <Button className="bg-background text-dark hover:bg-gray-100 px-2 ms-2">
                <SendHorizonal />
              </Button>
            ) : (
              <Button className="bg-background text-dark hover:bg-gray-100 px-2 ms-2">
                <Smile />
              </Button>
            )}
            <Button className="bg-background text-dark hover:bg-gray-100 px-2 ms-2">
              <Mic />
            </Button>
          </CardContent>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default ContentSender;
