"use client";
import { instance } from "@/api";
import LoadingAnimation from "@/components/LoadingAnimation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Pencil, RotateCcw, Trash } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function page() {
  const [date, setDate] = useState(new Date());
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchProjects = async () => {
    setLoading(true);
    try {
      const response = await instance.get("/projects/");
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProjects();
  }, []);
  return (
    <div className="p-2 font-space-mono flex flex-1 flex-col gap-4">
      <div className="flex flex-row items-center justify-between p-4 rounded-md mb-4">
        <h1 className="text-2xl font-bold">Projects</h1>
        <div className="flex flex-row items-center gap-2 align-middle justify-end">
          <Button onClick={fetchProjects} className="" variant="outline">
            <RotateCcw className="inline hover:rotate-180 transition-transform duration-1000" />
          </Button>
          <Dialog>
            <form className="font-space-mono">
              <DialogTrigger asChild>
                <Button variant="outline" className="cursor-pointer">
                  Add Project
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] font-space-mono">
                <DialogHeader>
                  <DialogTitle>Create Work Experience</DialogTitle>
                  <DialogDescription>
                    Fill in the details of your work experience to add it to
                    your profile.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                  <div className="grid gap-3">
                    <Label htmlFor="name-1">Title</Label>
                    <Input
                      id="name-1"
                      name="name"
                      defaultValue="Pedro Duarte"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="name-1">Tech Stack</Label>
                    <Input
                      id="name-1"
                      name="name"
                      defaultValue="Pedro Duarte"
                    />
                  </div>

                  <div className="grid gap-3">
                    <Label htmlFor="name-1">Source Code</Label>
                    <Input
                      id="name-1"
                      name="name"
                      defaultValue="Pedro Duarte"
                    />
                  </div>

                  <div className="grid gap-3">
                    <Label htmlFor="username-1">Description</Label>
                    <Textarea
                      id="username-1"
                      name="username"
                      defaultValue="@peduarte"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button type="submit">Add Project</Button>
                </DialogFooter>
              </DialogContent>
            </form>
          </Dialog>
        </div>
      </div>
      {loading ? (
        <div className="flex items-center justify-center h-full">
          <LoadingAnimation />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* {projects.map((project) => (
            <li key={project.id} className="border p-4 rounded">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p>{project.description}</p>
            </li>
          ))} */}
          {projects.map((project) => (
            <Card key={project.id} className="w-full">
              <CardHeader>
                <CardTitle className="capitalize">{project.title}</CardTitle>
                <CardDescription>Card Description</CardDescription>
                <CardAction>Card Action</CardAction>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </CardContent>
              <CardFooter className="flex flex-row justify-end-safe align-middle items-center w-full gap-2">
                <div className="flex flex-row gap-2 items-center hover:bg-accent/55 p-2 rounded-md cursor-pointer">
                  <Pencil className="text-muted-foreground" />
                  <span>Edit</span>
                </div>
                <div className="flex flex-row gap-2 items-center hover:bg-red-500/55 p-2 rounded-md cursor-pointer">
                  <Trash className="text-muted-foreground" />
                  <span>Delete</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
