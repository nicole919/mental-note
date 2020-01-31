export function isLoggedIn() {
  return !!localStorage.getItem("token");
}

export function logout() {
  return localStorage.removeItem("token");
}

export function getAuthToken() {
  return localStorage.getItem("token");
}
