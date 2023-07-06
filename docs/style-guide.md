# 👁️ Style Guide

For this application I use a combination of [BEM](https://css-tricks.com/bem-101/) and utilities classes. For reference I was using this [Sass Guidelines](https://sass-guidelin.es/).

## Architecture

The architecture consist of :

- `sass/`
  - `abstract/`
    - scss mixins
    - variables
  - `base/`
    - reset css
    - typography
  - `components/`
    - components
    - \_button.scss
    - \_modal.scss
  - `layouts/`
    - grid
    - nav
    - footer
  - `pages/`
    - \_home.scss
    - \_checkout.scss
  - `utilities/`
    - \_flow.scss
    - sr-only.scss
