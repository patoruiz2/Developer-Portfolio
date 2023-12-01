import { experience } from "../../data/experience";
import { stack } from "../../data/stack";
import { ExperienceT } from "../../model";
import Picture from "../Picture";
import TechStackList from "./components/TechStackList";

const AboutMe = () => {
  return (
    <section id="about-me" className="bg-indigo-500 h-fit py-4 box-border">
      <div className="flex flex-col gap-4 justify-evenly w-10/12 m-auto h-fit">
        <section>
          <h2 className="text-3xl font-bold">About me</h2>
          <p className="font-medium text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            assumenda id debitis. Temporibus exercitationem, sapiente animi
            iste, ad sunt consequatur cumque veritatis voluptatem odit sint.
            Aspernatur cum saepe eveniet earum?
          </p>
        </section>
        <section className="mb-3">
          <h3 className="text-2xl font-semibold mb-3">Tech Stack</h3>
          <TechStackList stack={stack} />
        </section>
        <section>
          <h3 className="mb-3 text-2xl font-semibold">Experience</h3>
          <StepList />
        </section>
      </div>
    </section>
  );
};

export default AboutMe;

const StepList = () => {
  return (
    <ol className="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
      {experience.map((experienceItem) => (
        <StepItem key={experienceItem.employerEntity} item={experienceItem} />
      ))}
    </ol>
  );
};

type StepItemProps = {
  item: ExperienceT;
};
const StepItem = ({ item }: StepItemProps) => {
  return (
    <li className="mb-4 ms-6">
      <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
        {
          <Picture alt={item.employerEntity} srcDesktop={item.icon!} srcMobile={item.icon!} />
        }
      </span>
      <h3 className="font-medium leading-tight">{item.position}</h3>
      <p className="text-sm">{item.employerEntity}</p>
      <p className="text-sm">{item.from} - {item.to}</p>
    </li>
  );
};
