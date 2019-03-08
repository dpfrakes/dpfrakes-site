+++
title = 'Getting Digitally Organized'
date = 2019-03-01T02:44:54-05:00
draft = true
tags = ["organization"]
description = "sjk"

# For twitter cards, see https://github.com/mtn/cocoa-eh-hugo-theme/wiki/Twitter-cards
meta_img = "/images/image.jpg"

# For hacker news and lobsters builtin links, see github.com/mtn/cocoa-eh-hugo-theme/wiki/Social-Links
hacker_news_id = ""
lobsters_id = ""
+++


## Storage Options

* Cloud (Amazon Cloud, Google Drive, OneDrive)
* External HD (SSD, HDD)

Setting up External HD

* Formatting options (FAT32, exFAT)
    * [CAUTION] 
* Hardware considerations (cables, adapters)
* Unit allocation size

Moving Files

* Root directories (Images, Audio, Video, Documents)
* Device directories ("\_DeviceName")
* TODO ("\_TODO" to be organized)

Organizing Files

* Consolidating (de-dupe, diffs, merging)
* Compressing (ffmpeg, zip, file size vs. size on disk [unit allocation size])
* Converting (AVI -> MOV, ffmpeg)
    * AVI -> MOV = 75% reduction
    * Downside: losing metadata

Developer Notes

* Unnecessary directories (node_modules, venv, *.pyc, .DS_Store, ._*, .git)
* Helpful CLI commands

```bash
# Find and delete all *.pyc files recursively
find . -name "*.pyc" -delete

# Output the number of *.pyc files in directory
find . -name "*.pyc" | wc -l

# Zip a directory
zip -r mydir.zip mydir
```

```
# path where I found an image from 2016 I was looking for...
_Phone Dumps/Phone Dump (1)/phone/DCIM/phone2
```
