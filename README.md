
# Running

In one terminal:
```bash
$ bb shadow-dev
```

In another terminal:
```bash
$ bb expo-start
```

Then in the expo terminal, type "i" to launch it in the simulator.

Note: disable fast-refresh in the expo dev menu in the app.

# See also

* https://github.com/lilactown/helix/blob/master/docs/react-native.md


----

## How the expo dir was created:

```bash
$ npx create-expo-app my-app
$ mv my-app expo
$ rm expo/App.js
```

Then we edited `expo/app.json` to set `{"entryPoint": "./target/index.js"}`.
