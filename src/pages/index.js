import DefaultLayout from "../components/Layout/DefaultLayout";
import GitHubLogo from '../assets/images/icons/github.svg';
import EmailLogo from '../assets/images/icons/email.svg';
import LinkedinLogo from '../assets/images/icons/linkedin.svg';
import StackOverFlowLogo from '../assets/images/icons/stackoverflow.svg';
import { getSkillData } from "../api/SkillsAPI";

export default function Home({skillData}) {
  const cssClasses="w-1/5 md:w-16 p-2 hover:p-1 focus:p-1 opacity-75 hover:opacity-100 focus:opacity-100 m-1";
  return (
    <DefaultLayout title="Home">
      <section className="w-full bg-top bg-cover overflow-hidden bg-blue-200 lightBlueGradient">
        <div className="flex items-center w-full">
          <div className="flex flex-col items-center justify-around container mx-auto mt-40 mb-16">
            <h1 className="text-white">Hi, I’m Georgi. Nice to meet you!</h1>
            <p className="text-center text-gray-200">I am a developer who is enthusiastic about finding solutions and performance optimization.</p>
          </div>
        </div>
        <div id="contact" class="flex flex-wrap w-full justify-center md:flex-row py-16">
            <a href="https://github.com/georgyKurian" title="GitHub profile link" className={cssClasses}>
              <GitHubLogo className="text-white fill-current w-full h-full" aria-hidden="true"/>
              <span className="sr-only">GitHub</span>              
            </a>
            <a href="https://linkedin.com/in/georgi-kurian/" title="Linkedin profile link" className={cssClasses}>
              <LinkedinLogo className="text-white fill-current w-full h-full" aria-hidden="true"/>
              <span className="sr-only">Linkedin</span>
            </a>
            <a href="mailto:georgyvk@gmail.com" title="Email to georgyvk@gmail.com" className={cssClasses}>
              <EmailLogo className="text-white fill-current w-full h-full" aria-hidden="true"/>
              <span className="sr-only">Email</span>
            </a>
            <a href="https://stackoverflow.com/users/10349395/georgy-varghese-kurian" title="Stackoverflow profile link" className={cssClasses}>
              <StackOverFlowLogo className="text-white fill-current w-full h-full" aria-hidden="true"/>
              <span className="sr-only">Stackoverflow</span>              
            </a>
        </div>         
      </section>
      <section>
        {JSON.stringify(skillData)}
      </section>
    </DefaultLayout>
  )
}

export async function getStaticProps() {
  const skillData = getSkillData();
  return {
    props: {
      skillData
    }
  }
}
