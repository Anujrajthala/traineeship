import string
import random

urlMap = {}
baseUrl = "https://short.ly/"
def shortenUrl(orgUrl):
    uniqueCode = getUniqueCode()
    while uniqueCode in urlMap:
        getUniqueCode()
    shortenedUrl = baseUrl+ uniqueCode
    urlMap[shortenedUrl] = orgUrl
    return shortenedUrl
def getUniqueCode(length=6):
    characters = string.ascii_letters + string.digits
    return ''.join(random.choice(characters) for _ in range(length))
def getOrgUrl(shortenedUrl):
    return urlMap.get(shortenedUrl,'Url not found')

def main():
    orgUrl = input("Please enter the url you want to shorten: ")
    shortenedtUrl = shortenUrl(orgUrl)
    print(orgUrl)
    print(shortenedtUrl)
    print(getOrgUrl(shortenedtUrl))

if __name__ == "__main__":
    main()