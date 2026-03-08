import type { ExtensionContext } from 'vscode'

import { commands, workspace } from 'vscode'
import { LanguageClient, State, TransportKind } from 'vscode-languageclient/node.js'

let client: LanguageClient

/**
 * Restart the language server
 */
async function restart() {
  if (!client) {
    return
  }

  if (client.state === State.Starting) {
    return
  }

  await client.restart()
}

/**
 * This function when the extension is activated.
 *
 * @param context
 *   The Visual Studio Code extension context.
 */
export async function activate(context: ExtensionContext) {
  client = new LanguageClient(
    'mdxlint',
    {
      module: context.asAbsolutePath('out/mdxlint-language-server.js'),
      transport: TransportKind.ipc
    },
    {
      documentSelector: [{ scheme: 'file', language: 'mdx' }],
      synchronize: {
        fileEvents: [
          workspace.createFileSystemWatcher(
            '**/.mdxlint{ignore,rc,rc.cjs,rc.js,rc.json,rc.mjs,rc.yaml,rc.yml}'
          ),
          workspace.createFileSystemWatcher('**/package.json')
        ]
      }
    }
  )

  context.subscriptions.push(commands.registerCommand('mdxlint.restart', restart))

  await client.start()
}

/**
 * This function when the extension is deactivated.
 */
export async function deactivate() {
  await client.stop()
}
