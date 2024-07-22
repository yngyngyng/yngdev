import React, { useEffect } from 'react'
import * as CookieConsent from 'vanilla-cookieconsent'

const CookieConsentComponent = () => {
  useEffect(() => {
    document.documentElement.classList.add('cc--darkmode')
    CookieConsent.run({
      hideFromBots: true,
      guiOptions: {
        consentModal: {
          layout: 'box wide',
          position: 'bottom center',
          equalWeightButtons: true,
          flipButtons: false
        },
        preferencesModal: {
          layout: 'box',
          position: 'right',
          equalWeightButtons: true,
          flipButtons: false
        }
      },

      categories: {
        necessary: {
          readOnly: true,
          enabled: true
        },
        analytics: {
          autoClear: {
            cookies: [
              {
                name: /^(_ga|_gid)/
              }
            ]
          }
        }
      },

      language: {
        default: 'en',

        translations: {
          en: {
            consentModal: {
              title: "🍪 Hey there, it's cookie time!",
              description:
                'We are using tracking cookies to understand how you interact with our website. The tracking will be enabled only if you accept explicitly.',
              acceptAllBtn: 'Accept all',
              acceptNecessaryBtn: 'Reject all',
              showPreferencesBtn: 'Manage preferences'
              //closeIconLabel: 'Close',
              //footer: `
              //  <a href="#link">Privacy Policy</a>
              //  <a href="#link">Impressum</a>
              //`,
            },
            preferencesModal: {
              title: 'Cookie preferences',
              acceptAllBtn: 'Accept all',
              acceptNecessaryBtn: 'Reject all',
              savePreferencesBtn: 'Save preferences',
              closeIconLabel: 'Close',
              sections: [
                {
                  title: 'Cookie Usage',
                  description:
                    'We use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want.'
                },
                {
                  title: 'Performance and Analytics cookies',
                  linkedCategory: 'analytics',
                  cookieTable: {
                    headers: {
                      name: 'Name',
                      domain: 'Service',
                      description: 'Description',
                      expiration: 'Expiration'
                    },
                    body: [
                      {
                        name: '_ga',
                        domain: 'Google Analytics',
                        description:
                          'Cookie set by <a href="https://analytics.google.com" target="_blank">Google Analytics</a>.',
                        expiration: 'Expires after 12 days'
                      },
                      {
                        name: '_gid',
                        domain: 'Google Analytics',
                        description:
                          'Cookie set by <a href="https://analytics.google.com" target="_blank">Google Analytics</a>',
                        expiration: 'Session'
                      }
                    ]
                  }
                }
              ]
            }
          }
        }
      }
    })
  }, [])
}

export default CookieConsentComponent
