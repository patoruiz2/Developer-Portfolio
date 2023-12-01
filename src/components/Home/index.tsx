import WebDeveloperImg from "../../assets/coder.svg";

const Home = () => {
  return (
    <section
      id="home"
      className="flex justify-evenly gap-5 flex-col w-full h-[100vh] text-center text-3xl text-red-600"
    >
      <img src={WebDeveloperImg} className="h-1/3 min-h-max text-center w-full" alt="" />
      <div>
        <h2 className="font-bold bg-gradient-to-r text-transparent inline-block bg-clip-text from-blue-700 via-blue-500 to-blue-400">
          Web Developer
        </h2>
        <p className="text-black text-xl font-semibold">
          Hello, I'm Patricio Ruiz
        </p>
      </div>
    </section>
  );
};

export default Home;
