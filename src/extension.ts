import { ExtensionContext, workspace } from 'vscode'
import { LanguageClient, TransportKind } from 'vscode-languageclient/node.js'

let client: LanguageClient

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

  await client.start()
}

export async function deactivate() {
  await client.stop()
}
