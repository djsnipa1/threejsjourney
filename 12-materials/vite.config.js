import { defineConfig } from "vite";

export default defineConfig(({ command, mode }) => {
  base: "./";
  if (command === "serve") {
    return {
      // dev specific config
    };
  } else {
    // command === 'build'
    return {
      // build specific config
    };
  }
});
