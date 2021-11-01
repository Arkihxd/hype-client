# Desafio Hype

## Link para da API em deploy
https://desafio-hype-mateus.herokuapp.com/
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
* Yarn (yarn install)

## Instruções para executar o projeto
```
yarn hype
```

## Detalhes da construção do projeto
### Relações
* Prédios HasMany: 1-->N - Um prédio tem varios apartamentos
* Apartamentos BelongsTo: N-->1 - Um apartamento pertence a somente um prédio

### Rotas da API
```
	Prédios:
		* PUT -> CREATE - /predios/create  	                    
            Adiciona um novo predio
		* DELETE -> DELETE - /delete/id_predio              
            Remove um predio pelo ID se não tiver nenhum apartamento associado a ele
		* GET -> INDEX - /predios			                    
            Mostra todos os predios
		* GET -> SHOW - /predios/id_predio                  	
            Mostra um predio pelo ID juntamente com seus apartamentos
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
		    Mostra um apartamento pelo ID juntamento com o seu predio
```

```
	Dados para cadastro de um novo prédio:
	nome - String
	sigla - String
	endereco - String
	cidade - String
	estado - String 

	Dados para cadastro de um novo apartamento:
	codigo - String
	quartos - Number
	banheiros - Number
	suites - Number
	area - Number 
```
