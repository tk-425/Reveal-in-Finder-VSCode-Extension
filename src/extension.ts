import * as vscode from 'vscode';
import * as childProcess from 'child_process';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    'reveal-in-finder.openFilePath',
    async (uri?: vscode.Uri) => {
      try {
        // Get the file path
        const filePath = await getTargetFilePath(uri);

        if (!filePath) {
          vscode.window.showErrorMessage('No file selected!');
          return;
        }

        // Extract the directory path
        const dirPath = path.dirname(filePath);

        // Open the directory in Finder
        childProcess.execSync(`open "${dirPath}"`);
      } catch (error) {
        vscode.window.showErrorMessage(
          `Failed to open Finder: ${
            error instanceof Error ? error.message : String(error)
          }`
        );
      }
    }
  );

  context.subscriptions.push(disposable);
}

// Get the file path from right-click, active editor, or picker
async function getTargetFilePath(
  uri?: vscode.Uri
): Promise<string | undefined> {
  // Case 1: File selected from Explorer right-click
  if (uri) {
    return uri.fsPath;
  }

  // Case 2: Get highlighted file from Explorer (even if not opened in editor)
  const explorerSelected = await getExplorerSelection();
  if (explorerSelected) {
    return explorerSelected.fsPath;
  }

  // Case 3: Fallback - show file picker
  const selectedFiles = await vscode.window.showOpenDialog({
    canSelectFiles: true,
    canSelectFolders: false,
    canSelectMany: false,
  });

  return selectedFiles?.[0]?.fsPath;
}

async function getExplorerSelection(): Promise<vscode.Uri | undefined> {
  // This gets the currently highlighted file in Explorer, even if not opened
  await vscode.commands.executeCommand('copyFilePath');
  const clipboard = await vscode.env.clipboard.readText();
  try {
    return vscode.Uri.file(clipboard);
  } catch {
    return undefined;
  }
}

export function deactivate() {}
