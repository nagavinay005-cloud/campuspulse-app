import { r as __exportAll$1 } from "../_runtime.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/apiClient-CVoaAdKq.js
var apiClient_CVoaAdKq_exports = /* @__PURE__ */ __exportAll$1({
	i: () => __exportAll,
	n: () => apiClient_exports,
	r: () => apiRequest,
	t: () => API_BASE_URL
});
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var apiClient_exports = /* @__PURE__ */ __exportAll({
	API_BASE_URL: () => API_BASE_URL,
	apiRequest: () => apiRequest,
	getAuthToken: () => getAuthToken
});
var API_BASE_URL = "http://localhost:8080/backend/api/v1";
function getAuthToken() {
	if (typeof window === "undefined" || typeof localStorage === "undefined") return null;
	return localStorage.getItem("campuspulse_jwt_token");
}
async function apiRequest(endpoint, options = {}) {
	const token = getAuthToken();
	const headers = {
		"Content-Type": "application/json",
		...options.headers
	};
	if (token) headers["Authorization"] = `Bearer ${token}`;
	const response = await fetch(`${API_BASE_URL}${endpoint}`, {
		...options,
		headers
	});
	const data = await response.json();
	if (!response.ok) throw new Error(data.message || "An error occurred during the API request.");
	return data;
}
//#endregion
export { apiRequest as i, __exportAll as n, apiClient_CVoaAdKq_exports as r, API_BASE_URL as t };
