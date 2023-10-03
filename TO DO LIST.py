
'''
 -----TO DO LIST----


'''



print("-----TO DO LIST-----".center(80,"-"))#apresenta o cabecalho

print("pressione enter para acessar menu de opções ou  para sair")
print("--"*40)

def pausa():
    enter=input("\n pressione <Enter> para encerrar...")#finaliza o sisteminha. ...
 
 
 
nomes=[]#cria a lista vazia

# função que deleta nomes


def deletarNome():

        


    nomeexcluido=input("insira  o numero da tarefa que voce deseja deletar \n")
    if nomeexcluido in nomes:
    
        nomes.remove(nomeexcluido)
        print(nomes)


        
        
                

     
     # função que consulta nomes



def consultarNomes():
    
    
            
    pesquisaNome=input("digite a tarefa que voce deseja encontrar:\n ")
    if(pesquisaNome in nomes):
        print(pesquisaNome+" --existe no banco de dados")
    else:print("--o nome consultado nao existe!")



while(nomes !=" "):
    nome=(input("entre com o nome da atividade:\n"))#pede os nomes
    nomes.append(nome) #insere  o nome na lista
 
  
    print(list(enumerate(nomes)))
    if(nome==0):apresentar()
    if(nome==""):
        pausa()
        break
    
def despedir():
    print("\t até mais!! volte sempre \o")
def apresentar():
    print("MENU DE OPÇÕES".center(80,"-"))#apresenta o cabecalho

numero=int(input("MENU DE OPÇÕES:\nEntre com \n"+ "1- deletar tarefas da lista\n"+"2-consultar tarefas\n 3-  para sair "))
if(numero==1):deletarNome()
if(numero==2):consultarNomes()  
if(numero==3):despedir()  
        
       
apresentar()

        

    #imprime a lista enumerada e ordenada alfabeticamente


    
    


    
    #imprime a lista enumerada e ordenada alfabeticamente
