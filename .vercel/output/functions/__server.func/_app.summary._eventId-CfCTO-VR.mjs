import { m as createFileRoute, p as lazyRouteComponent } from "./_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_app.summary._eventId-CfCTO-VR.js
var $$splitNotFoundComponentImporter = () => import("./_app.summary._eventId-CrVc_1yR.mjs");
var $$splitComponentImporter = () => import("./_app.summary._eventId-BcKjw8pW.mjs");
var Route = createFileRoute("/_app/summary/$eventId")({
	head: () => ({ meta: [
		{ title: "Event Summary — CampusPulse" },
		{
			name: "description",
			content: "Preserved event summary with attendance, registration statistics, certificates, feedback and gallery."
		},
		{
			property: "og:title",
			content: "Event Summary — CampusPulse"
		},
		{
			property: "og:description",
			content: "The full record of a completed and archived campus event."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
//#endregion
export { Route as t };
