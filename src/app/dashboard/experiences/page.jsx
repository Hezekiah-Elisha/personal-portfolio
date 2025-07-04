"use client";
import { instance } from "@/api";
import LoadingAnimation from "@/components/LoadingAnimation";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
import { RotateCcw } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function ExperiencePage() {
  const [date, setDate] = useState(new Date());
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchExperiences = async () => {
    setLoading(true);
    try {
      const response = await instance.get("/experiences/");
      setExperiences(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching experiences:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExperiences();
  }, []);

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0 font-space-mono">
      <div className="flex flex-row items-center align-middle justify-between mb-4">
        <h2 className="text-2xl font-bold mb-4">Experiences</h2>
        <div className="flex flex-row items-center gap-2 align-middle justify-end">
          <Button onClick={fetchExperiences} className="" variant="outline">
            <RotateCcw className="inline hover:rotate-180 transition-transform duration-1000" />
          </Button>
          <Dialog>
            <form className="font-space-mono">
              <DialogTrigger asChild>
                <Button variant="outline" className="cursor-pointer">
                  Create Experience
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
                    <Label htmlFor="name-1">Company Name</Label>
                    <Input
                      id="name-1"
                      name="name"
                      defaultValue="Pedro Duarte"
                    />
                  </div>

                  <div className="grid gap-3">
                    <Label htmlFor="name-1">Location</Label>
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
                  <div className="flex flex-row gap-4">
                    <div>
                      <Label htmlFor="date">Start Date</Label>
                      <Input
                        type="date"
                        id="date"
                        name="date"
                        value={date.toISOString().split("T")[0]}
                        onChange={(e) => setDate(new Date(e.target.value))}
                        className="rounded-lg border"
                      />
                    </div>
                    <div>
                      <Label htmlFor="date">Start Date</Label>
                      <Input
                        type="date"
                        id="date"
                        name="date"
                        value={date.toISOString().split("T")[0]}
                        onChange={(e) => setDate(new Date(e.target.value))}
                        className="rounded-lg border"
                      />
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button type="submit">Save changes</Button>
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
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          {experiences.map((exp) => (
            <div
              key={exp.ID}
              className="bg-muted/50 aspect-video rounded-xl p-4"
            >
              <div className="flex flex-row justify-between items-center mb-2">
                <h3 className="text-sm">{exp.title}</h3>
                <div className="text-xs text-muted-foreground italic">
                  <span>{exp.start_date}</span>
                  <span>-</span>
                  <span>{exp.end_date || "Present"}</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold capitalize">
                  {exp.company}
                </p>
                <p className="text-xs text-muted-foreground">
                  {exp.description}
                </p>
              </div>
              <a href={exp.url} className="text-blue-500 hover:underline">
                View Experience
              </a>
            </div>
          ))}
        </div>
      )}
      <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min">
        {/* Placeholder for additional content */}
      </div>
    </div>
  );
}
