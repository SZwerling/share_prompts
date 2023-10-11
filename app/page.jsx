import Feed from "@components/Feed";

//when underscore is in classname, that means it's from globals.css

const Home = () => {
   return (
      <section className="w-full flex-center flex-col">
         <h1 className="head_text text-center">
            Discover & Share
            <br className="max-md:hidden"/>
            <span className="md:hidden">&nbsp;</span>
            <span className="orange_gradient text-center">
               Power Prompts
            </span>
         </h1>
         <p className="desc text-center">
            PromptShare is an AI prompting resource to discover, create
            & share powerful prompts
         </p>

         <Feed />
      </section>
   );
};

export default Home;
