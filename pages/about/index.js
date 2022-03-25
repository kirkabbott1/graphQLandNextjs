import Link from "next/link";
export default function AboutPage() {
  return (
    <div className="min-h-screen  p-12">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className=" text-lg md:text-xl lg:text-2xl max-w-prose text-lightteal leading-9 space-y-9 flex-col content-evenly">
          <p className="">
            I'm a front-end focused software engineer with over 3 years experience. My background
            also includes cloud development and network engineering.
          </p>
          <p>
            As a consultant, I've worked on large-scale applications for companies such as Home
            Depot and NCR as well as smaller companies.
          </p>
          <p>
            Before pursuing my career in tech, I traveled around the Americas, Europe, and Asia
            while day-trading.
          </p>
          <p>
            I'm passionate about exploring everything I can learn, especially front-end development
            and the latest technologies. Outside of coding, my interests include comedy, offset bbq
            smoking, and enjoying nature.
          </p>
          <p>
            For the last two years I've been helping family in South Georgia where we have a farm
            and pecan orchard. I also helped start a local pecan butter business,{" "}
            <Link href="/portfolio">
              <a className="text-medteal hover:text-lightteal text-xl">HealthNutButter</a>
            </Link>
          </p>
          <p>
            I'm currently open to a remote front-end opportunity at a growing company to add value
            while continuing to expand my software development and leadership skills.
          </p>
        </div>
      </div>
    </div>
  );
}
