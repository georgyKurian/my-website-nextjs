// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mailchimp from '@mailchimp/mailchimp_marketing';
import Bugsnag from '@bugsnag/js';

Bugsnag.start({ apiKey: '9866db59fe226e71d6cd5baabc529679' });

function sendResponse(res, statusCode, isSuccess, message) {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({
    isSuccess,
    message,
  }));
}

async function callPing(emailAddress, res) {
  const listId = process.env.MAIL_CHIMP_LIST_ID;

  mailchimp.lists.addListMember(listId, {
    email_address: emailAddress,
    status: 'subscribed',
  }).then((response) => {
    sendResponse(res, 200, !!response?.id, null);
  }).catch((e) => {
    console.error(e?.response?.body?.detail);
    Bugsnag.notify(e);

    sendResponse(
      res,
      e?.response?.body?.status || 400,
      false,
      e?.response?.body?.detail,
    );
  });
}

export default async ({ body }, res) => {
  mailchimp.setConfig({
    apiKey: process.env.MAIL_CHIMP_API_KEY,
    server: process.env.MAIL_CHIMP_REGION_CODE,
  });

  const subscribingEmail = body?.emailAddress;

  if (subscribingEmail) callPing(subscribingEmail, res);
  else {
    sendResponse(
      res,
      400,
      false,
      'Invalid email address',
    );
  }
};
