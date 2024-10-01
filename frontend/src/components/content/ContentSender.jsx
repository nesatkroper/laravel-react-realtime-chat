import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mic, Paperclip, SendHorizonal, Smile } from "lucide-react";

const ContentSender = () => {
  const [msg, setMsg] = useState("");
  const [type, setType] = useState(false);

  const openDialog = () => {
    document.getElementById("selectFile")?.click();
  };
  return (
    <React.Fragment>
      {/*  */}
      {msg}
      <Card className="absolute bottom-[60px] ">
        <CardContent className="p-1 flex">
          <Input type="file" id="selectFile" className="hidden" />
          <Button
            onClick={openDialog}
            className="bg-background text-dark hover:bg-gray-100 px-2 me-2"
          >
            <Paperclip />
          </Button>
          <Input
            onChange={(e) => {
              setMsg(e.target.value);
              setType(true);
              if (e.target.value == "") setType(false);
            }}
            className="min-w-[350px] border-none"
            placeholder="White a message..."
          />
          <Button className="bg-background text-dark hover:bg-gray-100 px-2 ms-2">
            {type ? <SendHorizonal /> : <Smile />}
          </Button>
          <Button className="bg-background text-dark hover:bg-gray-100 px-2 ms-2">
            <Mic />
          </Button>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default ContentSender;
