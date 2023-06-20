import schedule
import requests
import time

def send_message():
    resp = requests.post('https://textbelt.com/text', 
    {
        'phone': '+491783658582',
        'messsage': 'Hey, chok!',
        'key': 'textbelt'
    })
    print(resp.json())
    
schedule.every().day.at('20:43').do(send_message)

# schedule.every(10).seconds.do(send_message)

while True:
    schedule.run_pending()
    time.sleep(1)