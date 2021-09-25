require('esbuild').buildSync({
  entryPoints: ['filter.worker.js'],
	format: 'cjs',
  bundle: true,
  minify: false,
  sourcemap: false,
  outfile: 'dist/esbuild-filter.worker.js',
})

