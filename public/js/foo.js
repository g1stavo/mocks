const homeMeta = {
    "page": {
        "name":"home",
        "url":"https://www.netshoes.com.ar/",
        "timestamp":"201-08-15T20:07:14.491Z",
        "info":{
            "referrer":"https://www.google.com.br/"
        }
    },
    "dataGroup":"netshoes-freedom",
    "host":"www.netshoes.com.ar"
};

var chaordic_meta = homeMeta;

var setApikey = () => {
    apikey = document.getElementById('apikey').value;
    home();
    chaordic.setActiveFoo(apikey);
    location.reload(true);
};

var product = () => {
    let id = document.getElementById("pid").value;
    chaordic_meta = {
        "product":{
            "id": id
        },
        "page":{
            "name":"product"
        }
    };
    chaordic.initialize();
};

var home = () => {
    chaordic_meta = homeMeta;
    chaordic.initialize();
};