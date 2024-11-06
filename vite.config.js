import { resolve } from "path";
import { Input } from "postcss";
import { build, defineConfig, rollupVersion } from "vite";

export default defineConfig ({
    build: {
        rollupoption: {
            Input: {
                main: resolve(__dirname, "index.html"),
                main: resolve(__dirname, "news.html"),
            }
        }
    }
})