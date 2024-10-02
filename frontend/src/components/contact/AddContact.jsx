import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSelector, useDispatch } from "react-redux";
import { addContact } from "@/app/reducer/contactSlice";

export const AddContact = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state?.user);
  const [contact, setContact] = useState({
    name: "",
    phone: "",
  });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      dispatch(
        addContact({
          creator: store.usr_id,
          name: contact.name[0],
          phone: contact.phone[0],
        })
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <React.Fragment>
      <Dialog>
        <DialogTrigger>
          <Button className="px-2 shadow-xl">
            <Plus />
          </Button>
        </DialogTrigger>
        <DialogContent className="w-[350px]">
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle>Add Contact</DialogTitle>
              <div className="flex flex-col">
                <div className="grid w-full max-w-sm items-center gap-1.5 my-3">
                  <Label htmlFor="email">Email</Label>
                  <div className="flex">
                    <Input
                      value="+855"
                      type="text"
                      id="email"
                      placeholder="Email"
                      className="w-[60px] me-2"
                      disabled
                    />
                    <Input
                      onChange={(e) => handleChange(e)}
                      type="number"
                      name="phone"
                      placeholder="010 xxx xxx"
                    />
                  </div>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5 ">
                  <Label htmlFor="email">Name</Label>
                  <Input
                    onChange={(e) => handleChange(e)}
                    type="text"
                    name="name"
                    placeholder="yoo yoo"
                  />
                </div>
              </div>
            </DialogHeader>
            <div className="flex my-4 gap-2">
              <DialogClose>
                <Button type="submit">Save</Button>
              </DialogClose>
              <DialogClose>
                <Button
                  className="bg-background hover:bg-gray-200 text-black "
                  variant="outline"
                  type="button"
                >
                  Cancel
                </Button>
              </DialogClose>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};
