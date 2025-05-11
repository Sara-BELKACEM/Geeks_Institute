import random
def throw_dice():
    return random.randint(1,6)

def throw_until_doubles():
    count = 0
    while True:
      die1 = throw_dice()
      die2 = throw_dice()
      count += 1
      if die1 == die2 :
          return count     

def main():#AI help:
    results = []
    for _ in range(100):
        rolls = throw_until_doubles()
        results.append(rolls)
    
    total_throws = sum(results)
    average_throws = total_throws / len(results)

    print(f"Total throws: {total_throws}")
    print(f"Average throws to reach doubles: {round(average_throws, 2)}")

if __name__ == "__main__":
    main()
