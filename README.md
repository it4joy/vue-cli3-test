# vue-cli3-test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

---

## Folders structure definition

- .idea (PhpStorm service folder);
- dist (assembled files ready to deployment);
- node_modules
- public (standard Vue CLI 3 Project dir. for static);
- src (app code)
  - assets
    - graphics (proposal ...);
    - scss (Bootstrap's replacements and custom grouped style files);
  - components (reused atomic UI blocks, e.g. 'Footer', 'Header', 'Search', perhaps with its logic) - look note #1;
  - pages (e.g. 'RegForm': pages may include dif. UI components);
  - templates (for '.twig' templates);
- tmp (dev. notes & questions, all are ignored);

##### Notes

#1 - use standard Bootstrap-vue UI components and add specific styles (.scss) directly in Vue file; if there are no suitable components in the Bootstrap-vue, create standalone components in: 'src/components';
