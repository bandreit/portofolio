import Icon from 'components/Icons'
import SocialMediaData from 'data/SocialMediaLinks'
import Link from 'next/link'
import * as React from 'react'

interface IContactProps {}

const Contact: React.FC<IContactProps> = ({}) => {
  return (
    <section id="contact">
      <h1 className="section-title">Let's jam</h1>
      <div className="iconsWrapper">
        {SocialMediaData.map((value, index) => (
          <Link href={value.link} key={index}>
            <a target="_blank" rel="noreferrer">
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

      <form>
        <input
          name="name"
          type="text"
          className="feedback-input"
          placeholder="Name"
        />
        <input
          name="email"
          type="text"
          className="feedback-input"
          placeholder="Email"
        />
        <textarea
          name="text"
          className="feedback-input"
          placeholder="Comment"
        ></textarea>
        <input type="submit" value="SUBMIT" />
      </form>
      <style jsx>
        {`
          section {
            max-width: 40rem;
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
            border-radius: 5px;
            line-height: 22px;
            background-color: transparent;
            border: 2px solid var(--color-primary);
            transition: all 0.3s;
            padding: 13px;
            margin-bottom: 15px;
            width: 100%;
            box-sizing: border-box;
            outline: 0;
          }

          .feedback-input:focus {
            border: 2px solid #cc4949;
          }

          textarea {
            height: 150px;
            line-height: 150%;
            resize: vertical;
          }

          [type='submit'] {
            width: 100%;
            padding: 1rem 1.5rem;
            font-size: 1.5rem;
            transition-duration: 0.2s;
            cursor: pointer;
            border: 5px solid black;
            border-radius: 5px;
            border-color: var(--color-secondary);
            border-radius: 8px;
            background-color: var(--color-primary);
            color: var(--color-secondary);
          }
          [type='submit']:hover {
            background-color: var(--color-secondary);
            color: var(--color-primary);
          }
        `}
      </style>
    </section>
  )
}

export default Contact
