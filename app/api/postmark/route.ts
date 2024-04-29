import { postmarkClient } from "@/util/postmark";

export async function POST(request: Request) {
  const res = await request.json();
  const { subject, content } = res;
  let result;
  try {
    result = await postmarkClient.sendEmail({
      From: "support@chengpeng.me",
      To: "support@chengpeng.me",
      Subject: subject,
      HtmlBody: content,
    });
    return Response.json({ res });
  } catch (error) {
    return Response.error();
  }
}
