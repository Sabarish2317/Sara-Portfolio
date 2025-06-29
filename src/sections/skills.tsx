import MotionDiv from "../components/motion-div";
import MotionList from "../components/motion-list";
import reactIcon from "../assets/icons/react.png";
import nextjsIcon from "../assets/icons/next-js.png";
import typescriptIcon from "../assets/icons/typescript.png";
import javascriptIcon from "../assets/icons/javascript.png";
import pythonIcon from "../assets/icons/python.png";
import javaIcon from "../assets/icons/java.png";
import html5Icon from "../assets/icons/html5.png";
import tailwindcssIcon from "../assets/icons/tailwindcss.png";
import shadcnuiIcon from "../assets/icons/shadcn-ui.png";
import viteIcon from "../assets/icons/vite.png";
import nodejsIcon from "../assets/icons/nodejs.png";
import expressjsIcon from "../assets/icons/express-js.png";
import Mongo from "../assets/icons/mongo.png"
import postgresIcon from "../assets/icons/postgres.png";
import dockerIcon from "../assets/icons/docker.png";
import gitIcon from "../assets/icons/git.png";
import vscodeIcon from "../assets/icons/vscode.png";
import postmanIcon from "../assets/icons/postman.svg";
import jupiter from "../assets/icons/Jupyter_logo.svg.png"
import githubActionsIcon from "../assets/icons/github-actions.png";
import spring from "../assets/icons/icons8-spring-boot.svg";
export default function skills() {
  const data = [
    {
      title: "Web Development",
      skills: [
        {
          name: "React.js",
          icon: reactIcon,
        },
        {
          name: "Next.js",
          icon: nextjsIcon,
        },
        {
          name: "TypeScript",
          icon: typescriptIcon,
        },
        {
          name: "JavaScript",
          icon: javascriptIcon,
        },
        {
          name: "HTML5",
          icon: html5Icon,
        },
        {
          name: "Tailwind CSS",
          icon: tailwindcssIcon,
        },

        {
          name: "shadcn/ui",
          icon: shadcnuiIcon,
        },

        {
          name: "Vite",
          icon: viteIcon,
        },
      ],
    },
    {
      title: "Backend Development",
      skills: [

        {
          name:"Spring Boot",
          icon: spring,
        }
        ,
        {
          name: "Express.js",
          icon: expressjsIcon,
        },
        {
          name: "Node.js",
          icon: nodejsIcon,
        },

      ],
    },
    {
      title: "Database",
      skills: [
        {
          name: "MongoDB",
          icon: Mongo,
        },
        {
          name: "PostgreSQL",
          icon: postgresIcon,
        },
      ],
    },
    {
      title: "DevOps",
      skills: [
        {
          name: "Git",
          icon: gitIcon,
        },
        {
          name: "GitHub Actions",
          icon: githubActionsIcon,
        },
        {
          name: "Docker",
          icon: dockerIcon,
        },
      ],
    },
    {
      title: "Languages",
      skills: [
        {
          name: "TypeScript",
          icon: typescriptIcon,
        },
        {
          name: "JavaScript",
          icon: javascriptIcon,
        },
        {
          name: "Python",
          icon: pythonIcon,
        },
        {
          name: "Java",
          icon: javaIcon,
        },
      ],
    },
    {
      title: "Tools & Environment",
      skills: [

        {
          name: "VS Code",
          icon: vscodeIcon,
        },

        {
          name: "Jupiter Lab",
          icon: jupiter,
        },
        {
          name: "Postman",
          icon: postmanIcon,
        },
      ],
    },

  ];

  return (
    <section
      id="skills"
      className="flex w-full flex-col items-center text-center"
    >
      <MotionDiv>
        <h2 className="mb-4  text-2xl font-extrabold">My Skills</h2>
      </MotionDiv>
      <div className="flex flex-wrap justify-center">
        {data.map((item, index) => (
          <MotionDiv key={index}>
            <div className="mb-6 md:px-2  ">
              <h3 className="text-xl font-extrabold">{item.title}</h3>
              <MotionList className="flex flex-wrap justify-evenly gap-0 md:gap-5 md:px-6 lg:justify-center">
                {item.skills.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </MotionList>
            </div>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
}

function SkillCard({ icon, name }: { icon: string; name: string }) {
  return (
    <div className="group rounded-xl border-none p-5 text-center shadow-none transition-all duration-200 ease-linear hover:scale-110 hover:drop-shadow-xl">
      <div className="flex flex-col items-center gap-2">
        <div className="flex h-16 w-16 items-center justify-center">
          <img src={icon} alt={name}  />
        </div>
        <p >{name}</p>
      </div>
    </div>
  );
}
