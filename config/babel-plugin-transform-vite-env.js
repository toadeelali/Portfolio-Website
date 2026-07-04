module.exports = function () {
  return {
    name: 'transform-vite-import-meta-env',
    visitor: {
      MemberExpression(path) {
        if (path.node.object.type === 'MetaProperty' && path.node.object.meta.name === 'import' && path.node.object.property.name === 'meta') {
          path.replaceWithSourceString(`process.env`)
        }
      }
    }
  }
}
