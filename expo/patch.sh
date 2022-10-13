
# This fixes trace-mapping to correctly read our source maps at index.js.map
ed -s node_modules/@jridgewell/trace-mapping/dist/trace-mapping.umd.js <<EOF
355c
let parsed = (isString ? JSON.parse(map) : map);
parsed = parsed.sources ? parsed : parsed.sections[0].map;
.
wq
EOF

