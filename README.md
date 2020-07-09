# Installation

Go to `wpcore\wp-content\plugins\`

Run

```bash
git clone https://github.com/Soare-Robert-Daniel/test-gutenberg-editor.git
``` 

# Development

In `wpcore\wp-content\plugins\`, run:

```bash 
cd test-gutenberg-editor
npm install
npm run start
```
Make your changes


# Running

Go to `http://localhost:9999/wp-admin/plugins.php` and activate the plugin.

# Issues

Save Method do not work.

The posts with the plugin inserted will throw a react error. (https://reactjs.org/warnings/invalid-hook-call-warning.html) 