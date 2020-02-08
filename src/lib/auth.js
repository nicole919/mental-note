export function isLoggedIn() {
  return !!localStorage.getItem("token");
}

export function logout() {
  return localStorage.removeItem("token");
}

export function getAuthToken() {
  return localStorage.getItem("token");
}

function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function(c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

export function getUserId() {
  return parseJwt(getAuthToken());
}
