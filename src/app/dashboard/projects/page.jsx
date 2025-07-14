"use client";
import { addProjectAction } from "@/actions/project";
import { instance } from "@/api";
import LoadingAnimation from "@/components/LoadingAnimation";
import TechStack from "@/components/TechStack";
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Link2, Pencil, RotateCcw, Trash } from "lucide-react";
import Link from "next/link";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";

export default function page() {
  const [state, action, isPending] = useActionState(
    addProjectAction,
    undefined
  );
  const [date, setDate] = useState(new Date());
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (state?.success) {
      setProjects((prev) => [...prev, state.data]);
      toast.success("Project added successfully!");
    }
    if (state?.success === false && state?.errors) {
      toast.error("Failed to add project: " + state.errors.global);
    }
  }, [state]);

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
            <DialogTrigger asChild>
              <Button variant="outline" className="cursor-pointer">
                Add Project
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] font-space-mono">
              <form className="font-space-mono space-y-4" action={action}>
                <DialogHeader>
                  <DialogTitle>Create Work Experience</DialogTitle>
                  <DialogDescription>
                    Fill in the details of your work experience to add it to
                    your profile.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                  <div className="grid gap-3">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      name="title"
                      placeholder="Project Title"
                    />
                    {state?.errors?.title && (
                      <p className="text-red-500 text-sm">
                        {state.errors.title}
                      </p>
                    )}
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="title">type</Label>
                    <Select name="type" id="type">
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a fruit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>What type is it</SelectLabel>
                          <SelectItem value="full-stack">Full Stack</SelectItem>
                          <SelectItem value="front-end">Front-end</SelectItem>
                          <SelectItem value="back-end">Back-end</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    {state?.errors?.type && (
                      <p className="text-red-500 text-sm">
                        {state.errors.type}
                      </p>
                    )}
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="tech_stack">Tech Stack</Label>
                    <Input
                      id="tech_stack"
                      name="tech_stack"
                      placeholder="Tech Stack"
                    />
                    {state?.errors?.tech_stack && (
                      <p className="text-red-500 text-sm">
                        {state.errors.tech_stack}
                      </p>
                    )}
                  </div>

                  <div className="grid gap-3">
                    <Label htmlFor="source_code">Source Code</Label>
                    <Input
                      id="source_code"
                      name="source_code"
                      placeholder="Source Code URL"
                    />
                    {state?.errors?.source_code && (
                      <p className="text-red-500 text-sm">
                        {state.errors.source_code}
                      </p>
                    )}
                  </div>

                  <div className="grid gap-3">
                    <Label htmlFor="username-1">Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      placeholder="Project Description"
                      className="resize-none h-24"
                    />
                    {state?.errors?.description && (
                      <p className="text-red-500 text-sm">
                        {state.errors.description}
                      </p>
                    )}
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button type="submit" disabled={isPending} className="">
                    {isPending ? <LoadingAnimation /> : "Add Project"}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      {loading ? (
        <div className="flex items-center justify-center h-full">
          <LoadingAnimation />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {projects.map((project) => (
            <Card key={project.id} className="w-full">
              <CardHeader>
                <CardTitle className="capitalize">{project.title}</CardTitle>
                <CardDescription>
                  <TechStack techStack={project.tech_stack} />
                </CardDescription>
                <CardAction>{project.type}</CardAction>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </CardContent>
              <CardFooter className="flex flex-col md:flex-row justify-between align-middle items-center w-full gap-2">
                <div className="">
                  <Link
                    href={project.source_code}
                    target="_blank"
                    className="hover:underline flex flex-row gap-2 items-center"
                  >
                    <Link2 className="size-6 text-muted-foreground" />
                    <span className="text-xs">Source Code</span>
                  </Link>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <div className="flex flex-row gap-2 items-center hover:bg-accent/55 p-2 rounded-md cursor-pointer">
                    <Pencil className="text-muted-foreground" />
                    <span>Edit</span>
                  </div>
                  <div className="flex flex-row gap-2 items-center hover:bg-red-500/55 p-2 rounded-md cursor-pointer">
                    <Trash className="text-muted-foreground" />
                    <span>Delete</span>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
