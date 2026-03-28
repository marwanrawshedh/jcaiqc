export const storeToken = (token: string, role: string) => {
  sessionStorage.setItem("token", token);
  sessionStorage.setItem("role", role);
};

export const getToken = () => sessionStorage.getItem("token");

export const clearToken = () => sessionStorage.removeItem("token");
export const getRole = () => sessionStorage.getItem("role");

export const clearRole = () => sessionStorage.removeItem("role");
