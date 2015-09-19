# NastyHosts Log Plugin
Log requests to [NastyHosts](https://github.com/kacperzuk/nastyhosts) for further analysis.

### How to use

Run this in your NastyHosts installation

```bash
$ npm install nastyhosts-log-plugin
```

and add `"log"` to plugins in your NastyHosts `config.json`:

```json
{
  "plugins": [
    "log",
    "..."
  ]
}
```
