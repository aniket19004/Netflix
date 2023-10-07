

#                      nested if....else
total_mark=90
math_mark=85
English_mark=90

if(total_mark>90):
    if(math_mark>90):
        if(English_mark>90):
            print("You are Selected")
        else : print("In english you not scored good") 
    else :print("In math you not scored good")   
else : print ("your are not selected")  




#                      ladder if....else

total_mark=90
math_mark=90

if(total_mark==98):
    print("good")
elif(math_mark==85):
    print("very good")
else :print("bad luck")



#                Basic For loop
li1=list(range(1,21))
for tem in li1 :
    print(tem)
    print('wapas se uper gya')

else: print("loop end here")


                  # Basic For loop

num= 16

for i in range(1,11):
  print(num*i)
else:
  print("end of loop")


#  Asssignment to print 1 to n prime number;

num=13
k=1

for j in range(k,num+1):
   
 count=0

for i in range(k,num+1):
   if(j%i==0):
      count+=1  
if(count==2):
   print(j)
 

#file handling

file= open('my_file.txt','w')
file.write("This is aniket yadav speeking")
file.write('\n how you are muchh cool')
file.close()



file=open('my_file.txt','a')
file.write('\n i am not persent')
file.close()

file=open('my_file.txt','r')
file_data=file.read()
file.close()
print(file_data)



# function

def check_even(num):
    if(num%2==0):
        print("Num is Even")
    else:
       print("num is Odd")



check_even(11)     

def sum(a,b):
   
    return(a+b)

add=sum(10,12)
print(add)


                                   # sum of n number of items

def allsum(*num):
    sum=0
    for i in num:
        sum=sum+i
    return sum

print(allsum(1,2,3))
        

                                    # function for Object

def prot_data(**kware):
    
    for i in kware.keys():
        print( i,'=',kware[i])


prot_data(name="Aniket",age=24,email="aniketyadav")  

                                           #import files

import random

a=random.randint(1,200)
print(a)

name=["Aniket","Sanket","Sandhya","Yadav","Huzaif"]

ans=random.choice(name)
print(ans)

# import xlrd3 as xlrd
# book = xlrd.open_workbook("IPO Details.xlsx")
# print("The number of worksheets is {0}".format(book.nsheets))
# print("Worksheet name(s): {0}".format(book.sheet_names()))
# sh = book.sheet_by_index(0)
# print("{0} {1} {2}".format(sh.name, sh.nrows, sh.ncols))
# # print("Cell D30 is {0}".format(sh.cell_value(rowx=29, colx=3)))
# for rx in range(sh.nrows):
#     print(sh.row(rx))


#                          OOP's Consept

class Person:
    def __init__(self,name,age,gender):
        self.name=name
        self.age=age
        self.gender=gender

    def printdetails(self):
        print(self.age)




anike= Person("Aniket" ,14, "Male")
anike.printdetails()

class person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        return f"Hello, my name is {self.name} and I am {self.age} years old."


# Create Person objects
person1 = person("Alice", 30)
person2 = person("Bob", 25)

print(person1.name)

class car:
    def __init__(self,name,seats,fuels,tyre,model):
           self.name=name
           self.seats=seats
           self.fuels=fuels
           self.tyre=tyre
           self.model=model

    def printdetails(self):
            return("The name of Car is " + self.name + " and it is " + self.seats +" seater car." + "This is "+ self.fuels+" Vehical"+ " It is" +self.name+ self.model+"   model" )
      

aluto=car("Maruti Suzuki","4","Petrol","4","800") 
print(aluto.printdetails())       


                            #      Inheritence
 #parent class
class Animal:
    def __init__(self,name):
         self.name=name

    def sound(self):
         pass
             
#     # Chaild class

class Lion(Animal):
         def sound(self):
              return(self.name + "is bark")


class  Duck(Animal):
        def sound(self):
            print(self.name +" is duck duck")



share= Duck("share")  
print(share.sound())  



class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        pass
   

class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"
    

dog = Dog("Buddy")
cat = Cat("Whiskers")

print(dog.speak())  # Output: Buddy says Woof!
print(cat.speak())  # Output: Whiskers says Meow!





   # Assignments

class bankaccount:
     def __init__(self,accountholdername,balance):
          self.accountholdername=accountholdername
          self.balance=balance

     def diposite(self,amount):
          self.balance=self.balance+amount
          print(self.balance)
          
     def withdrawal(self,amount):
          if(self.balance>amount):
               self.balance=self.balance-amount
               print(f"You withdrawal {amount} and your total balance id {self.balance}")
          else:
               print(f"insufficient Money")    
     
           


Aniket=bankaccount("Aniket",30000)
Aniket.diposite(30000)
Aniket.withdrawal(300000)
print(Aniket.accountholdername,Aniket.balance)
                             
                             
                             
                             # Polymorphism


#parent class
class shape:
    def area(self):
        pass
    

 #Child class   

class trangle(shape):
    def __init__(self,l,b):
        self.l=l
        self.b=b
       
    def area(self):
     return 1/2*self.l*self.b
        

class circle(shape):
      def __init__(self,radius):
          self.radius=radius

      def area(self):
          return 3.14*self.radius**2  

area=trangle(2,4)
area1=circle(4)

allshape=[area,area1]

for all in allshape:
    print(f"Area: {all.area()}")

class Shape:
    def area(self):
        pass

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return 3.14 * self.radius**2

class Square(Shape):
    def __init__(self, side):
        self.side = side

    def area(self):
        return self.side**2


circle = Circle(5)
square = Square(4)

shapes = [circle, square]

for shape in shapes:
    print(f"Area: {shape.area()}")


