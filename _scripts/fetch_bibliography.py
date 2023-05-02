import json
import yaml
import urllib.request

zotero_url = 'https://api.zotero.org/groups/1553639/items?format=json&sort=date'

def clean_bib(bib):
    for x in bib:
        if "creators" not in x["data"].keys():
            bib.remove(x)
    return bib


with urllib.request.urlopen(zotero_url) as url:
    bib=json.loads(url.read().decode())
    file=open("/_data/bibliography.yml","w")
    yaml.dump(clean_bib(bib),file)
    file.close()

