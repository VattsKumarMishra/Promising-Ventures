const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001/api";

export type ProjectStatus = "ongoing" | "completed";

export type Project = {
  _id: string;
  title: string;
  location: string;
  year?: number;
  status: ProjectStatus;
  summary: string;
  tags: string[];
  coverImageUrl?: string;
  galleryImageUrls?: string[];
  progressPercent?: number;
  startDate?: string;
  expectedCompletion?: string;
  teamSize?: number;
  metrics?: {
    areaSqFt?: number;
    valueCrInr?: number;
    durationMonths?: number;
  };
};

export async function fetchProjects(status?: ProjectStatus): Promise<Project[]> {
  const url = new URL(`${API_URL}/projects`);
  if (status) url.searchParams.set("status", status);

  const res = await fetch(url.toString());
  const data = await res.json();
  if (!res.ok || !data.success) throw new Error(data?.error ?? "Failed to fetch projects");
  return data.projects as Project[];
}

export type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType?: string;
  subject?: string;
  message: string;
  sourcePage?: string;
};

export async function submitContact(payload: ContactPayload) {
  const res = await fetch(`${API_URL}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  if (!res.ok || !data.success) throw new Error("Failed to submit contact");
  return data as { success: true; id: string };
}
