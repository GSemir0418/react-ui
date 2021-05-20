//可以批量导入icons
let importAll = (requireContext) => requireContext.keys().forEach(requireContext)
try {
  importAll(require.context('./icons/', true, /\.svg$/))
} catch (error) {
  console.log(error);
}