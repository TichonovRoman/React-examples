module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.tsx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  }
}

// "../src/**/*.stories.@(js|jsx|ts|tsx)"