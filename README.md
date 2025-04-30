# Reveal in File Manager

![VS Code Version](https://img.shields.io/badge/VS%20Code-%3E%3D1.99.0-blue)
![Platforms](https://img.shields.io/badge/platform-macOS%20|%20Windows%20|%20Linux-lightgrey)

Open the current file's folder in your system file manager with one click.

## Features

- One-click access to file locations

- Works across:
  - **macOS** (Finder)
  - **Windows** (File Explorer)
  - **Linux** (Default file manager)
- Multiple access methods:
  
  Toolbar icon


    ![Toolbar icon](https://github.com/tk-425/Reveal-in-Finder-VSCode-Extension/blob/main/images/button.png)

  Command palette

  
    ![Command palette](https://github.com/tk-425/Reveal-in-Finder-VSCode-Extension/blob/main/images/command.png)

## Installation

#### Marketplace Installation

1. Install from [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=wtk49.reveal-in-finder)

#### Manual Installation from Source

1. Clone the repository:
   ```bash
   git clone https://github.com/wtk49/reveal-in-finder.git
   cd reveal-in-finder
   ```
2. Build the extension package:
   ```bash
   npm install
   npm run package
   ```
3. Install in VS Code:
   - Open VS Code
   - Go to Extensions (Ctrl+Shift+X/Cmd+Shift+X)
   - Click the ⋯ menu → "Install from VSIX"
   - Select the generated .vsix file from the project root

## Usage

Click the folder icon in the editor toolbar or:

- **Command Palette** (`Ctrl+Shift+P`) → "RIF: Open Current File Path"

## For Linux Users

Ensure `xdg-utils` is installed:

```bash
sudo apt install xdg-utils  # Debian/Ubuntu
sudo dnf install xdg-utils  # Fedora
```
