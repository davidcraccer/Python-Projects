from pytube import YouTube
from sys import argv 

link = argv[1]
yt = YouTube(link)

print("Title: ", yt.title)

print("Views: ", "{:,}".format(yt.views))
print("Downloading...")

yd = yt.streams.get_highest_resolution()

yd.download('/Users/davidcraccer/Downloads')