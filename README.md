This repository is for the purpose of building a résume in combination of multiple libraries on my own

Have a look at: https://stwart-nguyen.github.io/cv  :)

## Libraries in used
1. Ruby gems

    + slim: for partialize sections

    + sass

2. JS libraries

    + npm/npx

    + tailwindcss

    + chromehtml2pdf: convert to PDF format

## Usage
1. Compiling

    + html
      ```
      slimrb <in_path.html.slim> <out_path.html> [--pretty]

      # To render a specific partial in a slim file
      == Slim::Template.new(<partial.html.slim>).render
      ```
    + css
    `sass <input> <output>`

    + tailwindcss
    `npx tailwindcss build <input> -o <output>`

2. Converting PDF format
    + Install: `npm i chromehtml2pdf`

    + `chromehtml2pdf --out=<filename>.pdf --format=A4 --printBackground=true file:///path/to/input/file.html`
