function searchFun() {
    let searchText = document.getElementById('searchInput').value.toUpperCase();

    let tableContent = document.getElementById('myTable');
    let tableRow = tableContent.getElementsByTagName('tr');

    for(let index = 0; index < tableRow.length; index++) {
        let td = tableRow[index].getElementsByTagName('td')[1];

        if(td){
            let textValue = td.textContent || td.innerHTML;
            if(textValue.toUpperCase().indexOf(searchText) > -1){
                tableRow[index].style.display = "";
            } else {
                tableRow[index].style.display = "none";
            }
        }
    }
}