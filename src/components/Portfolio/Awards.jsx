import PropTypes from 'prop-types';

const Award = ({
  title, description, awardedBy, date,
}) => (
  <article className="flex flex-col items-center w-full overflow-hidden bg-gray-300 border border-gray-300 rounded-lg shadow transform ease-in-out hover:scale-105 hover:shadow-lg">
    <div className="w-1/5">
      <div className="relative" style={{ paddingTop: '100%' }}>
        <img
          loading="lazy"
          className="absolute inset-0 object-cover p-4"
          src="/medal.svg"
          alt="Awards Icon"
        />
      </div>
    </div>
    <div className="flex flex-col justify-between flex-1 w-full px-4 pb-4 border-gray-100">
      <div className="flex flex-col justify-between h-full">
        <div>
          <h3 className="text-center h5">{title}</h3>
          <p className="m-0 text-sm leading-tight text-center text-gray-700">{description}</p>
        </div>
        <div className="flex items-end mt-4 justify-between text-sm leading-tight">
          <div className="flex flex-col leading-tight">
            <span className="m-0 text-gray-600">Awarded by,</span>
            <span className="m-0 text-gray-600">{awardedBy}</span>
          </div>
          <div className="m-0 text-gray-600">
            <span>{date}</span>
          </div>
        </div>
      </div>
      <div />
    </div>
  </article>
);

Award.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  awardedBy: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.shape({
    file: PropTypes.string,
    alt: PropTypes.string,
  }),
};

Award.defaultProps = {
  image: null,
};

export default Award;
