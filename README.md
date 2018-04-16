# mocks
This is a tool that mocks Chaordic widgets on a simple HTML page. It only display widgets previously configured on [Central](https://vitrines.chaordic.com.br/). The pages supported (yet!) are Home and Product.

To see the Home page, type the apikey on the navbar and OK it (select Freedom checkbox if the apikey is on the Netshoes Freedom theme).

To see the Product page, type a product ID after typing an apikey (the product ID must be one valid for the apikey, of course).

## Running
```shell
$ cd mocks
$ npm i 
$ node server.js start
```
Then open http://localhost:3000/. As it works like a normal page, remember to use ?homologation=true to display all widgets.
