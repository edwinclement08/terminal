# edwinclement08 | Terminal

A terminal-style portfolio

![screenshot](/docs/screenshot.png)

## Why?

While browsing for ideas on building a portfolio, this [one](https://github.com/m4tt72/terminal) by @m4tt72 impressed me.
As this was MIT licensed, I decided to take this, and build this concept up.
As @m4tt72, I love the simplicity and speed of CLI interfaces. On the other hand, I do love the QOL improvements that GUI brings to the table.
This website will be an attempt to meld both to create a work of art.

## Quick Start

### Using docker (recommended)

TODO

```bash
docker run -d --name terminal -p 3000:3000 edwinclement08/terminal
```

If you want to run with custom configuration, make sure you have a copy of `config.json` then mount in the container:

```bash
docker run -d \
  --name terminal \
  -p 3000:3000 \
  -v `pwd`/config.json:/data/config.json \
  edwinclement08/terminal
```

### Using npm/yarn

1. Install dependencies:

```bash
yarn install
```

2. Build the project:

```bash
yarn build
```

3. Run the server:

```bash
yarn start
```

## Configuration

Here's a sample of the `config.json` file:

```json
{
  "bioUrl": "https://blog.edwinclement08.com/#TODO",
  "social": {
    "instagram": "edwinclement08",
    "github": "edwinclement08",
    "linkedin": "edwinclement08"
  },
  "theme": "gruvboxdark",
  "border": true
}

```

## Themes

![themes](/docs/screenshot.gif)

[Here's](/docs/themes) a list of available themes.


## Contributing

Please feel free to pull requests or log issues.

Thanks!
