const { build } = require('gluegun')

/**
 * Create the cli and kick it off
 */
async function run (argv) {
  // create a CLI runtime
  const cli = build()
    .brand('receipt-cli')
    .src(__dirname)
    .plugins('./node_modules', { matching: 'receipt-cli-*', hidden: true })
    .help()
    .version()
    .create()
  const toolbox = await cli.run(argv)

  // send it back (for testing, mostly)
  return toolbox
}

module.exports = { run }
