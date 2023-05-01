import requests
from bs4 import BeautifulSoup
import PyPDF2

flocabulary_vocabs = [
    "https://www.flocabulary.com/4th-grade-vocabulary-word-list/",
    "https://www.flocabulary.com/5th-grade-vocabulary-word-list/",
    "https://www.flocabulary.com/6th-grade-vocabulary-word-list/",
    "https://www.flocabulary.com/7th-grade-vocabulary-word-list/",
    "https://www.flocabulary.com/8th-grade-vocabulary-word-list/"
]

final_result = []

for i in flocabulary_vocabs:
    page = requests.get(i)
    soup = BeautifulSoup(page.content, "html.parser")
    result = soup.find("table").find("p").text
    result = result.lower().strip().replace(" ", "")
    result = result.replace("\n\n", "\n")
    result = [x.replace("\r", "") for x in result.split("\n")]
    result = [x for x in result if x != ""]
    final_result += result

result = sorted(final_result)

f = open("final_res.txt", "a")

f.write("[")
for i in range(len(result)):
    f.write(f"\"{result[i]}\"")
    if i != len(result) - 1: f.write(", ")
f.write("]")

f.close()