simbolos = [".", ",", ":"]
count = 0

arquivo = open('arquivo.txt', 'r')
for linha in arquivo:
    for sim in simbolos:
        line = linha.replace(sim, ' ')
    lst = line.split()
    count += len(lst)
arquivo.close()
print(count, 'palavras.')