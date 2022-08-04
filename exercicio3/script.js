let nacionalidade = prompt('Qual o nome do pais onde você mora?').T

const N1 = brasil
const N2 = argentina
const N3 = uruguai
const N4 = chile
const N5 = colombia

if(nacionalidade === N1){
    console.log('VOCÊ É BRASILEIRO')
}else if (nacionalidade === N2){
    console.log('VOCÊ É ARGENTINO')
}else if (nacionalidade === N3){
    console.log('VOCÊ É URUGUAIO')
}else if (nacionalidade === N4){
    console.log('VOCÊ É CHILENO')
}else if (nacionalidade === N5){
    console.log('VOCÊ É COLOMBIANO')
}else {
    alert('VOCÊ É ALIENÍGENA =D')
}