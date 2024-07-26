/* eslint-disable linebreak-style */
/* eslint-disable object-shorthand */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const Form = (props) => {
  const {
    name, value, type, placeholder, className, errorResponse,
  } = props;

  const [hasError, setHasError] = useState(null);

  let pattern;
  if (type === 'email') pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (type === 'number') pattern = /^[0-9]{10}$/;

  const onChange = (event) => {
    const target = {
      target: {
        name: name,
        value: event.target.value,
      },
    };

    if (type === 'email') {
      if (!pattern.test(event.target.value)) setHasError(errorResponse);
      else setHasError(null);
    }

    if (type === 'number') {
      if (event.target.validity.valid) props.onChange(target);
      if (!pattern.test(event.target.value)) {
        setHasError(errorResponse);
      } else {
        setHasError(null);
        props.onChange(target);
      }
    } else {
      props.onChange(target);
    }
  };

  if (type === 'textarea') {
    return (
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        className={[
          'w-95 sm:w-192 lg:w-192.5 xl:w-192.5 p-4 mx-2 mb-6 font-light text-lg text-theme-blue rounded border border-gray-400 focus:outline-none focus:ring-1 focus:ring-theme-purple',
          className,
        ].join(' ')}
        onChange={onChange}
        rows="9"
        required
      />
    );
  }

  if (type === 'number') {
    return (
      <div className="flex flex-col mb-6 mx-2 lg:mx-5 ">
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          pattern={pattern}
          value={value}
          className={[
            'p-4 font-light text-lg text-theme-blue rounded border border-gray-400 focus:outline-none focus:ring-1 focus:ring-theme-purple',
            className,
          ].join(' ')}
          onChange={onChange}
          required
        />
        {hasError && (
          <span className="text-sm text-white bg-red-500 p-1 rounded">
            {hasError}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col mb-6 mx-2 lg:mx-5 ">
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        className={[
          'p-4 font-light text-lg text-theme-blue rounded border border-gray-400 focus:outline-none focus:ring-1 focus:ring-theme-purple',
          className,
        ].join(' ')}
        onChange={onChange}
        required
      />
      {hasError && (
        <span className="text-sm text-white bg-red-500 p-1 rounded">
          {hasError}
        </span>
      )}
    </div>
  );
};

Form.defaultProps = {
  errorResponse: 'Please match the requested format.',
  type: '',
  placeholder: '',
  className: '',
};

Form.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  errorResponse: PropTypes.string,
};
