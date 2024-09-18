function generateUniqueId() {
  return (
    "_" +
    Math.random().toString(36).substring(2) +
    new Date().getTime().toString(36)
  );
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/`;
}

let uniqueId = getCookie("uniqueVisitorId");

if (!uniqueId) {
  uniqueId = generateUniqueId();
  setCookie("uniqueVisitorId", uniqueId, 365);

  fetch("/api/tract-visitor", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ uniqueId: uniqueId }),
  });
}
