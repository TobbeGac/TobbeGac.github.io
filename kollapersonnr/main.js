function kollaString(tpersonnummer){
    let length_ok = false

    if (tpersonnummer.length === 10){
        length_ok = true
    }
    return length_ok
}
//pnrToNumber-----------------------------------------------------------------------------------------------------------
function pnrToNumber(tpersonnr){
    //cast string till array med chars
    const arr_pnr = tpersonnr.split('')

        //Funktionell programmering med en arrow funktion
        const newPnrArr = arr_pnr.map((textsiffra) => {
            const num_siffra = parseInt(textsiffra)
            return num_siffra
        })

        return newPnrArr
}

//addSiffrorAndCheck----------------------------------------------------------------------------------------------------
function addSiffrorAndCheck(t_multiplicerade_siffror){

    const arr_siffror = t_multiplicerade_siffror.split('')
    let summa = 0
    let kontrollsiffra = 0
    let subtractform = 0

    for (i=0; i< t_multiplicerade_siffror.length; i++){
        summa += Number(arr_siffror[i])
    }

    if (summa % 10 !== 0){
        subtractform = (Math.floor(summa/10))*10
        subtractform = subtractform + 10
        kontrollsiffra = subtractform - summa
    }

    return kontrollsiffra
}

//multiplicera personnummer---------------------------------------------------------------------------------------------------
function multipliceraPnr(t_arr_med_prr_num){

    let = str_multiplicerade_siffror = ""

    for (let i=0; i<9; i++ ){

        if ((i+1)%2 === 0){
            const num_siffra = Number(t_arr_med_prr_num[i])*1
            str_multiplicerade_siffror += num_siffra
        }

        else {
            const num_siffra = Number(t_arr_med_prr_num[i])*2
            str_multiplicerade_siffror += num_siffra
        }
    }

    return str_multiplicerade_siffror

}

function grabControllSiffran(t_pnr){
    let ksiffra = t_pnr[t_pnr.length-1]

    return ksiffra
}




function checkButtClick(){
    //console.log("Klick")

    let textfelt = document.getElementById("pernr_input").value
    let psvar = document.getElementById("svar")
    let len_ok = kollaString(textfelt)
    
    if(len_ok){

        const arr_pnr_siffror = pnrToNumber(textfelt)
        const multiplicerade_siffror = multipliceraPnr(arr_pnr_siffror)
        kalkylera_kontrollsiffran = addSiffrorAndCheck(multiplicerade_siffror)
        console.log("kontrollsiffran = " + kontrollsiffran)

        const kontrolls = grabControllSiffran(textfelt)

        console.log("ksiffra = " + kontrolls)

        if (kalkylera_kontrollsiffran == Number(kontrolls) ){
            console.log("Sant")
            psvar.innerHTML = "Kontroll siffra " + kontrolls + "Stämmer!"
        }
        else{
            console.log("falskt")
            psvar.innerHTML = "Kontroll siffra Stämmer inte!"
        }



    
    }

    else{
        alert("Obs, de måste vara 10 st siffror!")
    
    
    }




    //console.log("textfelt = " + textfelt)


}