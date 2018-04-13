const homeMeta = {
    "page": {
        "name":"home",
        "url":"https://www.netshoes.com.ar/",
        "timestamp":"201-08-15T20:07:14.491Z",
        "info":{
            "referrer":"https://www.google.com.br/"
        }
    },
    "host":"www.netshoes.com.ar"
};

var chaordic_meta = homeMeta;

var isFreedom = () => {
    const loader = document.getElementById('loader');
    if (chaordic.readCookie("freedom") == "true") {
        loader.setAttribute('data-group', 'netshoes-freedom');
    } else {
        let attr = $(loader).attr('data-group');
        if (typeof attr !== typeof undefined && attr != false) {
            loader.removeAttribute('data-group');
        }
    }
}

var setApikey = () => {   
    const apikey = document.getElementById('apikey').value;
    const loader = document.getElementById('loader');
    if (document.getElementById('checkbox').checked) {
        chaordic.writeCookie("freedom", "true");
    }
    home();
    chaordic.setActiveFoo(apikey);
    location.reload(true);
};

var product = () => {
    let id = document.getElementById('pid').value;
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