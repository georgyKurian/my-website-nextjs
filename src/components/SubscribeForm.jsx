import fetch from 'isomorphic-unfetch';
import { useState } from 'react';

export default function SubscribeForm() {
  const [emailAddress, setEmail] = useState('');
  const [{ errorMessage, successMessage }, setMessage] = useState({});

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setMessage({});
  };

  const handleSubscriptionSubmit = (event) => {
    event.preventDefault();

    const emailRegExp = /\S+@\S+\.\S+/;
    if (!emailRegExp.test(emailAddress)) {
      setMessage({ errorMessage: 'Invalid email address!' });
      return;
    }

    fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ emailAddress }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.isSuccess) {
          setMessage({ successMessage: 'Thank you for subscribing' });
        } else {
          setMessage({ errorMessage: data.message });
        }
      })
      .catch((error) => {
        console.error(error);
        setMessage({ errorMessage: "It didn't work as expected!" });
      });
  };
  return (
    <div className="">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
        <div className="px-6 py-6 bg-indigo-700 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
          <div className="xl:w-0 xl:flex-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Stay in the loop
            </h2>
            <p className="max-w-3xl mt-3 text-lg text-indigo-200 leading-6">
              Sign up for our newsletter to stay up to date.
            </p>
          </div>
          <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
            {!successMessage
            && (
            <form className="items-start sm:flex" onSubmit={handleSubscriptionSubmit}>
              <div>
                <label htmlFor="emailAddress" className="sr-only">Email address</label>
                <input id="emailAddress" name="emailAddress" type="email" autoComplete="email" required onChange={handleEmailChange} className="w-full px-5 py-3 placeholder-gray-500 border-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md" placeholder="Enter your email" />
                <span className="block mt-2 text-sm italic text-red-200">{errorMessage}</span>
              </div>
              <button type="submit" className="flex items-center justify-center w-full px-5 py-3 mt-3 text-base font-medium text-white bg-indigo-500 border border-transparent shadow rounded-md hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0">
                Notify me
              </button>
            </form>
            )}
            {successMessage
                && <span className="text-lg text-white md:text-2xl">{successMessage}</span>}
            <p className="mt-3 text-sm text-indigo-200">
              I won't send you spam. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
