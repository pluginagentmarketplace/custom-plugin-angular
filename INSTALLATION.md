# 📦 Installation Guide

## Angular Development Assistant Plugin for Claude Code

This guide covers all installation methods for the Angular Development Assistant plugin.

---

## Prerequisites

- **Claude Code** installed and configured
- **Git** (for local development)
- **Node.js 18+** (optional, for running tests)
- **Angular CLI** (optional, recommended for Angular development)

---

## Installation Methods

### 🌟 Method 1: Marketplace Installation (Recommended)

The easiest way to install the plugin is through the Claude Code marketplace system.

#### Step 1: Add the Marketplace

```bash
/plugin marketplace add pluginagentmarketplace/custom-plugin-angular
```

This command:
- Fetches the marketplace.json from the repository
- Registers the Angular plugin marketplace
- Makes the `angular-dev` plugin available for installation

#### Step 2: Install the Plugin

```bash
/plugin install angular-dev@angular-dev
```

This command:
- Downloads the plugin from GitHub
- Loads all 8 agents and 8 skills
- Registers 4 helper commands (/learn, /explore, /assess, /projects)
- Makes the plugin immediately available

#### Step 3: Verify Installation

```bash
# List all installed plugins
/plugin list

# Explore available agents
/explore

# Check plugin version
/plugin info angular-dev
```

You should see:
```
✅ angular-dev@2.0.0 installed
✅ 8 agents available
✅ 8 skills loaded
✅ 4 commands registered
```

---

### 🔗 Method 2: Direct GitHub Installation

Install directly from the GitHub repository without using the marketplace.

```bash
# Add plugin directly from GitHub
/plugin add pluginagentmarketplace/custom-plugin-angular

# Or specify a version/branch
/plugin add pluginagentmarketplace/custom-plugin-angular@v2.0.0
```

This method:
- Clones the repository from GitHub
- Loads the plugin.json configuration
- Registers all agents, skills, and commands

---

### 💻 Method 3: Local Development Installation

For plugin development or contributing to the project.

#### Step 1: Clone the Repository

```bash
git clone https://github.com/pluginagentmarketplace/custom-plugin-angular.git
cd custom-plugin-angular
```

#### Step 2: Load in Claude Code

**Option A: Using Claude Code CLI**
```bash
claude-code --plugin-path ./custom-plugin-angular
```

**Option B: Using Configuration File**

Add to your Claude Code config:
```json
{
  "plugins": [
    {
      "path": "/path/to/custom-plugin-angular"
    }
  ]
}
```

**Option C: Interactive Loading**

In Claude Code:
```
/plugin load /path/to/custom-plugin-angular
```

---

## Testing the Installation

### Quick Test

```bash
# Should list all 8 agents
/explore

# Should show plugin details
/plugin info angular-dev
```

### Functional Test

Try these commands to verify each agent works:

```bash
# Test Modern Angular agent
"Show me how to implement Angular Signals in a new component"

# Test TypeScript agent
"Convert this JavaScript code to TypeScript with strict mode"

# Test Forms agent
"Create a reactive form with email validation"

# Test Routing agent
"Set up lazy loading for my admin module"

# Test State Management agent
"Initialize NgRx store for user management"
```

---

## Troubleshooting

### Plugin Not Found

If you get "Plugin not found" error:

```bash
# Refresh marketplace
/plugin marketplace refresh

# Try reinstalling
/plugin uninstall angular-dev
/plugin install angular-dev@angular-dev
```

### Agents Not Loading

If agents don't appear:

```bash
# Check plugin status
/plugin info angular-dev

# Reload the plugin
/plugin reload angular-dev

# Check Claude Code logs
cat ~/.claude-code/logs/plugins.log
```

### Version Conflicts

If you have version issues:

```bash
# List all installed versions
/plugin list --all

# Uninstall old version
/plugin uninstall angular-dev@1.0.0

# Install latest
/plugin install angular-dev@angular-dev
```

### Marketplace Sync Issues

If marketplace won't sync:

```bash
# Clear marketplace cache
/plugin marketplace clear

# Re-add marketplace
/plugin marketplace add pluginagentmarketplace/custom-plugin-angular

# Force sync
/plugin marketplace sync
```

---

## Updating the Plugin

### Update via Marketplace

```bash
# Check for updates
/plugin outdated

# Update to latest version
/plugin update angular-dev

# Update all plugins
/plugin update --all
```

### Update Local Installation

```bash
cd custom-plugin-angular
git pull origin main
/plugin reload angular-dev
```

---

## Uninstalling

### Remove Plugin

```bash
# Uninstall the plugin
/plugin uninstall angular-dev

# Remove marketplace
/plugin marketplace remove pluginagentmarketplace/custom-plugin-angular
```

### Clean Uninstall

```bash
# Remove all traces
/plugin uninstall angular-dev --purge

# Clear cache
/plugin cache clear
```

---

## Advanced Configuration

### Custom Plugin Path

Set a custom installation directory:

```bash
export CLAUDE_PLUGIN_PATH="$HOME/.claude-plugins"
/plugin install angular-dev@angular-dev
```

### Enable Debug Mode

For troubleshooting:

```bash
export CLAUDE_DEBUG=true
/plugin install angular-dev@angular-dev
```

### Selective Agent Loading

Load only specific agents:

```json
{
  "plugins": [
    {
      "name": "angular-dev",
      "agents": [
        "modern-angular",
        "typescript-implementation",
        "angular-core-builder"
      ]
    }
  ]
}
```

---

## Integration with Other Tools

### VS Code Integration

If using Claude Code in VS Code:

1. Install Claude Code extension
2. Open settings (Cmd/Ctrl + ,)
3. Search "Claude Code Plugins"
4. Add plugin path or marketplace

### Cursor Integration

```bash
# Cursor has built-in Claude Code support
# Install via marketplace as normal
/plugin marketplace add pluginagentmarketplace/custom-plugin-angular
/plugin install angular-dev@angular-dev
```

### Windsurf Integration

```bash
# Windsurf supports Claude Code plugins
# Use the same marketplace commands
/plugin marketplace add pluginagentmarketplace/custom-plugin-angular
```

---

## Support

### Getting Help

- 📖 [Documentation](https://github.com/pluginagentmarketplace/custom-plugin-angular)
- 🐛 [Report Issues](https://github.com/pluginagentmarketplace/custom-plugin-angular/issues)
- 💬 [Discussions](https://github.com/pluginagentmarketplace/custom-plugin-angular/discussions)
- ⭐ [Star the Project](https://github.com/pluginagentmarketplace/custom-plugin-angular)

### Common Questions

**Q: Can I use this with Angular 17?**
A: The plugin is optimized for Angular 18+ but works with Angular 17. Some modern features (like new control flow) require Angular 17+.

**Q: Do I need all 8 agents?**
A: No, you can configure which agents to load. However, all agents are recommended for full functionality.

**Q: Can I contribute to the plugin?**
A: Yes! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

**Q: Is this compatible with other Angular plugins?**
A: Yes, this plugin is designed to work alongside other development tools.

---

## Next Steps

After installation:

1. ✅ Run `/explore` to see all agents
2. ✅ Try `/learn` for guided learning paths
3. ✅ Check out the [README](README.md) for usage examples
4. ✅ Join our community discussions

---

**Built with ❤️ for the Angular community**

[🚀 Back to README](README.md) • [📖 Documentation](#) • [💬 Discussions](https://github.com/pluginagentmarketplace/custom-plugin-angular/discussions)
