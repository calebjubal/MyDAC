import React from "react";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hjsZo4iwHjs
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Contactform() {
  return (
    <section className="w-full max-w-3xl mx-auto py-12 md:py-24">
      <div className="px-4 md:px-0">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Have a question or want to work together? Fill out the form below and we'll get back to you as soon as
            possible.
          </p>
        </div>
        <form className="mt-8 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" type="email" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea className="min-h-[150px]" id="message" placeholder="Enter your message" />
          </div>
          <Button className="w-full" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </section>
  )
}
