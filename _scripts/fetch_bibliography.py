import json
import yaml
import urllib.request

zotero_url = 'https://api.zotero.org/groups/1553639/items?format=json&sort=date&limit=100'
acose_url = "https://api.zotero.org/groups/1553639/collections/3T8QH7NR/items?format=json&sort=date&limit=100"
scfound_url= "https://api.zotero.org/groups/1553639/collections/MN5KEVEP/items?format=json&sort=date&limit=100"
def clean_bib(bib):
    for x in bib:
        if x["data"]["itemType"]=="attachment":
            bib.remove(x)
        elif "creators" not in x["data"].keys():
            bib.remove(x)
        elif x["key"] == "3Q5MJL58":
            bib.remove(x)
    return bib

def remove_author(bib,authorfirstname):
    for x in bib[:]:
        if "creators" in x["data"].keys():
            for author in x["data"]["creators"][:]:
               if author["firstName"]==authorfirstname:
                   x["data"]["creators"].remove(author)
               if author["creatorType"]!="author":
                   x["data"]["creators"].remove(author)
    return bib

with urllib.request.urlopen(zotero_url) as url:
    bib=json.loads(url.read().decode())
    file=open("_data/bibliography.yml","w")
    yaml.dump(remove_author(clean_bib(bib),"Dino"),file)
    file.close()

with urllib.request.urlopen(acose_url) as url:
    bib=json.loads(url.read().decode())
    file=open("_data/acose.yml","w")
    yaml.dump(remove_author(clean_bib(bib),"Dino"),file)
    file.close()

with urllib.request.urlopen(scfound_url) as url:
    bib=json.loads(url.read().decode())
    file=open("_data/scfound.yml","w")
    yaml.dump(clean_bib(bib),file)
    file.close()
