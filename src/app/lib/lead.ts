export type LeadPayload = {
  name: string;
  phone: string;
  company?: string;
  source?: string;
};

export async function submitLead(payload: LeadPayload) {
  const response = await fetch("/api/lead", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    let message = "Не удалось отправить заявку";

    try {
      const data = (await response.json()) as { error?: string };
      if (data?.error) {
        message = data.error;
      }
    } catch {
      // Ignore JSON parse failures and keep the generic message.
    }

    throw new Error(message);
  }

  return response.json();
}
