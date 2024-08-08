import autoprefixer from "autoprefixer";
import postcss from "postcss";
import tailwindcss from "tailwindcss";

async function toCss(className) {
  return await postcss([
    tailwindcss({
      content: [
        {
          raw: className,
          extension: "html",
        },
      ],
    }),
    autoprefixer,
  ])
    .process("@tailwind utilities", { from: undefined })
    .then((result) => {
      return result.css;
    });
}

let result = await toCss("underline");

console.log(result);
