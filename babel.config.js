module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    ['@babel/preset-react', {runtime: 'automatic'}],
    ['@babel/preset-typescript', {optimizeConstEnums: true}]
  ],
  plugins: [
    function () {
      return {
        name: 'transform-vite-meta-env',
        visitor: {
          MemberExpression(path) {
            if (
              path.node.object.type === 'MetaProperty' &&
              path.node.object.meta.name === 'import' &&
              path.node.object.property.name === 'meta'
            ) {
              path.replaceWithSourceString('process.env')
            }
          }
        }
      }
    }
  ]
}
