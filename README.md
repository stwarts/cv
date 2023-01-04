Have a look at: https://stwarts.github.io/cv  :)

# Getting started

```bash
bundle install

yarn install

bundle exec guard

livereload 'index.html'
```

## Libraries in used

1. Ruby gems

    + slim: for partialize sections

    + sass

2. JS libraries

    + npm/npx

    + tailwindcss

    + chromehtml2pdf: convert to PDF format

    + grunt and grunt extensions: *concat*, *uncss*, *cssmin*, and *processhtml*

## Usage

1. Compiling css

    `grunt compilecss`

2. Compiling tailwind
    `npx tailwind build style/tailwind.scss -o style/compiled_tailwind.css`

2. Compiling html

    `grunt compilehtml`

2. Converting PDF format
    + Install: `npm i chromehtml2pdf`

    + `grunt generatepdf`

    + or with custom params `chromehtml2pdf --out=<filename>.pdf --format=A4 --printBackground=true file:///path/to/input/file.html`
