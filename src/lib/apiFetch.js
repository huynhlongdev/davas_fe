const API = process.env.NEXT_PUBLIC_API_URL;

export async function apiFetch(path, options = {}) {
  try {
    // Merge headers
    const headers = {
      "Content-Type": "application/json",
      ...options.headers,
    };

    const config = {
      method: options.method || "GET",
      headers,
      cache: options.cache || "no-store",
      ...options,
    };

    // Chỉ add body nếu có
    if (options.body) {
      config.body = options.body;
    }

    const res = await fetch(`${API}${path}`, config);

    // Xử lý 401 Unauthorized
    if (res.status === 401) {
      if (typeof window !== "undefined") {
      }
      return null;
    }

    if (!res.ok) {
      console.error("API error:", res.status, path);
      return null;
    }

    const json = await res.json();

    return json?.data ?? json ?? null;
  } catch (error) {
    console.log("Fetch failed:", path, error.message);
    return null;
  }
}
