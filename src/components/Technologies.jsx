import React from "react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Asterisk } from "lucide-react";

export default function Technologies() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 font-space-mono">
      <h2 className="text-3xl font-bold mb-6">Technologies I Use</h2>
      <p className="mb-4">
        I have experience with a wide range of technologies, including:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="mt-8 bg-accent p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-6">Frontend Development</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>JavaScript (ES6+)</li>
            <li>React.js and Next.js</li>
            <li>Node.js and Express.js</li>
            <li>HTML5 and CSS3</li>
            <li>Tailwind CSS and Bootstrap</li>
            <li>Git and GitHub</li>
            <li>MongoDB and SQL databases</li>
          </ul>
        </div>
        <div className="mt-8 bg-accent p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-6">Backend Development</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Node.js and Express.js</li>
            <li>Python(Flask)</li>
            <li>Go(Gin)</li>
            <li>Rest APIs</li>
            <li>Authentication and Authorization (JWT, OAuth)</li>
            <li>Database Management (MongoDB, PostgreSQL, MySQL)</li>
          </ul>
        </div>
        <div className="mt-8 bg-accent p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-6">Mobile Development</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>React Native</li>
            <li>Android Development (Java/Kotlin)</li>
          </ul>
        </div>
        <Alert variant="default | destructive">
          <Asterisk />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            <p className="mt-4">
              I am always eager to learn new technologies and improve my skills.
              My goal is to stay up-to-date with the latest trends in web
              development and continuously enhance my expertise.
            </p>
            <p className="mt-4">
              If you have any questions about my experience with these
              technologies or would like to discuss potential collaborations,
              feel free to reach out!
            </p>
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
