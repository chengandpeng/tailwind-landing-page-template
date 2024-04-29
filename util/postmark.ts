const postmark = require("postmark");
export const postmarkClient = new postmark.ServerClient(
  process.env.NEXT_PUBLIC_POSTMARK_SERVER_TOKEN
);
