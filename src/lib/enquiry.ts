/**
 * Enquiry-form delivery. The site is static, so submissions go to Web3Forms, which
 * emails them to the inbox the access key was created for. The key is public by
 * design: it can only send to that inbox. To change the inbox, create a new key at
 * https://web3forms.com and replace ACCESS_KEY.
 */
export const ENDPOINT = "https://api.web3forms.com/submit";
export const ACCESS_KEY = "40eb55ae-7bb0-4d50-8f2a-7b46146c2355";

export type Enquiry = {
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
};

/** Posts the enquiry. Resolves on success, throws on failure. */
export async function send(d: Enquiry): Promise<void> {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      ...d,
      access_key: ACCESS_KEY,
      // "[Portfolio]" prefix makes these easy to filter in the inbox.
      subject: `[Portfolio] ${d.topic || "Enquiry"} from ${d.name}`,
      from_name: "pkaranje.github.io",
      // Web3Forms sets Reply-To from this, so replying answers the visitor directly.
      replyto: d.email,
    }),
  });
  const result: { success?: boolean } = await res.json().catch(() => ({}));
  if (!res.ok || !result.success) throw new Error(`Request failed with status ${res.status}`);
}
