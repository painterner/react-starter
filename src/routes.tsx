import App from "./App";
import Redirect from "./components/Redirect";
import { META } from "./config/index";

/**
 * Generate an object with all necessary fields to render a page.
 * @param {string} path - The page path
 * @param {string} title - THe page title (for SEO)
 * @param {Function} component - The component to be rendered. Containers can also be used
 * @param {string} description - The page description (for SEO) [OPTIONAL]
 * @param {string} keywords - The comma separated page keywords (for SEO) [OPTIONAL]
 * @returns {object}
 */
export const createPage = (
  path: any,
  title: any,
  component: any,
  description?: any,
  keywords?: any
) => ({
  path,
  title: `${title} | ""`,
  component,
  description: description || "",
  keywords: keywords || "",
});

export default [
  createPage("/", "hoem", App),
  createPage("/home", "home", Redirect),
];
