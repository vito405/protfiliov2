const projects = [
  {
    id: 1,
    pic: "Picture",
    title: "This is a Project",
    description: "This is the project discription",
  },
  {
    id: 2,
    pic: "Picture",
    title: "This is a Project",
    description: "This is the project discription",
  },
  {
    id: 3,
    pic: "Picture",
    title: "This is a Project",
    description: "This is the project discription",
  },
  {
    id: 4,
    pic: "Picture",
    title: "This is a Project",
    description: "This is the project discription",
  },
];

const Projects = () => {
  return (
    <section className="m-[10rem] border border-black text-2xl">
      These are the most impresive Projects
      <div className="grid grid-cols-2 grid-rows-2 gap-[2rem] border border-black p-4">
        {projects.map(({ pic, title, description, id }) => (
          <div
            className=" grid grid-cols-2 grid-row-2 border border-black"
            key={id}
          >
            <div className=" row-span-2 border border-black">{pic}</div>
            <span className="border border-black">{title}</span>
            <span className="border border-black">{description}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
