#Challenge01
#While loop
number = int(input("Enter a nmber: "))
length = int(input("Enter a length: "))
list = []
i = 1
while len(list) < length :
    list.append(number * i)
    i += 1
print(list)

#For loop
number = int(input("Enter a nmber: "))
length = int(input("Enter a length: "))
list =[number * i for i in range(1, length+1)]
print(list)


#Challenge02
str = input("Enter a string: ")
result = ""
for i in range(len(str)) :
    if i == 0 or str[i] != str[i-1]:
        result += str[i]
print(result)

        
