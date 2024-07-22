// Util packages
import button from '../../styles/blocks/button.module.scss'
import React, { useEffect, useState, useRef } from 'react'
import { toast, Zoom } from 'react-toastify'
import about from '../../styles/sections/index/about.module.scss'
import api from '../../axiosConfig'

export default function NewsletterFrom() {
  const [email, setEmail] = useState('')
  const toastId = useRef(null)

  const [buttonText, setButtonText] = useState('Subscribe')

  const toastDefaults = {
    position: 'bottom-center',
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    transition: Zoom,
    autoClose: 2500,
    draggable: true
  }

  const toastSuccess = {
    type: 'success',
    isLoading: false,
    ...toastDefaults
  }

  const toastWarning = {
    type: 'warning',
    isLoading: false,
    ...toastDefaults
  }

  const handleSubmit = async (e) => {
    const regExp = /^([a-zA-Z0-9._%-+]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
    e.preventDefault()
    setButtonText('Subscribing...')
    toastId.current = toast.loading('Sending...', {
      ...toastDefaults
    })

    switch (true) {
      case regExp.test(email):
        await api
          .post('external/newsletter/subscribe', {
            headers: {
              'Content-Type': 'application/json'
            },
            data: {
              email: email,
              send_welcome_email: true,
              utm_source: 'yngdev.com',
              utm_medium: 'organic',
              referring_site: 'https://yngdev.com'
            }
          })
          .then(() => {
            setButtonText('Subscribe')
            setEmail('')
            toast.update(toastId.current, {
              render: 'Subscribed successfully!',
              ...toastSuccess
            })
          })
        break
      case email === '':
        toast.update(toastId.current, {
          render: 'Oops, email address is required.',
          ...toastWarning
        })
        setButtonText('Subscribe')
        break
      case !regExp.test(email):
        toast.update(toastId.current, {
          render: 'Oops, email address is not valid.',
          ...toastWarning
        })
        setButtonText('Subscribe')
        break
      default:
        toast.update(toastId.current, {
          render: 'Something went wrong, please try again.',
          ...toastWarning
        })
        setButtonText('Subscribe')
        break
    }
  }

  return (
    <>
      <div className={about.container}>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              value={email}
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              style={{
                width: '50%',
                height: '50px',
                border: '1px solid',
                borderRadius: '1rem',
                borderColor: '#DFDFDF',
                textIndent: '10px'
              }}
            />
            <button
              className={`button ${button.secondary}`}
              style={{ float: 'right' }}
              onClick={() => <input tpye="submit" />}
            >
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
