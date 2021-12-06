# PC-temlemt-v3

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

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### vs code 配置

```
{
  "editor.renderWhitespace": "all",
  "editor.cursorBlinking": "smooth",
  "editor.detectIndentation": false,
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "editor.minimap.enabled": false,
  "editor.formatOnSave": true,
  "editor.formatOnType": true,
  "editor.formatOnPaste": true,
  "emmet.includeLanguages": {
    "wxml": "html"
  },
  "emmet.syntaxProfiles": {
    "javascript": "jsx",
    "vue": "html",
    "vue-html": "html"
  },
  "eslint.options": {
    //"plugins": ["html"],
    "extensions": [
      ".js",
      ".vue"
    ]
  },
  "files.associations": {
    "*.vue": "vue",
    "*.ftl": "html",
    "*.js": "javascriptreact",
    "*.cjson": "jsonc",
    "*.wxml": "html",
    "*.wxss": "css",
    "*.wxs": "javascript"
  },
  "files.eol": "\n",
  "files.insertFinalNewline": true,
  "files.trimTrailingWhitespace": true,
  "html.format.wrapAttributes": "force-expand-multiline",
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
  "javascript.preferences.quoteStyle": "single",
  "search.showLineNumbers": true,
  "search.exclude": {
    "**/node_modules": true,
    "**/bower_components": true,
    "**/dist": true
  },
  "typescript.preferences.quoteStyle": "single",
  "typescript.check.npmIsInstalled": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "diffEditor.renderSideBySide": false,
  // "files.autoSave": "onFocusChange",
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "editor.fontLigatures": true,
  // -------------------/---------------上面公共配置   下面个性化配置--------------------------------------------------------------//
  "workbench.startupEditor": "newUntitledFile", // 是否显示 开始页面
  "eslint.alwaysShowStatus": true,
  "git.enableSmartCommit": true,
  "terminal.integrated.rendererType": "dom",
  "git.confirmSync": false,
  "gitlens.gitCommands.closeOnFocusOut": true,
  "editor.columnSelection": false,
  "eslint.format.enable": true,
  "[jsonc]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "[typescript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "files.exclude": {
    "**/.classpath": true,
    "**/.project": true,
    "**/.settings": true,
    "**/.factorypath": true
  },
  "editor.suggestSelection": "first",
  "explorer.confirmDelete": false,
  "gitlens.views.repositories.files.layout": "list",
  "git.autofetch": true,
  "gitlens.advanced.fileHistoryShowAllBranches": true,
  "javascript.updateImportsOnFileMove.enabled": "never",
  "vetur.format.defaultFormatter.html": "prettier",
  "editor.fontSize": 13.5,
  "editor.semanticTokenColorCustomizations": {},
  "explorer.confirmDragAndDrop": false,
  "vetur.format.defaultFormatterOptions": {
    "prettier": {
      "semi": false, // 不加分号
      "singleQuote": true, // 用单引号
      "trailingComma": "none" // 禁止随时添加逗号
    }
  },
  "settingsSync.ignoredExtensions": [],
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  "tabnine.experimentalAutoImports": true,
  "editor.quickSuggestions": {
    "strings": true
  },
  "terminal.integrated.tabs.enabled": true,
  "terminal.integrated.defaultProfile.osx": "zsh",
  "editor.linkedEditing": true,
  "workbench.iconTheme": "vscode-icons",
  "todo-tree.general.tags": [
    "BUG",
    "HACK",
    "FIXME",
    "TODO",
    "XXX",
    "[ ]",
    "[x]"
  ],
  "todo-tree.regex.regex": "(//|#|<!--|;|/\\*|^|^\\s*(-|\\d+.))\\s*($TAGS)",
  "http.proxyAuthorization": null,
  "window.zoomLevel": 1,
}

```
