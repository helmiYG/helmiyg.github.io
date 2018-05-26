//membuat link ke css2.css (style)
var head = document.head;
var link = document.createElement('link')
var hrefLink = document.createAttribute('href')
hrefLink.value = "css2.css"
var typeLink = document.createAttribute('type')
typeLink.value = "text/css"
var relLink = document.createAttribute('rel')
relLink.value = "stylesheet"
link.setAttributeNode(hrefLink)
link.setAttributeNode(typeLink)
link.setAttributeNode(relLink)
head.appendChild(link)

//membuat var body
var body = document.body;
var bodychild = body.children;

//mengisi h1
var h1 = bodychild[0].children[0]
h1.innerHTML = 'Helmi Yogantara'
//mengisi h3
var h3 = bodychild[1].children[0]
h3.innerHTML = 'Kuis Seputar Indonesia'

//membuat div dalam form
// var form = document.getElementById('idform')
// var div5 = document.createElement('div')
// var classdiv5 = document.createAttribute('class')
// classdiv5.value = 'box'
// div5.setAttributeNode(classdiv5)
// form.appendChild(div5)
// var p = document.createElement('p')
// p.innerHTML = 'Samudra yang ada di selatan indonesia adalah'
// div5.appendChild(p)
// var inputA = document.createElement('input')
// var typeInputA = document.createAttribute('type')
// typeInputA.value = 'radio'
// var valueInputA = document.createAttribute('value')
// valueInputA.value = 'a'
// var nameinputA = document.createAttribute('name')
// nameinputA.value = 'q5'
// inputA.setAttributeNode(typeInputA)
// inputA.setAttributeNode(valueInputA)
// inputA.setAttributeNode(nameinputA)
// div5.appendChild(inputA)
// var label = document.createElement('label')
// inputA.appendChild(label)
// label.innerHTML = 'jakarta'
// console.log(div5);


//membuat button click untuk mengecek jawaban
var button = document.createElement('button')
var text = document.createTextNode('Periksa !')
button.appendChild(text)
button.addEventListener('click', function() {
    var q1 = document.myform.q1.value;
    var q2 = document.myform.q2.value;
    var q3 = document.myform.q3.value;
    var q4 = document.myform.q4.value;
    var q5 = document.myform.q5.value;
    var count = 0
    if(q1 === 'a'){
        count++
    }

    if(q2 === 'd'){
        count++
    }

    if(q3 === 'a'){
        count++
    }
   

    if(q4 === 'a'){
        count++
    }

    if(q5 === 'a'){
        count++
    }

    if(count < 5 && count > 0){
    alert('Selamat, Anda berhasil menjawab '+count+' pertanyaan')
    } else if(count === 5){
        alert('Hore, Anda berhasil menjawab semua dengan benar !!')
    } else {
        alert('Sayang sekali, anda belum berhasil menjawab dengan benar')
    }
}
  );
var form = document.getElementById('idform')
form.appendChild(button)

//membuat li, link github
var li = bodychild[2].children[0].children[0]
var a = document.createElement('a')
var ahref = document.createAttribute('href')
ahref.value =  "https://github.com/helmiYG/"
a.setAttributeNode(ahref)
li.appendChild(a)
var h4 = document.createElement('h4')
var h4text = document.createTextNode('GITHUB')
h4.appendChild(h4text)
a.appendChild(h4)







// // membuat form
// var form = body
// var formname = document.createAttribute('name')
// formname.value = 'myform'
// form.setAttributeNode(formname)
// section.appendChild(form)
// //membuat tag div ke 1
// var divform = document.createElement('div')
// var classdiv = document.createAttribute('class')
// classdiv.value = 'box'
// var iddiv = document.createAttribute('id')
// iddiv.value = 'maroon'
// divform.setAttributeNode(iddiv)
// divform.setAttributeNode(classdiv)
// form.appendChild(divform)

// //me,buat isi div
// //p
// var p =  document.createElement('p')
// p.innerHTML = 'Ibu Kota Indonesia ?'
// divform.appendChild(p)

//                         //INPUT
// var inputa = document.createElement('input')
// var nameInputa =  document.createAttribute('name')
// nameInputa.value = 'q1'
// inputa.setAttributeNode(nameInputa)
// var valueInputa = document.createAttribute('value')
// valueInputa.value = 'a'
// inputa.setAttributeNode(valueInputa)
// var typeInputA = document.createAttribute('type')
// typeInputA.value = 'radio'
// inputa.setAttributeNode(typeInputA)
// divform.appendChild(inputa)

// var inputb = document.createElement('input')
// var nameInputb =  document.createAttribute('name')
// nameInputb.value = 'q1'
// inputb.setAttributeNode(nameInputb)
// var valueInputb = document.createAttribute('value')
// valueInputb.value = 'b'
// inputb.setAttributeNode(valueInputb)
// var typeInputb = document.createAttribute('type')
// typeInputb.value = 'radio'
// inputb.setAttributeNode(typeInputb)

// divform.appendChild(inputb)


// //tag div ke 2
// var divform1 = document.createElement('div')
// var classdiv = document.createAttribute('class')
// classdiv.value = 'box'
// var iddiv = document.createAttribute('id')
// iddiv.value = 'maroon'
// divform1.setAttributeNode(iddiv)
// divform1.setAttributeNode(classdiv)
// form.appendChild(divform1)

// var divform2 = document.createElement('div')
// var classdiv = document.createAttribute('class')
// classdiv.value = 'box'
// var iddiv = document.createAttribute('id')
// iddiv.value = 'maroon'
// divform2.setAttributeNode(iddiv)
// divform2.setAttributeNode(classdiv)
// form.appendChild(divform2)

// var divform3 = document.createElement('div')
// var classdiv = document.createAttribute('class')
// classdiv.value = 'box'
// var iddiv = document.createAttribute('id')
// iddiv.value = 'maroon'
// divform3.setAttributeNode(iddiv)
// divform3.setAttributeNode(classdiv)
// form.appendChild(divform3)

// var divform4 = document.createElement('div')
// var classdiv = document.createAttribute('class')
// classdiv.value = 'box'
// var iddiv = document.createAttribute('id')
// iddiv.value = 'maroon'
// divform4.setAttributeNode(iddiv)
// divform4.setAttributeNode(classdiv)
// form.appendChild(divform4)

// //membuat tag input
// var input = document.createElement('input')
// var typeInput = document.createAttribute('type')
// typeInput.value = 'button'
// input.setAttributeNode(typeInput)
// var valueInput = document.createAttribute('value')
// valueInput.value = 'submit'
// input.setAttributeNode(valueInput)

// //membuat tag script
// var script = document.createElement('script')
// var srcScript = document.createAttribute('src')
// srcScript.value = "check.js"
// script.setAttributeNode(srcScript)
// body.appendChild(script)
// console.log(body)
// //membuat tag footer
// var footer = document.createElement('footer')
// body.appendChild(footer)
// //membuat tag ul
// var ul = document.createElement('ul')
// footer.appendChild(ul)
// //membuat tag li
// var li = document.createElement('li')
// ul.appendChild(li)


