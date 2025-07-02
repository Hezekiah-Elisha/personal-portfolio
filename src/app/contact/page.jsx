import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 font-space-mono">
      <h1 className="text-3xl font-bold text-center mt-10">Contact Me</h1>
      <p className="text-center mt-4">
        If you have any questions or just want to say hello, feel free to reach
        out!
      </p>
      <div className="flex justify-center mt-6 gap-2 border p-4 rounded-lg shadow-lg">
        <Link
          href="https://x.com/hezekiahelisha"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 flex items-center justify-center transition-colors"
        >
          <Image
            src="/icons8-x-100.svg"
            alt="Contact Illustration"
            className="w-64 h-64 object-full"
            width={64}
            height={64}
          />
        </Link>
        <Link
          href="https://linkedin.com/in/hezekiah-elisha/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 flex items-center justify-center transition-colors"
        >
          <Image
            src="/linkedin.svg"
            alt="Contact Illustration"
            className="w-64 h-64 object-full"
            width={64}
            height={64}
          />
        </Link>
      </div>
      <p className="text-center mt-4">OR</p>
      <form action="" className="max-w-md mx-auto mt-10">
        <Label htmlFor="name" className="block mb-2 text-sm">
          Name
        </Label>
        <Input
          type="text"
          id="name"
          className="block w-full p-2.5 mb-4 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-blue-500 focus:border-blue-500 outline-accent"
          placeholder="Your Name"
          required
        />
        <Label htmlFor="email" className="block mb-2 text-sm">
          Email
        </Label>
        <Input
          type="email"
          id="email"
          className="block w-full p-2.5 mb-4 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Your Email"
          required
        />
        <Label htmlFor="message" className="block mb-2 text-sm">
          Message
        </Label>
        <textarea
          id="message"
          className="block w-full p-2.5 mb-4 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
          rows="4"
          placeholder="Your Message"
          required
        ></textarea>
        <Button
          type="submit"
          className="w-full px-4 py-2 rounded-lg focus:ring-4 focus:ring-blue-300 focus:outline-none"
        >
          Send Message
        </Button>
        <p className="mt-4 text-xs text-gray-500">
          By submitting this form, you agree to our{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </form>
    </div>
  );
}
