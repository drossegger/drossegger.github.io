#!/bin/bash

#sudo docker run --rm -v ~/workspace_nosync/gitpages/drossegger.github.io/:/srv/jekyll -v ~/workspace_nosync/gitpages/drossegger.github.io/vendor/bundle:/usr/local/bundle -p 4000:4000 -it jekyll/jekyll jekyll serve
sudo docker run -v "/home/dino/workspace_nosync/gitpages/drossegger.github.io/:/srv/jekyll" -p 4000:4000 -it jekyll/jekyll /bin/bash -c "jekyll serve --drafts"
 

