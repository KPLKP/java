versions=[{name:"orange-version1",
           date:24/9/2021,
           type:"major",
           features:["search"],
           author:"william blake",
           bugs:["video"] },


        {name:"abc-version2",
        date:21/12/2021,
        type:"patch",
        features:["scalable text"],
        author:"ronald",
        bugs:["audio"]},


        {name:"apple-version3",
        date:25/7/2020,
        type:"enhancement",
        features:["desing"],
        author:"sam",
        bugs:["tap"]},


        {name:"pine apple-version4",
        date:26/8/2022,
        type:"enhancement",
        features:["design"],
        authour:"dora",
        bugs:["tap"]}]
// console.table(versions)
function findbyreleaseyear(year){
    console.log("----------------------------------")
}
filteredyear=data.filter(n=>n.releasedate.include(year))
console.log(`${filterredyear.length}versions werw released in year${year}`)
console.logtable(filteredyear)
console.log("----------------------------------------")
function findbybug(srt){
    console.log("-------------------------------")
}
function findbytype(type){
    console.log("---------------------------------")
    findtype=data.filter(n=>n.versiontype.includes(type))
    console.log($[findtype.length])
}

    
