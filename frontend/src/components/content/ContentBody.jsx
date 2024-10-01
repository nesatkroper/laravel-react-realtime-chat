import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Forward } from "lucide-react";

const ContentBody = () => {
  return (
    <React.Fragment>
      <ScrollArea className=" w-full h-[80vh] rounded-md  p-2">
        <div className="flex mt-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Card className="ms-2">
            <CardContent className="p-2">Hello from text</CardContent>
          </Card>
          <Button className="bg-background text-black hover:bg-gray-300 ">
            <Forward />
          </Button>
        </div>
        <div className="flex mt-2 items-end">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Card className="ms-2">
            <CardContent className="p-2">
              Hello from text Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Ipsa beatae, id eius tempora quaerat hic!
              Distinctio suscipit rem incidunt vitae.
            </CardContent>
          </Card>
          <Button className="bg-background text-black hover:bg-gray-200 ">
            <Forward />
          </Button>
        </div>
      </ScrollArea>
    </React.Fragment>
  );
};

export default ContentBody;
