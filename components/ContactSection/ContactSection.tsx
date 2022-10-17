import Icon from 'components/Icons'
import SocialMediaData from 'data/SocialMediaLinks'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

interface IContactProps {}

const Contact: React.FC<IContactProps> = ({}) => {
  const form = useRef()
  const [buttonText, setButtonText] = useState('Send')

  const sendEmail = (e) => {
    e.preventDefault()
    setButtonText('Sending...')

    console.log(e.value)

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE,
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE,
        form.current,
        process.env.NEXT_PUBLIC_EMAIL_JS_API_KEY
      )
      .then(
        (result) => {
          setButtonText("I'll get in touch!")
        },
        (error) => {
          setButtonText("Uh-oh, this didn't work :(")
        }
      )
  }
  return (
    <section id="contact">
      <h1 className="section-title">Let's jam</h1>
      <div className="iconsWrapper">
        {SocialMediaData.map((value, index) => (
          <Link href={value.link} key={index}>
            <a target="_blank" rel="noreferrer" aria-label={value.title}>
              <div>
                <Icon
                  id={value.title + 'Filled'}
                  width={45}
                  height={45}
                  filled
                />
              </div>
            </a>
          </Link>
        ))}
      </div>

      <form ref={form} onSubmit={sendEmail}>
        <input
          name="from_name"
          type="text"
          className="feedback-input"
          placeholder="Name"
          required
        />
        <input
          name="reply_to"
          type="text"
          className="feedback-input"
          placeholder="Email"
          required
        />
        <textarea
          name="message"
          className="feedback-input"
          placeholder="Comment"
          required
        ></textarea>
        <div className="submitWrapper">
          <input type="submit" value={buttonText} />
        </div>
      </form>
      <style jsx>
        {`
          section {
            max-width: 35rem;
            margin: 0 auto;
            padding: 1rem;
          }

          .iconsWrapper {
            display: flex;
            justify-content: center;
            gap: 1rem;
          }

          .section-title {
            margin-top: 2rem;
            color: var(--color-primary);
            font-size: 2rem;
            text-align: center;
          }

          form {
            max-width: 40rem;
            margin: 2rem auto;
          }

          .feedback-input {
            color: black;
            font-family: Helvetica, Arial, sans-serif;
            font-size: 18px;
            line-height: 22px;
            background-color: transparent;
            border: 2px solid var(--color-primary);
            transition: all 0.3s;
            padding: 13px;
            margin-bottom: 15px;
            width: 100%;
            box-sizing: border-box;
            border-radius: 0px;
            outline: 0;
          }

          .feedback-input:focus {
            border: 2px solid var(--color-primary-light);
          }

          textarea {
            height: 150px;
            line-height: 150%;
            resize: vertical;
          }

          .submitWrapper {
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
          }

          input {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
          }

          [type='submit'] {
            padding: 0.8rem 2rem;
            font-size: 1.1rem;
            transition-duration: 0.2s;
            cursor: pointer;
            border: 5px solid black;
            font-weight: bold;
            border-radius: 0px;
            border-color: var(--color-secondary);
            background-color: var(--color-primary);
            color: var(--color-secondary);
          }

          [type='submit']:hover {
            border-radius: 0px;
            background-color: var(--color-secondary);
            color: var(--color-primary);
          }
        `}
      </style>
    </section>
  )
}

export default Contact
