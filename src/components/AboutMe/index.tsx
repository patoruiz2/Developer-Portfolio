import { stack } from "../../data/stack";

const AboutMe = () => {
  return (
    <section id="about-me" className="bg-indigo-500 h-[100vh]">
      <h2 className="text-3xl font-bold">About me</h2>
      <p className="font-medium text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
        assumenda id debitis. Temporibus exercitationem, sapiente animi iste, ad
        sunt consequatur cumque veritatis voluptatem odit sint. Aspernatur cum
        saepe eveniet earum?
      </p>
      <div>
        <h3 className="text-2xl font-semibold">Tech Stack</h3>
        <ul>
          {stack.map(({ alt, srcDesktop, srcMobile }) => (
            <li key={alt}>
              <picture>
                <source media="(min-width:375px)" srcSet={srcMobile} />
                <img src={srcDesktop} alt={alt} />
              </picture>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutMe;
