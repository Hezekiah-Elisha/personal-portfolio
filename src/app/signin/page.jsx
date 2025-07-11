"use client";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useActionState, useEffect } from "react";
import { signin } from "@/actions/auth";
import { toast } from "sonner";
import { redirect } from "next/navigation";

export default function LoginPage() {
  const [state, action, isPending] = useActionState(signin, undefined);
  useEffect(() => {
    if (state?.success) {
      toast.success("Login successful!");
      redirect("/dashboard");
    } else if (state?.errors) {
      const errorMessages = Object.values(state.errors).flat();
      errorMessages.forEach((error) => {
        toast.error(error);
      });
    }
  }, [state]);

  return (
    <section className="flex flex-col items-center justify-center min-h-[75vh] bg-secondary/30 backdrop-blur-3xl font-space-mono">
      <div className="w-full max-w-md p-6 bg-secondary rounded-2xl shadow-xl border border-primary/50">
        <form className="flex flex-col gap-6" action={action}>
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-2xl font-bold">Login to your account</h1>
            <p className="text-muted-foreground text-sm text-balance">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-6">
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                autoFocus
                placeholder="m@example.com"
                required
              />
              {state?.errors?.email && (
                <p className="text-red-500 text-sm">
                  {state.errors.email.join(", ")}
                </p>
              )}
            </div>
            <div className="grid gap-3">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input name="password" id="password" type="password" required />
              {state?.errors?.password && (
                <p className="text-red-500 text-sm">
                  {state.errors.password.join(", ")}
                </p>
              )}
            </div>
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? "Logging in..." : "Login"}
            </Button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-primary-foreground hover:underline hover:underline-offset-4"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
