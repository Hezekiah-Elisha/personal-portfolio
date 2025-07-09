"use client";
import { addEducationAction } from "@/actions/education";
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
import { Textarea } from "@/components/ui/textarea";
import { Github, Pencil, RotateCcw, Trash } from "lucide-react";
import Link from "next/link";
import React, { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";

export default function page() {
  const [state, action, isPending] = useActionState(
    addEducationAction,
    undefined
  );
  useEffect(() => {
    if (state?.success) {
      toast.success(state.message || "Education added successfully!");
      fetchEducation();
    }
    if (state?.success === false) {
      toast.error(state.error || "An error occurred while adding education");
    }
  }, [state]);

  const [date, setDate] = useState(new Date());
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchEducation = async () => {
    setLoading(true);
    try {
      const response = await instance.get("/educations/");
      setEducation(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchEducation();
  }, []);
  return (
    <div className="p-2 font-space-mono flex flex-1 flex-col gap-4">
      <div className="flex flex-row items-center justify-between p-4 rounded-md mb-4">
        <h1 className="text-2xl font-bold">Education Experience</h1>
        <div className="flex flex-row items-center gap-2 align-middle justify-end">
          <Button onClick={fetchEducation} className="" variant="outline">
            <RotateCcw className="inline hover:rotate-180 transition-transform duration-1000" />
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="cursor-pointer">
                Add Project
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] font-space-mono">
              <DialogHeader>
                <DialogTitle>Create Education Experience</DialogTitle>
                <DialogDescription>
                  Fill in the details of your education experience to add it to
                  your portfolio.
                </DialogDescription>
              </DialogHeader>
              <form action={action} className="font-space-mono">
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <div className="grid gap-3">
                        <Label htmlFor="institution">Institution</Label>
                        <Input id="institution" name="institution" />
                      </div>
                      {state?.errors?.institution && (
                        <p className="text-red-500 text-sm">
                          {state.errors.institution}
                        </p>
                      )}
                    </div>
                    <div>
                      <div className="grid gap-3">
                        <Label htmlFor="location">location</Label>
                        <Input id="location" name="location" />
                      </div>
                      {state?.errors?.location && (
                        <p className="text-red-500 text-sm">
                          {state.errors.location}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="grid gap-3">
                      <Label htmlFor="degree">Degree</Label>
                      <Input id="degree" name="degree" />
                    </div>
                    {state?.errors?.degree && (
                      <p className="text-red-500 text-sm">
                        {state.errors.degree}
                      </p>
                    )}
                  </div>
                  <div>
                    <div className="grid gap-3">
                      <Label htmlFor="field_of_study" className="capitalize">
                        field of study
                      </Label>
                      <Input id="field_of_study" name="field_of_study" />
                    </div>
                    {state?.errors?.field_of_study && (
                      <p className="text-red-500 text-sm">
                        {state.errors.field_of_study}
                      </p>
                    )}
                  </div>
                  <div>
                    <div className="grid gap-3">
                      <Label htmlFor="skills">Skills</Label>
                      <Input id="skills" name="skills" />
                    </div>
                    {state?.errors?.skills && (
                      <p className="text-red-500 text-sm">
                        {state.errors.skills}
                      </p>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <div className="grid gap-3">
                        <Label htmlFor="start_date">start_date</Label>
                        <Input id="start_date" name="start_date" />
                      </div>
                      {state?.errors?.start_date && (
                        <p className="text-red-500 text-sm">
                          {state.errors.start_date}
                        </p>
                      )}
                    </div>
                    <div>
                      <div className="grid gap-3">
                        <Label htmlFor="end_date">end_date</Label>
                        <Input id="end_date" name="end_date" />
                      </div>
                      {state?.errors?.end_date && (
                        <p className="text-red-500 text-sm">
                          {state.errors.end_date}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <Button type="submit" disabled={isPending}>
                  {isPending ? "Adding..." : "Add Project"}
                </Button>
              </form>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
              </DialogFooter>
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
          {education.map((education) => (
            <Card key={education.id} className="w-full">
              <CardHeader>
                <CardTitle className="capitalize">
                  {education.institution}
                </CardTitle>
                <CardDescription>
                  {education.degree || "No degree specified"}
                </CardDescription>
                <CardAction>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="cursor-pointer">
                        View
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] font-space-mono">
                      <DialogHeader>
                        <DialogTitle className="capitalize">
                          {education.institution}
                        </DialogTitle>
                        <DialogDescription>
                          <TechStack techStack={education.skills} />
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit">Add Project</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardAction>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {education.description}
                </p>
                <TechStack techStack={education.skills} />
                <Link
                  href={education.source_code || "#"}
                  target="_blank"
                  className="bg-primary/20 hover:bg-primary/30 transition-colors duration-300 text-primary rounded-md p-2 inline-flex items-center gap-2 mt-2 text-sm"
                >
                  <Github className="inline mr-1" />
                  View Source Code
                </Link>
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
