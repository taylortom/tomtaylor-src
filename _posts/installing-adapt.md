[!META{"id":"installing-adapt","title":"Setting up an Adapt development environment in Mac OS X","published":"2015-01-13","tags":["hacking"]}]

If you opt not to use the Adapt authoring tool, setting up your computer to work on the Adapt framework can be a less than trivial process; you'll need to have a number of tools installed and working before you can even view the vanilla course, and this will require you to get your hands dirty in the terminal. I've put together this guide to hopefully make this process a bit simpler, and get your shiny new courses up and running before you know it.

This guide assumes you are completely new to web development, and therefore will need to install everything from scratch. If this is not the case, some of the steps may be inapplicable.

# Install Xcode using the App Store
Grab Xcode from the App Store, and fire it up when installed, agreeing to all terms and conditions. If this isn't done, building the node source may fail later.

You'll also need the command line tools to be able to pull down the Adapt repositories using git. To get these, type `git` in a terminal window, and follow the instructions.

# Install node and node package manager

This is by far the trickiest part of the installation process, largely due to the issues surrounding file permissions you can easily run into. After several less than straightforward installs, the following instructions are my recommended method.

**A note on node/npm installation paths**
<br>By default, these are stored in `/usr/local/`, which requires root access to write to. There are three routes around this:

1. Run every `npm install` as root (definitely not a good idea, as it could result in something like: `sudo npm install trojan-disguised-as-module`).
1. Change the owner of the contents of `/usr/local/` to your user account (if you're using a shared computer, this is not advisable).
1. Change the home of global modules to somewhere you **do** have permission. This is the option I use below.

Create (and change to) a directory in your home folder to store your globally accessible node modules, and add this to your system path variable:
```
mkdir ~/local/ && cd ~/local/
'export PATH=$HOME/local/bin:$PATH' >> ~/.bash_profile
```

Download and extract the latest node release:
```
mkdir ~/node-latest-install && cd ~/node-latest-install
curl http://nodejs.org/dist/node-latest.tar.gz | tar xz --strip-components=1
```

Install node to your local folder:
```
./configure --prefix=~/local
make install
```

When this has finished, close the terminal, reopen and try the `node` and `npm` commands to confirm everything installed as expected (after running the node shell, you'll need to exit pressing `ctrl+c` twice).


# Install the required command line interfaces

Finally, you'll need to install both the adapt-cli and the grunt-cli globally. To do this:
```
npm install grunt-cli -g
npm install adapt-cli -g
```

# Test out your installation
Now let's try downloading and building the vanilla adapt build:

Clone the adapt_framework from github. (This assumes you have ssh set up, if not check out <a href="https://help.github.com/articles/generating-ssh-keys/" target="_blank">github for a nice guide</a>):
```
git clone adapt_framework git@github.com:adaptlearning/adapt_framework.git && cd adapt_framework`
```

Install the relevant components:
```
adapt install
```

Install the required npm modules (if everything has gone to plan, you won't get any permissions errors here):
```
npm install
```
Build, and run the course using grunt:
```
grunt build
grunt server
```

Provided the above steps went according to plan, you should now have the example Adapt course open in your default browser, ready for development!
