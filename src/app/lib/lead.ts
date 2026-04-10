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
    throw new Error("Не удалось отправить заявку");
  }

  return response.json();
}
