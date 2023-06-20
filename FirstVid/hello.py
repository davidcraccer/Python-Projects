class Flight():
    def __init__(self, capacity):
        self.capacity = capacity
        self.passengers = []
        
    def add_passenger(self, name):
        if not self.openseats():
            return False
        self.passengers.append(name)
        return True
            
            
    def openseats(self):
        return self.capacity - len(self.passengers)  
        
flight = Flight(4)

people = ["harry", "ron", "hermione","gyny"]

for name in people:
    success = flight.add_passenger(name)
    if success: 
        print(f"Added {name} to the flight")
    else: 
        print(f"no available seats for {name}")