# Zoram

A minimalist plugin framework for modular applications.

Follow the advancement on the [project page](https://github.com/users/Ragnar-Oock/projects/1)

## The repo
The packages of this repo are split as follows :
- [`packages`](https://github.com/Ragnar-Oock/zoram/tree/main/packages) contains
  the libraries you will be able to use
  - [`@zoram/core`](https://github.com/Ragnar-Oock/zoram/tree/main/packages/core) 
  the core of the framework
  - `@zoram/panoramique` a Vue 3 and Pinia integration (coming soon)
- [`apps`](https://github.com/Ragnar-Oock/zoram/tree/main/apps)
  - `docs` documentations for the framework (coming soon)
- [`config`](https://github.com/Ragnar-Oock/zoram/tree/main/config) contains the
  configurations for the tools used across multiple packages
  - `oxlint`
  - `typescript`

## The goal

Imagine you have a web application that is both a small standalone thing and a 
cog in one or more much bigger applications, or maybe you want to allow your 
clients / users to embed your application in their website.

In all of those situations you might be tempted to simply provide a one size 
fits all distributable where you enable or disable certain features with flags 
in a config object. But what if you could make it so the end users don't need to
load the code of the features you want disabled ? Or what if you wanted to split
your application into smaller chunks loaded as needed to avoid a long initial 
load ?

Zoram makes all of that trivial and provides you with an intuitive and flexible
way of splitting up your application. And thanks to its plugin based approach
you get separation og concern for free.

## The Roadmap

1. get a first version of `@zoram/core` working
2. create an interactive and easy to follow documentation
3. finalize `@zoram/panoramique` to integrate with Vue

Once that is done the plan is to make it easy to work with in a monorepo setup :
- Nx and Turbo templates
- Eslint plugin to catch incorrect usage (it's likely to be very small as there
isn't much you can do wrong with the present APIs) and an OXlint plugin might come
at a later date
- Svelte integration
- React integration (unlikely)
- More helper plugins might drop to fill in the gaps

## What Zoram isn't

Zoram is not a Nuxt or Nest replacement. While there is nothing preventing a 
Zoram based application from running server side there is no plans for a "full 
stack" suite of tools like those Meta-Framework are providing. This doesn't mean
that there will never be any client-server facilitators just that they aren't 
on the current roadmap.

## Contribution

This project is too early in its development to accept outside contribution but
that will come in the not so distant future. In the meantime feel free to open 
an issue if you have any suggestions.