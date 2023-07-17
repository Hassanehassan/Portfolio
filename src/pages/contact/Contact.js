import React, { useRef, useState } from "react";
import classes from "./Contact.module.css";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaInstagramSquare,
} from "react-icons/fa";

import { FiSend } from "react-icons/fi";

const validationSchema = Yup.object({
  user_name: Yup.string().required("Name is required"),
  user_email: Yup.string().email("Invalid email").required("Email is required"),
  user_subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_l2to5ry",
        "template_udzcaq2",
        form.current,
        "rVjFLuA1YBRwtn9JG"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsLoading(false);
          setError("");
          setIsSent(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setError(error.text);
          setIsLoading(false);
        }
      );
  };

  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      user_subject: "",
      message: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });
  return (
    <section className={`${classes.contact} ${classes.section}`}>
      <h2 className={classes["section__title"]}>
        Get In <span>Touch</span>
      </h2>

      <div
        className={`${classes["contact__container"]} ${classes.container} ${classes.grid}`}
      >
        <div className={classes["contact__data"]}>
          <h3 className={classes["contact__title"]}>Don't be Shy !</h3>

          <p className={classes["contact__description"]}>
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <div className={classes["contact__info"]}>
            <div className={classes["info__item"]}>
              <FaEnvelopeOpen className={classes["info__icon"]} />
              <div>
                <span className={classes["info__title"]}>Mail me</span>
                <h4 className={classes["info__desc"]}>
                  hassanalhassanj401@gmail.com
                </h4>
              </div>
            </div>

            <div className={classes["info__item"]}>
              <FaPhoneSquareAlt className={classes["info__icon"]} />
              <div>
                <span className={classes["info__title"]}>Call me</span>
                <h4 className={classes["info__desc"]}>+961 71840962</h4>
              </div>
            </div>
          </div>
          <div className={classes["contact__socials"]}>
            <a
              href="https://www.facebook.com/diab.hassan.14"
              className={classes["contact__social-link"]}
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.linkedin.com/in/hassan-hassan-08393a232"
              className={classes["contact__social-link"]}
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://github.com/Hassanehassan"
              className={classes["contact__social-link"]}
            >
              <FaGithub />
            </a>

            <a
              href="https://www.instagram.com/hasanrhassan/"
              className={classes["contact__social-link"]}
            >
              <FaInstagramSquare />
            </a>
          </div>
        </div>

        <form
          className={classes["contact__form"]}
          ref={form}
          onSubmit={formik.handleSubmit}
        >
          <div className={classes["form__input-group"]}>
            <div className={classes["form__input-div"]}>
              <input
                type="text"
                placeholder="Your Name"
                className={
                  !formik.errors.user_name
                    ? classes["form__control"]
                    : `${classes["form__control"]} ${classes.border}`
                }
                name="user_name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.user_name}
              ></input>
              {formik.touched.user_name && formik.errors.user_name && (
                <p className={classes.error}>{formik.errors.user_name}</p>
              )}
            </div>

            <div className={classes["form__input-div"]}>
              <input
                type="email"
                placeholder="Your Email"
                className={
                  !formik.errors.user_email
                    ? classes["form__control"]
                    : `${classes["form__control"]} ${classes.border}`
                }
                name="user_email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.user_email}
              ></input>
              {formik.touched.user_email && formik.errors.user_email && (
                <p className={classes.error}>{formik.errors.user_email}</p>
              )}
            </div>

            <div className={classes["form__input-div"]}>
              <input
                type="text"
                placeholder="Your Subject"
                className={
                  !formik.errors.user_subject
                    ? classes["form__control"]
                    : `${classes["form__control"]} ${classes.border}`
                }
                name="user_subject"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.user_subject}
              ></input>
              {formik.touched.user_subject && formik.errors.user_subject && (
                <p className={classes.error}>{formik.errors.user_subject}</p>
              )}
            </div>
          </div>

          <div className={classes["form__input-div"]}>
            <textarea
              placeholder="Your Message"
              className={
                formik.errors.message
                  ? `${classes["form__control"]} ${classes.textarea} ${classes.border}`
                  : `${classes["form__control"]} ${classes.textarea}`
              }
              name="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            ></textarea>
            {formik.touched.message && formik.errors.message && (
              <p className={classes.error}>{formik.errors.message}</p>
            )}
          </div>

          <button type="submit" className={classes.button}>
            Send Message
            <span
              className={`${classes["button__icon"]} ${classes["contact__button-icon"]}`}
            >
              <FiSend />
            </span>
          </button>

          {isLoading && <p className={classes.loading}>loading...</p>}
          {error && (
            <div className={classes.submit}>
              <p className={classes.error}>{error}</p>
            </div>
          )}
          {isSent && !isLoading && !error && (
            <div className={classes.submit}>
              <p className={classes.sent}>
                Thank you for submitting the form. Your email has been
                successfully sent. I will respond to your message via email.
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default React.memo(Contact);
