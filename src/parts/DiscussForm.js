/* eslint-disable linebreak-style */
/* eslint-disable no-useless-escape */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';

import { Fade } from 'react-awesome-reveal';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as emailjs from '@emailjs/browser';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ToastContainer, toast } from 'react-toastify';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-toastify/dist/ReactToastify.css';

import { Form } from 'elements/Form';
import Button from 'elements/Button';

export const DiscussForm = (actions) => {
  const { data, resetForm } = actions;
  const submitEmail = () => {
    const {
      name, company, email, phone, projectIdea,
    } = data;

    const templateParams = {
      from_name: `${name} - ${company} ( ${phone} - ${email} )`,
      to_name: 'Racxstudio',
      message: projectIdea,
    };

    if (
      name !== ''
      && company !== ''
      && email !== ''
      && phone !== ''
      && projectIdea !== ''
    ) {
      emailjs.send(
        'service_h4gtndg',
        'template_a9tvs7a',
        templateParams,
        'user_csqIxzN5mKsl1yw4ffJzV',
      )
        .then(() => {
          toast.success('Success! we\'\ll get back to you soon. Thank you!');
          resetForm();
        }, (error) => {
          toast.error(error);
        });
    } else {
      toast.error('Please fill out the blank form.');
    }
  };

  return (
    <section className="flex flex-col container mx-auto mt-10 justify-center">

      <Fade direction="down" triggerOnce>
        <h1 className="text-5xl text-theme-blue text-center font-bold">Lets Discuss</h1>
      </Fade>

      <Fade direction="up" triggerOnce>
        <p className="font-light text-lg text-gray-400 text-center mb-12">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Please fill out the form below to discuss your project and we'll get back to you in less than 24 hours.
        </p>
      </Fade>

      <Fade direction="up" triggerOnce>
        <div className="flex flex-col">
          <div className="flex flex-col sm:flex-row mx-auto">
            <Form
              id="name"
              name="name"
              type="text"
              value={data.name}
              placeholder="Your name"
              className=""
              onChange={actions.onChange}
            />
            <Form
              id="company"
              name="company"
              type="text"
              value={data.company}
              placeholder="Your company"
              className=""
              onChange={actions.onChange}
            />
          </div>

          <div className="flex flex-col sm:flex-row mx-auto">
            <Form
              id="email"
              name="email"
              type="email"
              value={data.email}
              placeholder="Your email address"
              className=""
              onChange={actions.onChange}
            />
            <Form
              id="phone"
              name="phone"
              type="number"
              value={data.phone}
              placeholder="Your contact number"
              className=""
              onChange={actions.onChange}
            />
          </div>

          <div className="mx-auto">
            <Form
              id="projectIdea"
              name="projectIdea"
              type="textarea"
              value={data.projectIdea}
              placeholder="Explain about your project idea"
              className=""
              onChange={actions.onChange}
            />
          </div>
          <Button
            className="text-xl mx-auto px-12 py-3 mt-5 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple border-purple-800 transition duration-200 focus:outline-none"
            type="button"
            onClick={submitEmail}
          >
            Submit
          </Button>
        </div>
      </Fade>

      <ToastContainer />

    </section>
  );
};
