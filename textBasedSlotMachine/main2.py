import random
MAX_LINES = 3
MIN_LINES = 1

MAX_BET = 100
MIN_BET = 1


ROWS = 3
COLS = 3


symbolCount = {
    "A" : 3,
    "B":4,
    "C":7,
    "D":9
}


def deposit():
    while True:
        amount = input("How much would you deposit? $")
        if amount.isdigit():
            amount = int(amount)
            if amount > 0:
                break
            else:
                print("The amount must be greater than 0.")
        else:
            print("Please insert a number.")
    return amount
            
def getNumberOfLines():
    while True:
        lines = input(f"Enter the number of lines to bet on ({MIN_LINES} - {MAX_LINES})? ")
        if lines.isdigit():
            lines = int(lines)
            if MIN_LINES <= lines <= MAX_LINES:
                break
            else:
                print(f"Amount must be between {MIN_LINES} - {MAX_LINES}")
        else:
            print("Please insert a number.")
    return lines
        
def getBet():
    while True:
        bet = input(f"What would you like to bet on each line? $")
        if bet.isdigit():
            bet = int(bet)
            if  MIN_BET <= bet <= MAX_BET :
                break
            else:
                print(f"The amount must be between {MIN_BET} - {MAX_BET}.")
        else:
            print("Please insert a number.")
    return bet
            
def main():
    balance = deposit()
    getNumberOfLines()
    getBet()


main()