const get = async (url: string) => {
  const response = await fetch(url, {
    method: "GET",
  });

  return await response.json();
};

const post = async <T>(url: string, body: T) => {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await response.json();
};

export const http = { get, post };
