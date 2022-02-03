# BACKEND -- Upload de imagens com Express Node mongodb e React de front upado no heroku



Criando uma ferramenta para upar imagens no banco de dados AWS da amazon.



![Logo do R](https://lh3.googleusercontent.com/pw/AM-JKLXCYDqTshx4oIlkzkGAB1vUjcfCqXeCZGgNKWuBOOuMBuaTBIk1LbirIcz2uHdhPppkZkdcLSKkl7nXMVGOLQmkLtMnFhpHCBEWXinMm3kqfCbePmKiHcsrF33kWPQ7Qo8BGH3G49_HElNWxJOlaSbwew=w856-h894-no?authuser=0)

## Sobre o Autor
<img align="left" width="190" height="190" margin-right="150px" src="https://lh3.googleusercontent.com/pw/AM-JKLXhmwZXlDQxwQTG3f0HIUpyh4Yg5oyRCR9GZ09GVuaEGe2umH6R6TAYJeJgWCVEKROa7pQgbFVBQEaOwJ3VLGoNpDcTJ1p0yTvwLK0CJf7q9xh7Xnf1sS-vG7temrijQpiRitZC-c9e7THtDNVI5FQPkA=w169-h154-no?authuser=0"> Oi, meu nome é Pedro Savio tenho 22 anos e atualmente faço engenharia mecânica(UFCG). acabei descobrindo um novo mundo na programação e decidi me aprofundar mais nele.

## <br /><br /> <br /><br /><br /><br />Tecnologias utilizadas
1. React
2. Express
3. Node
4. MongoDb
5.  AWS

## <br /><br /><br /> Comandos - Backend


	npx create-react-app .npm init -y
	npm add express morgan mongoose multer

para ver se o index html funcionou digite

	 node src/index.


em package.json add essas linhas:


	"scripts": {
	  "test": "echo \"Error: no test specified\" && exit 1",
 	 "dev" : "nodemon src/index.js",
 	  "start": "node src/index.js"
 	 }


ai om isso eu posso so dar um npm run dev e ele ja fica atualizando automaticamente no ambiente  ;

===========ciação da conta no aws amazon utilizando serviço gratuito s3


depois que riar la um bucket vc volta pro vsc e instala o multer s3

 	npm install --save multer-s3

aws amazon:

 	npm install --save aws-sdk

criar o cliente iam na amazon 
apos criar um novo usuário com o nome de up-img, definir o acesso como programático 

va em permissoes entre em anezar politicas exitentes de forma direta, busque por s3 e selecione 
        	 AmazonS3FullAccess

         	e ele vai te dar uma chave de acesso tipo essa : AKIA4UQR**********






