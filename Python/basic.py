# Ler do teclado
name = input('Who are you? ')
print('Welcome', name)


# Condicionais
x = 5
if x > 2:
    print('Bigger than 2')
print('Done with 2')

x = 4
if x > 2:
    print('Bigger')
else:
    print('Smaller')

if x < 2:
    print('small')
elif x < 10:
    print('medium')
else:
    print('large')


# Laço For
for i in range(5):
    print(i)
    if i > 2:
        print('Bigger than 2')
    print('Done with i', i)
print('All Done')


# try / except 
number = input('Enter a number:')
try:
    isValid = int(number)
except:
    isValid = -1

if isValid > 0:
    print('It is a valid number')
else:
    print('Not a number')


# tenta converter uma string em um número
str = 'Hello World'
try:
    isStr = int(str)
except:
    isStr = -1
print('First', isStr)
str = '123'
try:
    isStr = int(str)
except:
    isStr = -1
print('Second', isStr)