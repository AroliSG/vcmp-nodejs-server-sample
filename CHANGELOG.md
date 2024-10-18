# Changelog

## Major Update 🚀

### New Features and Enhancements:

### TypeScript Integration:
- **Added TypeScript typings** (`server.d.ts` and `vcmp.d.ts`):
  - Improved code safety and autocompletion with VSCode and other IDEs.
  - Makes development easier by catching errors early.

### New Commands Framework:
- **Modular Commands Structure**:
  - Rebuilt the command logic to be more dynamic and modular.
  - **Command files split out into dedicated modules** for better maintainability (`commands.js`, `dcommander.js`).
  - Added **new player commands** for enhanced interaction, such as handling admin and player command separation.

- **Dynamic Command Loader**:
  - Automatically detects new command files without server restart.
  - Built-in logic for registering and executing commands on-the-fly.

### VCMP Events:
- **Extended Event System**:
  - New event handling, including player connection management with:
    - `onPlayerJoin`, `onClientScriptData`, `onIncomingConnection`.
  - Event improvements ensure smoother gameplay experiences and easier debugging.

### Refactored Codebase:
- **Separation of Concerns**:
  - Refactored core logic into distinct files, simplifying updates and code changes.
  - Improved code readability and separation between player-related logic and server management.

### Discord Integration:
- **Improved Discord Bot Logic**:
  - Optimized message handling and event broadcasting through Discord channels.
  - Simplified initialization of the Discord bot with better modularity.

### Performance Boost:
- **Optimized Event Handling**:
  - Removed unused or commented-out heavy CPU events (`onPlayerMove`, etc.), which enhances overall server performance.

### Bug Fixes:
- **Player Commands**: Resolved issues where player commands would incorrectly trigger errors during certain events.
- **Authentication Flow**: Fixed inconsistencies in login/signup handling for new players.
- **Global Variables**: Reduced global variable conflicts, improving stability across the system.

---

This release significantly enhances the overall server experience with better command handling, event management, and performance optimization. 💥
