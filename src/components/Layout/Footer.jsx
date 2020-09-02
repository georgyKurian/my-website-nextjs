import GitHubLogo from '../../assets/images/icons/github.svg';
import EmailLogo from '../../assets/images/icons/email.svg';
import LinkedinLogo from '../../assets/images/icons/linkedin.svg';
import StackOverFlowLogo from '../../assets/images/icons/stackoverflow.svg';

const cssClasses = 'w-1/5 sm:w-20 p-2 hover:p-1 focus:p-1 opacity-75 hover:opacity-100 focus:opacity-100 m-1';

const Footer = () => (
  <footer className="w-full pt-12 pb-4 overflow-hidden text-center text-gray-500 bg-gray-800 border-t-2">
    <div id="contact" className="flex flex-wrap justify-center w-full md:flex-row">
      <a href="https://github.com/georgyKurian" title="GitHub profile link" className={cssClasses}>
        <GitHubLogo className="w-full h-full text-white fill-current" aria-hidden="true" />
        <span className="sr-only">GitHub</span>
      </a>
      <a href="https://linkedin.com/in/georgi-kurian/" title="Linkedin profile link" className={cssClasses}>
        <LinkedinLogo className="w-full h-full text-white fill-current" aria-hidden="true" />
        <span className="sr-only">Linkedin</span>
      </a>
      <a href="mailto:georgyvk@gmail.com" title="Email to georgyvk@gmail.com" className={cssClasses}>
        <EmailLogo className="w-full h-full text-white fill-current" aria-hidden="true" />
        <span className="sr-only">Email</span>
      </a>
      <a href="https://stackoverflow.com/users/10349395/georgy-varghese-kurian" title="Stackoverflow profile link" className={cssClasses}>
        <StackOverFlowLogo className="w-full h-full text-white fill-current" aria-hidden="true" />
        <span className="sr-only">Stackoverflow</span>
      </a>
    </div>
    <ul className="flex flex-col justify-center text-sm">
      <li>©Georgi 2020</li>
    </ul>
  </footer>
);

export default Footer;
