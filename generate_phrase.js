
//隨機抽取
function sample(array) {
    const index = Math.floor(Math.random() * array.length)
    return array[index]
}

//產生數字
function generatePhrase(job) {

    const jobs = {
        engineer: "工程師",
        designer: "設計師",
        entrepreneur: "創業家"
    }
    const task = {
        engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
        designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
        entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']

    }

    const phrase = ['很簡單', '很容易', '很快', '很正常']
    // if (job.length === 0) {
    //     console.log("succe")
    //     return '請選擇職業再產生幹話'
    // }
    // console.log(job)

    let sentence = `身為一個${jobs[job]}${sample(task[job])}${sample(phrase)}吧`

    return sentence

}

module.exports = generatePhrase