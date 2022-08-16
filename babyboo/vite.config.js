import { defineConfig } from "vite";
import { ghPages } from "vite-plugin-gh-pages";

export default defineConfig({
    base: "https://threejsjourney-text-chad.vercel.app/",
    // plugins: [ghPages()],
},
  // ghPages({
  //   branch:  "gh-pages",
  //   repo: "https://github.com/djsnipa1/threejsjourney",
  //   user: {
  //     name: "Chad Boyce",
  //     email: "chadboyce@gmail.com"
  //   },
  // }),

)
