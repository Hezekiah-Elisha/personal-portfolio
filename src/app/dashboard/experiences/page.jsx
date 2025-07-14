"use client";
import { addExperienceAction } from "@/actions/experience";
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
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";

export default function ExperiencePage() {
  const [state, action, isPending] = useActionState(
    addExperienceAction,
    undefined
  );
  const [date, setDate] = useState(new Date());
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (state?.success) {
      setExperiences((prev) => [...prev, state.data]);
      toast.success("Experience added successfully!");
    }
    if (state?.success === false && state?.errors) {
      toast.error("Failed to add experience: " + state.errors.global);
    }
  }, [state]);

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
        <h2 className="text-2xl font-bold mb-4">Work Experiences</h2>
        <div className="flex flex-row items-center gap-2 align-middle justify-end">
          <Button onClick={fetchExperiences} className="" variant="outline">
            <RotateCcw className="inline hover:rotate-180 transition-transform duration-1000" />
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="cursor-pointer">
                Create Experience
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
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Company Name"
                    />
                    {state?.errors?.company && (
                      <p className="text-red-500 text-sm">
                        {state.errors.company}
                      </p>
                    )}
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="title">position</Label>
                    <Input id="title" name="title" placeholder="position" />
                    {state?.errors?.title && (
                      <p className="text-red-500 text-sm">
                        {state.errors.title}
                      </p>
                    )}
                  </div>

                  <div className="grid gap-3">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      name="location"
                      placeholder="Location"
                    />
                    {state?.errors?.location && (
                      <p className="text-red-500 text-sm">
                        {state.errors.location}
                      </p>
                    )}
                  </div>

                  <div className="grid gap-3">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      placeholder="description"
                    />
                    {state?.errors?.description && (
                      <p className="text-red-500 text-sm">
                        {state.errors.description}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-row gap-4">
                    <div>
                      <Label htmlFor="start_date">Start Date</Label>
                      <Input
                        type="date"
                        id="start_date"
                        name="start_date"
                        className="rounded-lg border"
                      />
                      {state?.errors?.date && (
                        <p className="text-red-500 text-sm">
                          {state.errors.date}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="end_date">End Date</Label>
                      <Input
                        type="date"
                        id="end_date"
                        name="end_date"
                        className="rounded-lg border"
                      />
                      {state?.errors?.date && (
                        <p className="text-red-500 text-sm">
                          {state.errors.date}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button
                    type="submit"
                    disabled={isPending}
                    className="capitalize"
                  >
                    {isPending ? "Adding..." : "Add work Experience"}
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
