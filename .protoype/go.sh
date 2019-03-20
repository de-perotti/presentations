# Typescript boilerplate
npx create-react-app storybook_regression --typescript
cd storybook_regression
echo "y" | yarn eject
yarn add -D @babel/plugin-transform-react-jsx-self
npx -p @storybook/cli sb init --type react
yarn add -D @types/storybook__react node-sass

# Typescript adjustments on storybook
cp ../webpack.config.js .storybook/
mv .storybook/addons.js .storybook/addons.ts
mv .storybook/config.js .storybook/config.ts
sed -i s/\.js/\.tsx/g .storybook/config.ts
rm -f stories/index.stories.js
cp ../index.stories.tsx stories/

# Actual go
yarn storybook
