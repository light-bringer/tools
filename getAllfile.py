
import os

fileList = []
for root, dirs, files in os.walk(".", topdown=False):
    for name in files:
        fileList.append(os.path.join(root, name))
    for name in dirs:
        fileList.append(os.path.join(root, name))


thefile = open('filelist.md', 'w')
for item in fileList:
  thefile.write("%s\n" % item)

thefile.close
