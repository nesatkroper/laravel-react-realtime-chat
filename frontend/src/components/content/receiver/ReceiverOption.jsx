import React from "react";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  BellOff,
  Info,
  Pen,
  SquarePen,
  Users,
  Video,
  CircleX,
  Trash2,
} from "lucide-react";

const ReceiverOption = () => {
  return (
    <React.Fragment>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <SquarePen className="w-4 h-4 me-2" />
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Info className="w-4 h-4 me-2" />
          Info
        </DropdownMenuItem>
        <DropdownMenuItem>
          <BellOff className="w-4 h-4 me-2" />
          Mute
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Video className="w-4 h-4 me-2" />
          Video
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Users className="w-4 h-4 me-2" />
          Create Group
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Pen className="w-4 h-4 me-2" />
          Change Wallpaper
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <CircleX className="w-4 h-4 me-2" />
          Clear Chat History
        </DropdownMenuItem>{" "}
        <DropdownMenuItem className="text-red-600 hover:bg-red-300 ">
          <Trash2 className="w-4 h-4 me-2 hover:text-red-600" />
          Delete Chat
        </DropdownMenuItem>
      </DropdownMenuContent>
    </React.Fragment>
  );
};

export default ReceiverOption;
