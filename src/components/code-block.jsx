import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import PropTypes from 'prop-types';

export default function CodeBlock({ children, className }) {
  const language = className ? className.replace(/language-/, '') : null;
  return (
    <Highlight {...defaultProps} code={children} language={language}>
      {({
        className, style, tokens, getLineProps, getTokenProps,
      }) => (
        <pre className={className} style={{ ...style, padding: '20px' }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}

CodeBlock.propTypes = {
  className: PropTypes.string.isRequired,
};
