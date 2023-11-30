import { experience } from "../../data/experience";
import { stack } from "../../data/stack";
import { ExperienceT } from "../../model";

const AboutMe = () => {
  return (
    <section id="about-me" className="bg-indigo-500 h-[100vh]">
      <div className="flex flex-col gap-4 justify-evenly w-10/12 mx-auto">
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
          <h3 className="text-2xl font-semibold">Tech Stack</h3>
          <ul className="grid grid-cols-3 gap-3">
            {stack.map(({ alt, srcDesktop, srcMobile }) => (
              <li key={alt}>
                <picture>
                  <source media="(min-width:375px)" srcSet={srcMobile} />
                  <img src={srcDesktop} alt={alt} />
                </picture>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h3 className="mb-3">Experience</h3>
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
        <StepItem item={experienceItem} />
      ))}
    </ol>
  );
};

type StepItemProps = {
  item: ExperienceT;
};
const StepItem = ({ item }: StepItemProps) => {
  return (
    <li className="mb-10 ms-6">
      <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
        <svg
          className="w-3.5 h-3.5 text-green-500 dark:text-green-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 12"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5.917 5.724 10.5 15 1.5"
          />
        </svg>
      </span>
      <h3 className="font-medium leading-tight">Personal Info</h3>
      <p className="text-sm">Step details here</p>
    </li>
  );
};
