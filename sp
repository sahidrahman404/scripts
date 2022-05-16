#!/bin/bash
# convert $1 -sampling-factor 4:2:0 -strip -quality 10 -interlace JPEG -colorspace sRGB $2
for i in *.png; do convert "$i" -sampling-factor 4:2:0 -strip -quality 10 -interlace JPEG -colorspace sRGB "${i%}.jpg"; done
