# Repositories

There are multiple alternatives to develop and distribute private npm modules.

### private repositories

[Sinopia](https://www.npmjs.com/package/sinopia) is probably the most integrated example of a local repository. Is also really simple to get it running:

`npm install -g sinopia`

Once you have it installed, just:
`sinopia`

And you get your local repo running on port *4873* (default). To check it out open another terminal (don't close this one, it will stop your `sinopia`!) and try to install any module. Check log for more info.

It also works as a proxy to the public registry, caching and even overriding packages from the outside. 

There is also an artifactory if you prefer https://www.jfrog.com/confluence/display/RTF/Npm+Repositories

### create your own

Of course you can complicate everything as much as you want :P https://docs.npmjs.com/misc/registry#can-i-run-my-own-private-registry

### npm enterprise

Or use the *official* payed alternative https://docs.npmjs.com/enterprise/index  of course with lots of *extras*, like *scoped packages*.

### create my own module

To publish a module you just need a folder with a valid `package.json` inside, preferably filled with some nice well tested code. 

So get into your folder
`cd my-awesome-package/`

And register
`npm adduser --registry http://localhost:4873/`

Now you are ready to publish
`npm publish`

## Linking

There is also the possibility to develop a local package and share it locally ***without a local repository*** This could be useful for local development previous to publishing the module. Just:
`npm link`

And you will have a symlink to your package. Handle with care and please read the documentation https://docs.npmjs.com/misc/developers#link-packages
