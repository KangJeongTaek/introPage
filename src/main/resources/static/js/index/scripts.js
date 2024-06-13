window.onload = function() {
    const language = document.getElementById('currentLanguage').value;
    if(language === 'ja'){
        setLanguage('ja');
    }else{
        setLanguage('ko');
    }
}

function setLanguage(languages){
    const content ={
        ko :{
            name : '강정택',
            description: '개발자를 꿈꾸고 있습니다.'
        },
        ja :{
            name : 'カン・ジョンテク',
            description :'IT業界を夢見ています。'
        }
    }

    document.getElementById('name').innerText = content[languages].name;

    if(languages === 'ja'){
        document.getElementById('name').classList.add('fs-2');
        document.getElementById('name').classList.add('fw-bolder');
        document.getElementById('name').classList.remove('h1');
        document.getElementById('currentLanguage').value = 'ja';
    }else{
        document.getElementById('name').classList.remove('fs-2');
        document.getElementById('name').classList.add('h1');
        document.getElementById('currentLanguage').value = 'ko';
    }

    document.getElementById('description').innerText = content[languages].description;
}

function userPlusButton(){
    const language = document.getElementById('currentLanguage').value;
    if(language === 'ja'){
        window.location.replace('/portfolio-ja');
    }
    if(language === 'ko'){
        window.location.replace('/portfolio-ko');
    }
}