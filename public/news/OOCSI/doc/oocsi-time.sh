#!/bin/bash

start_ms=$(ruby -e 'puts (Time.now.to_f * 1000).to_i')
for i in {1..50}; do curl -X POST $1 -d "sender=sark_client_handle&height=$i"; echo "$i"; done
end_ms=$(ruby -e 'puts (Time.now.to_f * 1000).to_i')
elapsed_ms=$((end_ms - start_ms))
echo "$elapsed_ms ms Elapsed!"