import PropTypes from 'prop-types';
import GitHubIcon from '../../assets/images/icons/github.svg';
import LinkSVGIcon from '../../assets/images/icons/Link.svg';

const imageDir = '/projects/';

const Project = ({
  title, description, tags, git, link, image,
}) => (
  <article className="flex flex-col flex-wrap w-full m-2 overflow-hidden bg-white border border-gray-300 rounded-lg shadow-lg">
    <div className="flex items-center h-32 bg-yellow-600">
      {image
        && (
          <img
            loading="lazy"
            className="object-cover w-full h-full"
            src={imageDir + image.file}
            alt={image.alt}
          />
        )}
    </div>
    <div className="flex flex-col justify-between flex-1 w-full px-3 py-3 border-r-2 border-gray-100">
      <div className="">
        <h3 className="mb-2 text-xl font-bold text-center">{title}</h3>
        <p className="text-base text-gray-700">{description}</p>
      </div>
      <div>
        <div className="flex flex-wrap">
          {Array.isArray(tags)
            && tags.map(
              (tag) => <span key={tag} className="inline-block px-3 py-px m-1 text-xs font-semibold text-gray-700 bg-gray-300 rounded-full">{tag}</span>,
            )}
        </div>
      </div>
    </div>
    <div className="flex w-full bg-gray-100 border-gray-200 ">
      <div className="flex items-center justify-center flex-1">
        {git
          && (
          <a
            href={git}
            target="_blank"
            rel="external noreferrer"
            title="Open Github"
            className="block p-2 m-2"
          >
            <GitHubIcon className="w-8 text-gray-500 fill-current stroke-current hover:text-primaryColor h-9" />
          </a>
          )}
      </div>

      <div className="flex items-center justify-center flex-1">
        {link
        && (
        <a
          href={link}
          target="_blank"
          rel="external noreferrer"
          title="View project"
          className="inline-block p-2 m-2"
        >
          <LinkSVGIcon className="w-8 text-gray-500 stroke-current hover:text-primaryColor h-9" fill="none" />
        </a>
        )}
      </div>
    </div>
  </article>
);

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  git: PropTypes.string.isRequired,
  link: PropTypes.string,
  image: PropTypes.shape({
    file: PropTypes.string,
    alt: PropTypes.string,
  }),
};

Project.defaultProps = {
  description: '',
  link: null,
  image: null,
};

export default Project;
