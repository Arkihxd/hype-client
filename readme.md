# Desafio Hype

## Técnologias usadas
```
Node.js
Express
PostgreSQL
Sequelize ORM
Yarn
```

## Pré requisitos
* Pacote NPM instalado
* Yarn
* Banco de dados PostgreSQL

## Instruções para executar o projeto
```
yarn sequelize db:migrate
yarn hype
```

## Detalhes da construção do projeto
### Relações
* Predios HasMany: 1-->N
* Apartamentos BelongsTo: N-->1

### Rotas da API
```
	Predios:
		* PUT -> CREATE - /predios/create  	                    
            Adiciona um novo predio
		* DELETE -> DELETE - /delete/id_predio              
            Remove um predio pelo ID juntamente com seus apartamentos
		* GET -> INDEX - /predios			                    
            Mostra todos os predios
		* GET -> SHOW - /predios/id_predio                  	
            Mostra um predio pelo ID
```
```
	Apartamentos: 
		* PUT -> CREATE - apartamentos/create			            
    		Adiciona um novo apartamento
		* DELETE -> DELETE - apartamentos/delete/apartamento_id	   
            Remove um apartamento pelo ID
		* GET -> INDEX - /apartamentos				                
            Mostra todos os apartamentos
		* GET -> SHOW - /apartamentos/id_apartamento		        
		    Mostra um apartamento pelo ID
		* GET -> SHOWBYPREDIOS - /apartamentos/predios/predio_id	
		    Mostra um predio e todos os apartamentos vinculados a ele pelo seu ID
```
