import * as vscode from 'vscode';
import * as childProcess from 'child_process';
import * as path from 'path';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    'reveal-in-finder.getFilePath',
    async () => {
      const activeEditor = vscode.window.activeTextEditor;

      if (!activeEditor) {
        vscode.window.showErrorMessage('No active text editor found!');
        return;
      }

      // Full system file path
      const filePath = activeEditor.document.uri.fsPath;

      // Open the file's directory in Finder
      childProcess.exec(`open -R "${filePath}"`, (error) => {
        if (error) {
          vscode.window.showErrorMessage(
            `Failed to open Finder: ${error.message}`
          );
        }
      });
    }
  );

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
