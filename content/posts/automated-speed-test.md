+++
title = 'Automated Speed Test'
date = 2016-07-07T00:00:00-05:00
draft = true
tags = ["projects", "raspberry pi"]
description = "Desc"
meta_img = "/images/image.jpg"
hacker_news_id = ""
+++

## Motivation

Soon after learning the basics of continuous integration at work, I decided to set up a Jenkins instance on my home server to run automated internet speed tests around the clock.

## Tech Stack

* [Jenkins](https://jenkins.io/)
* [Raspberry Pi](https://www.raspberrypi.org/)
* [AWS DynamoDB](https://aws.amazon.com/dynamodb/)
* [GitHub](https://github.com/)
* [Firebase](https://firebase.google.com/)

## Code

Originally, I ran these speedtests via crontab on an old Dell tower, but decided to outsource the job to a smaller, less power-hungry beast. Now, Jenkins runs the test every 15 minutes, then formats and uploads the results every hour to GitHub.

https://github.com/sivel/speedtest-cli

https://github.com/sivel/speedtest-cli/wiki

```
# install tools
pip install speedtest-cli
```

```
# crontab
*/15 * * * * speedtest-cli --csv > 
```

## Hosting

Before Firebase, I used Heroku to host and deploy this website, since it has a nice GitHub integration that will listen for pushes to `master` (or any other specified Git branch) and automatically deploy for you. However, I ultimately decided to switch to Firebase for a couple primary reasons:

* Free SSL certificate
* Easy to scale
* Simplest DNS setup, including subdomains
* More tools and configuration options

Yes, it's one more EULA I have to sign for "free" Google tools, but it's been reliable and easy to use so far. And let's face it, Google already has more of my personal information than my family and the IRS combined.

This is certainly not the most optimized way of building, deploying, and maintaining a website, but for me, it's about learning how to use the many tools that can make projects like this possible. Plus everything except the Raspberry Pi is free, and that was only $35.
