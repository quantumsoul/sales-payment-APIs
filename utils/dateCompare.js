exports.compare = function(date1,date2,date3){
    var b = date1.split('-')
    var fromDate = b[2] + '-' + b[1] + '-' + b[0]
    var c = date2.split('-')
    var toDate = c[2] + '-' + c[1] + '-' + c[0]
    var d = date3.split('-')
    var date = d[2]+'-'+d[1]+'-'+d[0]
    if(date<toDate && date>fromDate){
        return true
    } else{
        return false
    }
}